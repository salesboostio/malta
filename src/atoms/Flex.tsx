import * as React from "react";
import {
  alignItems,
  justifyContent,
  flexWrap,
  flexDirection
} from "styled-system";
import { StyledBox as Box } from "./Box";

export const StyledFlex = Box.extend`
  display: flex;
  box-sizing: border-box;
  ${alignItems}
  ${justifyContent}
  ${flexWrap}
  ${flexDirection}
`;

export class Flex extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }

  public render() {
    const { children, ...props } = this.props;
    return (
      <StyledFlex {...props}>{children}</StyledFlex>
    );
  }
}