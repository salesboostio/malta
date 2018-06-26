import * as React from "react";
import { withInfo } from "@storybook/addon-info";
import { storiesOf } from "@storybook/react";
import { Box, Flex } from "../src";

storiesOf("Components/Grid (Flex, Box)", module)
  .add("default",
    withInfo({
      header: false,
      inline: true,
      propTables: false,
    })(() => {
      return (
        <Flex>
          <Box width={1 / 2} px={2} style={{ backgroundColor: "red" }}>
            Half width
          </Box>
          <Box width={1 / 2} px={2} style={{ backgroundColor: "blue" }}>
            Half width
          </Box>
        </Flex>
      );
    })
  )
  .add("with responsive order",
    withInfo({
      header: false,
      inline: true,
      propTables: false,
    })(() => {
      return (
        <Flex>
          <Box width={1 / 2} order={[0, 1]} px={2} style={{ backgroundColor: "red" }}>
            Half width
          </Box>
          <Box width={1 / 2} order={[1, 0]} px={2} style={{ backgroundColor: "blue" }}>
            Half width
          </Box>
        </Flex>
      );
    })
  )
  .add("with responsive hide",
    withInfo({
      header: false,
      inline: true,
      propTables: false,
    })(() => {
      return (
        <Flex>
          <Box width={1} hiddenup={"sm"} px={2} style={{ backgroundColor: "red" }}>
            Visible when less than size(sm)
          </Box>
          <Box width={1} hiddendown={"sm"} px={2} style={{ backgroundColor: "blue" }}>
            Visible when equal or greater than size(sm)
          </Box>
        </Flex>
      );
    })
  );
