import { BorderRadiusProps } from "styled-system";
declare type boxShadowType = 0 | 1 | 2 | 3 | 4 | 5;
interface BoxShadowProps {
    shadow?: boxShadowType;
    hoverShadow?: boxShadowType;
}
export declare const Card: import("styled-components").StyledComponent<"div", any, import("styled-system/dist/space").SpaceProps<import("styled-system/dist/space").TLengthStyledSystem> & import("styled-system/dist/styles").WidthProps<import("styled-system/dist/space").TLengthStyledSystem> & import("styled-system/dist/styles").HeightProps<import("styled-system/dist/space").TLengthStyledSystem> & import("styled-system/dist/styles").ColorProps & import("styled-system/dist/styles").JustifySelfProps & import("styled-system/dist/styles").AlignSelfProps & import("styled-system/dist/styles").OrderProps & import("styled-system/dist/styles").AlignItemsProps & import("styled-system/dist/styles").JustifyContentProps & import("styled-system/dist/styles").FlexWrapProps & import("styled-system/dist/styles").FlexDirectionProps & BoxShadowProps & BorderRadiusProps<import("styled-system/dist/space").TLengthStyledSystem>, never>;
export {};
