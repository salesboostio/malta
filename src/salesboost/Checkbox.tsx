import * as React from "react";
import styled from "styled-components";
import { Flex, Icon } from "../core";
import {
  space,
  SpaceProps,
} from "styled-system";

interface Props {
  checked?: boolean;
  disabled?: boolean;
  onClick?: any;
  style?: any;
}

const COLOR_DISABLED = "rgba(22,27,72,0.6)";
const COLOR_CHECKED = "#454EDF";
const COLOR_UNCHECKED = "#FFF";

const Wrapper = styled.div<any>`
  display: flex;
  background: ${props => (
    props.disabled ?
      props.checked ? "rgba(22,27,72,0.6)" : "rgba(22,27,72,0.1)"
      : props.checked ? COLOR_CHECKED : COLOR_UNCHECKED)};
  width: 20px;
  height: 20px;
  justify-content: center;
  align-items: center;
  cursor: ${props => props.disabled ? "not-allowed" : "pointer"};
  border-radius: 2px;
  border: 1px solid rgba(22,27,72,0.2);
  :hover {
    ${props => props.disabled ? "" : props.checked ? "" : "border: 1px solid rgba(22,27,72,0.8);"}
    ${props => props.disabled ? "" : props.checked ? "background: #161FBA;" : ""}
  }
  ${space}
  transition: all 0.15s ease-out;
`;

export type CheckboxProps = React.SFC<Props & SpaceProps>;

export const Checkbox: CheckboxProps = (props) => {

  const { checked, disabled, onClick, ...rest } = props;

  return (
    <Wrapper
      checked={checked}
      disabled={disabled}
      onClick={disabled ? () => { } : onClick}
      {...rest}>
      {checked ? <Icon name="check" color="#FFF" size={16} /> : null}
    </Wrapper >
  );
};

Checkbox.defaultProps = {
  disabled: false,
  checked: false,
};
