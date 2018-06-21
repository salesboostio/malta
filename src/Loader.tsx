import * as React from "react";
import styled, { keyframes } from "styled-components";
const {
  color,
  height,
  width,
} = require("styled-system");
import {
  Box,
  Flex,
  Img,
  Text,
} from "./";

const Wrapper = styled.div`
  display : ${(props: IProps) => props.show ? "inherit" : "none"};
  height: ${(props: IProps) => props.fullScreen ? "100vh" : "inherit"};
  left: 0;
  position: ${(props: IProps) => props.fullScreen ? "absolute" : "relative"};
  right: 0;
  width: ${(props: IProps) => props.fullScreen ? "100vw" : "inherit"};
`;

const animation = keyframes`
  0%,
  80%,
  100% {
    box-shadow: 0 2.5em 0 -1.3em;
  }
  40% {
    box-shadow: 0 2.5em 0 0;
  }
`;

const common = `
  border-radius: 50%;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  -webkit-animation: ${animation} 1.8s infinite ease-in-out;
  animation: ${animation} 1.8s infinite ease-in-out;
`;

const beforeAndAfter = `
  content: "";
  position: absolute;
  top: 0;
  width: inherit;
  height: inherit;
`;

const StyledLoader = styled.div`
  ${common}
  ${color}
  ${height}
  ${width}

  font-size: 10px;
  margin: 0 auto 64px auto;
  position: relative;
  text-indent: -9999em;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
  -webkit-animation-delay: -0.16s;
  animation-delay: -0.16s;
  opacity: 0.5;

  &:before {
    ${common}
    ${beforeAndAfter}
    left: -3em;
    -webkit-animation-delay: -0.32s;
    animation-delay: -0.32s;
  }
  &:after {
    ${common}
    ${beforeAndAfter}
    left: 3em;
  }
`;

export interface IProps {
  // color
  color?: string;
  // height
  height?: number | string;
  // width
  width?: number | string;
  // options
  fullScreen?: boolean;
  image?: string;
  imageHeight?: number | string;
  imageWidth?: number | string;
  labelText?: string;
  show: boolean;
}

export class Loader extends React.Component<IProps, any> {
  public static defaultProps: IProps = {
    // color
    color: "blue.royal",
    // height
    height: "1.5em",
    // width
    width: "1.5em",
    show: false
  };

  private renderImage(src: string, imageWidth: number | string = "auto", imageHeight: number | string = "auto") {
    return (
      <Box style={{ textAlign: "center" }}>
        <Img
          src={src}
          width={imageWidth}
          height={imageHeight} />
      </Box>
    );
  }

  private renderLabelText(labelText: string) {
    return (
      <Text
        align="center"
        color="black.dark"
        fontSize={["h5", "h5", "h3"]}>
        {labelText}
      </Text>
    );
  }

  public render() {
    const {
      fullScreen,
      image,
      imageHeight,
      imageWidth,
      labelText,
      show
    } = this.props;
    return (
      <Wrapper fullScreen={fullScreen} show={show}>
        <Flex
          flexDirection="column"
          justifyContent="center"
          style={{ height: this.props.fullScreen ? "100vh" : "inherit" }}
        >
          {image ? this.renderImage(image, imageWidth, imageHeight) : ""}
          <StyledLoader {...this.props}>
          </StyledLoader>
          {labelText ? this.renderLabelText(labelText) : ""}
        </Flex>
      </Wrapper>
    );
  }
}
