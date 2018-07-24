import * as React from "react";
import { Box as gridStyledBox } from "grid-styled";
const { display } = require("styled-system");

export interface IProps {
  display?: Array<string> | string;
  hiddendown?: string;
  hiddenup?: string;
}

const StyledBox = gridStyledBox.extend`
  ${display}
`;

export class Box extends React.Component<any, any> {
  public render() {
    return (
      <StyledBox {...this.props} >
        {this.props.children}
      </StyledBox>
    );
  }
}
