import { FontFamilyProps, FontSizeProps, FontWeightProps, TextAlignProps, LetterSpacingProps, LineHeightProps } from "styled-system";
import { BlockProps } from "./Block";
interface Props {
    medium?: boolean;
    regular?: boolean;
    demiLight?: boolean;
    light?: boolean;
    left?: boolean;
    right?: boolean;
    center?: boolean;
    overflowWrap?: "break-word" | "normal";
    textOverflow?: "clip" | "ellipsis" | "initial";
    wordBreak?: "break-all" | "break-word" | "keep-all" | "normal";
    whiteSpace?: "normal" | "nowrap" | "pre" | "pre-wrap" | "pre-line";
}
declare type InnerProps = Props & FontFamilyProps & FontSizeProps & TextAlignProps & FontWeightProps & LetterSpacingProps & LineHeightProps;
export declare type TextProps = InnerProps & BlockProps;
export declare const Text: import("styled-components").StyledComponent<"p", any, import("styled-system").SpaceProps<string | number> & import("styled-system").WidthProps<string | number> & import("styled-system").HeightProps<string | number> & import("styled-system").ColorProps & import("styled-system").JustifySelfProps & import("styled-system").AlignSelfProps & import("styled-system").OrderProps & import("styled-system").DisplayProps & import("styled-system").MaxWidthProps<string | number> & import("styled-system").MaxHeightProps<string | number> & import("styled-system").MinWidthProps<string | number> & import("styled-system").MinHeightProps<string | number> & import("styled-system").SizeProps & import("styled-system").RatioProps & import("styled-system").VerticalAlignProps<string | number> & import("styled-system").FlexBasisProps<string | number> & import("styled-system").OpacityProps & import("styled-system").FlexProps<string | number> & import("styled-system").GridColumnProps & import("styled-system").GridRowProps & import("styled-system").GridAreaProps & import("styled-system").BordersProps & import("styled-system").BorderRadiusProps<string | number> & import("styled-system").BoxShadowProps & import("styled-system").BorderColorProps & import("styled-system").OverflowProps & import("styled-system").PositionProps & import("styled-system").ZIndexProps & import("styled-system").TopProps<string | number> & import("styled-system").RightProps<string | number> & import("styled-system").BottomProps<string | number> & import("styled-system").LeftProps<string | number> & import("../../utils").HoverProps & import("../../utils").OfReducerProps & import("../../utils").TransitionProps & import("../../utils").CursorProps & import("styled-system").BorderProps<string | number> & Props & FontFamilyProps & FontSizeProps<string | number> & TextAlignProps & FontWeightProps & LetterSpacingProps<string | number> & LineHeightProps<string | number>, never>;
export {};
