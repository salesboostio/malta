import * as React from "react";
import styled from "styled-components";
import { breakpoints } from "./theme";
import { hiddenDown, hiddenUp } from "./tools/mediaQuery";

const {
  height,
  space,
  width,
} = require("styled-system");

const StyledImg = styled.img`
  ${height}
  ${space}
  ${width}

  ${(props: IProps) => props.hiddendown && hiddenDown(props.hiddendown)};
  ${(props: IProps) => props.hiddenup && hiddenUp(props.hiddenup)};
`;

export interface IProps {
  src: string;
  // height
  height: number | string;
  // space
  m?: Array<number | string> | number | string;
  mt?: Array<number | string> | number | string;
  mr?: Array<number | string> | number | string;
  mb?: Array<number | string> | number | string;
  ml?: Array<number | string> | number | string;
  mx?: Array<number | string> | number | string;
  my?: Array<number | string> | number | string;
  // width
  width: number | string;
  // etc
  hiddendown?: string;
  hiddenup?: string;
}

export class Img extends React.Component<IProps, any> {
  public static defaultProps: IProps = {
    src: "",
    // height
    height: "auto",
    // space
    m: 0,
    // width
    width: 1,
  };

  public render() {
    return (
      <StyledImg
        {...this.props}
      />
    );
  }
}
