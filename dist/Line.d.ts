/// <reference types="react" />
import * as React from "react";
export interface IProps {
    color?: string;
    bg?: string;
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
    width?: number | string;
}
export declare class Line extends React.Component<IProps, any> {
    static defaultProps: IProps;
    render(): JSX.Element;
}
