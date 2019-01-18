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
  ${color}
  :hover {
    background: ${props => props.hoverBg};
  }
  ${props => props.disabled ? "background: rgba(22,27,72,0.3)!important;" : ""}
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
`;

const Text = styled.p<any>`
  ${fontSize}
  font-weight: normal;
  color: ${props => props.line ? "rgba(22,27,72,0.9)" : "#FFF"};
`;

interface Props {
  label: string;
  loading?: boolean;
  line?: boolean;
  disabled?: boolean;
  hoverBg?: string;
  onClick?: any;
  style?: any;
}

export type ButtonProps = React.SFC<Props & SpaceProps & ColorProps & HeightProps & BorderRadiusProps & FontSizeProps & WidthProps>;

export const Button: ButtonProps = (props) => {
  const { fontSize, loading, label, line, ...rest } = props;
  return (
    <Wrapper line={line} loading={loading} {...rest} >
      {loading ?
        <Spinner />
        : <Text disabled={props.disabled} line={line} fontSize={fontSize}>{label}</Text>}
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
