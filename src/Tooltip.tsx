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

const TooltipText = styled.span`
  ${color}
  ${fontSize}
  ${fontWeight}
  ${lineHeight}
  ${space}
  ${textAlign}
  ${width}

  border-radius: 2px;
  position: absolute;
  white-space: pre-line;
  visibility: hidden;
  opacity: 0;
  transform: translate3d(0,-10px,0);
  transition: all .15s ease-in-out;
  z-index: 1;

  &::after {
    content: "";
    position: absolute;
    border-width: 7px;
    border-style: solid;
  }

  &.top {
    bottom: 150%;
    left: -24px;
    &::after {
      top: 100%;
      left: 24px;
      border-left-color: transparent !important;
      border-right-color: transparent !important;
      border-bottom-color: transparent !important;
      ${borderColor}
    }
  }

  &.left {
    top: -10px;
    right: 110%;

    &::after {
      top: 10px;
      left: 100%;
      border-top-color: transparent !important;
      border-right-color: transparent !important;
      border-bottom-color: transparent !important;
      ${borderColor}
    }
  }

  &.right {
    top: -10px;
    left: 110%;

    &::after {
      top: 10px;
      right: 100%;
      border-top-color: transparent !important;
      border-left-color: transparent !important;
      border-bottom-color: transparent !important;
      ${borderColor}
    }
  }

  &.bottom {
    top: 150%;
    left: -24px;
    &::after {
      bottom: 100%;
      left: 24px;
      border-top-color: transparent !important;
      border-left-color: transparent !important;
      border-right-color: transparent !important;
      ${borderColor}
    }
  }
`;

const StyledTooltip = styled.div`
  cursor: pointer;
  display: inline-block;
  position: relative;

  &:hover {
    & ${TooltipText} {
      visibility: visible;
      opacity: 1;
      transform: translate3d(0,0,0);
    }
  }
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

export class Tooltip extends React.Component<IProps, any> {
  public static defaultProps: IProps = {
    // color
    color: "white.standard",
    bg: "black.dark",
    borderColor: "black.dark",
    // fontSize
    fontSize: "h5",
    // fontWeight
    fontWeight: "demiLight",
    // lineHeight
    lineHeight: "1.44",
    // placement
    placement: "bottom",
    // space
    m: 0,
    p: 2,
    // textAlign
    align: "left",
    // width
    width: 320,
  };

  private nl2br(text: any) {
    const newline = "\n";
    if (typeof text === "number") {
      return text;
    } else if (typeof text !== "string") {
      return "";
    }

    const lines = text.split(newline);
    return lines.map(function (line, i) {
      return (
        <span key={i}>
          {line}
          <br />
        </span>
      );
    });
  }

  public render() {
    return (
      <StyledTooltip>
        {this.props.children}
        <TooltipText className={this.props.placement} {...this.props}>{this.nl2br(this.props.text)}</TooltipText>
      </StyledTooltip>
    );
  }
}
