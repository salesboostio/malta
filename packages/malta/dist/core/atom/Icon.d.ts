import * as React from "react";
import { ColorProps, SpaceProps } from "styled-system";
import { HoverProps, CursorProps } from "../../utils";
declare type IconName = "arrow-down" | "arrow-left" | "arrow-right" | "arrow-up" | "back" | "check" | "circle-info" | "circle-question" | "circle-warning" | "close" | "crown" | "setting" | "giventake" | "gridview" | "helpbadge" | "listview" | "next" | "search" | "selectall" | "step" | "upload" | "reload" | "add" | "delete" | "doublearrow-left" | "doublearrow-right" | "edit" | "function" | "home" | "ascending" | "descending" | "logout" | "personal" | "support" | "link" | "global" | "guide" | "folder" | "hamburger";
interface Props {
    name: IconName;
    theme?: any;
    size?: number;
}
export declare type IconProps = Props & HoverProps & ColorProps & CursorProps & SpaceProps;
export declare const Icon: React.SFC<IconProps>;
export {};
