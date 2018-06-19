import * as React from "react";
import styled from "styled-components";
import { Img } from "./Img";
import {
  breakpoints,
  colors,
  containerWidth,
  fontSizes,
  fontWeights,
  navBarHeight,
  space
} from "./theme";
import { generateQuery, hiddenDown, hiddenUp } from "./tools/mediaQuery";


const Wrapper = styled.div`
  background-color: ${colors.white._50};
  height: ${navBarHeight};
  left: 0;
  position: fixed;
  right: 0;
  z-index: 1000;
`;

const Container = styled.div`
  align-items: center;
  display: flex;
  height: ${navBarHeight};
  margin-left: auto;
  margin-right: auto;
  padding-left: ${space[3]}px;
  padding-right: ${space[3]}px;

  ${generateQuery("max-width", "sm", `
    padding-left: ${space[2]}px;
    padding-right: ${space[2]}px;
  `)};
`;

const Right = styled.div`
  flex: 1;
  text-align: right;

  ${hiddenDown("sm")};
`;

const Title = styled.div`
  color: ${colors.black.dark};
  font-size: ${fontSizes.h5}px;
  font-weight: ${fontWeights.regular};
`;

const Description = styled.div`
  font-size: ${fontSizes.h5}px;
  font-weight: ${fontWeights.regular};
  color: ${colors.black.sub};
  margin-top: 4px;
`;

export interface IProps {
  logoUrl: string;
  title?: string;
  description?: string;
}

export class Navbar extends React.Component<IProps, any> {
  public render() {
    const { logoUrl, title, description } = this.props;
    return (
      <Wrapper>
        <Container>
          <a href="/">
            <Img hiddendown="sm" src={logoUrl} width="125px" height="34px" />
            <Img hiddenup="sm" src={logoUrl} width="96px" height="26px" />
          </a>
          <Right>
            <Title>{title}</Title>
            <Description>{description}</Description>
          </Right>
        </Container>
      </Wrapper>
    );
  }
}
