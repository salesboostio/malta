import * as React from "react";
import {
  Block,
  BlockProps,
  Flex,
  Icon,
} from "../core";
import { Typo } from "../salesboost";
import styled from "styled-components";

const SelectWrapper = styled(Block)`
  width: ${({ width }) => width || "327px"};
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
  flex-direction: column;
  overflow-y: overlay;
  background-color: #fff;
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
  width: 100%;
  padding: 14px 20px;
  align-items: center;
  cursor: pointer;
  user-select: none;
  :hover {
    background-color: rgba(22,27,72, 0.05);
  }
`;

export interface SelectProps extends BlockProps {
  children?: any;
  disabled?: boolean;
  initialSelection?: number;
  placeholder?: string;
  dropdownHeight?: string | string[] | number | number[];
  onValueChange?: (value: string, index: number) => void;
  style?: any;
}

interface State {
  index: number;
  value: string;
  isOpened: boolean;
}

export class Select extends React.Component<SelectProps, State> {
  containerRef: React.RefObject<HTMLDivElement> = React.createRef();

  state = {
    index: this.props.initialSelection || -1,
    value: this.props.initialSelection > -1 ? this.getValueFromOptions(this.props.children, this.props.initialSelection) : "",
    isOpened: false,
  };

  componentDidMount() {
    document.addEventListener("mousedown", this.handleOutsideClick);
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleOutsideClick);
  }

  getValueFromOptions (options: any, index: number) {
    return options instanceof Array ? options[index].props.children : options.props.children;
  }

  render() {
    const { children, disabled, onValueChange, placeholder, dropdownHeight, height, color, ...styles } = this.props;
    const { isOpened, value } = this.state;
    return (
      <SelectWrapper ref={this.containerRef} {...styles}>
        <Selected height={height} isOpened={isOpened} disabled={disabled} onClick={this.toggleDropdown}>
          <Typo name="body_161616_nv80_300" lineHeight="24px" style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
            {value || placeholder}
          </Typo>
          <Icon name={isOpened ? "arrow-up" : "arrow-down"} color="rgba(22,27,72,0.6)" size={16}/>
        </Selected>
        {this.renderDropdown()}
      </SelectWrapper>
    );
  }

  renderDropdown = () => {
    const { children, dropdownHeight } = this.props;
    if (!children || !this.state.isOpened) {
      return null;
    }
    return (
      <DropdownWrapper maxHeight={dropdownHeight || "330px"}>
        {React.Children.map(children, (child, index) =>
          <DropdownItem key={`option-list-${index}`} onClick={() => this.handleOptionClick(index)}>
            <Typo name="body_161616_nv80_300" lineHeight="24px">{child.props.children}</Typo>
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
      index,
      value: this.getValueFromOptions(children, index),
      isOpened: false,
    }, () => {
      if (onValueChange) onValueChange(this.getValueFromOptions(children, index), index);
    });
  }

  handleOutsideClick = (e: MouseEvent) => {
    if (this.containerRef.current && !this.containerRef.current.contains(e.target as Node) && this.state.isOpened) {
      this.setState({ isOpened: false });
    }
  }

}
