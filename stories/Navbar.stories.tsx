import * as React from "react";
import { storiesOf } from "@storybook/react";
import { App, Navbar } from "../src";

storiesOf("Components/Navbar", module)
  .add("default", () => <App><Navbar logoUrl={require("./images/img-gnb-logo.png")} /></App>)
  .add("with only title", () => {
    return <App><Navbar logoUrl={require("./images/img-gnb-logo.png")} title="이것은 제목입니다." /></App>;
  })
  .add("with title and description", () => {
    return <App><Navbar logoUrl={require("./images/img-gnb-logo.png")} title="이것은 제목입니다." description="이것은 설명입니다." /></App>;
  });