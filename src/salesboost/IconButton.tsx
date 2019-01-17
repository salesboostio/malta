import * as React from "react";
import styled from "styled-components";
import {
  space,
  SpaceProps,
  width,
  WidthProps,
  height,
  HeightProps,
  color,
  ColorProps,
} from "styled-system";
import {
  Icon, IconProps
} from "../core";

const ButtonWrapper = styled.div<any>`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  ${width}
  ${height}
  ${space}
  cursor: ${props => props.disabled ? "not-allowed" : "pointer"};
  border-radius: 2px;
  :hover {
    ${props => props.disabled ? "" : "background: rgba(22,27,72,0.1);"}
  }
  transition: all 0.15s ease-out;
`;

interface Props {
  disabled?: false;
}

export type IconButtonProps = IconProps & Props & SpaceProps & WidthProps & HeightProps & ColorProps;

export const IconButton: React.SFC<IconButtonProps> = (props) => {
  const { name, size, disabled, color, hover, ...rest } = props;
  return (
    <ButtonWrapper {...rest} disabled={disabled}>
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
