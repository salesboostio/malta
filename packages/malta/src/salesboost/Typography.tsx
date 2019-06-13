import React from "react";
import {
  FontSizeProps,
  FontWeightProps,
  LineHeightProps,
  SpaceProps,
} from "styled-system";
import { BlockProps, Text } from "../index";

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
    color: "rgba(22, 27, 72, 0.9)",
    fontSize: ["24px", "32px", "40px"],
    fontWeight: 300,
    lineHeight: ["36px", "48px", "60px"],
  },
  title_2: {
    color: "rgba(22, 27, 72, 0.9)",
    fontSize: ["24px", "32px"],
    fontWeight: 500,
    lineHeight: ["30px", "48px"],
  },
  title_3: {
    color: "rgba(22, 27, 72, 0.9)",
    fontSize: ["24px", "24px", "32px"],
    fontWeight: 500,
    lineHeight: ["36px", "36px", "48px"],
  },
  title_4: {
    color: "rgba(22, 27, 72, 0.9)",
    fontSize: ["20px", "24px", "32px"],
    fontWeight: 500,
    lineHeight: ["30px", "36px", "48px"],
  },
  title_5: {
    color: "rgba(22, 27, 72, 0.9)",
    fontSize: ["18px", "20px", "24px"],
    fontWeight: 500,
    lineHeight: ["28px", "30px", "36px"],
  },
  body_1: {
    color: "rgba(22, 27, 72, 0.9)",
    fontSize: "18px",
    fontWeight: 500,
    lineHeight: "28px",
  },
  body_2: {
    color: "rgba(22, 27, 72, 0.8)",
    fontSize: "16px",
    fontWeight: 300,
    lineHeight: "24px",
  },
  body_3: {
    color: "rgba(22, 27, 72, 0.9)",
    fontSize: "14px",
    fontWeight: 300,
    lineHeight: "20px",
  },
  body_4: {
    color: "rgba(22, 27, 72, 0.6)",
    fontSize: "14px",
    fontWeight: 300,
    lineHeight: "20px",
  },
  caption_1: {
    color: "rgba(22, 27, 72, 0.8)",
    fontSize: "12px",
    fontWeight: 300,
    lineHeight: "18px",
  },
  caption_2: {
    color: "rgba(22, 27, 72, 0.4)",
    fontSize: "12px",
    fontWeight: 300,
    lineHeight: "18px",
  },
  highlight_1: {
    color: "#23c1a6",
    fontSize: "16px",
    fontWeight: 500,
    lineHeight: "24px",
  },
  highlight_2: {
    color: "#23c1a6",
    fontSize: "14px",
    fontWeight: 500,
    lineHeight: "20px",
  },
};

interface Props {
  name: TypoName;
  color?: string;
}

export type TypoProps = Props & BlockProps & FontSizeProps & FontWeightProps & LineHeightProps & SpaceProps;

export const Typo: React.FC<TypoProps> = (props) => {
  const { color, name, ...styles } = props;
  return <Text {...TypoInfo[name]} {...styles} color={color ? color : TypoInfo[name].color}>{props.children}</Text>;
};
