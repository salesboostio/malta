import * as React from "react";
import styled, { css } from "styled-components";
import {
  space,
  SpaceProps,
  color,
  borderRadius,
  BorderRadiusProps,
  FontSizeProps,
  height,
  HeightProps,
  width,
  WidthProps,
} from "styled-system";
import { Text } from "../core/atom/Text";
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
  ${({ disabled, disabledBg }) => disabled ? `
    box-shadow: none !important;
    border: none !important;
  ` : ""}
`;

interface WrapperProps extends WidthProps, HeightProps, SpaceProps, BorderRadiusProps {
  loading?: boolean;
  disabled?: boolean;
  disabledBg?: string;
  hoverBg?: string;
  line?: boolean;
  color?: string;
  bg?: string;
}

const Wrapper = styled.div<WrapperProps>`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: ${({ loading, disabled }) => loading ? "progress" : disabled ? "not-allowed" : "pointer"};
  ${height}
  ${width}
  ${space}
  ${borderRadius}
  transition: all 0.15s ease-out;
  ${({ line }) => line ? LineStyle : SolidStyle}
`;


interface Props {
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

export type ButtonProps = Props & SpaceProps & HeightProps & BorderRadiusProps & FontSizeProps & WidthProps;

export const Button: React.FC<ButtonProps> = (props) => {
  const { bg, children, color, fontSize, loading, label, line, onClick, disabled, ...styles } = props;
  return (
    <Wrapper
      bg={bg}
      line={line}
      loading={loading}
      disabled={disabled}
      onClick={disabled || loading ? null : onClick} {...styles}>
      {loading
        ? <Spinner />
        : label ? <Text fontSize={fontSize} color={color ? color : line ? "rgba(22, 27, 72, 0.9)" : "#fff"}>{label}</Text>
          : children}
    </Wrapper>
  );
};

Button.defaultProps = {
  disabled: false,
  line: false,
  loading: false,
  height: "60px",
  px: "32px",
  fontSize: "18px",
  borderRadius: "30px",
  disabledBg: "rgba(22, 27, 72, 0.3)",
  width: "fit-content",
};
