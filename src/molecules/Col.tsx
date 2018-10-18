import * as React from "react";
import styled from "styled-components";
import { Flex } from "../atoms/Flex";

export const Col = styled(Flex)`
`;

Col.defaultProps = {
  justifyContent: "center",
  flexDirection: "column",
  alignItems: "center"
};
