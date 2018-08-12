import * as React from "react";
import styled from "styled-components";
import { breakpoints } from "../commons/theme";

export const StyledHide = styled.div`
  @media (max-width: ${breakpoints[0]}){
    display: ${(props: any) => (props.mobile ? "none" : "block")};
  }

  @media (max-width: ${breakpoints[1]}) and (min-width: ${breakpoints[0]}){
    display: ${(props: any) => (props.tablet ? "none" : "block")};
  }

  @media (min-width: ${breakpoints[1]}){
    display: ${(props: any) => (props.desktop ? "none" : "block")};
  }
`;

export class Hide extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }

  public render() {
    const { children, ...props } = this.props;
    return (
      <StyledHide {...props}>{children}</StyledHide>
    );
  }
}