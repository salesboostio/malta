/// <reference types="react" />
import * as React from "react";
export interface IItem {
    id: string;
    label: string;
    value: any;
}
export interface IProps {
    label?: string;
    placeholder?: string;
    disabled?: boolean;
    items: IItem[];
    onChange?: React.MouseEventHandler<HTMLElement>;
}
export declare class Select extends React.Component<IProps, any> {
    static defaultProps: IProps;
    private renderLabel();
    render(): JSX.Element;
}
