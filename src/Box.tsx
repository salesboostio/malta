import * as React from "react";
import styled from "styled-components";
import { Box as gridStyledBox } from "grid-styled";
import { breakpoints } from "./theme";
import { hiddenDown, hiddenUp } from "./tools/mediaQuery";

export interface IProps {
  display?: string;
  hiddendown?: string;
  hiddenup?: string;
}

const StyledBox = gridStyledBox.extend`
  ${(props: IProps) => props.display && `
    display: ${props.display};
  `};
  ${(props: IProps) => props.hiddendown && hiddenDown(props.hiddendown)};
  ${(props: IProps) => props.hiddenup && hiddenUp(props.hiddenup)};
`;

export class Box extends React.Component<any, any> {
  public render() {
    return (
      <StyledBox
        {...this.props}
      >
        {this.props.children}
      </StyledBox>
    );
  }
}
