import styled from "styled-components";
import {
  fontFamily,
  FontFamilyProps,
  fontSize,
  FontSizeProps,
  fontWeight,
  FontWeightProps,
  letterSpacing,
  LetterSpacingProps,
  lineHeight,
  LineHeightProps,
  textAlign,
  TextAlignProps,
} from "styled-system";
import { Block, BlockProps } from "./Block";
import { theme } from "../../salesboost";
import { parseNumberToUnit, setCssDeclaration } from "../../utils";

interface Props {
  medium?: boolean;
  regular?: boolean;
  demiLight?: boolean;
  light?: boolean;
  alignLeft?: boolean;
  alignRight?: boolean;
  alignCenter?: boolean;
  overflowWrap?: "break-word" | "normal";
  textOverflow?: "clip" | "ellipsis" | "initial";
  wordBreak?: "break-all" | "break-word" | "keep-all" | "normal";
  whiteSpace?: "normal" | "nowrap" | "pre" | "pre-wrap" | "pre-line";
}

const medium = ({ medium }: Props) => medium && setCssDeclaration("font-weight", theme.fontweights.medium);
const regular = ({ regular }: Props) => regular && setCssDeclaration("font-weight", theme.fontweights.regular);
const demiLight = ({ demiLight }: Props) => demiLight && setCssDeclaration("font-weight", theme.fontweights.demilight);
const light = ({ light }: Props) => light && setCssDeclaration("font-weight", theme.fontweights.light);
const alignLeft = ({ alignLeft }: Props) => alignLeft && `text-align: left;`;
const alignRight = ({ alignRight }: Props) => alignRight && `text-align: right;`;
const alignCenter = ({ alignCenter }: Props) => alignCenter && `text-align: center;`;
const overflowWrap = ({ overflowWrap }: Props) => overflowWrap && `overflow-wrap: ${overflowWrap};`;
const textOverflow = ({ textOverflow }: Props) => textOverflow && `text-overflow: ${textOverflow};`;
const wordBreak = ({ wordBreak }: Props) => wordBreak && `word-break: ${wordBreak};`;
const whiteSpace = ({ whiteSpace }: Props) => whiteSpace && `white-space: ${whiteSpace};`;

type InnerProps = Props & FontFamilyProps & FontSizeProps & TextAlignProps & FontWeightProps & LetterSpacingProps & LineHeightProps;

export type TextProps = InnerProps & BlockProps;

export const Text = styled(Block.withComponent("p"))<InnerProps>`
  hyphens: auto;
  ${medium}
  ${regular}
  ${demiLight}
  ${light}
  ${alignLeft}
  ${alignRight}
  ${alignCenter}
  ${overflowWrap}
  ${textOverflow}
  ${whiteSpace}
  ${fontSize}
  ${fontFamily}
  ${fontWeight}
  ${textAlign}
  ${wordBreak}
  ${letterSpacing}
  ${lineHeight}
`;

Text.defaultProps = {
  color: theme.colors.shadow._80,
  fontSize: parseNumberToUnit(theme.fontsizes.p, "px"),
  lineHeight: "normal",
  overflow: "hidden",
  overflowWrap: "break-word",
  m: 0,
};
