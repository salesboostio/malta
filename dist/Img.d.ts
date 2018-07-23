/// <reference types="react" />
import * as React from "react";
export interface IProps {
    src: string;
    height: number | string;
    m?: Array<number | string> | number | string;
    mt?: Array<number | string> | number | string;
    mr?: Array<number | string> | number | string;
    mb?: Array<number | string> | number | string;
    ml?: Array<number | string> | number | string;
    mx?: Array<number | string> | number | string;
    my?: Array<number | string> | number | string;
    width: number | string;
    hiddendown?: string;
    hiddenup?: string;
}
export declare class Img extends React.Component<IProps, any> {
    static defaultProps: IProps;
    render(): JSX.Element;
}
