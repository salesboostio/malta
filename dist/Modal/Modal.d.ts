/// <reference types="react" />
import * as React from "react";
export interface IProps {
    width?: number | string;
    onRequestClose?: React.MouseEventHandler<HTMLElement>;
    open?: boolean;
    modalHeading?: string;
}
export declare class Modal extends React.Component<IProps, any> {
    static defaultProps: IProps;
    render(): JSX.Element;
}
