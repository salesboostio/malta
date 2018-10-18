import * as React from "react";
import styled from "styled-components";
import { Span } from "./Span";

export const HyperLink = styled(Span)`
  text-decoration: none;
  &:hover{
    text-decoration-line: underline;
  }
  cursor: pointer;
`.withComponent("a");

HyperLink.defaultProps = {
  target: "_blank"
};
