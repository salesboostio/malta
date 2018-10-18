import * as React from "react";
import styled from "styled-components";
import { borderRadius, BorderRadiusProps } from "styled-system";

type Props = BorderRadiusProps;

export const Rounded = styled.div<Props>`
  width: fit-content;
  height: auto;
  overflow: hidden;
  ${borderRadius}
`;
