import * as React from "react";
import styled from "styled-components";
import {
  color,
  ColorProps,
  border,
  BorderProps,
  borderColor,
  BorderColorProps,
  borderRadius,
  BorderRadiusProps,
  fontSize,
  FontSizeProps,
  HeightProps,
  SpaceProps,
  WidthProps
} from "styled-system";
import { Flex } from "../atoms/Flex";
import { Box } from "../atoms/Box";
import { Text } from "../atoms/Text";
import { colors } from "../commons/theme";
import { Spinner } from "./Spinner";
import { getValueFromTheme } from "../commons/utils";

interface AsyncButtonProps {
  hoverColor?: string;
  label: string;
  disabled?: boolean;
  loading?: boolean;
  onClick?: any;
}

type Props = ColorProps & BorderColorProps & BorderRadiusProps & BorderProps & FontSizeProps & AsyncButtonProps & HeightProps & SpaceProps & WidthProps;

const Wrapper = styled<any>(Flex)`
  align-items: center;
  justify-content: center;
  width: fit-content;
  cursor: ${props => props.disabled ? "not-allowed" : props.loading ? "progress" : "pointer"};
  ${color}
  ${fontSize}
  ${borderColor}
  ${borderRadius}
  ${border}
  background: ${props => props.disabled ? getValueFromTheme(colors, "black._20") : getValueFromTheme(colors, props.bg)};
  &:hover {
    background: ${props => props.disabled ? colors.black._20 : getValueFromTheme(colors, props.hoverColor)};
  }
`;


export class AsyncButton extends React.Component<Props, any> {
  static defaultProps: Props;

  render() {
    const { color, fontSize, label, loading, disabled, onClick, width, ...props } = this.props;
    return (
      <Wrapper {...props} onClick={disabled ? () => { } : onClick} disabled={disabled}>
        {loading ? <Box width={width}><Spinner color="white.standard" /></Box> : <Text fontSize={fontSize} color={color}>{label}</Text>}
      </Wrapper>
    );
  }
}

AsyncButton.defaultProps = {
  borderColor: "transparent",
  borderRadius: ["26px", "30px"],
  border: "none",
  fontSize: ["h5", "h3"],
  height: ["52px", "60px"],
  px: 3,
  bg: "blue.royal",
  color: "white.standard",
  hoverColor: "blue.deep",
  disabled: false,
  loading: false,
  label: "Button",
  width: "fit-content"
};
