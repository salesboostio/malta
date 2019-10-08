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

type LegacyTypoName = "title_1" | "title_2" | "title_3" | "title_4" | "title_5" |
  "body_1" | "body_2" | "body_3" | "body_4" | "caption_1" | "caption_2" | "highlight_1" | "highlight_2";

type TypoName = LegacyTypoName | "title_403224_nv90_300" | "title_403224_nv90_500" |
  "title_363022_nv90_300" | "title_363022_nv90_500" |
  "title_323220_nv90_300" | "title_323220_nv90_500" |
  "title_322424_nv90_300" | "title_322424_nv90_500" |
  "title_322422_nv90_300" | "title_322422_nv90_500" |
  "title_242018_nv90_300" | "title_242018_nv90_500" | "title_242018_bl_700" |
  "body_181818_nv90_300" | "body_181818_nv90_500" |
  "body_181818_nv60_300" | "body_181818_nv60_500" |
  "body_181818_yl_300" | "body_181818_yl_500" |
  "body_181818_bl_300" | "body_181818_bl_500" |
  "body_161616_nv80_300" | "body_161616_nv80_500" |
  "body_161616_nv60_300" | "body_161616_nv60_500" |
  "body_161616_yl_300" | "body_161616_yl_500" |
  "body_161616_bl_300" | "body_161616_bl_500" |
  "body_141414_nv90_300" | "body_141414_nv90_500" |
  "body_141414_nv60_300" | "body_141414_nv60_500" |
  "body_141414_yl_300" | "body_141414_yl_500" |
  "body_141414_bl_300" | "body_141414_bl_500" |
  "body_141414_rd_300" | "body_141414_rd_500" |
  "caption_121212_nv80_300" | "caption_121212_nv80_500" |
  "caption_121212_nv40_300" | "caption_121212_nv40_500";

type TypoInfoType = {
  [key in TypoName]: {
    color: string;
    fontSize: string | string[];
    fontWeight: number;
    lineHeight?: string | string[];
  };
};

