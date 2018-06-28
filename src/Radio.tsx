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

const StyledRadio = styled.div`
  position: relative;
  display: inline-block;
  margin-right: 12px;
  width: ${(props: IProps) => props.size}px;
  height: ${(props: IProps) => props.size}px;
  border-radius: 50%;
  background-color: ${colors.white.standard};
  border: solid 1px ${colors.black._20};
  vertical-align: middle;

  & svg {
    position: absolute;
    & circle {
      fill: ${colors.white.standard};
      stroke: none;
      r: 0;
      transition: all .3s ease;
    }
  }
`;

const Label = styled.span`
  pointer-events: none;
  vertical-align: middle;
`;

const Input = styled.input`
  position: absolute;
  z-index: -1;
  width: 0;
  height: 0;
  opacity: 0;

  &:checked {
    & ~ ${Label} {
      color: ${colors.blue.royal} !important;
    }
    & ~ ${StyledRadio} {
      background-color: ${colors.blue.royal};
      border-color: ${colors.blue.royal} !important;
      & svg {
        & circle {
          r: ${(props: IProps) => (Number(props.size) * 0.2)};
        }
      }
    }
    &:hover {
      & ${StyledRadio} {
        border-color: ${colors.blue.royal};
      }
    }
  }
`;

const Wrapper = styled.label`
  ${fontSize}
  ${fontWeight}
  ${lineHeight}
  ${space}

  user-select: none;
  display: ${(props: IProps) => props.display};
  cursor: pointer;

  &:hover {
    & ${StyledRadio} {
      border-color: ${colors.black.standard};
    }
  }
`;

export interface IProps {
  name?: string;
  value?: string;
  checked?: boolean;
  // color
  color?: string;
  // display
  display?: string;
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
  size?: number | string;
}

export class Radio extends React.Component<IProps, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      selectedValue: undefined
    };
    this.handleSelection = this.handleSelection.bind(this);
  }

  handleSelection(event: any) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      selectedValue: value
    });
  }

  public static defaultProps: IProps = {
    checked: false,
    // color
    color: "black.dark",
    // display
    display: "block",
    // fontSize
    fontSize: "h3",
    // fontWeight
    fontWeight: "regular",
    // lineHeight
    lineHeight: "1.44",
    // space
    m: 1,
    // options
    size: 18,
  };

  public render() {
    const { checked, name, size, value } = this.props;

    return (
      <Wrapper {...this.props}>
        <Input type="radio"
          name={name}
          value={value}
          defaultChecked={checked}
          onClick={this.handleSelection}
          size={Number(size)} />
        <StyledRadio size={size}>
          <svg width={size + "px"} height={size + "px"} viewBox={"0 0 " + size + " " + size}>
            <circle cx={Number(size) / 2} cy={Number(size) / 2} />
          </svg>
        </StyledRadio>
        <Label>{this.props.children}</Label>
      </Wrapper>
    );
  }
}
