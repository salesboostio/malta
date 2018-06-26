/// <reference types="react" />
import * as React from "react";
export interface IProps {
    label?: string;
    error?: boolean;
    errorMessage?: string;
    defaultValue?: string;
    disabled?: boolean;
    name?: string;
    onBlur?: React.FocusEventHandler<HTMLInputElement>;
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
    onDragStart?: React.DragEventHandler<HTMLInputElement>;
    onDrop?: React.DragEventHandler<HTMLInputElement>;
    onFocus?: React.FocusEventHandler<HTMLInputElement>;
    placeholder?: string;
    type?: string;
    value?: string;
    m?: number | string;
    mt?: number | string;
    mr?: number | string;
    mb?: number | string;
    ml?: number | string;
    mx?: number | string;
    my?: number | string;
}
export declare class Input extends React.Component<IProps, any> {
    static defaultProps: IProps;
    private renderLabel(label);
    private renderErrorLabel(error, errorMessage);
    render(): JSX.Element;
}
