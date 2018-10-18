import * as React from "react";
import styled from "styled-components";
import { Flex } from "../atoms/Flex";

export const Row = styled(Flex)`
`;

Row.defaultProps = {
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center"
};
