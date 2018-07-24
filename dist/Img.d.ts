import * as React from "react";
export interface IProps {
    src: string;
    height: Array<number | string> | number | string;
    m?: Array<number | string> | number | string;
    mt?: Array<number | string> | number | string;
    mr?: Array<number | string> | number | string;
    mb?: Array<number | string> | number | string;
    ml?: Array<number | string> | number | string;
    mx?: Array<number | string> | number | string;
    my?: Array<number | string> | number | string;
    width: Array<number | string> | number | string;
}
export declare class Img extends React.Component<IProps, any> {
    static defaultProps: IProps;
    render(): JSX.Element;
}
