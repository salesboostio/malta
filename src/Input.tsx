import * as React from "react";
import styled from "styled-components";
const { space } = require("styled-system");
import { colors, fontSizes, fontWeights, space as spaces } from "./theme";
import { generateQuery } from "./tools/mediaQuery";

const Wrapper = styled.div`
  width: 100%;
  ${space}
`;

const Label = styled.label`
  color: ${colors.black.standard};
  display: inline-block;
  font-size: ${fontSizes.h4}px;
  font-weight: ${fontWeights.regular};
  margin-bottom: ${spaces[1]}px;
`;

const ErrorLabel = Label.extend`
  color: ${colors.red};
  margin-top: ${spaces[1]}px;
`;

interface IStyledInputProps {
  error: boolean;
}

const StyledInput = styled.input`
  border: solid 1px ${(props: IStyledInputProps) => props.error ? "#f51a1a" : colors.black._20};
  border-radius: 2px;
  box-shadow: 0 2px 6px 2px ${colors.black._3};
  box-sizing: border-box;
  color: ${colors.black.dark};
  font-weight: ${fontWeights.regular};
  font-size: ${fontSizes.h3}px;
  height: 60px;
  padding: 0 ${spaces[2]}px;
  width: 100%;

  ${generateQuery("max-width", "sm", `
    font-size: ${fontSizes.h4}px;
    height: 52px;
  `)};

  &:disabled {
    background-color: ${colors.black._5};
    border: solid 1px ${colors.black._20} !important;
    cursor: not-allowed;
  }

  &:focus {
    border: solid 1px ${(props: IStyledInputProps) => props.error ? colors.red : colors.blue.royal} !important;
    box-shadow: 0 2px 6px 2px ${colors.black._8};
    outline: none;
  }

  &:hover {
    border: solid 1px ${(props: IStyledInputProps) => props.error ? colors.red : colors.black.half};
    box-shadow: 0 2px 6px 2px ${colors.black._8};
  }

  &::placeholder {
    color: inherit;
    opacity: 0.4;
  }
`;

export interface IProps {
  label?: string;
  error?: boolean;
  errorMessage?: string;
  // input component
  disabled?: boolean;
  name?: string;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  onDragStart?: React.DragEventHandler<HTMLInputElement>;
  onDrop?: React.DragEventHandler<HTMLInputElement>;
  onFocus?: React.FocusEventHandler<HTMLInputElement>;
  placeholder?: string;
  type?: string;
  value?: string;
  // space
  m?: number | string;
  mt?: number | string;
  mr?: number | string;
  mb?: number | string;
  ml?: number | string;
  mx?: number | string;
  my?: number | string;
}

export class Input extends React.Component<IProps, any> {
  public static defaultProps: IProps = {
    // space
    m: 0,
  };

  private renderLabel(label: string) {
    if (label) {
      return <Label>{label}</Label>;
    }
    return null;
  }

  private renderErrorLabel(error: boolean, errorMessage: string) {
    if (error && errorMessage) {
      return <ErrorLabel>{errorMessage}</ErrorLabel>;
    }
    return null;
  }

  public render() {
    const {
      label,
      error,
      errorMessage,
      // input
      disabled,
      name,
      onBlur,
      onChange,
      onDragStart,
      onDrop,
      onFocus,
      placeholder,
      type,
      value,
      ...props } = this.props;
    return (
      <Wrapper {...props}>
        {this.renderLabel(label)}
        <StyledInput
          disabled={disabled}
          name={name}
          onBlur={onBlur}
          onChange={onChange}
          onDragStart={onDragStart}
          onDrop={onDrop}
          onFocus={onFocus}
          placeholder={placeholder}
          type={type}
          value={value}
          error={error} />
        {this.renderErrorLabel(error, errorMessage)}
      </Wrapper>
    );
  }
}
