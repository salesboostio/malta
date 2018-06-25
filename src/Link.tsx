import * as React from "react";
import styled from "styled-components";
const {
  color,
  fontSize,
  fontWeight,
  space,
} = require("styled-system");

const A = styled.a`
  display: inline-block;
  text-decoration: none;
  white-space: pre-line;
  ${color}
  ${fontSize}
  ${fontWeight}
  ${space}
`;

export interface IProps {
  href: string;
  target?: string;
  // color
  color?: string;
  bg?: string;
  // fontSize
  fontSize?: number | string;
  // fontWeight
  fontWeight?: number | string;
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
  // options
  onClick?: any;
}

export class Link extends React.Component<IProps, any> {
  public static defaultProps: IProps = {
    href: "#",
    // color
    color: "black.dark",
    bg: "transparent",
    // fontSize
    fontSize: "h3",
    // fontWeight
    fontWeight: "regular",
    // space
    m: 0,
    p: 0,
    onClick: () => {}
  };

  public render() {
    const { onClick } = this.props;
    return (
      <A onClick={onClick} {...this.props}>
        {this.props.children}
      </A>
    );
  }
}
