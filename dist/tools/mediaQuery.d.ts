export interface IProps {
    hide?: Array<Boolean>;
}
export declare function generateQuery(query: string, breakpoint: string, style: string): string;
export declare function hiddenDown(breakpoint: string): string;
export declare function hiddenUp(breakpoint: string): string;
export declare function responsiveStyle(breakpoints: Array<number | string>): void;
