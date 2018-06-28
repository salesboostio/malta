/// <reference types="react" />
import * as React from "react";
export interface IProps {
    name?: string;
    value?: string;
    checked?: boolean;
    color?: string;
    display?: string;
    fontSize?: number | string;
    fontWeight?: number | string;
    lineHeight?: number | string;
    m?: number | string;
    mt?: number | string;
    mr?: number | string;
    mb?: number | string;
    ml?: number | string;
    p?: number | string;
    pt?: number | string;
    pr?: number | string;
    pb?: number | string;
    pl?: number | string;
    size?: number | string;
}
export declare class Radio extends React.Component<IProps, any> {
    constructor(props: any);
    handleSelection(event: any): void;
    static defaultProps: IProps;
    render(): JSX.Element;
}
