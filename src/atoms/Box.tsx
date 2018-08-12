import * as React from "react";
import styled from "styled-components";
import {
  space,
  width,
  height,
  color,
  justifySelf,
  alignSelf,
  order,
  border
} from "styled-system";

export const StyledBox = styled.div`
  box-sizing: border-box;
  ${space}
  ${width}
  ${height}
  ${color}
  ${justifySelf}
  ${alignSelf}
  ${order}
  ${border}
`;


export class Box extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }

  public render() {
    const { children, ...props } = this.props;
    return (
      <StyledBox {...props}>{children}</StyledBox>
    );
  }
}