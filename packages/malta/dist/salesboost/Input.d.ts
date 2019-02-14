import * as React from "react";
import { SpaceProps, WidthProps } from "styled-system";
interface Props {
    value: string;
    placeholder?: string;
    disabled?: boolean;
    helpText?: string;
    errorText?: string;
    title?: string;
    description?: string;
    onTextChange?: (text: string) => void;
    validator?: (text: string) => boolean;
}
declare type InputProps = Props & SpaceProps & WidthProps;
interface State {
    valid: boolean;
}
export declare class Input extends React.Component<InputProps, State> {
    state: {
        valid: boolean;
    };
    render(): JSX.Element;
    handleChange: (ev: React.ChangeEvent<HTMLInputElement>) => void;
    renderBottomText: () => JSX.Element;
}
export {};
