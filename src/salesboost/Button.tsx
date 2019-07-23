import * as React from "react";
import styled, { css } from "styled-components";
import {
  BorderRadiusProps,
  FontSizeProps,
  FontWeightProps,
  HeightProps,
  SpaceProps,
  WidthProps,
} from "styled-system";
import { Flex, Text } from "../core";
import { Spinner } from "./Spinner";

const SolidStyle = css<{ bg?: string; hoverBg?: string; disabledBg?: string; disabled?: boolean; }>`
  :hover {
    ${({ disabled, hoverBg }) => !disabled ? `background-color: ${hoverBg || "rgba(69, 78, 223, 0.7)"};` : ""}
  }
  background-color: ${({ bg, disabled, disabledBg }) => `
    ${disabled
      ? disabledBg || "rgba(22, 27, 72, 0.3)"
      : bg || "rgba(69, 78, 223, 0.9)"}
  `};
`;

const LineStyle = css<{ bg?: string; hoverBg?: string; disabled?: boolean; disabledBg?: string; }>`
  box-shadow: 0 2px 6px 2px rgba(22, 27, 72, 0.04);
  border: 1px solid rgba(22, 27, 72, 0.2);
  :hover {
    ${({ hoverBg }) => hoverBg ? `background-color: ${hoverBg};` : ""}
    box-shadow: 0 2px 6px 2px rgba(22, 27, 72, 0.08);
    border: 1px solid rgba(22, 27, 72, 0.4);
  }
  background-color: ${({ bg, disabled, disabledBg }) => `
    ${disabled
      ? disabledBg || "rgba(22, 27, 72, 0.1)"
      : bg || "#fff"}
  `};
  ${({ disabled }) => disabled ? `
    box-shadow: none !important;
    border: none !important;
  ` : ""}
`;

interface WrapperProps {
  disabled: boolean;
  disabledBg?: string;
  hoverBg?: string;
  line: boolean;
  progress: boolean;
}

const Wrapper = styled(Flex)<WrapperProps>`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: ${({ progress, disabled }) => progress ? "progress" : disabled ? "not-allowed" : "cursor"};
  transition: all 0.15s ease-out;
  ${(props) => props.line ? LineStyle : SolidStyle}
`;


export interface ButtonProps extends SpaceProps, HeightProps, BorderRadiusProps, FontSizeProps, FontWeightProps, WidthProps {
  label?: string;
  loading?: boolean;
  line?: boolean;
  disabled?: boolean;
  disabledBg?: string;
  hoverBg?: string;
  color?: string;
  bg?: string;
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  style?: any;
}

export const Button: React.FC<ButtonProps> = (props) => {
  const { children, color, fontSize, fontWeight, loading, label, line, onClick, disabled, ...styles } = props;
  return (
    <Wrapper
      line={line}
      progress={loading}
      disabled={disabled}
      onClick={disabled || loading ? null : onClick} {...styles}>
      {loading
        ? <Spinner />
        : label ? <Text fontSize={fontSize} fontWeight={fontWeight} color={color ? color : line ? "rgba(22, 27, 72, 0.9)" : "#fff"}>{label}</Text>
          : children}
    </Wrapper>
  );
};

Button.defaultProps = {
  height: "60px",
  px: "32px",
  fontSize: "18px",
  fontWeight: "normal",
  borderRadius: "30px",
  disabledBg: "rgba(22, 27, 72, 0.3)",
};
