import React from "react";
import styled from "styled-components";
import {
  HeightProps,
  SpaceProps,
  WidthProps,
} from "styled-system";
import {
  Textarea as InnerTextarea,
} from "../core/atom/Textarea";
import { theme } from "./theme";
import { parseNumberToUnit, setCssDeclaration  } from "../utils";

const TextareaWrapper = styled(InnerTextarea)`
  box-sizing: border-box;
  border: 1px solid rgba(22, 27, 72, 0.2);
  background-color: ${({ disabled }) => disabled ? theme.colors.shadow._5 : "#fff"};
  box-shadow: 0px 2px 6px 2px rgba(22, 27, 72, 0.08);
  color: ${({ disabled }) => disabled ? theme.colors.shadow._40 : theme.colors.shadow._80};
  ${setCssDeclaration("font-size", parseNumberToUnit(theme.fontsizes.p, "px"))}
  font-family: Noto Sans KR, sans-serif;
  ${setCssDeclaration("font-weight", theme.fontweights.demilight)}
  line-height: 24px;
  padding: 16px;
  outline: none;
  resize: none;
  :focus {
    border: 1px solid rgb(69, 78, 223);
  }
  ::placeholder {
    opacity: 0.4;
  }
`;

interface Props {
  disabled?: boolean;
  value?: string;
  placeholder?: string;
  onTextChange?: (text: string) => void;
}

export type TextareaProps = Props & SpaceProps & WidthProps & HeightProps;

export class Textarea extends React.Component<TextareaProps> {

  render() {
    const { disabled, value, placeholder, onTextChange, ...styles } = this.props;
    return (
      <TextareaWrapper
        width={["320px", "440px"]}
        value={value}
        disabled={disabled}
        placeholder={placeholder}
        onChange={this.handleTextChange}
        {...styles} />
    );
  }

  handleTextChange = (ev: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (this.props.disabled) {
      return;
    }

    const text = ev.target.value;
    this.props.onTextChange(text);
  }

}
