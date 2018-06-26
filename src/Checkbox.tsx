import * as React from "react";
import styled from "styled-components";
import { colors, fontSizes, fontWeights } from "./theme";

const {
  color,
  fontSize,
  fontWeight,
  lineHeight,
  space,
} = require("styled-system");

const StyledCheckbox = styled.div`
  position: relative;
  float: left;
  margin-right: 8px;
  width: ${(props: IProps) => props.size}px;
  height: ${(props: IProps) => props.size}px;
  border-radius: 2px;
  background-color: ${colors.white.standard};
  border: solid 1px ${colors.black._20};

  & svg {
    position: absolute;
    & polyline {
      fill: none;
      stroke: ${colors.white.standard};
      stroke-width: ${(props: IProps) => props.lineThickness};
      stroke-linecap: round;
      stroke-linejoin: round;
      stroke-dasharray: ${(props: IProps) => props.size}px;
      stroke-dashoffset: ${(props: IProps) => props.size}px;
      transition: all .3s ease;
    }
  }
`;

const Label = styled.span`
  display: table-cell;
  height: ${(props: IProps) => Number(props.size) + 2}px;
  pointer-events: none;
  vertical-align: middle;
`;

const Input = styled.input`
  position: absolute;
  z-index: -1;
  width: 0;
  height: 0;
  opacity: 0;
`;

const Wrapper = styled.label`
  ${fontSize}
  ${fontWeight}
  ${lineHeight}
  ${space}

  user-select: none;
  display: inline-block;
  cursor: pointer;
  margin-bottom: 0;

  & ${Label} {
    ${(props: IProps) => props.checked && `
      color: ${colors.blue.royal};
    `};
    ${(props: IProps) => props.disabled && `
      color: ${colors.black.sub};
    `};
  }
  & ${StyledCheckbox} {
    ${(props: IProps) => props.checked && `
    background-color: ${colors.blue.royal};
    border-color: ${colors.blue.royal};
    & svg {
      & polyline {
        stroke-dashoffset: 0;
      }
    }
    `};
    ${(props: IProps) => props.disabled && `
      border-color: ${colors.black._20};
      cursor: not-allowed;
    `};
    ${(props: IProps) => props.checked && props.disabled && `
      background-color: ${colors.black.sub};
    `};
    ${(props: IProps) => !props.checked && props.disabled && `
      background-color: ${colors.black._10};
    `};
  }

  &:hover {
    & ${Label} {
      ${(props: IProps) => props.checked && !props.disabled && `
        color: ${colors.blue.deep};
      `};
    }
    & ${StyledCheckbox} {
      ${(props: IProps) => props.checked && !props.disabled && `
        background-color: ${colors.blue.deep};
        border-color: ${colors.blue.deep};
      `};
      ${(props: IProps) => !props.checked && !props.disabled && `
        border-color: ${colors.black.standard};
      `};
    }
  }
`;

export interface IProps {
  // attribue
  id?: string;
  name?: string;
  checked?: boolean;
  disabled?: boolean;

  // event
  onChange?: React.ChangeEventHandler<HTMLElement>;

  // color
  color?: string;
  // fontSize
  fontSize?: number | string;
  // fontWeight
  fontWeight?: number | string;
  // lineHeight
  lineHeight?: number | string;
  // space
  m?: number | string;
  mt?: number | string;
  mr?: number | string;
  mb?: number | string;
  ml?: number | string;
  p?: number | string;
  pt?: number | string;
  pr?: number | string;
  pb?: number | string;
  pl?: number | string;
  // options
  lineThickness?: number | string;
  size?: number | string;
}

export class Checkbox extends React.Component<IProps, any> {
  private renderCheckLinePoints(size: number) {
    return ( size * 0.2 ) + " " + ( size * 0.45 ) + " "
    + ( size * 0.45 ) + " " + ( size * 0.72 ) + " "
    + ( size * 0.8 ) + " " + ( size * 0.25 );
  }

  public static defaultProps: IProps = {
    checked: false,
    // color
    color: "black.dark",
    // fontSize
    fontSize: "h3",
    // fontWeight
    fontWeight: "regular",
    // lineHeight
    lineHeight: "1.44",

    // event
    onChange: () => {},
    // options
    lineThickness: 3,
    size: 24
  };

  public render() {
    const { checked, disabled, lineThickness, id, name, onChange, size } = this.props;

    return (
      <Wrapper {...{checked, disabled}}>
        <Input type="checkbox"
          id={id}
          name={name}
          checked={checked}
          disabled={disabled}
          onChange={onChange}/>
        <StyledCheckbox lineThickness={lineThickness} size={size}>
          <svg width={size + "px"} height={size + "px"} viewBox={"0 0 " + size + " " + size}>
            <polyline points={this.renderCheckLinePoints(Number(size))}></polyline>
          </svg>
        </StyledCheckbox>
        <Label size={size}>{this.props.children}</Label>
      </Wrapper>
    );
  }
}
