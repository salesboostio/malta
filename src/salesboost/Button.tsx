import * as React from "react";
import styled, { css } from "styled-components";
import {
  space,
  SpaceProps,
  color,
  ColorProps,
  borderRadius,
  BorderRadiusProps,
  fontSize,
  FontSizeProps,
  height,
  HeightProps,
  width,
  WidthProps,
} from "styled-system";
import { Spinner } from "./Spinner";

const SolidStyle = css<any>`
  :hover {
    background: ${props => props.hoverBg};
  }
  ${props => props.disabled ? "background: rgba(22,27,72,0.3) !important;" : ""}
  ${color}
`;

const LineStyle = css<any>`
  box-shadow: 0 2px 6px 2px rgba(22, 27, 72, 0.04);
  border: 1px solid rgba(22,27,72,0.2);
  :hover {
    box-shadow: 0 2px 6px 2px rgba(22, 27, 72, 0.08);
    border: 1px solid rgba(22,27,72,0.4);
  }
  ${props => props.disabled ? "background: rgba(22,27,72,0.1)!important; box-shadow: none!important; border: none!important;" : ""}
`;

const Wrapper = styled.div<any>`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: ${props => props.loading ? "progress" : props.disabled ? "not-allowed" : "pointer"};
  ${height}
  ${width}
  ${space}
  ${borderRadius}
  transition: all 0.15s ease-out;
  ${props => props.line ? LineStyle : SolidStyle}
  ${({ bg }) => bg ? `background-color: ${bg};` : ""}
`;

const Text = styled.p<any>`
  ${fontSize}
  font-weight: normal;
  color: ${props => props.color ? props.color : props.line ? "rgba(22,27,72,0.9)" : "#FFF"};
`;

interface Props {
  children?: any;
  label?: string;
  loading?: boolean;
  line?: boolean;
  disabled?: boolean;
  hoverBg?: string;
  bg?: string;
  onClick?: any;
  style?: any;
}

export type ButtonProps = React.SFC<Props & SpaceProps & ColorProps & HeightProps & BorderRadiusProps & FontSizeProps & WidthProps>;

export const Button: ButtonProps = (props) => {
  const { bg, children, color, fontSize, loading, label, line, onClick, disabled, ...rest } = props;
  return (
    <Wrapper disabled={disabled} line={line} loading={loading} onClick={(disabled || loading) ? null : onClick} bg={bg} {...rest} >
      {loading
      ? <Spinner />
      : label ? <Text disabled={disabled} line={line} fontSize={fontSize} color={color}>{label}</Text>
      : children}
    </Wrapper>
  );
};

Button.defaultProps = {
  line: false,
  loading: false,
  height: "60px",
  px: "32px",
  fontSize: "18px",
  borderRadius: "30px",
  bg: "rgba(69, 78, 223, 0.9)",
  hoverBg: "rgba(69, 78, 223, 0.7)",
  width: "fit-content",
};
