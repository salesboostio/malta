import React from "react";
import {
  Flex,
  FlexProps,
} from "../core";
import styled from "styled-components";
import {
  space,
  SpaceProps,
  display,
  ResponsiveValue,
} from "styled-system";

const Wrapper = styled<any>(Flex)`
  ${display}
`;

const RadioButtonWrapper = styled.div<any>`
  ${space}
  display: inline-block;
  width: 20px;
  height: 20px;
  box-sizing: border-box;
  position: relative;
  cursor: pointer;
  ${(props) => {
    if (props.disabled && !props.checked) {
      return "border: 1px solid  rgba(22, 27, 72, 0.2)";
    } else if (!props.checked) {
      return "border: 1px solid rgba(22, 27, 72, 0.2)";
    }
  }};
  border-radius: 50%;
  background: ${(props) => {
    if (props.disabled) {
      if (props.checked) {
        return "rgba(22, 27, 72, 0.6)";
      } else {
        return "rgba(22, 27, 72, 0.2)";
      }
    } else {
      if (props.checked) {
        return "#454EDF";
      } else {
        return "#FFFFFF";
      }
    }
  }};
  :hover {
    ${({ disabled }) => !disabled ? "border-color: rgba(22, 27, 72, 0.8);" : ""}
  }
`;

const Fill = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  position: absolute;
  top: 6px;
  left: 6px;
  background: #ffffff;
`;

interface Props {
  display?: ResponsiveValue<"flex" | "inline-flex" | "none">;
  checked?: boolean;
  disabled?: boolean;
  leftText?: any;
  rightText?: any;
  onClick?: (checked: boolean) => any;
}

export type RadioButtonProps = Props & SpaceProps & FlexProps;

export const RadioButton = (props: RadioButtonProps) => {
  const { ...styles } = props;
  return (
    <Wrapper display={props.display} flexDirection="row" alignItems="center">
      {props.leftText ? props.leftText : null}
      <RadioButtonWrapper {...styles} checked={props.checked} onClick={() => props.onClick ? props.onClick(!props.checked) : null}>
        {props.checked ? <Fill/> : null}
      </RadioButtonWrapper>
      {props.rightText ? props.rightText : null}
    </Wrapper>
  );
};

RadioButton.defaultProps = {
  width: "20px",
  height: "20px",
};