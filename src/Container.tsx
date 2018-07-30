import * as React from "react";
import { Box } from "grid-styled";
import { containerWidth } from "./theme";
const { display } = require("styled-system");

const StyledBox = Box.extend`
  ${display}
`;

export class Container extends React.Component<any, any> {
  public render() {
    const { maxWidth, ...props } = this.props;
    return (
      <StyledBox
        {...props}
        mx="auto"
        style={{ maxWidth: maxWidth || containerWidth }} >
        {props.children}
      </StyledBox>
    );
  }
}
