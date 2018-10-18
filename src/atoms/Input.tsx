import * as React from "react";
import styled from "styled-components";
import {
  space,
  width,
  height,
  fontSize
} from "styled-system";
import theme from "../commons/theme";


const borders = ({ error }: any) => {
  const borderColor = error ? theme.colors.red : theme.colors.black._20;
  const focusColor = theme.colors.blue.royal;
  const hoverColor = theme.colors.black.half;
  return {
    "box-shadow": `0 0 0 1px ${borderColor}`,
    ":hover:enabled:not(:focus)": {
      "box-shadow": `0 0 0 1px ${hoverColor}`
    },
    ":focus": {
      outline: 0,
      "border-color": focusColor,
      "box-shadow": `0 0 0 1px ${focusColor}`
    }
  };
};


export const Input = styled.input<any>`
  appearance: none;
  display: block;
  font-family: inherit;
  color: inherit;
  background-color: transparent;
  border-width: 0px;
  border-radius: 2px
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 0px;
  paddong-bottom: 0px;
  ::placeholder {
    color: ${theme.colors.black._20};
  }
  ::-ms-clear {
    display: none;
  }
  :disabled{
    background: ${theme.colors.black._5};
  }
  ${borders}
  ${space}
  ${width}
  ${height}
  ${fontSize}
`;

Input.defaultProps = {
  my: "8px",
  mx: "0px",
  width: ["320px", "440px"],
  height: ["52px", "60px"],
  fontSize: ["h4", "h3"],
  error: false
};
