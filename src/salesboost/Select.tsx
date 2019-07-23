import * as React from "react";
import {
  Block,
  Flex,
  Icon,
  Text,
} from "../core";
import styled from "styled-components";
import {
  HeightProps,
  SpaceProps,
  WidthProps,
} from "styled-system";

const SelectWrapper = styled(Block)`
  width: 327px;
  position: relative;
`;

interface SelectedProps {
  disabled: boolean;
  isOpened: boolean;
}

const Selected = styled(Flex)<SelectedProps>`
  width: 100%;
  height: 60px;
  padding: 0 16px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-radius: 2px;
  border: solid 1px;
  border-color: ${({ isOpened }) => isOpened ? "#454edf" : "rgba(22, 27, 72, 0.2)"};
  background-color: ${({ disabled }) => disabled ? "rgba(22, 27, 72, 0.05)" : "#fff"};
  box-shadow: 0 2px 6px 2px rgba(22, 27, 72, 0.03);
  cursor: ${({ disabled }) => disabled ? "not-allowed" : "pointer"};
  :hover {
    ${props => !props.isOpened ? "border-color: rgba(22, 27, 72, 0.5);" : ""}
  }
  ::placeholder {
    color: rgba(22, 27, 72, 0.4);
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
  children?: any;
  disabled?: boolean;
  initialSelection?: number;
  placeholder?: string;
  onValueChange?: (value: string, index: number) => void;
}

type SelectProps = Props & SpaceProps & WidthProps & HeightProps;


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

  render() {
    const { children, disabled, onValueChange, placeholder, height, ...styles } = this.props;
    const { isOpened, value } = this.state;
    return (
      <SelectWrapper {...styles}>
        <Selected height={height} isOpened={isOpened} disabled={disabled} onClick={this.toggleDropdown}>
          <Text fontSize={["16px", "18px"]} color="rgba(22,35,72,0.9)">{value || placeholder}</Text>
          <Icon name={isOpened ? "arrow-up" : "arrow-down"} color="rgba(22,27,72,0.6)" size={16}/>
        </Selected>
        {this.renderDropdown()}
      </SelectWrapper>
    );
  }

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
  }

  toggleDropdown = () => {
    if (this.props.disabled) {
      return;
    }

    this.setState((state) => ({
      ...state,
      isOpened: !state.isOpened,
    }));
  }

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
