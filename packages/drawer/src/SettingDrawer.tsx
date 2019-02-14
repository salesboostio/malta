import "isomorphic-unfetch";
import * as React from "react";
import ApolloClient, { gql, InMemoryCache } from "apollo-boost";
import { Query, ApolloProvider } from "react-apollo";
import {
  Icon,
  Flex,
  Block,
  Text,
  Split,
  Image,
  Drawer,
  Spinner,
} from "@salesboost/malta";
import styled, { keyframes } from "styled-components";
import { getAPI, getAuthURL } from "@salesboost/common";

const GET_STORES = gql`
  {
    getStores {
      name
      url
    }
  }
`;

const GET_ME = gql`
  {
    getMe {
      name
      id
    }
  }
`;

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

const IconButton = styled.div`
  display: flex;
  width: 32px;
  height: 32px;
  align-items: center;
  justify-content: center;
  margin-left: 4px;
  cursor: pointer;
  border-radius: 2px;
  :hover {
      path {
        fill: rgba(22,27,72,0.9);
    }
  }
  transition: all 0.15s ease-out;
`;

const ShopWrapper = styled.div`
  display: flex;
  background: rgba(22,27,72,0.05);
  align-items: center;
  position: relative;
  justify-content: center;
  border-radius: 16px 16px 0 0;
  flex: 0 0 120px;
  width: 100%
`;

const ShopButtonWrapper = styled.div`
  display: flex;
  width: calc(100% - 64px);
  align-items: center;
  cursor: pointer;
  justify-content: space-between;
  :hover {
    & ${IconButton}{
      background: rgba(22,27,72, 0.2);
    }
  }
`;

const PanelPopupWrapper = styled<any>(Flex)`
  position: absolute;
  flex-direction: column;
  top: 92px;
  align-items: center;
  width: calc(100% - 32px);
  padding: 8px 0 8px 0;
  background: rgba(22,27,72,0.94);
  border-radius: 12px 12px 12px 12px;
  box-shadow: 0 8px 40px 0 rgba(22,27,72,0.40);
  animation: ${props => props.closing ? fadeOut : fadeIn} 0.25s ease-in-out 1 normal both;
  &:after {
    width: 0;
    height: 0;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 10px solid rgba(22,27,72,0.94);
    content: "";
    position: absolute;
    display: block;
    top: -10px;
  }
`;

const PanelListItem = styled(Flex)`
  cursor: pointer;
  position: relative;
  align-items: center;
  width: 100%;
  :hover {
    background: #161B48;
  }
  transition: all 0.15s ease-out;
`;

const Divider = styled.div`
  display: flex;
  position: absolute;
  width: calc(100% - 48px);
  height: 0px;
  left: 24px;
  top: 72px;
  border-bottom: 1px solid rgba(255,255,255, 0.2);
`;

const AddShopPanel = (props: any) => {

  const addStore = () => {
    window.open(props.addStoreLink);
    props.handleCloseAll();
  };

  return (
    <PanelListItem height="56px" justifyContent="center" onClick={addStore}>
      <Text demiLight color="rgba(255,255,255,0.8)"> 다른 쇼핑몰 추가하기</Text>
    </PanelListItem>
  );
};

const ShopPanelPopup = (props: any) => {
  return (
    <PanelPopupWrapper closing={props.closing}>
      {props.stores.map((store: any, i: number) =>
        <PanelListItem key={i} height="72px" onClick={() => { props.switchShop(i); props.handleCloseAll(); }}>
          <Text fontSize="20px" demiLight color="white._100" ml={4}>{store.name}</Text>
          <Divider />
        </PanelListItem>
      )}
      <AddShopPanel addStoreLink={props.addStoreLink} handleCloseAll={props.handleCloseAll} />
    </PanelPopupWrapper>
  );
};

const UpDownIcon = (state: any) => {
  if (!state.open || state.closing) {
    return "arrow-down";
  } else {
    return "arrow-up";
  }
};

class ShopPanel extends React.Component<any, any> {

  state = {
    open: false,
    closing: false,
  };

  handleOpen = () => {
    this.setState({ open: true, closing: false });
  }

