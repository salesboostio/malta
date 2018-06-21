import * as React from "react";
import styled from "styled-components";
import { colors, fontSizes, fontWeights } from "../theme";
const {
  border,
  borderColor,
  color,
  fontSize,
  fontWeight,
  lineHeight,
  space,
  textAlign,
  width,
} = require("styled-system");

const StyledTab = styled.li`
  ${border}
  ${borderColor}
  ${color}
  ${fontSize}
  ${fontWeight}
  ${lineHeight}
  ${space}
  ${textAlign}
  ${width}
  position: relative;
  display: inline-block;
  cursor: pointer;
  margin-left: -1px;

  &:first-child {
    margin-left: 0;
  }

  ${(props: IProps) => props.selected && `
    background-color: ${colors.white.standard};
    border-top: solid 2px ${colors.blue.royal};
    border-bottom: none;
    color: ${colors.blue.deep};
    font-weight: ${fontWeights.regular};
    padding-top: 31px;
  `}
`;

export interface IProps {
  // border
  border?: string;
  borderColor?: string;
  // color
  color?: string;
  bg?: string;
  // fontSize
  fontSize?: Array<number | string> | number | string;
  // fontWeight
  fontWeight?: Array<number | string> | number | string;
  // lineHeight
  lineHeight?: Array<number | string> | number | string;
  // placement
  placement?: string;
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
  align?: string;
  // width
  width?: number | string;
  // text
  text?: string;

  // event
  onClick?: React.MouseEventHandler<HTMLElement>;

  // options
  disabled?: boolean;
  selected?: boolean;
}

export class Tab extends React.Component<IProps, any> {
  public static defaultProps: IProps = {
    // border
    border: "solid 1px",
    borderColor: "black._20",
    // color
    color: "black.dark",
    bg: "black._3",
    // fontSize
    fontSize: "h3",
    // fontWeight
    fontWeight: "demiLight",
    // lineHeight
    lineHeight: "1.11",
    // space
    m: 0,
    px: 0,
    py: 3,
    // textAlign
    align: "center",
    // width
    width: 0.5,
  };

  public render() {
    const { disabled, onClick } = this.props;
    return (
      <StyledTab {...this.props} onClick={onClick}>
        {this.props.children}
      </StyledTab>
    );
  }
}
