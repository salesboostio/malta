import React from "react";
import styled from "styled-components";
import { Flex } from "../../../core/atom/Flex";
import { theme } from "../../theme";

export interface PopoverButtonProps {
  width?: string | number;
  height?: string | number;
  hover?: boolean;
  clicked?: boolean;
  bg?: string;
  onClick?: () => void;
  children: React.ReactNode;
}

const ButtonContainer = styled(Flex)<PopoverButtonProps>`
  transition: background-color 0.3s ease-out;
  background-color: ${({bg, clicked}) => clicked ? bg : "transparent"};
  :hover {
      background:${({ hover, bg }) => hover ? bg : "none"};
  }
`;

const PopoverButton = (props: PopoverButtonProps) => {
  return(
    <ButtonContainer
      onClick={props.onClick}
      cursor="pointer"
      {...props}
    >
      {props.children}
    </ButtonContainer>
  );
};

PopoverButton.defaultProps = {
  bg: theme.colors.gray._100,
};

export default PopoverButton;