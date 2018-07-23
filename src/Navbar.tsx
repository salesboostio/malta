import * as React from "react";
import styled from "styled-components";
import { Img } from "./ImgResponsive";
import {
  colors,
  fontSizes,
  fontWeights,
  navBarHeight,
} from "./theme";
import { Flex, Box } from "grid-styled";
import { Text } from "./Text";

const Wrapper = Box.extend`
  background-color: ${colors.white._75};
  height: ${navBarHeight};
  left: 0;
  position: fixed;
  right: 0;
  z-index: 1000;
`;

const FlexHeader = Flex.extend`
  height: ${navBarHeight}
`;

const Title = (props: any) => (
  <Text
    display={["none", "none", "block"]}
    align="right"
    fontSize={fontSizes.h5}
    fontWeight={fontWeights.regular}>
    {props.children}
  </Text>
);

const Description = (props: any) => (
  <Text
    display={["none", "none", "block"]}
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

interface RProps {
  display?: Array<string> | string;
}


export class Navbar extends React.Component<IProps, any> {
  public render() {
    const { logoUrl, title, description } = this.props;
    return (
      <Wrapper>
        <FlexHeader alignItems="center" mx="auto" px={[2, 2, 3]}>
          <a href="/">
            <Img src={logoUrl} width={[96, 96, 125]} height={[26, 26, 34]} />
          </a>
          <Box flex={1}>
            <Title>{title}</Title>
            <Description>{description}</Description>
          </Box>
        </FlexHeader>
      </Wrapper >
    );
  }
}
