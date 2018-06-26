import * as React from "react";
import styled from "styled-components";
import {
  colors,
  fontSizes
} from "./theme";
const {
  borderColor,
  borderRadius,
  borders,
  color,
  fontSize,
  height,
  space,
  width,
} = require("styled-system");
import { generateQuery } from "./tools/mediaQuery";

const StyledLabel = styled.span`
  display: inline-block;
  text-align: center;
  ${borderColor}
  ${borderRadius}
  ${borders}
  ${color}
  ${fontSize}
  ${space}
  ${width}
  ${height}

  ${(props: IProps) => props.height && `
    line-height: ${props.height};
  `};
`;

export interface IProps {
  onClick?: React.MouseEventHandler<HTMLElement>;
  type?: string;
  // borderColor
  borderColor?: string;
  // borderRadius
  borderRadius?: number | string;
  // borders
  border?: string;
  borderTop?: string;
  borderRight?: string;
  borderBottom?: string;
  borderLeft?: string;
  // color
  color?: string;
  bg?: string;
  // fontSize
  fontSize?: Array<number | string> | number | string;
  // height
  height?: Array<number | string> | number | string;
  // space
  m?: Array<number | string> | number | string;
  mt?: Array<number | string> | number | string;
  mr?: Array<number | string> | number | string;
  mb?: Array<number | string> | number | string;
  ml?: Array<number | string> | number | string;
  mx?: Array<number | string> | number | string;
  my?: Array<number | string> | number | string;
  p?: Array<number | string> | number | string;
  pt?: Array<number | string> | number | string;
  pr?: Array<number | string> | number | string;
  pb?: Array<number | string> | number | string;
  pl?: Array<number | string> | number | string;
  px?: Array<number | string> | number | string;
  py?: Array<number | string> | number | string;
  // width
  width?: Array<number | string> | number | string;
}

export class Label extends React.Component<IProps, any> {
  public static defaultProps: IProps = {
    onClick: () => {},
    // borderColor
    borderColor: "transparent",
    // borders
    border: "none",
    // color
    color: "white.standard",
    bg: "blue.royal",
    // fontSize
    fontSize: "h5",
    // height
    height: "auto",
    // space
    m: 0,
    px: "4px",
    // width
    width: "auto",
  };

  public render() {
    return (
      <StyledLabel
        {...this.props}
      />
    );
  }
}
