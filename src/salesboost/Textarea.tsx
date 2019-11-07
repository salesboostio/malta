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

const TextareaWrapper = styled(InnerTextarea)`
  box-sizing: border-box;
  border: 1px solid rgba(22, 27, 72, 0.2);
  background-color: ${({ disabled }) => disabled ? "rgba(22, 27, 72, 0.05)" : "#fff"};
  color: rgba(22, 27, 72, 0.8);
  font-size: 16px;
  font-family: Noto Sans KR, sans-serif;;
  font-weight: 300;
  line-height: 24px;
  padding: 16px;
  outline: none;
  resize: none;
  :focus {
    border: 1px solid rgb(69, 78, 223);
  }
  ::placeholder {
    color: rgba(22, 27, 72, 0.4);
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
