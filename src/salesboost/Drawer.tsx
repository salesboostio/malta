import * as React from "react";
import styled, { keyframes } from "styled-components";
import {
  space,
  SpaceProps,
  width,
  WidthProps,
  color,
  ColorProps,
} from "styled-system";
import {
  Flex, Text, Image
} from "../core";
import { Portal } from "./Portal";

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

const slideIn = (amount: number) => keyframes`
  0% {
    transform: translateX(${amount}px);
  }
  100% {
    transform: translateX(0);
  }
`;

const slideOut = (amount: number) => keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(${amount}px);
  }
`;

const Overlay = styled.div<any>`
  display: block;
  background: rgba(101, 103, 131, 0.25);
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  animation: ${props => props.closing ? fadeOut : fadeIn} 0.25s ease-in-out 1 normal both;
`;

const Container = styled.div<any>`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  border-radius: 16px;
  box-shadow: 0 4px 10px 4px rgba(22,27,72,0.08);

  ${width}
  ${color}
  ${space}

  top: 8px;
  ${props => props.left ? "left" : "right"}: 8px;
  height: calc(100vh - 16px);
  animation: ${props => props.closing ? slideOut((props.left ? -1 : 1) * props.slide[0]) : slideIn((props.left ? -1 : 1) * props.slide[0])} 0.5s cubic-bezier(0.3, 1, 0.32, 1) 1 normal both;

  @media screen and (min-width: 600px) {
    top: 16px;
    ${props => props.left ? "left" : "right"}: 16px;
    height: calc(100vh - 32px);
    animation: ${props => props.closing ? slideOut((props.left ? -1 : 1) * props.slide[1]) : slideIn((props.left ? -1 : 1) * props.slide[1])} 0.5s cubic-bezier(0.3, 1, 0.32, 1) 1 normal both;
  }

  @media screen and (min-width: 1200px) {
    animation: ${props => props.closing ? slideOut((props.left ? -1 : 1) * props.slide[2]) : slideIn((props.left ? -1 : 1) * props.slide[2])} 0.5s cubic-bezier(0.3, 1, 0.32, 1) 1 normal both;
  }
`;

interface Props {
  slide?: number[];
  left?: boolean;
  render?: ({ handleClose }: { handleClose: Function }) => any;
  opener?: ({ handleOpen }: { handleOpen: Function }) => any;
}

export type DrawerProps = Props & ColorProps & WidthProps & SpaceProps;

export class Drawer extends React.Component<DrawerProps, { open: boolean; closing: boolean; }> {

  static defaultProps: any;

  state = {
    open: false,
    closing: false,
  };

  handleOpen = () => {
    this.setState({ open: true, closing: false });
  }

  handleClose = () => {
    this.setState({ ...this.state, closing: true });
    setTimeout(() => {
      this.setState({ open: false, closing: false });
    }, 500);
  }

  render() {
    const { render, opener, ...rest } = this.props;
    return (
      <>
        {opener({ handleOpen: this.handleOpen })}
        {this.state.open ?
          <Portal>
            <Overlay onClick={this.handleClose} closing={this.state.closing} />
            <Container closing={this.state.closing} {...rest}>
              {render({ handleClose: this.handleClose })}
            </Container>
          </Portal>
          : null}
      </>
    );
  }
}

Drawer.defaultProps = {
  width: ["320px", "420px", "512px"],
  slide: [400, 500, 600],
  left: false,
  bg: "#FFF",
};
