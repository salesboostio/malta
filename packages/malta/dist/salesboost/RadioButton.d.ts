/// <reference types="react" />
import { FlexProps } from "../core";
import { SpaceProps, ResponsiveValue } from "styled-system";
interface Props {
    display?: ResponsiveValue<"flex" | "inline-flex" | "none">;
    checked?: boolean;
    disabled?: boolean;
    leftText?: any;
    rightText?: any;
    onClick?: (checked: boolean) => any;
}
export declare type RadioButtonProps = Props & SpaceProps & FlexProps;
export declare const RadioButton: {
    (props: RadioButtonProps): JSX.Element;
    defaultProps: {
        width: string;
        height: string;
    };
};
export {};
