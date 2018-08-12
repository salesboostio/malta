import * as React from "react";
import styled from "styled-components";

const fit = (props: any) => `object-fit: ${props.fit};`;
const position = (props: any) => `object-position: ${props.position};`;

export const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  ${fit}
  ${position}
`;

StyledImage.defaultProps = {
  alt: "img"
};

export class Image extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }

  public render() {
    const { children, ...props } = this.props;
    return (
      <StyledImage {...props}>{children}</StyledImage>
    );
  }
}