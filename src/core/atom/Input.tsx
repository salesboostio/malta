import * as React from "react";
import styled from "styled-components";
import {
  border,
  BorderProps,
  borderRadius,
  BorderRadiusProps,
  color,
  ColorProps,
  flex,
  FlexProps,
  fontFamily,
  FontFamilyProps,
  fontSize,
  FontSizeProps,
  fontWeight,
  FontWeightProps,
  height,
  HeightProps,
  maxHeight,
  MaxHeightProps,
  maxWidth,
  MaxWidthProps,
  minHeight,
  MinHeightProps,
  minWidth,
  MinWidthProps,
  space,
  SpaceProps,
  width,
  WidthProps,
} from "styled-system";
import {
  hover,
  HoverProps,
  ofReducer,
  OfReducerProps,
  transition,
  TransitionProps,
} from "../../utils";

export type InputProps = SpaceProps & WidthProps & HeightProps & ColorProps
  & MaxWidthProps & MaxHeightProps & MinWidthProps & MinHeightProps
  & FlexProps & BorderProps & BorderRadiusProps
  & FontSizeProps & FontWeightProps & FontFamilyProps
  & HoverProps & OfReducerProps & TransitionProps;

export const Input = styled.input<InputProps>`
  appearance: none;
  outline: none;
  ${space}
  ${width}
  ${height}
  ${color}
  ${maxWidth}
  ${maxHeight}
  ${minWidth}
  ${minHeight}
  ${flex}
  ${border}
  ${borderRadius}
  ${fontSize}
  ${fontWeight}
  ${fontFamily}
  ${hover}
  ${ofReducer}
  ${transition}
`;

Input.defaultProps = {
  p: 0,
  m: 0,
  fontSize: "16px",
  border: "none",
};
