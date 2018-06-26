import * as React from "react";
import styled from "styled-components";
const {
  color,
  fontSize,
  fontWeight,
  lineHeight,
  space,
  textAlign,
  width,
} = require("styled-system");

const StyledText = styled.div`
  white-space: pre-line;
  ${color}
  ${fontSize}
  ${fontWeight}
  ${lineHeight}
  ${space}
  ${textAlign}
  ${width}

  ${(props: IProps) => props.display && `
    display: ${props.display};
  `};

  ${(props: IProps) => props.hover && `
  &:hover {
    color: ${props.hover};
  }
  `};

  ${(props: IProps) => props.letterSpacing && `
    letter-spacing: ${props.letterSpacing};
  `};
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
  // width
  width?: Array<number | string> | number | string;
  // options
  hover?: string;
  letterSpacing?: string;
  style?: Object;
}

export class Text extends React.Component<IProps, any> {
  public static defaultProps: IProps = {
    // color
    color: "black.dark",
    bg: "transparent",
    // fontSize
    fontSize: "h3",
    // fontWeight
    fontWeight: "regular",
    // lineHeight
    lineHeight: "1.44",
    // space
    m: 0,
    p: 0,
    // textAlign
    align: "left",
    // width
    width: 1,
  };

  public render() {
    return (
      <StyledText {...this.props}>
        {this.props.children}
      </StyledText>
    );
  }
}
