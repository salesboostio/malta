import React from "react";
import styled from "styled-components";
import { SpaceProps } from "styled-system";
import {
  Block,
  Flex,
  Icon,
  Text,
  Portal,
  theme,
} from "../index";
import {

} from "../core/atom/Icon";

const colors = {
  error: "#F34646",
  info: "#454EDF",
  success: "#059D5B",
  warning: "#F5A921",
};

const Wrapper = styled(Flex)`
  position: fixed;
  left: 0;
  right: 0;
  top: 60px;
  flex-direction: column;
  align-items: center;
`;

const MessageWrapper = styled<any>(Block)`
  height: 40px;
  margin-top: 16px;
  padding: 0 16px;
  display: flex;
  border-radius: 4px;
  flex-direction: row;
  align-items: center;
  box-shadow: 0 8px 16px 0 rgba(22, 27, 72, 0.08);
  opacity: ${({ show }) => show ? "1" : "0"};
`;

interface Props {
  type: "error" | "info" | "success" | "warning";
  message: string;
  duraction?: number;
  show: boolean;
  onDismiss: () => void;
}

export type MessageProps = Props & SpaceProps;

export class Message extends React.Component<MessageProps> {

  static defaultProps = {
    duraction: 5000,
    show: false,
  };

  componentWillReceiveProps(nextProps: Props) {
    if (nextProps.show) {
      setTimeout(() => this.props.onDismiss(), this.props.duraction);
    }
  }

  render() {
    const { type, message, duraction, show, onDismiss, ...styles } = this.props;
    return (
      <Portal>
        <Wrapper>
          <MessageWrapper width={["327px", "440px"]} height="40px" bg={colors[type]} show={show} {...styles}>
            <Icon name={this.getIconName(type)} size={20} color={type === "warning" ? theme.colors.navy._80 : theme.colors.white._100} />
            <Text ml={2} medium color={type === "warning" ? theme.colors.navy._80 : theme.colors.white._100} fontSize={theme.fontsizes.p} lineHeight="24px">{message}</Text>
          </MessageWrapper>
        </Wrapper>
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
