import * as React from "react";
import styled from "styled-components";
import { left, top } from "styled-system";

export const StyledOverlay = styled.div`
  ${left}
  ${top}
  opacity: 0.4
  position: fixed;
  top: 0;
  left: 0;
  z-index: 5000;
  width: 100%;
  height: 100%;
  background: #000;
`;

export class Overlay extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      isVisible: false
    };
    this.close = this.close.bind(this);
    this.open = this.open.bind(this);
  }

  close() {
    this.setState({ isVisible: false });
  }

  open() {
    this.setState({ isVisible: false });
  }

  public render() {
    const { children, ...props } = this.props;
    return (
      this.state.isVisible && <StyledOverlay {...props} onClick={this.close}> {children} </StyledOverlay>
    );
  }
}