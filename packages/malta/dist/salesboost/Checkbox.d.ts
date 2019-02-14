import * as React from "react";
import { SpaceProps } from "styled-system";
interface Props {
    checked?: boolean;
    disabled?: boolean;
    onClick?: any;
    style?: any;
}
export declare type CheckboxProps = React.SFC<Props & SpaceProps>;
export declare const Checkbox: CheckboxProps;
export {};
