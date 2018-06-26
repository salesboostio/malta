import * as React from "react";
import styled from "styled-components";
import { withInfo } from "@storybook/addon-info";
import { storiesOf } from "@storybook/react";
import { App, Line } from "../src";

storiesOf("Components/Line", module)
  .add("default", () => {
    return (
      <App>
        <Line />
        <Line width={"50%"}/>
        <Line width={"33%"}/>
        <Line width={"25%"}/>
      </App>
    );
  });
