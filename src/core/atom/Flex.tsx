import styled from "styled-components";
import { Block } from "./Block";
import {
  alignItems,
  AlignItemsProps,
  flexDirection,
  FlexDirectionProps,
  flexWrap,
  FlexWrapProps,
  justifyContent,
  JustifyContentProps,
} from "styled-system";

export type FlexProps = AlignItemsProps & JustifyContentProps & FlexDirectionProps & FlexWrapProps;

export const Flex = styled(Block)<FlexProps>`
  ${alignItems}
  ${justifyContent}
  ${flexDirection}
  ${flexWrap}
`;

Flex.defaultProps = {
  display: "Flex",
};
