import * as React from "react";
import styled from "styled-components";
import {
  Flex,
  Image,
  Block,
  Text,
  Drawer,
} from "@salesboost/malta";
import { getCatalogURL, getPixelURL } from "@salesboost/common";

interface ServiceDrawerProps {
  onClickPixel?: () => void;
  onClickCatalog?: () => void;
  opener: any;
}

const HeaderWrapper = styled.div`
  display: flex;
  background: rgba(22,27,72,0.05);
  align-items: center;
  position: relative;
  border-radius: 16px 16px 0 0;
  flex: 0 0 80px;
  width: 100%;
  :hover > * {
    color: rgba(22, 27, 72, 1);
  }
  transition: color 0.15s ease-out;
`;

const MainWrapper = styled.div`
  display: block;
  box-sizing: border-box;
  flex: 1;
  width: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  padding-top: 8px;
`;

const List = styled.div`
  margin: 16px;
  > div {
    margin-top: 20px;
  }
`;

interface ServiceItemProps {
  onClick: any;
  image: string;
  title: string;
  description: string;
  sub?: string;
}

const ServiceItem = (props: ServiceItemProps) => {
  return (
    <Flex width="100%" alignItems="center" cursor="pointer"
      of={[{ "& *": { transition: "color 0.15s ease-out" } }]}
      hover={{ "& *": { color: "rgba(22, 27, 72, 1)" } }}
      onClick={props.onClick} >
      <Image src={props.image} width="48px" height="48px" mr="16px" />
      <Block>
        <Text>{props.title}</Text>
        <Text fontSize="12px" mt="6px" demiLight color="rgba(22, 27, 72, 0.6)" wordBreak="break-all">{props.description}</Text>
        {props.sub ? <Text fontSize="12px" mt="6px" color="#454EDF" wordBreak="break-all" hover={{ color: "rgba(22, 31, 186, 1.0)" }}>
          {props.sub}
        </Text> : null}
      </Block>
    </Flex>
  );
};

class Contents extends React.Component<any> {

  static defaultProps: ServiceDrawerProps;

  render() {
    return <>
      <HeaderWrapper>
        <Block ml="28px" width="40px" height="40px">
          <Image src="https://cdn.dev.salesboost.ai/static/img-settingdrawer-services@2x.png" width="100%" height="100%" />
        </Block>
        <Text ml="16px" fontSize="18px">
          전체 서비스
        </Text>
        {/* <Icon ml="auto" mr="24px" name="arrow-right" size={24} color="rgba(22, 27, 72, 0.8)" /> */}
      </HeaderWrapper>
      <MainWrapper>
        <List>
          <ServiceItem
            image="https://cdn.dev.salesboost.ai/static/img-logo-salesboostservice-pixel-img@2x.png"
            title="픽셀"
            description="픽셀 자동 설치 및 관리 서비스"
            onClick={this.props.onClickPixel} />
          <ServiceItem
            image="https://cdn.dev.salesboost.ai/static/img-logo-salesboostservice-catalog-img@2x.png"
            title="카탈로그"
            description="카탈로그 자동 동기화 서비스"
            onClick={this.props.onClickCatalog} />
          {/* <ServiceItem
            image="https://cdn.dev.salesboost.ai/static/img-logo-salesboostservice-helper-img@2x.png"
            title="리포트"
            description="광고 효율 리포트 알림 서비스"
            onClick={() => {}} />
          <ServiceItem
            image="https://cdn.dev.salesboost.ai/static/img-logo-salesboostservice-attribution-img@2x.png"
            title="어트리뷰션"
            description="광고 채널 간 매출 기여도 분석 서비스"
            onClick={() => {}} /> */}
        </List>
      </MainWrapper>
    </>;
  }
}

Contents.defaultProps = {
  opener: null,
  onClickCatalog: () => { window.location.href = getCatalogURL(); },
  onClickPixel: () => { window.location.href = getPixelURL(); },
};

export const ServiceDrawer = (props: ServiceDrawerProps) => {

  const { opener, ...rest } = props;
  return (
    <Drawer
      left
      opener={props.opener}
      render={({ handleClose }) => <Contents handleClose={handleClose} {...rest} />} />
  );
};
