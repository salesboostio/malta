import * as React from "react";
import styled from "styled-components";
const { color, bottom, right } = require("styled-system");

const hoverColor = (props: any) => `background: ${props.hoverColor}`;
const hoverDisplay = (props: any) => props.hoverDisplay;

const Container = styled.div`
  position: fixed;
  display: flex;
  z-index: 1050;
  border-radius: 50%;
  cursor: pointer;
  width: 60px;
  height: 60px;
  justify-content: center;
  ${bottom}
  ${right}
  ${color}
  &:hover {
    ${hoverColor}
    ${hoverDisplay}
  }
`;

export class FloatingButton extends React.Component<any, any> {
  public render() {
    return (
      <Container {...this.props} />
    );
  }
}