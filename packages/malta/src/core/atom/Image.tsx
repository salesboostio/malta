import * as React from "react";
import styled from "styled-components";
import { Block } from "./Block";

const objectFit = (props: any) => `object-fit: ${props.objectFit};`;
const objectPosition = (props: any) => `object-position: ${props.objectPosition};`;

export interface ImageProps {
  objectFit?: string;
  objectPosition?: string;
  alt?: string;
  src?: string;
}

const Img = styled.img<ImageProps>`
  box-sizing: border-box;
  flex-shrink: 0;
  overflow: hidden;
  width: 100%;
  height: 100%;
  ${objectFit}
  ${objectPosition}
`;

export const Image = (props: ImageProps) => {
  const { alt, src, objectFit, objectPosition, ...styles } = props;
  return <Block {...styles}>
    <Img src={src} alt={alt} objectFit={objectFit} objectPosition={objectPosition} />
  </Block>;
};

Image.defaultProps = {
  width: "100%",
  height: "100%",
  alt: "img",
  objectFit: "cover",
  objectPosition: "50% 50%",
  src: "",
};
