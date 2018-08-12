import * as React from "react";
import styled from "styled-components";
import { shadow } from "../commons/theme";
import { space } from "styled-system";

const boxShadow = (props: any): string => `box-shadow: ${shadow[props.shadow]};`;

export const StyledShadow = styled.div`
  width: fit-content;
  height: auto;
  overflow-hidden;
  ${boxShadow}
  ${space}
`;

export class Shadow extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }

  public render() {
    const { children, ...props } = this.props;
    return (
      <StyledShadow {...props}>{children}</StyledShadow>
    );
  }
}