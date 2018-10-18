import * as React from "react";
import { ColorProps, BorderProps, BorderColorProps, BorderRadiusProps, FontSizeProps, HeightProps, SpaceProps, WidthProps } from "styled-system";
interface AsyncButtonProps {
    hoverColor?: string;
    label: string;
    disabled?: boolean;
    loading?: boolean;
    onClick?: any;
}
declare type Props = ColorProps & BorderColorProps & BorderRadiusProps & BorderProps & FontSizeProps & AsyncButtonProps & HeightProps & SpaceProps & WidthProps;
export declare class AsyncButton extends React.Component<Props, any> {
    static defaultProps: Props;
    render(): JSX.Element;
}
export {};
