import * as React from "react";
import { SpaceProps, ColorProps, BorderRadiusProps, FontSizeProps, HeightProps, WidthProps } from "styled-system";
interface Props {
    label: string;
    loading?: boolean;
    line?: boolean;
    disabled?: boolean;
    hoverBg?: string;
    bg?: string;
    onClick?: any;
    style?: any;
}
export declare type ButtonProps = React.SFC<Props & SpaceProps & ColorProps & HeightProps & BorderRadiusProps & FontSizeProps & WidthProps>;
export declare const Button: ButtonProps;
export {};
