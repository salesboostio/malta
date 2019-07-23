import * as React from "react";
import styled from "styled-components";
import {
  flex,
  FlexProps,
  height,
  HeightProps,
  maxHeight,
  MaxHeightProps,
  maxWidth,
  MaxWidthProps,
  space,
  SpaceProps,
  width,
  WidthProps,
} from "styled-system";

const objectFit = (props: any) => `object-fit: ${props.objectFit};`;
const objectPosition = (props: any) => `object-position: ${props.objectPosition};`;

interface Props {
  objectFit?: string;
  objectPosition?: string;
  alt?: string;
}

export type ImageProps = WidthProps & HeightProps & Props & FlexProps & MaxWidthProps & MaxHeightProps & SpaceProps;

export const Image = styled.img<ImageProps>`
  box-sizing: border-box;
  flex-shrink: 0;
  overflow: hidden;
  ${space}
  ${width}
  ${height}
  ${objectFit}
  ${objectPosition}
  ${flex}
  ${maxWidth}
  ${maxHeight}
`;

Image.defaultProps = {
  width: "100%",
  height: "100%",
  alt: "img",
  objectFit: "cover",
  objectPosition: "50% 50%",
};
