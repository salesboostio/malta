import { WidthProps, HeightProps, FlexProps, MaxWidthProps, MaxHeightProps, SpaceProps } from "styled-system";
interface Props {
    objectFit?: string;
    objectPosition?: string;
    alt?: string;
}
export declare type ImageProps = WidthProps & HeightProps & Props & FlexProps & MaxWidthProps & MaxHeightProps & SpaceProps;
export declare const Image: import("styled-components").StyledComponent<"img", any, ImageProps, never>;
export {};
