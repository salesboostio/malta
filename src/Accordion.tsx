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
import { Text } from "./";
import { colors } from "./theme";

const AccordionItem = styled.div`
  cursor: pointer;
  user-select: none;
`;

const AccordionText = styled.div`
  ${color}
  ${fontSize}
  ${fontWeight}
  ${lineHeight}
  ${space}
  ${textAlign}
  ${width}

  display: ${(props: IProps) => props.showText ? "block" : "none"};
`;

const StyledAccordion = styled.div`
  position: relative;
`;

export interface IProps {
  // color
  color?: string;
  bg?: string;
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
  // event
  onClick?: React.MouseEventHandler<HTMLElement>;
  // options
  showText?: boolean;
}

export class Accordion extends React.Component<IProps, any> {
  public static defaultProps: IProps = {
    // color
    color: "black.dark",
    // fontSize
    fontSize: "h5",
    // fontWeight
    fontWeight: "regular",
    // lineHeight
    lineHeight: "1.44",
    // placement
    placement: "bottom",
    // space
    m: 0,
    p: 0,
    // textAlign
    align: "left",
    // width
    width: 320,
    // event
    onClick: () => { },
    // options
    showText: false,
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
    const { onClick, showText } = this.props;
    return (
      <StyledAccordion>
        <AccordionItem onClick={onClick}>
          {this.props.children}
        </AccordionItem>
        <AccordionText
          {...this.props}>
          {this.nl2br(this.props.text)}
        </AccordionText>
      </StyledAccordion>
    );
  }
}
