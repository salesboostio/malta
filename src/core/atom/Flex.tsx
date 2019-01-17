import styled from "styled-components";
import { Block } from "./Block";
import {
  alignItems,
  AlignItemsProps,
  justifyContent,
  JustifyContentProps,
  flexDirection,
  FlexDirectionProps,
  flexWrap,
  FlexWrapProps,
} from "styled-system";

export type FlexProps = AlignItemsProps & JustifyContentProps & FlexDirectionProps & FlexWrapProps;

export const Flex = styled(Block) <FlexProps>`
  display: flex;
  ${alignItems}
  ${justifyContent}
  ${flexDirection}
  ${flexWrap}
`;
