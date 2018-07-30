import * as React from "react";
import { Box as gridStyledBox } from "grid-styled";
const { display, height } = require("styled-system");

export interface IProps {
  display?: Array<string> | string;
  height?: Array<string | number> | string | number;
}

const StyledBox = gridStyledBox.extend`
  ${display}
  ${height}
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
