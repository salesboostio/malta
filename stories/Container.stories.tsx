import * as React from "react";
import { storiesOf } from "@storybook/react";
import { App, Container } from "../src";
import { containerWidth } from "../src/theme";

storiesOf("Components/Container", module)
  .add("default", () => {
    return (
      <App>
        <Container bg="black.hint">
          Container는 max-width가 {containerWidth}이고 가운데 정렬이 되는 Box입니다.
        </Container>
      </App>
    );
  });
