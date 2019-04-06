import React, { useState } from "react";
import ReactDOM from "react-dom";
import styled, { keyframes } from "styled-components";
import {
  Text, Icon, Flex,
} from "../core";

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

const Overlay = styled.div<any>`
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(101, 103, 131, 0.25);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1000;
  animation: ${props => props.closing ? fadeOut : fadeIn} 0.25s ease-in-out 1 normal both;
`;

const Container = styled.div<any>`
  background: #FFF;
  box-sizing: border-box;
  display: block;
  border-radius: 4px;
  z-index: 1100;
  box-shadow: 0 4px 10px 4px rgba(22,27,72,0.08);
  width: ${props => props.width};
  padding: 16px 24px 16px 24px;
  overflow: hidden;
`;

/* animation: ${props => props.closing ? slideFadeOut : slideFadeIn} 0.15s cubic-bezier(0.3, 1, 0.32, 1) 1 normal both; */


interface ConfirmProps {
  type?: "info" | "warning" | "success" | "error" | "none";
  okText?: string;
  cancelText?: string;
  okColor?: string;
  cancelColor?: string;
  clickOverlayToClose?: boolean;
  title?: string;
  content?: string | React.FunctionComponent;
}

const TitleText = styled.p`
  box-sizing: border-box;
  font-size: 18px;
  font-weight: 500;
  lineHeight: 30px;
  color: rgba(22, 27, 72, 0.9);
  margin: 0;
  padding: 0;
`;

const getIconName = (type: any) => ({
  "success": "circle-success",
  "error": "circle-error",
  "info": "circle-info",
  "warning": "circle-warning"
} as any)[type];

const Modal = (props: any) => {
  const [closing, setClosing] = useState(false);
  const {
    type,
    okText,
    cancelText,
    okColor,
    cancelColor,
    clickOverlayToClose,
    title,
    content,
  } = props;

  return (
    <Overlay closing={closing} onClick={(e: React.MouseEvent<any>) => {
      e.stopPropagation();
      if (clickOverlayToClose) {
        setClosing(true);
        props.handleClose(false);
      }
    }}>
      <Container closing={closing} width={typeof content === "function" ? "auto" : "327px"}>
        <Flex alignItems="center" mb="8px">
          {type === "none" ? null :
            <Icon
              mr="8px"
              name={getIconName(type)}
              color={type === "success" ? "#059D5B" : type === "error" ? "#F34646" : type === "warning" ? "#F5A921" : "#454EDF"}
              size={24} />}
          <TitleText>{title}</TitleText>
        </Flex>
        {typeof content === "function" ?
          content() :
          <Text fontSize="14px" color="rgba(22, 27, 72, 0.6)" lineHeight="24px">
            {content}
          </Text>
        }
        <Flex alignItems="center" mt="8px" justifyContent="flex-end">
          {cancelText === "" ? null :
            <Text color={cancelColor} cursor="pointer" medium lineHeight="24px" onClick={
              (e: React.MouseEvent<any>) => {
                e.stopPropagation();
                setClosing(true);
                props.handleClose(false);
              }}>
              {cancelText}
            </Text>
          }
          <Text color={okColor} cursor="pointer" medium lineHeight="24px" ml="16px" onClick={
            (e: React.MouseEvent<any>) => {
              e.stopPropagation();
              setClosing(true);
              props.handleClose(true);
            }}>
            {okText}
          </Text>
        </Flex>
      </Container>
    </Overlay>
  );
};


const dialog = {
  confirm: ({
    type = "none",
    okText = "완료",
    cancelText = "취소",
    okColor = "#23C1A6",
    cancelColor = "rgba(22, 27, 72, 0.4)",
    clickOverlayToClose = true,
    title = "",
    content = "",
  }: ConfirmProps = {}) => {

    const root = document.getElementById("portal-root");
    const el = document.createElement("div");
    el.setAttribute("id", "dialog-root");
    (root as any).appendChild(el);

    return new Promise((resolve) => {
      const handleClose = (resolve: any) => {
        return (result: boolean) => {
          resolve(result);
          setTimeout(() => {
            (root as any).removeChild(el);
          }, 250);
        };
      };
      ReactDOM.render(
        <Modal
          type={type}
          okText={okText}
          cancelText={cancelText}
          okColor={okColor}
          cancelColor={cancelColor}
          clickOverlayToClose={clickOverlayToClose}
          title={title}
          content={content}
          handleClose={handleClose(resolve)} />,
        el
      );
    });
  },
};

export default dialog;
