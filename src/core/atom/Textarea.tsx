import styled from "styled-components";
import {
  border,
  BorderProps,
  borderRadius,
  BorderRadiusProps,
  boxShadow,
  BoxShadowProps,
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
import { theme } from "../../salesboost";
import { parseNumberToUnit } from "../../utils";

export type TextAreaProps = ColorProps & FlexProps & HeightProps & WidthProps & SpaceProps & BoxShadowProps
  & BorderProps & BorderRadiusProps & FontFamilyProps & FontSizeProps & FontWeightProps
  & MaxWidthProps & MaxHeightProps & MinWidthProps & MinHeightProps;

export const Textarea = styled.textarea<TextAreaProps>`
  ${border}
  ${borderRadius}
  ${boxShadow}
  ${color}
  ${flex}
  ${width}
  ${maxWidth}
  ${minWidth}
  ${height}
  ${maxHeight}
  ${minHeight}
  ${space}
  ${fontFamily}
  ${fontSize}
  ${fontWeight}
`;

Textarea.defaultProps = {
  p: 0,
  m: 0,
  fontSize: parseNumberToUnit(theme.fontsizes.p, "px"),
  border: "none",
};
