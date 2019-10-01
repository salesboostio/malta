import styled, { keyframes } from "styled-components";
import { Flex } from "../../../core/atom/Flex";
import { setCssDeclaration } from "../../../utils";
import { Props } from "../Popover";

export const Container = styled.div`
  position: relative;
`;

export const ButtonContainer = styled(Flex)`
  position: relative;
`;

const bottomPosition = ({ bottomSide }: Props) =>
bottomSide && setCssDeclaration("top", "calc(100% + 8px)");

const topPosition = ({ topSide }: Props) =>
topSide && setCssDeclaration("top", "calc(-100% - 8px)");

const rightPositon = ({ rightSide }: Props) =>
rightSide && setCssDeclaration("left", "calc(100% + 8px)");

const leftPositon = ({ leftSide }: Props) =>
leftSide && setCssDeclaration("left", "calc(-100% - 8px)");


const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

export const ContentContainer = styled(Flex)<Props & {show: boolean, closing: boolean}>`
  position: absolute;
  top: 0;
  left: 0;
  visibility: ${({show}) => show ? "visible" : "hidden"};
  animation: ${({ closing }) => !closing ? fadeIn : fadeOut} 0.2s ease-out;
  ${rightPositon};
  ${leftPositon};
  ${bottomPosition};
  ${topPosition};
`;
