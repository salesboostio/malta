import * as React from "react";
import { SpaceProps, ColorProps } from "styled-system";
interface Props {
    show?: boolean;
    duration?: number;
    scale?: number;
}
export declare type SpinnerProps = Props & ColorProps & SpaceProps;
export declare const Spinner: React.SFC<SpinnerProps>;
export {};
