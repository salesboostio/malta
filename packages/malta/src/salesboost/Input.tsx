import * as React from "react";
import {
  Block,
  Flex,
  Text,
} from "../core";
import styled from "styled-components";
import { SpaceProps, width, WidthProps } from "styled-system";
import { theme } from "./theme";

const InputWrapper = styled<any>(Block)`
  width: 327ox;
  ${width}
`;

interface InnerInputProps {
  disabled?: boolean;
  valid: boolean;
}

const InnerInput = styled.input<InnerInputProps>`
  width: 100%;
  height: 52px;
  box-sizing: border-box;
  padding-left: 16px;
  padding-right: 16px;
  color: #162348;
  font-size: 16px;
  font-family: ${theme.fontfamilies.sans};
  font-weight: ${theme.fontweights.regular};
  background: ${({ disabled }) => disabled ? "rgba(22, 27, 72, 0.05)" : "#fff"};
  border-radius: 2px;
  box-shadow: 0 2px 6px 2px rgba(22, 27, 72, 0.03);
  border: ${({ valid }) => `${valid ? "rgba(22, 27, 72, 0.2)" : "#f51a1a"} solid 1px`};
  outline: none;
  :focus {
    border: #454edf solid 1px;
  }
  ::placeholder {
    opacity: 0.4;
  }
`;

const InputText = styled(Text)`
  width: 100%;
  font-family: ${theme.fontfamilies.sans};
`;

const Title = styled<any>(InputText)`
  margin-bottom: 8px;
  opacity: 0.8;
  color: #162348;
  font-size: 14px;
  line-height: 1.43;
`;

const Description = styled<any>(InputText)`
  margin-top: 8px;
  opacity: 0.8;
  color: #161b48;
  font-size: 14px;
  line-height: 1.71;
`;

const Error = styled<any>(InputText)`
  margin-top: 8px;
  color: #f51a1a;
  opacity: 0.9;
  line-height: 1.43;
`;

const HelpMark = styled(Flex)`
  width: 51px;
  height: 20px;
  border-radius: 2px;
  background-color: #454edf;
  margin-right: 8px;
`;

interface HelpProps {
  children: string;
}

const Help = (props: HelpProps) => {
  return (
    <Flex width="100%" flexDirection="row" mb={2}>
      <HelpMark justifyContent="center">
        <Text color="#fff" fontSize="14px" fontFamily={theme.fontfamilies.sans}>HELP</Text>
      </HelpMark>
      <Text color="#161fba" fontSize={"14px"}>{props.children}</Text>
    </Flex>
  );
};

interface Props {
  type: string;
  value: string;
  placeholder?: string;
  disabled?: boolean;
  helpText?: string;
  errorText?: string;
  title?: string;
  description?: string;
  onTextChange?: (text: string) => void;
  onEnterPress?: () => void;
  validator?: (text: string) => boolean;
}

type InputProps = Props & SpaceProps & WidthProps;

interface State {
  valid: boolean;
}

export class Input extends React.Component<InputProps, State> {

  static defaultProps = {
    type: "text",
    value: "",
  };

  state = {
    valid: true,
  };

  render() {
    const { title, description, placeholder, helpText, errorText, disabled, value, type, onTextChange, ...styles } = this.props;
    return (
      <InputWrapper {...styles}>
        {title ? <Title>{title}</Title> : null}
        {helpText ? <Help>{helpText}</Help> : null}
        <InnerInput
          onChange={this.handleChange}
          onKeyPress={this.handleKeyPress}
          type={type}
          valid={this.state.valid}
          disabled={disabled}
          placeholder={placeholder}
          value={value}/>
        {this.renderBottomText()}
      </InputWrapper>
    );
  }

  handleChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    const text = ev.target.value;
    if (this.props.onTextChange) {
      this.props.onTextChange(text);
    }
    if (this.props.validator) {
      this.setState({
        valid: this.props.validator(text),
      });
    }
  };

  handleKeyPress = (ev: React.KeyboardEvent<HTMLInputElement>) => {
    if (this.props.onEnterPress && ev.key === "Enter") {
      this.props.onEnterPress();
    }
  };

  renderBottomText = () => {
    const { description, errorText } = this.props;
    if (!this.state.valid) {
      return <Error>{errorText}</Error>;
    }
    if (description) {
      return <Description>{description}</Description>;
    }
  };

}
