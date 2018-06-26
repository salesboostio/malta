/// <reference types="react" />
import * as React from "react";
export interface IProps {
    id?: string;
    name?: string;
    checked?: boolean;
    disabled?: boolean;
    onChange?: React.ChangeEventHandler<HTMLElement>;
    color?: string;
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
    lineThickness?: number | string;
    size?: number | string;
}
export declare class Checkbox extends React.Component<IProps, any> {
    private renderCheckLinePoints(size);
    static defaultProps: IProps;
    render(): JSX.Element;
}
