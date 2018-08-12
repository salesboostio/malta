import * as React from "react";
import styled from "styled-components";
import { space, borderRadius, width, height } from "styled-system";


export const StyledRounded = styled.div`
  width: fit-content;
  height: auto;
  overflow: hidden;
  ${space}
  ${width}
  ${height}
  ${borderRadius}
`;

export class Rounded extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }

  public render() {
    const { children, ...props } = this.props;
    return (
      <StyledRounded {...props}>{children}</StyledRounded>
    );
  }
}