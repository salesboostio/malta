import * as React from "react";
import styled from "styled-components";
import { withInfo } from "@storybook/addon-info";
import { storiesOf } from "@storybook/react";
import { App, Loader } from "../src";

storiesOf("Components/Loader", module)
  .add("default",
    withInfo({
      header: false,
      inline: true,
      propTables: false,
    })(() => {
      return (
        <App>
          <Loader show />
        </App>
      );
    })
  )
  .add("with all options",
    withInfo({
      header: false,
      inline: true,
      propTables: false,
    })(() => {
      return (
        <App>
          <Loader
            fullScreen
            image={require("../stories/images/img-logo.png")}
            imageWidth="40px"
            imageHeight="40px"
            labelText={"입력하신 쇼핑몰 사이트의 픽셀을\n분석하고 있습니다."}
            show />
        </App>
      );
    })
  )
  .add("with color",
    withInfo({
      header: false,
      inline: true,
      propTables: false,
    })(() => {
      return (
        <App>
          <Loader color="red" show />
        </App>
      );
    })
  )
  .add("with full screen",
    withInfo({
      header: false,
      inline: true,
      propTables: false,
    })(() => {
      return (
        <App>
          <Loader fullScreen labelText={"입력하신 쇼핑몰 사이트의 픽셀을\n분석하고 있습니다."} show />
        </App>
      );
    })
  ).add("with label text",
    withInfo({
      header: false,
      inline: true,
      propTables: false,
    })(() => {
      return (
        <App>
          <Loader labelText={"입력하신 쇼핑몰 사이트의 픽셀을\n분석하고 있습니다."} show />
        </App>
      );
    })
  )
  .add("with image",
    withInfo({
      header: false,
      inline: true,
      propTables: false,
    })(() => {
      return (
        <App>
          <Loader image={require("../stories/images/img-logo.png")} imageWidth="40px" imageHeight="40px" show />
        </App>
      );
    })
  );
