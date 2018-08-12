import * as React from "react";
import styled from "styled-components";
import { top, bottom, left, right, zIndex } from "styled-system";

export const StyledAbsolute = styled.div`
  position: absolute;
  ${top} ${bottom} ${left} ${right}
  ${zIndex}
`;

export class Absolute extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }

  public render() {
    const { children, ...props } = this.props;
    return (
      <StyledAbsolute {...props}>{children}</StyledAbsolute>
    );
  }
}