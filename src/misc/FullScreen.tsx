import * as React from "react";
import { StyledFlex as Flex } from "../atoms/Flex";

export const StyledFullScreen = Flex.extend`
  margin: 0;
  padding: 0;
  height: 100vh;
  width: 100vw;
`;


export class FullScreen extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }

  public render() {
    const { children, ...props } = this.props;
    return (
      <StyledFullScreen {...props}>{children}</StyledFullScreen>
    );
  }
}