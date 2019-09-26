import React from "react";
import {
  FontSizeProps,
  FontWeightProps,
  LineHeightProps,
  SpaceProps,
  TextAlignProps,
} from "styled-system";
import { BlockProps, Text } from "../index";
import { theme } from "./theme";
import { parseNumberToUnit } from "../utils";

type TypoName = "title_1" | "title_2" | "title_3" | "title_4" | "title_5" |
  "body_1" | "body_2" | "body_3" | "body_4" | "caption_1" | "caption_2" | "highlight_1" | "highlight_2";

type TypoInfoType = {
  [key in TypoName]: {
    color: string;
    fontSize: string | string[];
    fontWeight: number;
    lineHeight: string | string[];
  };
};

const TypoInfo: TypoInfoType = {
  title_1: {
    color: theme.colors.navy._90,
    fontSize: ["24px", "32px", "40px"],
    fontWeight: theme.fontweights.demilight,
    lineHeight: ["36px", "48px", "60px"],
  },
  title_2: {
    color: theme.colors.navy._90,
    fontSize: ["24px", "32px"],
    fontWeight: theme.fontweights.medium,
    lineHeight: ["30px", "48px"],
  },
  title_3: {
    color: theme.colors.navy._90,
    fontSize: ["24px", "24px", "32px"],
    fontWeight: theme.fontweights.medium,
    lineHeight: ["36px", "36px", "48px"],
  },
  title_4: {
    color: theme.colors.navy._90,
    fontSize: ["20px", "24px", "32px"],
    fontWeight: theme.fontweights.medium,
    lineHeight: ["30px", "36px", "48px"],
  },
  title_5: {
    color: theme.colors.navy._90,
    fontSize: ["18px", "20px", "24px"],
    fontWeight: theme.fontweights.medium,
    lineHeight: ["28px", "30px", "36px"],
  },
  body_1: {
    color: theme.colors.navy._90,
    fontSize: parseNumberToUnit(theme.fontsizes.h5, "px"),
    fontWeight: theme.fontweights.medium,
    lineHeight: "28px",
  },
  body_2: {
    color: theme.colors.navy._80,
    fontSize: parseNumberToUnit(theme.fontsizes.p, "px"),
    fontWeight: theme.fontweights.demilight,
    lineHeight: "24px",
  },
  body_3: {
    color: theme.colors.navy._90,
    fontSize: parseNumberToUnit(theme.fontsizes.sub, "px"),
    fontWeight: theme.fontweights.demilight,
    lineHeight: "20px",
  },
  body_4: {
    color: theme.colors.navy._60,
    fontSize: parseNumberToUnit(theme.fontsizes.sub, "px"),
    fontWeight: theme.fontweights.demilight,
    lineHeight: "20px",
  },
  caption_1: {
    color: theme.colors.navy._80,
    fontSize: parseNumberToUnit(theme.fontsizes.caption, "px"),
    fontWeight: theme.fontweights.demilight,
    lineHeight: "18px",
  },
  caption_2: {
    color: theme.colors.navy._40,
    fontSize: parseNumberToUnit(theme.fontsizes.caption, "px"),
    fontWeight: theme.fontweights.demilight,
    lineHeight: "18px",
  },
  highlight_1: {
    color: theme.colors.mint._100,
    fontSize: parseNumberToUnit(theme.fontsizes.p, "px"),
    fontWeight: theme.fontweights.medium,
    lineHeight: "24px",
  },
  highlight_2: {
    color: theme.colors.mint._100,
    fontSize: parseNumberToUnit(theme.fontsizes.sub, "px"),
    fontWeight: theme.fontweights.medium,
    lineHeight: "20px",
  },
};

interface Props {
  name: TypoName;
  color?: string;
  center?: boolean;
  left?: boolean;
  right?: boolean;
  onClick?: (e: React.MouseEvent<HTMLParagraphElement, MouseEvent>) => void;
  style?: any;
  hover?: any;
  of?: any;
}

export type TypoProps = Props & BlockProps & FontSizeProps & FontWeightProps & LineHeightProps & TextAlignProps & SpaceProps;

export const Typo: React.FC<TypoProps> = (props) => {
  const { color, name, left, center, right, ...styles } = props;
  return (
    <Text {...TypoInfo[name]} {...styles}
      color={color ? color : TypoInfo[name].color}
      alignLeft={left} alignCenter={center} alignRight={right}>
      {props.children}
    </Text>
  );
};