  handleClose = () => {
    this.setState({ ...this.state, closing: true });
    setTimeout(() => {
      this.setState({ open: false, closing: false });
    }, 500);
  }

  renderIconButton = () => {
    return (
      <IconButton>
        <Icon name={UpDownIcon(this.state)} size={24} color="rgba(22,27,72,0.6)" />
      </IconButton>
    );
  }

  render() {
    return <ShopWrapper>
      <Query query={GET_STORES} context={{ headers: { "userIndex": this.props.userIndex } }}>
        {({ data, loading, error }) => {
          if (error) return "Error";
          if (loading) return <Flex width="100%" height="100%" alignItems="center" justifyContent="center"><Spinner /></Flex>;
          const stores = error ? [] : data.getStores;
          const current = stores[this.props.userIndex];
          const storeName = error ? "쇼핑몰 이름" : current.name;
          return <>
            <ShopButtonWrapper onClick={this.state.open ? this.handleClose : this.handleOpen}>
              <Block width="32px" height="32px">
                <Icon name="home" size={32} color="navy._80" />
              </Block>
              <Text medium fontSize="24px" ml={[2, 3]} mr="auto">{storeName}</Text>
              {this.renderIconButton()}
            </ShopButtonWrapper>
            {
              this.state.open ?
                <ShopPanelPopup
                  stores={stores}
                  closing={this.state.closing}
                  addStoreLink={this.props.addStoreLink}
                  switchShop={this.props.switchShop}
                  handleCloseAll={this.props.handleCloseAll}
                  onClose={this.handleClose} />
                : null
            } </>;
        }}
      </Query>
    </ShopWrapper>;
  }
}

const MenuPanelWrapper = styled.div`
  display: block;
  box-sizing: border-box;
  padding: 24px;
  flex: 1;
  width: 100%;
  overflow-y: auto;
  overflow-x: hidden;
`;

class MenuItem extends React.Component<any> {

  render() {
    return (
      <Flex alignItems="center"
        width="100%"
        height="32px"
        transition="background 0.15s ease-out"
        hover={{ background: "rgba(22, 27, 72, 0.05)" }}
        my={3} onClick={this.handleClick} cursor="pointer">
        <Block mr="16px" width="32px" height="32px">
          <Image src={this.props.image} />
        </Block>
        <Text demiLight lineHeight="16px">
          {this.props.label}
        </Text>
      </Flex>
    );
  }

  handleClick = () => {
    this.props.handleClick();
    if (this.props.handleClose) {
      this.props.handleClose();
    }
  }

}

const MenuGroup = (props: { title: string; menuList: any[], handleClose?: any }) => {
  return (
    <Block width="100%" mb={6}>
      <Text fontSize="14px">{props.title}</Text>
      <Split length="100%" mt={1} horizontal bg="rgba(22, 27, 72, 0.2)" />
      {props.menuList.map((menu, index) =>
        <MenuItem
          key={index}
          image={menu.image}
          label={menu.label}
          handleClose={props.handleClose}
          handleClick={menu.handleClick}
        />
      )}
    </Block>
  );
};

const PersonalPanelWrapper = styled.div`
  display: flex;
  align-items: center;
  flex: 0 0 80px;
  width: 100%;
  background: rgba(22, 27, 72, 0.05);
  border-radius: 0 0 16px 16px;
`;

const PersonalPanel = (props: { signOut: () => void, userIndex: number; }) => {
  return (
    <PersonalPanelWrapper>
      <Query query={GET_ME} context={{ headers: { "userIndex": props.userIndex } }}>
        {({ data, loading, error }) => {
          if (loading) return <Flex width="100%" height="100%" alignItems="center" justifyContent="center"><Spinner /></Flex>;
          const userName = error ? "사용자 이름" : data.getMe.name;
          return <>
            <Flex
              maxWidth="calc(100% - 120px)"
              onClick={() => { window.location.href = `${getAuthURL()}/settings/user?authuser=${props.userIndex}`; }}
              cursor="pointer" ml="40px" hover={{ "> *": { color: "rgba(22, 27, 72, 1)" } }}>
              <Icon name="personal" size={24} color="rgba(22, 27, 72, 0.5)" />
              <Text ml={2} demiLight whiteSpace="nowrap" mr="16px" textOverflow="ellipsis">
                {userName}
              </Text>
            </Flex>
            <Flex onClick={props.signOut} cursor="pointer" ml="auto" mr="40px" hover={{ "> *": { color: "rgba(22, 27, 72, 1)" } }}>
              <Icon name="logout" size={24} color="rgba(22, 27, 72, 0.5)" />
              <Text ml={2} demiLight display={["none", "block"]}>
                로그아웃
              </Text>
            </Flex>
          </>;
        }}
      </Query>
    </PersonalPanelWrapper>
  );
};

