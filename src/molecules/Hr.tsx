import * as React from "react";
import styled from "styled-components";
import { colors } from "../commons/theme";
import { space, borderBottom, SpaceProps, width, WidthProps } from "styled-system";
import { getValueFromTheme } from "../commons/utils";

type LineStyle = "solid" | "dashed" | "dotted";
type LineColor = string;
type LineThick = number | string;

interface LineProps {
  lineStyle?: LineStyle;
  color?: LineColor;
  thick?: LineThick;
}

type Props = LineProps & SpaceProps & WidthProps;

const border = (props: Props) => `border-bottom: ${props.thick} ${props.lineStyle} ${getValueFromTheme(colors, props.color)}`;

export const Hr = styled.div<Props>`
  height: 0px;
  ${space}
  ${width}
  ${border}
`;

Hr.defaultProps = {
  thick: "1px",
  lineStyle: "solid",
  color: "black._20",
  my: 1,
  width: "100%"
};
