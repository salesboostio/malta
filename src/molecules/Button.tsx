import * as React from "react";
import styled from "styled-components";
import { border, BorderProps, borderColor, BorderColorProps, borderRadius, BorderRadiusProps, fontSize, FontSizeProps } from "styled-system";
import { Box } from "../atoms/Box";
import { colors } from "../commons/theme";

interface HoverColorProps {
  hoverColor?: string;
}
interface FocusColorProps {
  focusColor?: string;
}

type Props = BorderColorProps & BorderRadiusProps & BorderProps & FontSizeProps & HoverColorProps & FocusColorProps;

export const Button = styled(Box)<Props>`
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  width: fit-content;
  &:hover {
    background: ${(props: Props) => props.hoverColor};
  }
  &:focus {
    background: ${(props: Props) => props.focusColor};
  }
  ${fontSize}
  ${borderColor}
  ${borderRadius}
  ${border}
`;

Button.defaultProps = {
  onClick: () => { },
  borderColor: "transparent",
  borderRadius: ["26px", "30px"],
  border: "none",
  color: "white.standard",
  bg: "blue.royal",
  fontSize: ["h5", "h3"],
  height: ["52px", "60px"],
  m: 0,
  mb: 2,
  px: 3,
  hoverColor: colors.blue.deep,
  focusColor: colors.blue.dark
};
