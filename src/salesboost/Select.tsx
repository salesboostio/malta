import * as React from "react";
import {
  Block,
  Flex,
  Icon,
  Text,
} from "../core";
import styled from "styled-components";
import {
  SpaceProps,
  width,
  WidthProps,
} from "styled-system";

const SelectWrapper = styled<any>(Block)`
  width: 327px;
  ${width}
  position: relative;
`;

const HiddenSelect = styled.select`
  display: none;
`;

interface SelectedProps {
  isOpened: boolean;
}

const Selected = styled<SelectedProps | any>(Flex)`
  width: 100%;
  height: 60px;
  padding: 0 16px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-radius: 2px;
  border: solid 1px;
  border-color: ${props => props.isOpened ? "#454edf" : "rgba(22, 27, 72, 0.2)"};
  background-color: #fff;
  box-shadow: 0 2px 6px 2px rgba(22, 27, 72, 0.03);
  cursor: pointer;
  :hover {
    border-color: ${props => !props.isOpened ? "rgba(22, 27, 72, 0.5)" : ""};
  }
  ::placeholder {
    color: rgba(22,35,72, 0.4);
  }
`;

const DropdownWrapper = styled(Flex)`
  width: 100%;
  position: absolute;
  left: 0;
  right: 0;
  margin-top: 4px;
  max-height: 330px;
  flex-direction: column;
  overflow-y: overlay;
  background-color: #ffffff;
  border-radius: 2px;
  border: solid 1px rgba(22, 27, 72, 0.4);
  z-index: 1;
  ::-webkit-scrollbar {
    width: 20px;
  }
  ::-webkit-scrollbar-thumb {
    border: solid 6px transparent;
    border-radius: 10px;
    border-top-width: 10px;
    border-bottom-width: 10px;
    background-color: rgba(22,27,72,0.2);
    background-clip: padding-box;
  }
`;

const DropdownItem = styled(Flex)`
  flex: none;
  width: 100%;
  height: 60px;
  padding: 0 20px;
  align-items: center;
  cursor: pointer;
  user-select: none;
  :hover {
    background-color: rgba(22,27,72, 0.05);
  }
`;

interface Props {
  children: any;
  initialSelection?: number;
  placeholder?: string;
  onValueChange?: (value: string, index: number) => void;
}

type SelectProps = Props & SpaceProps & WidthProps;

interface State {
  index: number;
  value: string;
  isOpened: boolean;
}

export class Select extends React.Component<SelectProps, State> {

  state = {
    index: this.props.initialSelection || -1,
    value: this.props.initialSelection > -1 ? this.getValueFromOptions(this.props.children, this.props.initialSelection) : "",
    isOpened: false,
  };

  getValueFromOptions (options: any, index: number) {
    return options instanceof Array ? options[index].props.children : options.props.children;
  }

  public render() {
    const { children, onValueChange, ...styles } = this.props;
    return (
      <SelectWrapper {...styles}>
        <HiddenSelect>
          {children}
        </HiddenSelect>
        <Selected isExpanded={this.state.isOpened} onClick={this.toggleDropdown}>
          <Text fontSize={["16px", "18px"]} color="rgba(22,35,72,0.9)">{this.state.value || this.props.placeholder}</Text>
          <Icon name={this.state.isOpened ? "arrow-up" : "arrow-down"} color="rgba(22,27,72,0.6)" size={16}/>
        </Selected>
        {this.renderDropdown()}
      </SelectWrapper>
    );
  }

  toggleDropdown = () => {
    this.setState(state => {
      return {
        ...state,
        isOpened: !state.isOpened,
      };
    });
  };

  renderDropdown = () => {
    const { children } = this.props;
    if (!children || !this.state.isOpened) {
      return null;
    }
    return (
      <DropdownWrapper>
        {React.Children.map(children, (child, index) =>
          <DropdownItem key={`option-list-${index}`} onClick={() => this.handleOptionClick(index)}>
            <Text fontSize={["16px", "18px"]} color="rgba(22,35,72,0.9)">{child.props.children}</Text>
          </DropdownItem>,
        )}
      </DropdownWrapper>
    );
  };

  handleOptionClick = (index: number = 0) => {
    const { children, onValueChange } = this.props;

    this.setState({
      index: index,
      value: this.getValueFromOptions(children, index),
      isOpened: false,
    }, () => {
      if (onValueChange) onValueChange(this.getValueFromOptions(children, index), index);
    });
  }

}
