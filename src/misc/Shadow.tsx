import * as React from "react";
import styled from "styled-components";
import { Box } from "../atoms/Box";
import { shadow } from "../commons/theme";

const boxShadow = (props: any): string => `box-shadow: ${shadow[props.shadow]};`;

export const Shadow = styled(Box)`
  width: fit-content;
  height: auto;
  overflow-hidden;
  ${boxShadow}
`;
