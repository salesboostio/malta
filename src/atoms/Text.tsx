import * as React from "react";
import styled from "styled-components";
import {
  fontSize,
  fontFamily,
  space,
  color,
  textAlign,
  letterSpacing,
  lineHeight,
  height,
  width
} from "styled-system";
import { fontWeights } from "../commons/theme";

interface Props {
  caps?: boolean;
  medium?: boolean;
  regular?: boolean;
  demiLight?: boolean;
  light?: boolean;
  italic?: boolean;
  left?: boolean;
  right?: boolean;
  center?: boolean;
  underline?: boolean;
  through?: boolean;
  hoverColor?: string;
}

const caps: any = ({ caps }: Props) =>
  caps ? { textTransform: "uppercase" } : null;
const medium: any = ({ medium }: Props) =>
  medium ? { fontWeight: `${fontWeights.medium}` } : null;
const regular: any = ({ regular }: Props) =>
  regular ? { fontWeight: `${fontWeights.regular}` } : null;
const demiLight: any = ({ demiLight }: Props) =>
  demiLight ? { fontWeight: `${fontWeights.demiLight}` } : null;
const light: any = ({ light }: Props) =>
  light ? { fontWeight: `${fontWeights.light}` } : null;
const italic: any = ({ italic }: Props) => (italic ? { fontStyle: "italic" } : null);
const left: any = ({ left }: Props) => (left ? { textAlign: "left" } : null);
const right: any = ({ right }: Props) => (right ? { textAlign: "right" } : null);
const center: any = ({ center }: Props) => (center ? { textAlign: "center" } : null);
const underline: any = ({ underline }: Props) =>
  underline ? { textDecorationLine: "underline" } : null;
const through: any = ({ through }: Props) =>
  through ? { textDecorationLine: "line-through" } : null;
const hoverColor: any = ({ hoverColor }: Props) =>
  hoverColor ? { color: hoverColor } : null;

export const Text = styled.div<any>`
  overflow-wrap: break-word;
  hyphens: auto;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 0;
  ${caps}
  ${medium}
  ${regular}
  ${demiLight}
  ${light}
  ${italic}
  ${left}
  ${right}
  ${center}
  ${underline}
  ${through}

  ${color}
  ${space}
  ${fontSize}
  ${fontFamily}
  ${textAlign}
  ${letterSpacing}
  ${lineHeight}
  ${height}
  ${width}
  :hover {
   ${hoverColor}
  }
`.withComponent("p");

Text.defaultProps = {
  color: "black.standard",
  fontSize: "h4",
  left: true,
  lineHeight: "1.4em"
};
