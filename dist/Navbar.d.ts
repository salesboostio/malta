/// <reference types="react" />
import * as React from "react";
export interface IProps {
    logoUrl: string;
    title?: string;
    description?: string;
}
export declare class Navbar extends React.Component<IProps, any> {
    render(): JSX.Element;
}
