/// <reference types="react" />
import * as React from "react";
export interface IProps {
    border?: string;
    borderColor?: string;
    color?: string;
    bg?: string;
    fontSize?: Array<number | string> | number | string;
    fontWeight?: Array<number | string> | number | string;
    lineHeight?: Array<number | string> | number | string;
    placement?: string;
    m?: Array<number | string> | number | string;
    mt?: Array<number | string> | number | string;
    mr?: Array<number | string> | number | string;
    mb?: Array<number | string> | number | string;
    ml?: Array<number | string> | number | string;
    mx?: Array<number | string> | number | string;
    my?: Array<number | string> | number | string;
    p?: Array<number | string> | number | string;
    pt?: Array<number | string> | number | string;
    pr?: Array<number | string> | number | string;
    pb?: Array<number | string> | number | string;
    pl?: Array<number | string> | number | string;
    px?: Array<number | string> | number | string;
    py?: Array<number | string> | number | string;
    align?: string;
    width?: number | string;
    text?: string;
    onClick?: React.MouseEventHandler<HTMLElement>;
    disabled?: boolean;
    selected?: boolean;
}
export declare class Tab extends React.Component<IProps, any> {
    static defaultProps: IProps;
    render(): JSX.Element;
}
