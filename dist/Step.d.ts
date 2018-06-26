/// <reference types="react" />
import * as React from "react";
export interface IItem {
    id?: string;
    title: string;
    link?: any;
    completed?: boolean;
    callback?: Function;
}
export interface IProps {
    items: IItem[];
    current?: number;
    useRouter?: Boolean;
    onClick?: React.MouseEventHandler<HTMLElement>;
}
export declare class Step extends React.Component<IProps, any> {
    constructor(props: IProps);
    static defaultProps: IProps;
    private renderStep(items, useRouter);
    render(): JSX.Element;
}
