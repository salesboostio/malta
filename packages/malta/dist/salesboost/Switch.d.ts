import * as React from "react";
import { SpaceProps } from "styled-system";
interface Props {
    checked?: boolean;
    loading?: boolean;
    disabled?: boolean;
    onClick?: any;
    style?: any;
}
export declare type SwitchProps = React.FC<Props & SpaceProps>;
export declare const Switch: SwitchProps;
export {};
