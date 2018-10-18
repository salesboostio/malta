import * as React from "react";
interface Props {
    checked?: boolean;
    loading?: boolean;
    disabled: boolean;
    onClick?: Function;
}
export declare class ToggleSwitch extends React.Component<Props, any> {
    static defaultProps: Props;
    render(): JSX.Element;
}
export {};
