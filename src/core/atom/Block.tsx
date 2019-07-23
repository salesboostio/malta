import styled from "styled-components";
import {
  alignSelf,
  AlignSelfProps,
  border,
  borderColor,
  BorderColorProps,
  BorderProps,
  borderRadius,
  BorderRadiusProps,
  borders,
  BordersProps,
  bottom,
  BottomProps,
  boxShadow,
  BoxShadowProps,
  color,
  ColorProps,
  colorStyle,
  ColorStyleProps,
  display,
  DisplayProps,
  flex,
  flexBasis,
  FlexBasisProps,
  FlexProps,
  gridArea,
  GridAreaProps,
  gridColumn,
  GridColumnProps,
  gridRow,
  GridRowProps,
  height,
  HeightProps,
  justifySelf,
  JustifySelfProps,
  left,
  LeftProps,
  maxHeight,
  MaxHeightProps,
  maxWidth,
  MaxWidthProps,
  minHeight,
  MinHeightProps,
  minWidth,
  MinWidthProps,
  opacity,
  OpacityProps,
  order,
  OrderProps,
  overflow,
  OverflowProps,
  position,
  PositionProps,
  right,
  RightProps,
  size,
  SizeProps,
  space,
  SpaceProps,
  top,
  TopProps,
  verticalAlign,
  VerticalAlignProps,
  width,
  WidthProps,
  zIndex,
  ZIndexProps,
} from "styled-system";
import {
  cursor,
  CursorProps,
  hover,
  HoverProps,
  ofReducer,
  OfReducerProps,
  transition,
  TransitionProps,
} from "../../utils";

export type BlockProps = SpaceProps & WidthProps & HeightProps & ColorProps
  & JustifySelfProps & AlignSelfProps & OrderProps & DisplayProps & MaxWidthProps & MaxHeightProps
  & MinWidthProps & MinHeightProps & SizeProps & VerticalAlignProps & FlexBasisProps & OpacityProps
  & FlexProps & GridColumnProps & GridRowProps & GridAreaProps & BordersProps & BorderRadiusProps & BoxShadowProps
  & BorderColorProps & OverflowProps & PositionProps & ZIndexProps & TopProps & RightProps & BottomProps & LeftProps
  & HoverProps & OfReducerProps & TransitionProps & CursorProps & BorderProps & ColorStyleProps;

export const Block = styled.div<BlockProps>`
  box-sizing: border-box;
  ${space}
  ${width}
  ${height}
  ${color}
  ${colorStyle}
  ${justifySelf}
  ${alignSelf}
  ${order}
  ${display}
  ${maxWidth}
  ${maxHeight}
  ${minWidth}
  ${minHeight}
  ${size}
  ${verticalAlign}
  ${flexBasis}
  ${flex}
  ${gridColumn}
  ${gridRow}
  ${gridArea}
  ${border}
  ${borders}
  ${borderRadius}
  ${boxShadow}
  ${opacity}
  ${borderColor}
  ${overflow}
  ${position}
  ${zIndex}
  ${top}
  ${right}
  ${bottom}
  ${left}
  ${hover}
  ${ofReducer}
  ${transition}
  ${cursor}
`;
