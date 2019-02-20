import { SpaceProps, WidthProps } from "styled-system";
declare type LineStyle = "solid" | "dashed" | "dotted";
declare type LineColor = string;
declare type LineThick = number | string;
interface LineProps {
    lineStyle?: LineStyle;
    color?: LineColor;
    thick?: LineThick;
}
declare type Props = LineProps & SpaceProps & WidthProps;
export declare const Hr: import("styled-components").StyledComponent<"div", any, Props, never>;
export {};
