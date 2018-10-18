import * as React from "react";
import styled from "styled-components";
import { Flex } from "../atoms/Flex";
import { Icon } from "./Icon";
import { colors } from "../commons/theme";

interface Props {
  checked?: boolean;
  disabled: boolean;
  onClick?: any;
}

const COLOR_DISABLED = colors.black._20,
  COLOR_CHECKED = colors.blue.royal,
  COLOR_UNCHECKED = colors.white.standard;

const Wrapper = styled<any>(Flex)`
  background: ${props => (props.disabled ? COLOR_DISABLED : props.checked ? COLOR_CHECKED : COLOR_UNCHECKED)};
  width: 20px;
  height 20px;
  justify-content: center;
  align-items: center;
  cursor: ${props => props.disabled ? "not-allowed" : "pointer"};
  transition: background 0.1s ease-out;
  border-radius: 2px;
  border: 1px solid ${colors.black.half};
  :hover {
    ${props => props.disabled ? "" : `border: 1.5px solid ${colors.black.standard};`}
  }
`;

export const CheckBox: React.SFC<Props> = props => {
  return (
    <Wrapper
      checked={props.checked}
      disabled={props.disabled}
      onClick={props.disabled ? () => { } : props.onClick}>
      <Icon name="check" fill="#FFF" scale={1} />
    </Wrapper >
  );
};

CheckBox.defaultProps = {
  disabled: false,
  checked: false,
};
