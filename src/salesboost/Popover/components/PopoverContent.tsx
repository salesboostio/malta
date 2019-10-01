import React from "react";
import { Flex } from "../../../core/atom/Flex";
import { theme } from "../../theme";

const PopoverContent = ({width, children, ...rest }: any) => {
  return(
    <Flex
      bg={theme.colors.white._100}
      width={width}
      justifyContent="flex-start"
      {...rest}
    >
      <Flex width="100%" flexDirection="column">
        {children}
      </Flex>
    </Flex>
  );
};

export default PopoverContent;