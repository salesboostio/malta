import * as React from "react";
import styled from "styled-components";
import { Flex } from "../atoms/Flex";
import { Image } from "../atoms/Image";
import { Box } from "../atoms/Box";
import { ResponsiveValue } from "styled-system";

interface Props {
  logoSrc: string;
  headerHeight?: ResponsiveValue<string | number>;
  imageWidth?: ResponsiveValue<string | number>;
  imageHeight?: ResponsiveValue<string | number>;
  bg?: string;
  padding?: ResponsiveValue<string | number>;
  onClick?: any;
  href?: string;
}

export const SalesboostHeader: React.SFC<Props> = (props) => {
  return (
    <Flex width="100%" height={props.headerHeight} bg={props.bg} alignItems="center" pl={props.padding}>
      <Box mr="auto" height={props.imageHeight} style={{ cursor: "pointer" }} onClick={props.onClick} width={props.imageWidth}>
        <a href={props.href}>
          <Image src={props.logoSrc} fit="contain" />
        </a>
      </Box>
      {props.children}
    </Flex>
  );
};

SalesboostHeader.defaultProps = {
  bg: undefined,
  headerHeight: ["50px", "70px"],
  imageHeight: ["28px", "34px"],
  padding: ["8px", "32px"],
  onClick: () => { }
};
