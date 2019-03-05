import * as React from "react";
import styled, { keyframes } from "styled-components";
import * as ReactDOM from "react-dom";
import { height } from "styled-system";
import { Flex, Icon, Text } from "../core";
let increment = 0;
let MessageRootInstance: any = null;

const MessageContainer = styled.div<any>`
  background: none;
  position: fixed;
  top: 76px;
  width: 440px;
  left: calc(50% - 220px);
  z-index: 990;

  box-sizing: border-box;
  transition: all 0.15s ease-out;
  ${height}
  > * {
    margin-left: auto;
    margin-right: auto;
  }
`;

const animateClose = keyframes`
  from {
    opacity: 1;
    height: 48px;
    margin-bottom: 8px;
  }

  to {
    opacity: 0;
    height: 0px;
    margin-bottom: 0px;
  }
`;

const animateOpen = keyframes`
  from {
    opacity: 0;
    transform-origin: 0 0;
    transform: translateY(-100%);
    margin-bottom: 0px;
  }

  to {
    opacity: 1;
    transform-origin: 0 0;
    transform: translateY(0);
    margin-bottom: 8px;
  }

`;

const MessageWrapper = styled.div<any>`
  box-sizing: border-box;
  width: calc(100vw - 24px);
  padding-left: 16px;
  padding-right: 16px;
  max-width: 440px;
  display: flex;
  border-radius: 4px;
  border: 1px solid rgba(22, 27, 72, 0.1);
  overflow-y: hidden;
  box-shadow: 0 8px 16px 0 rgba(22, 27, 72, 0.08);
  background: ${props => props.type === "success" ? "#059D5B" : props.type === "error" ? "#F34646" : props.type === "warning" ? "#F5A921" : "#454EDF"};
  animation: ${props => props.closing ? animateClose : animateOpen} 0.12s ease-out both;
`;

const getIconName = (type: MessageType) => ({
  "success": "circle-success",
  "error": "circle-error",
  "info": "circle-info",
  "warning": "circle-warning"
})[type];

type MessageType = "success" | "error" | "info" | "warning";

class MessageContent extends React.Component<{ type: MessageType, text: string, duration: number, closing: boolean }> {

  render() {
    const { type, text, duration, closing } = this.props;
    return (
      <MessageWrapper closing={closing} type={type}>
        <Flex width="24px" height="24px" alignItems="center" justifyContent="center" mr="8px" style={{ flexShrink: 0 }} mt="12px">
          <Icon name={getIconName(type) as any} size={16} color={type === "warning" ? "rgba(22, 27, 72, 0.8)" : "#FFF"} />
        </Flex>
        <Text
          wordBreak="break-all"
          overflow="visible"
          my="11px" lineHeight="24px"
          color={type === "warning" ? "rgba(22, 27, 72, 0.8)" : "#FFF"}>
          {text}
        </Text>
      </MessageWrapper>
    );
  }
}


class Message extends React.Component {

  static newInstance: any;

  state = {
    messages: {}
  };

  open = (type: MessageType, text: string, duration: number = 3000, onClose?: any) => {

    const id = increment++;

    const message = {
      type,
      text,
      duration,
      closing: false
    };

    this.setState({ messages: { ...this.state.messages, [id]: message } });

    setTimeout(() => {
      message.closing = true;
      this.setState({ messages: { ...this.state.messages, [id]: message } });
    }, duration);

    setTimeout(() => {
      const next: any = { ...this.state.messages };
      delete next[id];
      this.setState({ messages: next });

      if (typeof onClose === "function") {
        onClose();
      }
    }, duration + 120);
  }

  renderContent = (message: any) => {
    const [id, props] = message;
    return <MessageContent key={id} {...props} />;
  }

  render() {
    const messages = Object.entries(this.state.messages).sort((a: any, b: any) => a[0] - b[0]);
    return (
      <MessageContainer>
        {messages.map((v: any) => this.renderContent(v))}
      </MessageContainer>
    );
  }
}

Message.newInstance = function newMessageInstance(callback: any) {

  function ref(instance: any) {
    callback(instance);
    MessageRootInstance = instance;
    return instance;
  }

  const root = document.getElementById("portal-root");
  const el = document.createElement("div");
  el.setAttribute("id", "message-root");
  root.appendChild(el);

  ReactDOM.render(<Message ref={ref} />, el);
};

const getMessageRootInstance = (callback: any) => {
  if (MessageRootInstance) {
    callback(MessageRootInstance);
    return;
  } else {
    Message.newInstance(callback);
    return;
  }
};

const message = {
  success: (text: string, duration?: number, onClose?: any) => getMessageRootInstance((ref: any) => {
    ref.open("success", text, duration, onClose);
  }),
  info: (text: string, duration?: number, onClose?: any) => getMessageRootInstance((ref: any) => {
    ref.open("info", text, duration, onClose);
  }),
  error: (text: string, duration?: number, onClose?: any) => getMessageRootInstance((ref: any) => {
    ref.open("error", text, duration, onClose);
  }),
  warning: (text: string, duration?: number, onClose?: any) => getMessageRootInstance((ref: any) => {
    ref.open("warning", text, duration, onClose);
  }),
};

export default message;
