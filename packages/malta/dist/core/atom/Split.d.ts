import * as React from "react";
import { SpaceProps, ColorProps, AlignSelfProps, JustifySelfProps, ResponsiveValue, TLengthStyledSystem } from "styled-system";
interface Props {
    horizontal?: boolean;
    vertical?: boolean;
    length?: ResponsiveValue<TLengthStyledSystem>;
}
export declare type SplitProps = Props & ColorProps & AlignSelfProps & JustifySelfProps & SpaceProps;
export declare const Split: React.SFC<SplitProps>;
export {};
