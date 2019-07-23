import * as React from "react";
import styled, { keyframes } from "styled-components";
import { color, ColorProps, space, SpaceProps } from "styled-system";

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
}

const Wrapper = styled.div<any>`
  display: ${(props: Props) => props.show ? "flex" : "none"};
  width: max-content;
  animation-fill-mode: both;
  ${space}
  > div {
    width: ${(props: Props) => props.scale * 12}px;
    height: ${(props: Props) => props.scale * 12}px;
    display: inline-block;
    border-radius: 50%;
    margin: ${(props: Props) => props.scale * 3}px;
    ${color}
    animation: ${ballbeat} ${(props: Props) => props.duration * 1}s 0s infinite ease-out;
    &:nth-child(2){
      animation-delay: ${(props: Props) => props.duration * 0.15}s !important;
    }
    &:nth-child(3){
      animation-delay: ${(props: Props) => props.duration * 0.3}s !important;
    }
  }
`;

export type SpinnerProps = Props & ColorProps & SpaceProps;

export const Spinner: React.SFC<SpinnerProps> = (props: Props) => (
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
  bg: "rgba(22, 27, 72, 0.3)",
};
