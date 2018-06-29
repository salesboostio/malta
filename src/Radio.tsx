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
  ${color}
  ${fontSize}
  ${fontWeight}
  ${lineHeight}
  position: relative;
  pointer-events: none;
  top: 2px;
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
  // event
  onClick?: React.MouseEventHandler<HTMLElement>;
  onChange?: React.ChangeEventHandler<HTMLElement>;
  // options
  size?: number | string;
  style?: Object;
}

export class Radio extends React.Component<IProps, any> {
  public static defaultProps: IProps = {
    checked: false,
    // color
    color: "black.standard",
    // display
    display: "block",
    // fontSize
    fontSize: "h4",
    // fontWeight
    fontWeight: "regular",
    // lineHeight
    lineHeight: "1.44",
    // space
    m: 1,
    // event
    onClick: () => { },
    onChange: () => { },
    // options
    size: 18,
  };

  public render() {
    const { checked, display, name, onClick, onChange, size, style, m, p, value } = this.props;

    return (
      <Wrapper
        style={style}
        value={value}
        {...{ display, m, p }}>
        <Input type="radio"
          name={name}
          value={value}
          defaultChecked={checked}
          onClick={onClick}
          onChange={onChange}
          size={Number(size)} />
        <StyledRadio size={size}>
          <svg width={size + "px"} height={size + "px"} viewBox={"0 0 " + size + " " + size}>
            <circle cx={Number(size) / 2} cy={Number(size) / 2} />
          </svg>
        </StyledRadio>
        <Label {...this.props}>{this.props.children}</Label>
      </Wrapper>
    );
  }
}
