import * as React from "react";
import styled from "styled-components";
import {
  borderRadius,
  BorderRadiusProps
} from "styled-system";
import { shadow } from "../commons/theme";
import { Flex } from "../atoms/Flex";

type boxShadowType = 0|1|2|3|4|5;

interface BoxShadowProps {
  shadow?: boxShadowType;
  hoverShadow?: boxShadowType;
}

type Props = BoxShadowProps & BorderRadiusProps;
const boxShadow = (props: Props): string => `box-shadow: ${shadow[props.shadow]};`;
const hoverShadow = (props: Props): string => `box-shadow: ${shadow[props.hoverShadow]};`;

export const Card = styled(Flex)<Props>`
  overflow: hidden;
  cursor: pointer;
  ${boxShadow}
  ${borderRadius}
  &:hover {
    ${hoverShadow}
  }
  transition: box-shadow 0.1s ease-out;
`;

Card.defaultProps = {
  flexDirection: "column",
  width: ["100%", "300px"],
  height: "auto",
  borderRadius: "3px",
  alignItems: "center",
  shadow: 2,
  hoverShadow: 4
};