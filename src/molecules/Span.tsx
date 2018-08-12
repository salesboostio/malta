import * as React from "react";
import { StyledText } from "../atoms/Text";

export const StyledSpan = StyledText.extend`
  display: inline;
`.withComponent("span");

export class Span extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }

  public render() {
    const { children, ...props } = this.props;
    return (
      <StyledSpan {...props}>{children}</StyledSpan>
    );
  }
}