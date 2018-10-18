import * as React from "react";
import styled from "styled-components";
import {
  space,
  SpaceProps,
  width,
  WidthProps,
  height,
  HeightProps,
  color,
  ColorProps,
  justifySelf,
  JustifySelfProps,
  alignSelf,
  AlignSelfProps,
  order,
  OrderProps,
} from "styled-system";

type Props = SpaceProps & WidthProps & HeightProps & ColorProps & JustifySelfProps & AlignSelfProps & OrderProps;

export const Box = styled.div<Props>`
  box-sizing: border-box;
  ${space}
  ${width}
  ${height}
  ${color}
  ${justifySelf}
  ${alignSelf}
  ${order}
  transition: all 0.15s ease-out;
`;
