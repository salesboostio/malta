import * as React from "react";
import styled from "styled-components";
import {
  Spinner
} from "./Spinner";
import { colors } from "../commons/theme";
import { Flex } from "../atoms/Flex";

interface Props {
  checked?: boolean;
  loading?: boolean;
  disabled: boolean;
  onClick?: Function;
}

const Wrapper = styled<any>(Flex)`
  position: relative;
  background: ${props => (props.disabled ? colors.black.half : props.checked ? colors.mint : colors.black.hint)};
  height: 24px;
  width: 44px;
  border-radius: 12px;
  align-items: center;
  padding-left: 2px;
  padding-right: 2px;
  cursor: pointer;
  transition: background 0.1s ease-out;
`;

const Circle = styled<any>(Flex)`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: ${props => props.disabled ? "#EEE" : "#FFF"};
  transform: translateX(${ props => props.checked ? "20" : "0"}px);
  transition: transform 0.1s ease-out;
`;

export class ToggleSwitch extends React.Component<Props, any> {
  static defaultProps: Props;

  public render() {
    return (
      <Wrapper
        checked={this.props.checked}
        disabled={this.props.disabled}
        onClick={this.props.disabled ? () => { } : this.props.onClick}>
        {this.props.loading ?
          <Flex alignItems="center" justifyContent="center" width="100%" height="100%">
            <Spinner scale={0.5} color="#FFF" />
          </Flex>
          : <Circle checked={this.props.checked} disabled={this.props.disabled} />
        }
      </Wrapper >
    );
  }
}

ToggleSwitch.defaultProps = {
  disabled: false,
  checked: false,
  loading: false
};
