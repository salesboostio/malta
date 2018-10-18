import * as React from "react";
import styled from "styled-components";
import { breakpoints } from "../commons/theme";

interface Props {
  mobile?: boolean;
  tablet?: boolean;
  desktop?: boolean;
}

export const Hide = styled.div<Props>`
  @media (max-width: ${breakpoints[0]}){
    display: ${(props) => (props.mobile ? "none" : "block")};
  }

  @media (max-width: ${breakpoints[1]}) and (min-width: ${breakpoints[0]}){
    display: ${(props) => (props.tablet ? "none" : "block")};
  }

  @media (min-width: ${breakpoints[1]}){
    display: ${(props) => (props.desktop ? "none" : "block")};
  }
`;
