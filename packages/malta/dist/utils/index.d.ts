import { ThemedCssFunction } from "styled-components";
export declare const hover: {
    [cssProp: string]: string;
};
export interface HoverProps {
    hover?: any;
}
export declare const transition: {
    [cssProp: string]: string;
};
export interface TransitionProps {
    transition?: any;
}
export declare const styleReducer: ThemedCssFunction<any>;
export declare const ofReducer: any;
export interface OfReducerProps {
    of?: any;
}
export declare const cursor: (props: any) => {
    cursor: any;
};
export interface CursorProps {
    cursor?: "pointer" | "default" | "progress" | "not-allowed";
}
export declare const getValueFromTheme: (theme: object, value: string) => any;
