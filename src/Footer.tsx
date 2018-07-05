import * as React from "react";
import styled from "styled-components";
const { theme } = require("styled-system");
import { colors, containerWidth, fontSizes, fontWeights, footerHeight, space } from "./theme";
import { generateQuery } from "./tools/mediaQuery";

const Wrapper = styled.div`
  background-color: ${colors.black._5};
`;

const Container = styled.div`
  align-items: center;
  display: flex;
  height: ${footerHeight};
  padding-left: ${space[3]}px;
  margin-left: auto;
  margin-right: auto;

  ${generateQuery("max-width", "sm", "padding-left: 0;")};
`;

const Copyright = styled.div`
  color: ${colors.white.standard};
  font-size: ${fontSizes.h5}px;
  font-weight: ${fontWeights.demiLight};

  ${generateQuery("max-width", "sm", "margin: 0 auto;")};
`;

export class Footer extends React.Component<any, any> {
  public render() {
    return (
      <Wrapper>
        <Container>
          <Copyright>Copyright © 2018 Salesboost. Inc</Copyright>
        </Container>
      </Wrapper>
    );
  }
}
