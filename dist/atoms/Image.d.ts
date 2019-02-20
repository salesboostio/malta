import { WidthProps, HeightProps } from "styled-system";
interface ImgProps {
    fit?: string;
    position?: string;
    alt?: string;
}
declare type Props = WidthProps & HeightProps & ImgProps;
export declare const Image: import("styled-components").StyledComponent<"img", any, Props, never>;
export {};
