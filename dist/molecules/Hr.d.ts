import * as React from "react";
import { SpaceProps, WidthProps } from "styled-system";
declare type LineStyle = "solid" | "dashed" | "dotted";
declare type LineColor = string;
declare type LineThick = number | string;
interface LineProps {
    lineStyle?: LineStyle;
    color?: LineColor;
    thick?: LineThick;
}
export declare const Hr: import("styled-components").StyledComponentClass<React.ClassAttributes<HTMLDivElement> & React.HTMLAttributes<HTMLDivElement> & LineProps & SpaceProps & WidthProps, any, React.ClassAttributes<HTMLDivElement> & React.HTMLAttributes<HTMLDivElement> & LineProps & SpaceProps & WidthProps>;
export {};
