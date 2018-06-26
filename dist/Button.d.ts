/// <reference types="react" />
import * as React from "react";
export interface IProps {
    onClick?: React.MouseEventHandler<HTMLElement>;
    type?: string;
    borderColor?: string;
    borderRadius?: number | string;
    border?: string;
    borderTop?: string;
    borderRight?: string;
    borderBottom?: string;
    borderLeft?: string;
    color?: string;
    bg?: string;
    fontSize?: Array<number | string> | number | string;
    height?: Array<number | string> | number | string;
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
    width?: Array<number | string> | number | string;
}
export declare class Button extends React.Component<IProps, any> {
    static defaultProps: IProps;
    render(): JSX.Element;
}
