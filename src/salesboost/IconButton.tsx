import * as React from "react";
import styled from "styled-components";
import {
  color,
  ColorProps,
  height,
  HeightProps,
  space,
  SpaceProps,
  width,
  WidthProps,
} from "styled-system";
import { Icon, IconProps } from "../core";

interface WrapperProps {
  disabled?: boolean;
}

const ButtonWrapper = styled.div<WrapperProps>`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  ${width}
  ${height}
  ${space}
  cursor: ${({ disabled }) => disabled ? "not-allowed" : "pointer"};
  border-radius: 2px;
  :hover {
    ${({ disabled }) => disabled ? "" : "background: rgba(22,27,72,0.1);"}
  }
  transition: all 0.15s ease-out;
`;

interface Props {
  disabled?: boolean;
  onClick?: () => void;
  style?: any;
}

export type IconButtonProps = IconProps & Props & SpaceProps & WidthProps & HeightProps & ColorProps;

export const IconButton: React.FC<IconButtonProps> = (props) => {
  const { name, size, disabled, color, hover, onClick, ...rest } = props;
  return (
    <ButtonWrapper {...rest} disabled={disabled} onClick={disabled ? null : onClick}>
      <Icon name={name} size={size} color={color} hover={hover} />
    </ButtonWrapper>
  );
};

IconButton.defaultProps = {
  size: 24,
  width: "40px",
  height: "40px",
  disabled: false,
  color: "rgba(22,27,72,0.8)",
};
