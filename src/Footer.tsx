import * as React from "react";
import { colors, fontSizes, fontWeights, footerHeight } from "./theme";
import { Box, Flex } from "grid-styled";

const Container = Flex.extend`
  background-color: ${colors.black.dark};
  height: ${footerHeight};
  align-items: center;
`;

const Copyright = Box.extend`
  color: ${colors.white.standard};
  font-size: ${fontSizes.h5}px;
  font-weight: ${fontWeights.demiLight};
`;

export class Footer extends React.Component<any, any> {
  public render() {
    return (
      <Container pl={[0, 3, 3]} mx="auto">
        <Copyright mx={["auto", "auto", "0px"]}>Copyright © 2018 Salesboost. Inc</Copyright>
      </Container>
    );
  }
}