import * as React from "react";
import { SpaceProps, WidthProps } from "styled-system";
interface Props {
    children: any;
    initialSelection?: number;
    placeholder?: string;
    onValueChange?: (value: string, index: number) => void;
}
declare type SelectProps = Props & SpaceProps & WidthProps;
interface State {
    index: number;
    value: string;
    isOpened: boolean;
}
export declare class Select extends React.Component<SelectProps, State> {
    state: {
        index: number;
        value: any;
        isOpened: boolean;
    };
    getValueFromOptions(options: any, index: number): any;
    render(): JSX.Element;
    toggleDropdown: () => void;
    renderDropdown: () => JSX.Element;
    handleOptionClick: (index?: number) => void;
}
export {};
