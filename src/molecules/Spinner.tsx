import * as React from "react";
import styled, { keyframes } from "styled-components";
import { space, color, colorStyle } from "styled-system";
import { colors } from "../commons/theme";
import { getValueFromTheme } from "../commons/utils";

const ballbeat = keyframes`
  0% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(0.3);
    opacity: 0.2;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
`;

interface Props {
  show?: boolean;
  duration?: number;
  scale?: number;
  color?: string;
}

const Wrapper = styled.div`
  display: ${(props: Props) => props.show ? "flex" : "none"};
  width: max-content;
  animation-fill-mode: both;
  > div {
    width: ${(props: Props) => props.scale * 12}px;
    height: ${(props: Props) => props.scale * 12}px;
    display: inline-block;
    border-radius: 50%;
    margin: ${(props: Props) => props.scale * 3}px;
    background: ${(props: Props) => getValueFromTheme(colors, props.color)};
    animation: ${ballbeat} ${(props: Props) => props.duration * 1}s 0s infinite ease-out;
    &:nth-child(2){
      animation-delay: ${(props: Props) => props.duration * 0.15}s !important;
    }
    &:nth-child(3){
      animation-delay: ${(props: Props) => props.duration * 0.3}s !important;
    }
  }
`;

export const Spinner: React.SFC<Props> = (props: Props) => (
  <Wrapper {...props}>
    <div />
    <div />
    <div />
  </Wrapper>
);

Spinner.defaultProps = {
  show: true,
  duration: 1.0,
  scale: 1.0,
  color: colors.blue.royal
};
