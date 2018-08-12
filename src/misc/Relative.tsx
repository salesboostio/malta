import * as React from "react";
import styled from "styled-components";
import { top, bottom, left, right, zIndex } from "styled-system";

export const StyledRelative = styled.div`
  position: relative;
  ${top} ${bottom} ${left} ${right}
  ${zIndex}
`;

export class Relative extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }

  public render() {
    const { children, ...props } = this.props;
    return (
      <StyledRelative {...props}>{children}</StyledRelative>
    );
  }
}