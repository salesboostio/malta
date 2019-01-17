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
  maxWidth,
  MaxWidthProps,
  maxHeight,
  MaxHeightProps,
  minWidth,
  MinWidthProps,
  minHeight,
  MinHeightProps,
  flex,
  FlexProps,
  border,
  BorderProps,
  borderRadius,
  BorderRadiusProps,
  fontFamily,
  FontFamilyProps,
  fontSize,
  FontSizeProps,
  fontWeight,
  FontWeightProps,
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
  border: "none"
};
