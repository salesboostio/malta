import * as React from "react";
import styled from "styled-components";

const {
  height,
  space,
  width,
} = require("styled-system");

const StyledImg = styled.img`
    ${height}
    ${space}
    ${width}
`;

export interface IProps {
  src: string;
  // height
  height: Array<number | string> | number | string;
  // space
  m?: Array<number | string> | number | string;
  mt?: Array<number | string> | number | string;
  mr?: Array<number | string> | number | string;
  mb?: Array<number | string> | number | string;
  ml?: Array<number | string> | number | string;
  mx?: Array<number | string> | number | string;
  my?: Array<number | string> | number | string;
  // width
  width: Array<number | string> | number | string;
}

export class Img extends React.Component<IProps, any> {
  public static defaultProps: IProps = {
    src: "",
    // height
    height: "auto",
    // space
    m: 0,
    // width
    width: 100,
  };

  public render() {
    const { width, height, ...props } = this.props;
    return (
      <StyledImg width={width as any} height={height as any} {...props} />
    );
  }
}
