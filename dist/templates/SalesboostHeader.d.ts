import * as React from "react";
import { ResponsiveValue } from "styled-system";
interface Props {
    logoSrc: string;
    headerHeight?: ResponsiveValue<string | number>;
    imageWidth?: ResponsiveValue<string | number>;
    imageHeight?: ResponsiveValue<string | number>;
    bg?: string;
    padding?: ResponsiveValue<string | number>;
    onClick?: any;
    href?: string;
}
export declare const SalesboostHeader: React.SFC<Props>;
export {};