const TypoInfo: TypoInfoType = {
  title_403224_nv90_300: {
    color: "rgba(27, 28, 37, 0.9)",
    fontSize: ["24px", "32px", "40px"],
    fontWeight: 300,
  },
  title_403224_nv90_500: {
    color: "rgba(27, 28, 37, 0.9)",
    fontSize: ["24px", "32px", "40px"],
    fontWeight: 500,
  },
  title_363022_nv90_300: {
    color: "rgba(27, 28, 37, 0.9)",
    fontSize: ["22px", "30px", "36px"],
    fontWeight: 300,
  },
  title_363022_nv90_500: {
    color: "rgba(27, 28, 37, 0.9)",
    fontSize: ["22px", "30px", "36px"],
    fontWeight: 500,
  },
  title_323220_nv90_300: {
    color: "rgba(27, 28, 37, 0.9)",
    fontSize: "32px",
    fontWeight: 300,
  },
  title_323220_nv90_500: {
    color: "rgba(27, 28, 37, 0.9)",
    fontSize: "32px",
    fontWeight: 500,
  },
  title_322424_nv90_300: {
    color: "rgba(27, 28, 37, 0.9)",
    fontSize: ["24px", "24px", "32px"],
    fontWeight: 300,
  },
  title_322424_nv90_500: {
    color: "rgba(27, 28, 37, 0.9)",
    fontSize: ["24px", "24px", "32px"],
    fontWeight: 500,
  },
  title_322422_nv90_300: {
    color: "rgba(27, 28, 37, 0.9)",
    fontSize: ["22px", "24px", "32px"],
    fontWeight: 300,
  },
  title_322422_nv90_500: {
    color: "rgba(27, 28, 37, 0.9)",
    fontSize: ["22px", "24px", "32px"],
    fontWeight: 500,
  },
  title_242018_nv90_300: {
    color: "rgba(27, 28, 37, 0.9)",
    fontSize: ["18px", "20px", "24px"],
    fontWeight: 300,
  },
  title_242018_nv90_500: {
    color: "rgba(27, 28, 37, 0.9)",
    fontSize: ["18px", "20px", "24px"],
    fontWeight: 500,
  },
  title_242018_bl_700: {
    color: "rgba(57, 67, 226, 1.0)",
    fontSize: ["18px", "20px", "24px"],
    fontWeight: 700,
  },
  body_181818_nv90_300: {
    color: "rgba(27, 28, 37, 0.9)",
    fontSize: "18px",
    fontWeight: 300,
  },
  body_181818_nv90_500: {
    color: "rgba(27, 28, 37, 0.9)",
    fontSize: "18px",
    fontWeight: 500,
  },
  body_181818_nv60_300: {
    color: "rgba(27, 28, 37, 0.6)",
    fontSize: "18px",
    fontWeight: 300,
  },
  body_181818_nv60_500: {
    color: "rgba(27, 28, 37, 0.6)",
    fontSize: "18px",
    fontWeight: 500,
  },
  body_181818_yl_300: {
    color: "rgba(245, 169, 33, 1.0)",
    fontSize: "18px",
    fontWeight: 300,
  },
  body_181818_yl_500: {
    color: "rgba(245, 169, 33, 1.0)",
    fontSize: "18px",
    fontWeight: 500,
  },
  body_181818_bl_300: {
    color: "rgba(57, 67, 226, 1.0)",
    fontSize: "18px",
    fontWeight: 300,
  },
  body_181818_bl_500: {
    color: "rgba(57, 67, 226, 1.0)",
    fontSize: "18px",
    fontWeight: 500,
  },
  body_161616_nv80_300: {
    color: "rgba(27, 28, 37, 0.8)",
    fontSize: "16px",
    fontWeight: 300,
  },
  body_161616_nv80_500: {
    color: "rgba(27, 28, 37, 0.8)",
    fontSize: "16px",
    fontWeight: 500,
  },
  body_161616_nv60_300: {
    color: "rgba(27, 28, 37, 0.6)",
    fontSize: "16px",
    fontWeight: 300,
  },
  body_161616_nv60_500: {
    color: "rgba(27, 28, 37, 0.6)",
    fontSize: "16px",
    fontWeight: 500,
  },
  body_161616_yl_300: {
    color: "rgba(245, 169, 33, 1.0)",
    fontSize: "16px",
    fontWeight: 300,
  },
  body_161616_yl_500: {
    color: "rgba(245, 169, 33, 1.0)",
    fontSize: "16px",
    fontWeight: 500,
  },
  body_161616_bl_300: {
    color: "rgba(57, 67, 226, 1.0)",
    fontSize: "16px",
    fontWeight: 300,
  },
  body_161616_bl_500: {
    color: "rgba(57, 67, 226, 1.0)",
    fontSize: "16px",
    fontWeight: 500,
  },
  body_141414_nv90_300: {
    color: "rgba(27, 28, 37, 0.9)",
    fontSize: "14px",
    fontWeight: 300,
  },
  body_141414_nv90_500: {
    color: "rgba(27, 28, 37, 0.9)",
    fontSize: "14px",
    fontWeight: 500,
  },
  body_141414_nv60_300: {
    color: "rgba(27, 28, 37, 0.6)",
    fontSize: "14px",
    fontWeight: 300,
  },
  body_141414_nv60_500: {
    color: "rgba(27, 28, 37, 0.6)",
    fontSize: "14px",
    fontWeight: 500,
  },
  body_141414_yl_300: {
    color: "rgba(245, 169, 33, 1.0)",
    fontSize: "14px",
    fontWeight: 300,
  },
  body_141414_yl_500: {
    color: "rgba(245, 169, 33, 1.0)",
    fontSize: "14px",
    fontWeight: 500,
  },
  body_141414_bl_300: {
    color: "rgba(57, 67, 226, 1.0)",
    fontSize: "14px",
    fontWeight: 300,
  },
  body_141414_bl_500: {
    color: "rgba(57, 67, 226, 1.0)",
    fontSize: "14px",
    fontWeight: 500,
  },
  body_141414_rd_300: {
    color: "rgba(243, 70, 70, 1.0)",
    fontSize: "14px",
    fontWeight: 300,
  },
  body_141414_rd_500: {
    color: "rgba(243, 70, 70, 1.0)",
    fontSize: "14px",
    fontWeight: 500,
  },
  caption_121212_nv80_300: {
    color: "rgba(27, 28, 37, 0.8)",
    fontSize: "12px",
    fontWeight: 300,
  },
  caption_121212_nv80_500: {
    color: "rgba(27, 28, 37, 0.8)",
    fontSize: "12px",
    fontWeight: 500,
  },
  caption_121212_nv40_300: {
    color: "rgba(27, 28, 37, 0.4)",
    fontSize: "12px",
    fontWeight: 300,
  },
  caption_121212_nv40_500: {
    color: "rgba(27, 28, 37, 0.4)",
    fontSize: "12px",
    fontWeight: 500,
  },
  title_1: {
    color: theme.colors.navy._90,
    fontSize: ["24px", "32px", "40px"],
    fontWeight: 300,
    lineHeight: ["36px", "48px", "60px"],
  },
  title_2: {
    color: theme.colors.navy._90,
    fontSize: ["24px", "32px"],
    fontWeight: 500,
    lineHeight: ["30px", "48px"],
  },
  title_3: {
    color: theme.colors.navy._90,
    fontSize: ["24px", "24px", "32px"],
    fontWeight: 500,
    lineHeight: ["36px", "36px", "48px"],
  },
  title_4: {
    color: theme.colors.navy._90,
    fontSize: ["20px", "24px", "32px"],
    fontWeight: 500,
    lineHeight: ["30px", "36px", "48px"],
  },
  title_5: {
    color: theme.colors.navy._90,
    fontSize: ["18px", "20px", "24px"],
    fontWeight: 500,
    lineHeight: ["28px", "30px", "36px"],
  },
  body_1: {
    color: theme.colors.navy._90,
    fontSize: "18px",
    fontWeight: 500,
    lineHeight: "28px",
  },
  body_2: {
    color: theme.colors.navy._80,
    fontSize: "16px",
    fontWeight: 300,
    lineHeight: "24px",
  },
  body_3: {
    color: theme.colors.navy._90,
    fontSize: "14px",
    fontWeight: 300,
    lineHeight: "20px",
  },
  body_4: {
    color: theme.colors.navy._60,
    fontSize: "14px",
    fontWeight: 300,
    lineHeight: "20px",
  },
  caption_1: {
    color: theme.colors.navy._80,
    fontSize: "12px",
    fontWeight: 300,
    lineHeight: "18px",
  },
  caption_2: {
    color: theme.colors.navy._40,
    fontSize: "12px",
    fontWeight: 300,
    lineHeight: "18px",
  },
  highlight_1: {
    color: theme.colors.mint._100,
    fontSize: "16px",
    fontWeight: 500,
    lineHeight: "24px",
  },
  highlight_2: {
    color: theme.colors.mint._100,
    fontSize: "14px",
    fontWeight: 500,
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
