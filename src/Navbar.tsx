import * as React from "react";
import styled from "styled-components";
import { Img } from "./Img";
import {
  colors,
  fontSizes,
  fontWeights,
  navBarHeight,
} from "./theme";
import { Flex, Box } from "grid-styled";
import { Text } from "./Text";
const { display } = require("styled-system");

const Wrapper = Box.extend`
  background-color: ${colors.white._75};
  height: ${navBarHeight};
  left: 0;
  position: fixed;
  right: 0;
  z-index: 1000;
`;

const Container = Flex.extend`
  height: ${navBarHeight}
`;

const Right = styled.div`
  ${display}
  flex: 1;
`;

const Title = (props: any) => (
  <Text
    align="right"
    fontSize={fontSizes.h5}
    fontWeight={fontWeights.regular}>
    {props.children}
  </Text>
);

const Description = (props: any) => (
  <Text
    align="right"
    fontSize={fontSizes.h5}
    fontWeight={fontWeights.regular}
    mt="4px"
    color={colors.black.sub}>
    {props.children}
  </Text>
);

export interface IProps {
  logoUrl: string;
  title?: string;
  description?: string;
}

export class Navbar extends React.Component<IProps, any> {
  public render() {
    const { logoUrl, title, description } = this.props;
    const displayStyle = { display: ["none", "none", "block"] };
    return (
      <Wrapper>
        <Container alignItems="center" mx="auto" px={[2, 2, 3]}>
          <a href="/">
            <Img src={logoUrl} width={[96, 96, 125]} height={[26, 26, 34]} />
          </a>
          <Right {...displayStyle}>
            <Title>{title}</Title>
            <Description>{description}</Description>
          </Right>
        </Container>
      </Wrapper>
    );
  }
}
