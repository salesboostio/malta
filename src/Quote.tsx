import * as React from "react";
import styled from "styled-components";
const {
  color,
  fontSize,
  fontWeight,
  lineHeight,
  space,
  textAlign,
} = require("styled-system");

const BlockQuote = styled.blockquote`
  display: ${(props: IProps) => props.display};
  white-space: pre-line;
  position: relative;
  margin: 0 0 0 20px;

  ${color}
  ${fontSize}
  ${fontWeight}
  ${lineHeight}
  ${space}
  ${textAlign}

  &:before {
    content: "“";
    display: block;
    font-size: 40px;
    height: 0;
    left: -20px;
    position: absolute;
    top: -10px;
    ${color}
    ${fontWeight}
  }

  &:after {
    content: "”";
    display: block;
    font-size: 40px;
    height: 0;
    right: -20px;
    position: absolute;
    top: -10px;
    ${color}
    ${fontWeight}
  }
`;

export interface IProps {
  // color
  color?: string;
  bg?: string;
  // display
  display?: string;
  // fontSize
  fontSize?: Array<number | string> | number | string;
  // fontWeight
  fontWeight?: Array<number | string> | number | string;
  // lineHeight
  lineHeight?: Array<number | string> | number | string;
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
  // textAlign
  align?: Array<string> | string;
}

export class Quote extends React.Component<IProps, any> {
  public static defaultProps: IProps = {
    // color
    color: "black.dark",
    bg: "transparent",
    // display
    display: "inline-block",
    // fontSize
    fontSize: "h3",
    // fontWeight
    fontWeight: "regular",
    // lineHeight
    lineHeight: "1.44",
  };

  public render() {
    return (
      <BlockQuote {...this.props}>
        {this.props.children}
      </BlockQuote>
    );
  }
}
