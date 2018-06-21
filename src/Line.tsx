import * as React from "react";
import styled from "styled-components";
const { space } = require("styled-system");
import { colors } from "./theme";

const StyledLine = styled.hr`
  ${space}
  border: none;
  border-bottom: solid 1px ${(props: IProps) => props.color};
`;

export interface IProps {
  // color
  color?: string;
  bg?: string;
  // space
  m?: number | string;
  mt?: number | string;
  mr?: number | string;
  mb?: number | string;
  ml?: number | string;
  mx?: number | string;
  my?: number | string;
  p?: number | string;
  pt?: number | string;
  pr?: number | string;
  pb?: number | string;
  pl?: number | string;
  px?: number | string;
  py?: number | string;
  // width
  width?: number | string;
}

export class Line extends React.Component<IProps, any> {
  public static defaultProps: IProps = {
    // color
    color: "#ededf1",
    // space
    m: 1,
    p: 0,
    // width
    width: "100%"
  };

  public render() {
    return (
      <StyledLine {...this.props} />
    );
  }
}
