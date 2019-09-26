import React from "react";
import styled from "styled-components";
import {
  boxShadow,
  BoxShadowProps,
  height,
  HeightProps,
  space,
  SpaceProps,
  width,
  WidthProps,
} from "styled-system";
import { Block, BlockProps } from "../core/atom/Block";
import { theme } from "./theme";

interface Props {
  selected?: boolean;
  disabled?: boolean;
  cursor?: string;
}

export type CardProps = Props & BlockProps & SpaceProps & WidthProps & HeightProps & BoxShadowProps;

export const Card = styled(Block)<CardProps>`
  ${width}
  ${height}
  ${space}
  ${({ cursor }) => cursor ? `cursor: ${cursor};` : ""}
  border-radius: 2px;
  border: 1px solid ${(props) => props.disabled ? theme.colors.shadow._10 : props.selected ? "#23C1A6" : theme.colors.shadow._20};
  background-color: ${(props) => props.disabled ? theme.colors.shadow._10 : props.selected ? theme.colors.mint._10 : "#fff"};
  ${({ disabled }) => disabled ? "" : `box-shadow: 0 2px 4px 0 ${theme.colors.shadow._10};`}
  :hover {
    border: ${({ disabled }) => disabled ? `1px solid ${theme.colors.shadow._10}` : `1px solid ${theme.colors.mint._60}`};
    ${({ disabled }) => disabled ? "" : `box-shadow: 0 4px 8px 0 ${theme.colors.shadow._10};`}
  }
`;
