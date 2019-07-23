import * as React from "react";
import styled, { css } from "styled-components";
import {
  display,
  DisplayProps,
  space,
  SpaceProps,
} from "styled-system";
import { Spinner } from "./Spinner";
import { Flex } from "../core";

const Wrapper = styled.div<any>`
  display: flex;
  box-sizing: border-box;
  position: relative;
  background: ${props => (props.disabled ? "rgba(22,27,72,0.2)" : props.checked ? "#23C1A6" : "rgba(22,27,72,0.2)")};
  height: 24px;
  width: 44px;
  border-radius: 12px;
  align-items: center;
  padding-left: 2px;
  padding-right: 2px;
  cursor: pointer;
  transition: background 0.1s ease-out;
  :hover {
     background: ${props => (props.disabled ? "rgba(22,27,72,0.2)" : props.checked ? "#0ea58a" : "rgba(22,27,72,0.3)")};
  }
  ${space}
`;

const Circle = styled.div<any>`
  display: flex;
  box-sizing: border-box;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: ${props => props.disabled ? "rgba(255,255,255,0.6)" : "#FFF"};
  transform: translateX(${ props => props.checked ? "20" : "0"}px);
  transition: transform 0.1s ease-out;
`;


interface Props {
  checked?: boolean;
  loading?: boolean;
  disabled?: boolean;
  onClick?: any;
  style?: any;
}

export type SwitchProps = React.FC<Props & SpaceProps>;

export const Switch: SwitchProps = (props) => {

  const { checked, onClick, disabled, loading, ...rest } = props;

  return (
    <Wrapper
      checked={checked}
      disabled={disabled}
      onClick={disabled ? () => { } : onClick}
      {...rest}>
      {loading ?
        <Flex alignItems="center" justifyContent="center" width="100%" height="100%">
          <Spinner scale={0.5} color="#FFF" />
        </Flex>
        : <Circle checked={checked} disabled={disabled} />
      }
    </Wrapper>
  );
};

Switch.defaultProps = {
  disabled: false,
  checked: false,
  loading: false,
  onClick: () => { },
};
