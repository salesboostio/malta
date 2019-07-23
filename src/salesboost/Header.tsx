import * as React from "react";
import styled from "styled-components";
import {
  color,
  ColorProps,
  space,
  SpaceProps,
} from "styled-system";

export type HeaderProps = React.SFC<SpaceProps & ColorProps>;

export const Header = styled.div<SpaceProps & ColorProps>`
  display: flex;
  box-sizing: border-box;
  align-items: center;
  height: 60px;
  width: 100%;
  box-shadow: 0 8px 40px 0 rgba(22, 27, 72, 0.04);
  position: fixed;
  top: 0;
  left: 0;
  ${space}
  ${color}
`;

Header.defaultProps = {
  bg: "#FFF",
};
