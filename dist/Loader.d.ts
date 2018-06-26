/// <reference types="react" />
import * as React from "react";
export interface IProps {
    color?: string;
    height?: number | string;
    width?: number | string;
    fullScreen?: boolean;
    image?: string;
    imageHeight?: number | string;
    imageWidth?: number | string;
    labelText?: string;
    show: boolean;
}
export declare class Loader extends React.Component<IProps, any> {
    static defaultProps: IProps;
    private renderImage(src, imageWidth?, imageHeight?);
    private renderLabelText(labelText);
    render(): JSX.Element;
}
