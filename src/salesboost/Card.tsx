import React from "react";
import styled from "styled-components";
import {
  space,
  SpaceProps,
  width,
  WidthProps,
  height,
  HeightProps,
  boxShadow,
  BoxShadowProps,
} from "styled-system";
import { Block, BlockProps } from "../core/atom/Block";

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
  border: 1px solid ${(props) => props.disabled ? "rgba(22, 27, 72, 0.1)" : props.selected ? "#23C1A6" : "rgba(22, 27, 72, 0.2)"};
  background-color: ${(props) => props.disabled ? "rgba(22, 27, 72, 0.1)" : props.selected ? "rgba(35, 193, 166, 0.1)" : "#fff"};
  ${({ disabled }) => disabled ? "" : "box-shadow: 0 2px 4px 0 rgba(22, 27, 72, 0.1);"}
  :hover {
    border: ${({ disabled }) => disabled ? "1px solid rgba(22, 27, 72, 0.1)" : "1px solid rgba(35, 193, 166, 0.6)"};
    ${({ disabled }) => disabled ? "" : "box-shadow: 0 4px 8px 0 rgba(22, 27, 72, 0.1);"}
  }
`;
