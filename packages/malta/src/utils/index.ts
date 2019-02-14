import { style } from "styled-system";
import { css, ThemedCssFunction } from "styled-components";

export const hover = style({
  prop: "hover",
  cssProperty: ":hover"
});

export interface HoverProps {
  hover?: any;
}

export const transition = style({
  prop: "transition",
});

export interface TransitionProps {
  transition?: any;
}

export const styleReducer: ThemedCssFunction<any> = (...styles: any[]) => (css as any)("", styles);
export const ofReducer: any = (props: any) => styleReducer(props.of);

export interface OfReducerProps {
  of?: any;
}

export const cursor = (props: any) => ({
  cursor: props.cursor
});

export interface CursorProps {
  cursor?: "pointer" | "default" | "progress" | "not-allowed";
}

const get = (from: object, selector: string) =>
  selector
    .replace(/\[([^\[\]]*)\]/g, ".$1.")
    .split(".")
    .filter((t: any) => t !== "")
    .reduce((prev: any, cur: any): any => prev && prev[cur], from);

export const getValueFromTheme = (theme: object, value: string) =>
  get(theme, value) ? get(theme, value) : value;
