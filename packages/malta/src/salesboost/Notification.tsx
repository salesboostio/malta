import * as React from "react";
import styled, { keyframes } from "styled-components";
import * as ReactDOM from "react-dom";
import { height } from "styled-system";
import { Block, Flex, Icon, Text } from "../core";
import {
  IconButton
} from "./IconButton";
let increment = 0;
let NotificationRootInstance: any = null;

const NotificationContainer = styled.div<any>`
  background: none;
  position: fixed;
  top: 16px;
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
    transform-origin: 0 0;
    transform: translateY(0);
    margin-bottom: 8px;
  }

  to {
    opacity: 0;
    transform-origin: 0 0;
    transform: translateY(-100%);
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

const NotificationWrapper = styled.div<any>`
  box-sizing: border-box;
  width: calc(100vw - 24px);
  padding-left: 16px;
  padding-right: 16px;
  max-width: 440px;
  border-radius: 4px;
  border: 1px solid rgba(22, 27, 72, 0.1);
  overflow-y: hidden;
  background: #FFF;
  box-shadow: 0 8px 16px 0 rgba(22, 27, 72, 0.08);
  animation: ${props => props.closing ? animateClose : animateOpen} 0.12s ease-out both;
`;

const getIconName = (type: NotificationType) => ({
  "success": "circle-success",
  "error": "circle-error",
  "info": "circle-info",
  "warning": "circle-warning"
})[type];

type NotificationType = "success" | "error" | "info" | "warning";

class NotificationContent extends React.Component<{
  type: NotificationType,
  render: () => React.ReactNode,
  closing: boolean,
  title: string,
  close: () => void,
}> {

  render() {
    const { type, closing, title, render } = this.props;
    return (
      <NotificationWrapper closing={closing} type={type}>
        <Flex mt="12px" position="relative">
          <Flex width="24px" height="24px" alignItems="center" justifyContent="center" mr="8px" style={{ flex: "0 0 24px" }}>
            <Icon
              name={getIconName(type) as any}
              size={16}
              color={type === "success" ? "#059D5B" : type === "error" ? "#F34646" : type === "warning" ? "#F5A921" : "#454EDF"} />
          </Flex>
          <Text lineHeight="24px" medium fontSize="18px" flex="1">
            {title}
          </Text>
          <Block width="32px" height="24px">
          </Block>
          <IconButton
            onClick={this.props.close}
            name="close"
            color="rgba(22, 27, 72, 0.8)"
            size={16}
            style={{ position: "absolute", top: "-8px", right: "-12px" }} />
        </Flex>
        <Block my="12px">
          {render()}
        </Block>
      </NotificationWrapper>
    );
  }
}


class Notification extends React.Component<any> {

  static newInstance: any;

  state = {
    notifications: {}
  };

  close = (id: number, onClose?: any) => {

    const notification = (this as any).state.notifications[id];
    notification.closing = true;

    this.setState({ notifications: { ...this.state.notifications, [id]: notification } });

    setTimeout(() => {
      const next: any = { ...this.state.notifications };
      delete next[id];
      this.setState({ notifications: next });

      if (typeof onClose === "function") {
        onClose();
      }
    }, 120);
  }

  open = (
    type: NotificationType,
    {
      title,
      render,
      onClose
    }:
      {
        title: string,
        render: () => React.ReactNode,
        onClose?: any
      }) => {

    const id = increment++;

    const notification = {
      id,
      type,
      title,
      render,
      onClose,
      closing: false
    };

    this.setState({ notifications: { ...this.state.notifications, [id]: notification } });
  }

  renderContent = (notification: any) => {
    const [id, props] = notification;
    return <NotificationContent key={id} id={id} {...props} close={() => this.close(id, props.onClose)} />;
  }

  render() {
    const notifications = Object.entries(this.state.notifications).sort((a: any, b: any) => a[0] - b[0]);
    return (
      <NotificationContainer>
        {notifications.map((v: any) => this.renderContent(v))}
      </NotificationContainer>
    );
  }
}

Notification.newInstance = function newNotificationInstance(callback: any) {

  function ref(instance: any) {
    callback(instance);
    NotificationRootInstance = instance;
    return instance;
  }

  const root = document.getElementById("portal-root");
  const el = document.createElement("div");
  el.setAttribute("id", "notification-root");
  root.appendChild(el);

  ReactDOM.render(<Notification ref={ref} />, el);
};

const getNotificationRootInstance = (callback: any) => {
  if (NotificationRootInstance) {
    callback(NotificationRootInstance);
    return;
  } else {
    Notification.newInstance(callback);
    return;
  }
};

const notify = {
  success: ({
    title,
    onClose,
    render
  }: { title: string, onClose: any, render: () => React.ReactNode }) => getNotificationRootInstance((ref: any) => {
    ref.open("success", { title, onClose, render });
  }),
  info: ({
    title,
    onClose,
    render
  }: { title: string, onClose: any, render: () => React.ReactNode }) => getNotificationRootInstance((ref: any) => {
    ref.open("info", { title, onClose, render });
  }),
  error: ({
    title,
    onClose,
    render
  }: { title: string, onClose: any, render: () => React.ReactNode }) => getNotificationRootInstance((ref: any) => {
    ref.open("error", { title, onClose, render });
  }),
  warning: ({
    title,
    onClose,
    render
  }: { title: string, onClose: any, render: () => React.ReactNode }) => getNotificationRootInstance((ref: any) => {
    ref.open("warning", { title, onClose, render });
  }),
};

export default notify;
