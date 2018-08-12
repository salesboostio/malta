import * as React from "react";
import styled from "styled-components";
import { space } from "styled-system";
import theme from "../commons/theme";

const borders = () => {
  const borderColor = theme.colors.black.hint;
  const focusColor = theme.colors.blue.dark;
  return {
    "border-color": borderColor,
    "box-shadow": `0 0 0 1px ${borderColor}`,
    ":focus": {
      outline: 0,
      "border-color": focusColor,
      "box-shadow": `0 0 0 2px ${focusColor}`
    }
  };
};

export const StyledInput = styled.input`
  appearance: none;
  display: block;
  width: 100%;
  font-family: inherit;
  color: inherit;
  font-size: 16px;
  background-color: transparent;
  border-radius: 2px;
  border-width: 0px;
  border-style: solid;
  border-color: ${theme.colors.blue.dark};
  padding-top: 14px;
  padding-bottom: 14px;
  padding-left: 12px;
  padding-right: 12px;
  margin: 0;
  ::placeholder {
    color: ${theme.colors.black._20};
  }
  ::-ms-clear {
    display: none;
  }
  ${borders} ${space};
`;

export class Input extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }

  public render() {
    const { children, ...props } = this.props;
    return (
      <StyledInput {...props}>{children}</StyledInput>
    );
  }
}