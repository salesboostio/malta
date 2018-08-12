import * as React from "react";
import styled from "styled-components";
import { maxWidth } from "styled-system";

export const StyledContainer = styled.div`
  margin: 0px auto;
  max-width: 760px;
  ${maxWidth}
`;


export class Container extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }

  public render() {
    const { children, ...props } = this.props;
    return (
      <StyledContainer {...props}>{children}</StyledContainer>
    );
  }
}