import * as React from "react";
import styled from "styled-components";
const {
  borderColor,
  color,
  fontSize,
  fontWeight,
  lineHeight,
  space,
  textAlign,
  width,
} = require("styled-system");

const StyledTabList = styled.ul`
  ${color}
  ${fontSize}
  ${fontWeight}
  ${lineHeight}
  ${space}
  ${textAlign}
  ${width}
  position: relative;
  white-space: nowrap;
`;

export interface IProps {
  // color
  color?: string;
  bg?: string;
  borderColor?: string;
  // fontSize
  fontSize?: number | string;
  // fontWeight
  fontWeight?: number | string;
  // lineHeight
  lineHeight?: number | string;
  // placement
  placement?: string;
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
  // textAlign
  align?: string;
  // width
  width?: number | string;
  // text
  text?: string;
}

export class TabList extends React.Component<IProps, any> {
  public static defaultProps: IProps = {
    // color
    color: "black.dark",
    bg: "white",
    // fontSize
    fontSize: "h3",
    // fontWeight
    fontWeight: "demiLight",
    // lineHeight
    lineHeight: "1.11",
    // space
    m: 0,
    mb: 3,
    p: 2,
    // textAlign
    align: "center",
    // width
    width: 440,
  };

  public render() {
    return (
      <StyledTabList {...this.props}>
        {this.props.children}
      </StyledTabList>
    );
  }
}
