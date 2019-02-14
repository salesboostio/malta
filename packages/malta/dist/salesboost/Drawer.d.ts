import * as React from "react";
import { SpaceProps, WidthProps, ColorProps } from "styled-system";
interface Props {
    slide?: number[];
    left?: boolean;
    render?: ({ handleClose }: {
        handleClose: Function;
    }) => any;
    opener?: ({ handleOpen }: {
        handleOpen: Function;
    }) => any;
}
export declare type DrawerProps = Props & ColorProps & WidthProps & SpaceProps;
export declare class Drawer extends React.Component<DrawerProps, {
    open: boolean;
    closing: boolean;
}> {
    static defaultProps: any;
    state: {
        open: boolean;
        closing: boolean;
    };
    handleOpen: () => void;
    handleClose: () => void;
    render(): JSX.Element;
}
export {};
