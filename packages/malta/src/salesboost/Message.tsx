import React from "react";
import styled, { keyframes } from "styled-components";
import { SpaceProps } from "styled-system";
import {
  Block,
  Flex,
  Icon,
  Text,
  Portal,
  theme,
} from "../index";

const colors = {
  error: "#F34646",
  info: "#454EDF",
  success: "#059D5B",
  warning: "#F5A921",
};

const Container = styled(Block)`
  position: fixed;
  left: 0;
  right: 0;
  top: 76px;
  margin-left: auto;
  margin-right: auto;
  overflow-y: hidden;
`;

const Wrapper = styled<any>(Flex)`
  min-height: 40px;
  padding: 12px 16px;
  border-radius: 4px;
  display: flex;
  flex-direction: row;
  align-items: center;
  box-shadow: 0 8px 16px 0 rgba(22, 27, 72, 0.08);
  transform: translateY(${({ show }) => show ? "0" : "-56"}px);
  transition: transform 0.5s ease-out;
`;

interface Props {
  type: "error" | "info" | "success" | "warning";
  message: string;
  duraction?: number;
  show: boolean;
  onDismiss: () => void;
}

interface State {
  showing: boolean;
}

export type MessageProps = Props & SpaceProps;

export class Message extends React.Component<MessageProps, State> {

  static defaultProps = {
    duraction: 5000,
    show: false,
  };

  state = {
    showing: false,
  };

  componentWillReceiveProps(nextProps: Props) {
    if (nextProps.show) {
      this.show();
      setTimeout(() => {
        this.hide();
      }, this.props.duraction);
    }
  }

  show() {
    setImmediate(() => this.setState({ showing: true }));
  }

  hide() {
    this.setState({ showing: false });
    setTimeout(() => this.props.onDismiss(), 500);
  }

  render() {
    const { type, message, duraction, show, onDismiss, ...styles } = this.props;
    if (!this.props.show) {
      return null;
    }
    return (
      <Portal>
        <Container width={["327px", "440px"]}>
          <Wrapper bg={colors[type]} show={this.state.showing} {...styles}>
            <Icon name={this.getIconName(type)} size={20} color={type === "warning" ? theme.colors.navy._80 : theme.colors.white._100} />
            <Text ml={2} medium color={type === "warning" ? theme.colors.navy._80 : theme.colors.white._100} fontSize={theme.fontsizes.p} lineHeight="24px">{message}</Text>
          </Wrapper>
        </Container>
      </Portal>
    );
  }

  getIconName(type: string) {
    switch (type) {
      case "info":
      case "error":
        return "circle-info";
      case "warning":
        return "circle-warning";
      case "success":
        return "circle-success";
    }
  }

}
