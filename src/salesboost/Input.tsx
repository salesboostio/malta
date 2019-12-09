import * as React from "react";
import {
  Block,
  BlockProps,
  Flex,
  Text,
} from "../core";
import styled from "styled-components";
import { theme } from "./theme";

interface InnerInputProps {
  disabled?: boolean;
  valid: boolean;
}

const InnerInput = styled.input<InnerInputProps>`
  width: 100%;
  height: 52px;
  box-sizing: border-box;
  padding: 0 16px;
  color: rgba(22, 27, 72, 0.9);
  font-size: 16px;
  font-family: ${theme.fontfamilies.sans};
  font-weight: 300;
  background: ${({ disabled }) => disabled ? "rgba(22, 27, 72, 0.05)" : "#fff"};
  border-radius: 2px;
  border: ${({ valid }) => `${valid ? "rgba(22, 27, 72, 0.2)" : "#f51a1a"} solid 1px`};
  outline: none;
  -webkit-appearance: none;
  :focus {
    border: #454edf solid 1px;
  }
  ::placeholder {
    color: rgba(22, 27, 72, 0.4);
  }
  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  [type=number] {
    -moz-appearance: textfield;
  }
`;

const Title = styled(Text)`
  margin-bottom: 8px;
  opacity: 0.8;
  color: #162348;
  font-size: 14px;
  line-height: 20px;
`;

const Description = styled(Text)`
  margin-top: 8px;
  opacity: 0.8;
  color: #161b48;
  font-size: 14px;
`;

const Error = styled(Text)`
  margin-top: 8px;
  color: #f51a1a;
  opacity: 0.9;
  font-size: 16px;
`;

const HelpMark = styled(Flex)`
  width: 51px;
  height: 20px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 2px;
  background-color: #454edf;
  margin-right: 8px;
`;

const Help: React.FC = ({ children }) => {
  return (
    <Flex width="100%" flexDirection="row" alignItems="center" mb={2}>
      <HelpMark>
        <Text color="#fff" fontSize="14px">HELP</Text>
      </HelpMark>
      <Text color="#161fba" fontSize="14px" lineHeight="24px">{children}</Text>
    </Flex>
  );
};

interface Props {
  type: string;
  value: string;
  innerInputProps?: any;
  placeholder?: string;
  disabled?: boolean;
  helpText?: string;
  errorText?: string;
  title?: string;
  description?: string;
  onTextChange?: (text: string) => void;
  onEnterPress?: () => void;
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
}

type InputProps = Props & BlockProps;

export class Input extends React.Component<InputProps> {

  static defaultProps = {
    width: "327px",
    type: "text",
    value: "",
  };

  render() {
    const {
      title, description, innerInputProps = {},
      placeholder, helpText, errorText, disabled, value, type,
      onTextChange, onEnterPress, onFocus, onBlur, color,
      ...styles } = this.props;
    return (
      <Block {...styles}>
        {title ? <Title>{title}</Title> : null}
        {helpText ? <Help>{helpText}</Help> : null}
        <InnerInput
          onChange={this.handleChange}
          onKeyPress={this.handleKeyPress}
          type={type}
          valid={!errorText}
          disabled={disabled}
          placeholder={placeholder}
          onFocus={onFocus}
          onBlur={onBlur}
          value={value}
          {...innerInputProps} />
        {this.renderBottomText()}
      </Block>
    );
  }

  handleChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    const text = ev.target.value;
    if (this.props.onTextChange) {
      this.props.onTextChange(text);
    }
  };

  handleKeyPress = (ev: React.KeyboardEvent<HTMLInputElement>) => {
    if (this.props.onEnterPress && ev.key === "Enter") {
      this.props.onEnterPress();
    }
  };

  renderBottomText = () => {
    const { description, errorText } = this.props;
    if (errorText) {
      return <Error>{errorText}</Error>;
    }
    if (description) {
      return <Description>{description}</Description>;
    }
  };

}
