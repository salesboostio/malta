import * as React from "react";
import styled from "styled-components";
import { StyledSpan } from "./Span";

export const StyledHyperLink = StyledSpan.extend`
  text-decoration: none;
  &:hover{
    text-decoration-line: underline;
  }
  cursor: pointer;
`.withComponent("a");

StyledHyperLink.defaultProps = {
  target: "_blank"
};

export class HyperLink extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }

  public render() {
    const { children, ...props } = this.props;
    return (
      <StyledHyperLink {...props}>{children}</StyledHyperLink>
    );
  }
}