const ShopMenuPanel = (props: { userIndex: number, onClickStore: any, onClickMember: any }) => {
  return (
    <MenuGroup title="쇼핑몰 설정" menuList={[
      {
        label: "쇼핑몰 기본 정보",
        image: "https://cdn.dev.salesboost.ai/static/img-settingdrawer-store@2x.png",
        handleClick: (userIndex: any) => props.onClickStore(userIndex),
      },
      {
        label: "쇼핑몰 구성원 관리",
        image: "https://cdn.dev.salesboost.ai/static/img-settingdrawer-members@2x.png",
        handleClick: (userIndex: any) => props.onClickMember(userIndex),
      },
      {
        label: "자주 묻는 질문",
        image: "https://cdn.dev.salesboost.ai/static/img-settingdrawer-faq@2x.png",
        handleClick: () => { window.open("http://help.salesboost.ai/"); }
      },
      {
        label: "문의하기",
        image: "https://cdn.dev.salesboost.ai/static/img-settingdrawer-kakaotalk@2x.png",
        handleClick: () => { window.open("https://pf.kakao.com/_hdZzC"); }
      },
    ]} />
  );
};

interface Service {
  title: string;
  menu: Array<{ label: string; image: string; handleClick: any }>;
}

interface SettingDrawerProps {
  opener: any;
  userIndex: string;
  serviceMenu?: Service[];
  onClickMember?: (userIndex: any) => void;
  onClickStore?: (userIndex: any) => void;
}


class Contents extends React.Component<any> {

  static defaultProps: SettingDrawerProps;

  client = new ApolloClient({
    uri: `${getAPI()}/auth/graphql`,
    cache: new InMemoryCache(),
    credentials: "include",
  });

  switchShop = (userIndex: number) => {
    window.open(`${window.location.origin + window.location.pathname}?authuser=${userIndex}`);
  }

  signOut = () => {
    fetch(`${getAPI()}/auth/signout`, {
      method: "DELETE",
      mode: "cors",
      credentials: "include"
    }).then(() => {
      window.location.href = `${getAuthURL()}/signin`;
    }).catch(error => {
      throw new Error(`Fail to signout: ${error.message}`);
    });
  }

  render() {
    return <ApolloProvider client={this.client}>
      <ShopPanel
        switchShop={this.switchShop}
        userIndex={this.props.userIndex}
        addStoreLink={`${getAuthURL()}/signin?redirectTo=${window.location.origin}`}
        handleCloseAll={() => { this.props.handleClose; }} />
      <MenuPanelWrapper>
        {this.props.serviceMenu.map((service: Service, index: number) =>
          <MenuGroup key={index} title={service.title} menuList={service.menu} handleClose={this.props.handleClose} />)}
        <ShopMenuPanel userIndex={this.props.userIndex} onClickMember={this.props.onClickMember} onClickStore={this.props.onClickStore} />
      </MenuPanelWrapper>
      <PersonalPanel signOut={this.signOut} userIndex={this.props.userIndex} />
    </ApolloProvider>;
  }
}

Contents.defaultProps = {
  opener: null,
  serviceMenu: [],
  userIndex: "0",
  onClickStore: (userIndex) => { window.location.href = `${getAuthURL()}/settings/store?authuser=${userIndex}`; },
  onClickMember: (userIndex) => { window.location.href = `${getAuthURL()}/settings/members?authuser=${userIndex}`; },
};

export const SettingDrawer = (props: SettingDrawerProps) => {

  const { opener, ...rest } = props;
  return (
    <Drawer
      opener={props.opener}
      render={({ handleClose }) => <Contents handleClose={handleClose} {...rest} />} />
  );
};
