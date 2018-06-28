/// <reference types="react" />
import * as React from "react";
export interface IProps {
    color?: string;
    bg?: string;
    borderColor?: string;
    fontSize?: number | string;
    fontWeight?: number | string;
    lineHeight?: number | string;
    placement?: string;
    m?: number | string;
    mt?: number | string;
    mr?: number | string;
    mb?: number | string;
    ml?: number | string;
    mx?: number | string;
    my?: number | string;
    p?: number | string;
    pt?: number | string;
    pr?: number | string;
    pb?: number | string;
    pl?: number | string;
    px?: number | string;
    py?: number | string;
    align?: string;
    width?: number | string;
    text?: string;
    offset?: number;
}
export declare class Tooltip extends React.Component<IProps, any> {
    static defaultProps: IProps;
    private nl2br(text);
    render(): JSX.Element;
}
