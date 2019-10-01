import React from "react";
import styled from "styled-components";
import { IconName } from "../../../core/atom/Icon";
import { Flex } from "../../../core/atom/Flex";
import { Split } from "../../../core/atom/Split";
import { Image } from "../../../core/atom/Image";
import { Icon } from "../../../core/atom/Icon";
import { Text, TextProps } from "../../../core/atom/Text";
import { theme } from "../../theme";
import { isImageFile, setCssDeclaration } from "../../../utils";

export interface Props {
  label?: string;
  icon?: string | IconName;
  iconMargin?: number;
  line?: boolean;
  length?: number;
  hoverColor?: string;
  hover?: boolean;
  color?: string;
  rightSide?: boolean;
  linkType?: "route" | "href";
  onClick?: () => void;
}

interface TextBlockProps {
  hoverColor?: string;
  hover?: boolean;
  reverse?: boolean;
}

export type PopoverItemProps = Props &  TextProps;

const direction = ({ flexDirection, reverse }: any) =>
setCssDeclaration("flex-direction", `${flexDirection === "column" ? "column" : "row"}${reverse ? "-reverse" : ""}`);

const TextBlock = styled(Flex)<TextBlockProps>`
  ${direction};
  transition: background-color 0.3s ease-out;

  :hover {
      background:${({ hover, hoverColor }) => hover ? hoverColor : "none"};
    }
`;

const Item: React.FC<PopoverItemProps> = ({
  label,
  icon,
  iconMargin,
  rightSide,
  line,
  length,
  linkType,
  hover,
  hoverColor,
  color,
  fontSize,
  onClick,
  pl, pr, pt, pb,
  ml, mr, mt, mb,
  height, width,
  lineHeight,
  ...rest }) => {
  const as = linkType === "href" ? "a" : "div";
  const align = line ? "space-between" : rightSide ? "flex-end" : "flex-start";
  const icMargin = rightSide ? {ml: iconMargin} :  {mr: iconMargin};
  const ImageComponent = isImageFile(icon) ?
  <Flex width={40} height={40} {...icMargin}>
    <Image src={icon} />
  </Flex> :
  <Flex {...icMargin}>
    <Icon name={icon as IconName} />
  </Flex>;
  const layOutProps = {pl, pr, pt, pb,
    ml, mr, mt, mb,
    height, width};
  return(
    <TextBlock
      as={as}
      justifyContent={align}
      alignItems="center"
      reverse={rightSide}
      hoverColor={hoverColor}
      hover={hover}
      onClick={onClick}
      cursor="pointer"
      {...layOutProps}
      {...rest}
    >
      {icon && ImageComponent}
      <Text
        color={color}
        demiLight
        fontSize={fontSize}
        height={lineHeight}
        {...rest}
      >
        {label}
      </Text>
      {line && <Split horizontal length={length} />}
    </TextBlock>
  );
};

Item.defaultProps = {
  rightSide: false,
  iconMargin: 8,
  lineHeight: "normal",
  hoverColor: theme.colors.gray._100,
};

export default Item;

