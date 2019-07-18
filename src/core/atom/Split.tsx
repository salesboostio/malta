import * as React from "react";
import styled from "styled-components";
import {
  width,
  WidthProps,
  height,
  HeightProps,
  space,
  SpaceProps,
  backgroundColor,
  BackgroundColorProps,
  ColorStyleProps,
  alignSelf,
  AlignSelfProps,
  justifySelf,
  JustifySelfProps,
  ResponsiveValue,
  TLengthStyledSystem,
} from "styled-system";

const StyledSplit = styled.div<WidthProps & HeightProps & SpaceProps & ColorStyleProps & BackgroundColorProps & AlignSelfProps & JustifySelfProps>`
  ${width}
  ${height}
  ${space}
  ${backgroundColor}
  ${alignSelf}
  ${justifySelf}
`;

interface Props {
  horizontal?: boolean;
  vertical?: boolean;
  length?: ResponsiveValue<TLengthStyledSystem>;
}

export type SplitProps = Props & ColorStyleProps & BackgroundColorProps & AlignSelfProps & JustifySelfProps & SpaceProps;

export const Split: React.FC<SplitProps> = (props) => {
  const { horizontal, length, vertical, ...styles } = props;
  return <StyledSplit width={horizontal ? length : "1px"} height={vertical ? length : "1px"} {...styles} />;
};

Split.defaultProps = {
  horizontal: false,
  vertical: false,
  length: "100%",
  alignSelf: "center",
  bg: "rgba(22,27,72,0.4)",
};
