import * as React from "react";
import { Box } from "grid-styled";
import { containerWidth } from "./theme";
import { hiddenDown, hiddenUp } from "./tools/mediaQuery";

const StyledBox = Box.extend`
  ${(props: any) => props.display && `
    display: ${props.display};
  `};
  ${(props: any) => props.hiddendown && hiddenDown(props.hiddendown)};
  ${(props: any) => props.hiddenup && hiddenUp(props.hiddenup)};
`;

export class Container extends React.Component<any, any> {
  public render() {
    const { maxWidth, ...props } = this.props;
    return (
      <StyledBox
        {...props}
        mx="auto"
        style={{ maxWidth: maxWidth || containerWidth }}
      >
        {props.children}
      </StyledBox>
    );
  }
}
