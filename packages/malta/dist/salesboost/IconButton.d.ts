import * as React from "react";
import { SpaceProps, WidthProps, HeightProps, ColorProps } from "styled-system";
import { IconProps } from "../core";
interface Props {
    disabled?: false;
    onClick?: any;
    style?: any;
}
export declare type IconButtonProps = IconProps & Props & SpaceProps & WidthProps & HeightProps & ColorProps;
export declare const IconButton: React.SFC<IconButtonProps>;
export {};
