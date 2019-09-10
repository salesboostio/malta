import * as React from "react";
import styled, { css } from "styled-components";
import { FontSizeProps, FontWeightProps } from "styled-system";
import {
  BlockProps,
  Flex,
  FlexProps,
  Text,
} from "../core";
import { Spinner } from "./Spinner";
import { theme } from "./theme";

const SolidStyle = css<{ bg?: string; hoverBg?: string; disabledBg?: string; disabled?: boolean; }>`
  :hover {
    ${({ disabled, hoverBg }) => !disabled ? `background-color: ${hoverBg || "rgba(57, 67, 226, 0.8)"};` : ""}
  }
  background-color: ${({ bg, disabled, disabledBg }) => `
    ${disabled
      ? disabledBg || theme.colors.navy._20
      : bg || theme.colors.blue._100}
  `};
`;

const LineStyle = css<{ bg?: string; hoverBg?: string; disabled?: boolean; disabledBg?: string; }>`
  border: 1px solid ${theme.colors.navy._100};
  :hover {
    ${({ hoverBg }) => hoverBg ? `background-color: ${hoverBg};` : ""}
    border: 1px solid #1620bd;
    ${({ disabled }) => !disabled ? `
      > p {
        color: #1620bd;
      }
    ` : ""}
  }
  background-color: ${({ bg, disabled, disabledBg }) => `
    ${disabled
      ? disabledBg || theme.colors.navy._5
      : bg || "#fff"}
  `};
  ${({ disabled }) => disabled ? `
    border: 1px solid ${theme.colors.navy._20} !important;
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
  cursor: ${({ progress, disabled }) => progress ? "progress" : disabled ? "not-allowed" : "pointer"};
  transition: all 0.15s ease-out;
  ${(props) => props.line ? LineStyle : SolidStyle}
  > p {
    color: ${({ disabled, line }) => disabled ? theme.colors.navy._20 : line ? theme.colors.navy._100 : "#fff"};
  }
`;


interface ButtonProps {
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

export type Props = ButtonProps & BlockProps & FlexProps & FontSizeProps & FontWeightProps;

export const Button: React.FC<Props> = (props) => {
  const { children, color, fontSize, fontWeight, loading, label, line, onClick, disabled, ...styles } = props;
  return (
    <Wrapper
      line={line}
      progress={loading}
      disabled={disabled}
      onClick={disabled || loading ? null : onClick} {...styles}>
      {loading
        ? <Spinner bg={line ? theme.colors.navy._40 : theme.colors.white._90} />
        : label ? <Text fontSize={fontSize} fontWeight={fontWeight} color={color}>{label}</Text>
          : children}
    </Wrapper>
  );
};

Button.defaultProps = {
  height: "52px",
  px: "24px",
  fontSize: "16px",
  fontWeight: 500,
  borderRadius: "2px",
};
