import * as React from "react";
import styled from "styled-components";
import { colors, fontSizes, fontWeights, space } from "../theme";
const {
  color,
  fontSize,
  fontWeight,
  lineHeight,
  textAlign,
  width,
} = require("styled-system");

const StyledModal = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  content: '';
  opacity: 0;
  transition: opacity 200ms, z-index 0s 200ms, visibility 0s 200ms;
  visibility: hidden;
  background-color: ${colors.black._20};

  ${(props: IProps) => props.open && `
    opacity: 1;
    transition: opacity 200ms;
    visibility: visible;
  `}
`;

const ModalContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: ${colors.white.standard};
  border-top: solid 2px ${colors.black.standard};
  max-height: 100%;
  height: 100%;
  ${width}
  padding: ${space[3]}px;

  @media (min-width: 600px) {
    height: auto;
    max-width: 75%;
    max-height: 90%;
  }

  @media (min-width: 1024px) {
    max-width: 50%;
    max-height: 80%;
  }
`;

const ModalHeader = styled.div`
  margin-bottom: ${space[2]}px;
`;

const ModalHeading = styled.span`
  font-size: ${fontSizes.h2}px;
  font-weight: ${fontWeights.medium};
`;

const ModalClose = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  padding: 0;
  overflow: hidden;
  cursor: pointer;
  background-color: transparent;
  border: none;
  padding: 0.25rem 0.25rem 0.125rem;
`;

const ModalContent = styled.div`
  font-size: ${fontSizes.h3}px;
`;

const ModalFooter = styled.div`
`;

export interface IProps {
  // width
  width?: number | string;

  // event
  onRequestClose?: React.MouseEventHandler<HTMLElement>;

  // options
  open?: boolean;
  modalHeading?: string;
}

export class Modal extends React.Component<IProps, any> {
  public static defaultProps: IProps = {
    // width
    width: 400,

    // event
    onRequestClose: function() {},

    // options
    open: false,
    modalHeading: "",
  };

  public render() {
    const { open, modalHeading, onRequestClose } = this.props;
    const modalButton = (
      <ModalClose type="button" onClick={onRequestClose}>
        <span>close_icon_here</span>
      </ModalClose>
    );
    const modalBody = (
      <ModalContainer {...this.props}>
      {false && (<h3>test</h3>)}
        <ModalHeader>
          <ModalHeading>{modalHeading}</ModalHeading>
          {modalButton}
        </ModalHeader>
        <ModalContent>{this.props.children}</ModalContent>
        <ModalFooter></ModalFooter>
      </ModalContainer>
    );
    return (
      <StyledModal open={open}>
        {modalBody}
      </StyledModal>
    );
  }
}
