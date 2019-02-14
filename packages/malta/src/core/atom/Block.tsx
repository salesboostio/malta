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
  display,
  DisplayProps,
  maxWidth,
  MaxWidthProps,
  maxHeight,
  MaxHeightProps,
  minWidth,
  MinWidthProps,
  minHeight,
  MinHeightProps,
  size,
  SizeProps,
  ratio,
  RatioProps,
  verticalAlign,
  VerticalAlignProps,
  flexBasis,
  FlexBasisProps,
  flex,
  FlexProps,
  gridColumn,
  GridColumnProps,
  gridRow,
  GridRowProps,
  gridArea,
  GridAreaProps,
  border,
  BorderProps,
  borders,
  BordersProps,
  borderRadius,
  BorderRadiusProps,
  boxShadow,
  BoxShadowProps,
  borderColor,
  BorderColorProps,
  opacity,
  OpacityProps,
  overflow,
  OverflowProps,
  position,
  PositionProps,
  zIndex,
  ZIndexProps,
  top,
  TopProps,
  right,
  RightProps,
  bottom,
  BottomProps,
  left,
  LeftProps,
} from "styled-system";
import {
  hover,
  HoverProps,
  ofReducer,
  OfReducerProps,
  transition,
  TransitionProps,
  cursor,
  CursorProps,
} from "../../utils";

export type BlockProps = SpaceProps & WidthProps & HeightProps & ColorProps
  & JustifySelfProps & AlignSelfProps & OrderProps & DisplayProps & MaxWidthProps & MaxHeightProps
  & MinWidthProps & MinHeightProps & SizeProps & RatioProps & VerticalAlignProps & FlexBasisProps & OpacityProps
  & FlexProps & GridColumnProps & GridRowProps & GridAreaProps & BordersProps & BorderRadiusProps & BoxShadowProps
  & BorderColorProps & OverflowProps & PositionProps & ZIndexProps & TopProps & RightProps & BottomProps & LeftProps
  & HoverProps & OfReducerProps & TransitionProps & CursorProps & BorderProps;

export const Block = styled.div<BlockProps>`
  box-sizing: border-box;
  ${space}
  ${width}
  ${height}
  ${color}
  ${justifySelf}
  ${alignSelf}
  ${order}
  ${display}
  ${maxWidth}
  ${maxHeight}
  ${minWidth}
  ${minHeight}
  ${size}
  ${ratio}
  ${verticalAlign}
  ${flexBasis}
  ${flex}
  ${gridColumn}
  ${gridRow}
  ${gridArea}
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
