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
  background: ${props => props.checked ? "#FFFFFF" : "rgba(27, 28, 37, 0.1)"};
  height: 24px;
  width: 38px;
  border: ${props => props.checked ? "1px solid rgba(27, 28, 37, 0.2)" : null};
  border-radius: 12px;
  align-items: center;
  padding-left: 2px;
  padding-right: 2px;
  cursor: pointer;
  transition: background 0.1s ease-out;
  :hover {
    background: ${props => props.checked ? "#FFFFFF" : "rgba(27, 28, 37, 0.1)"};
    border: ${props => props.checked ? "1px solid rgb(57, 67, 226)" : "1px solid rgba(27, 28, 37, 0.6)"};
  }
  ${space}
`;

const Circle = styled.div<any>`
  display: flex;
  box-sizing: border-box;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: ${props => props.disabled ? "rgba(255, 255, 255, 0.5)" : props.checked ? "rgb(57, 67, 226)" : "#FFFFFF"};
  transform: translateX(${ props => props.checked ? "13" : "0"}px);
  transition: transform 0.1s ease-out;
`;


interface Props {
  checked?: boolean;
  loading?: boolean;
  onClick?: any;
  style?: any;
  disabled?: boolean;
}

export type SwitchProps = React.FC<Props & SpaceProps>;

export const Switch: SwitchProps = (props) => {

  const { checked, onClick, loading, disabled, ...rest } = props;

  return (
    <Wrapper
      checked={disabled ? false : checked}
      onClick={onClick}
      {...rest}>
      {loading ?
        <Flex alignItems="center" justifyContent="center" width="100%" height="100%">
          <Spinner scale={0.5} color="#FFF" />
        </Flex>
        : <Circle checked={disabled ? false : checked} disabled={disabled} />
      }
    </Wrapper>
  );
};

Switch.defaultProps = {
  checked: false,
  loading: false,
  disabled: false,
  onClick: () => { },
};
