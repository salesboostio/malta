/// <reference types="react" />
import * as React from "react";
export interface IProps {
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
}
export declare class Jumbotron extends React.Component<IProps, any> {
    static defaultProps: IProps;
    render(): JSX.Element;
}
