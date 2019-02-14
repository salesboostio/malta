import styled from "styled-components";
import {
  space,
  SpaceProps,
} from "styled-system";
import {
  ofReducer,
  OfReducerProps,
} from "../../utils";

export type BoxProps = SpaceProps & OfReducerProps;

export const Box = styled.div<BoxProps>`
  box-sizing: border-box;
  ${space}
  ${ofReducer}
`;
