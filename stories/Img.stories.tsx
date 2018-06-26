import * as React from "react";
import { withInfo } from "@storybook/addon-info";
import { storiesOf } from "@storybook/react";
import { App, Img } from "../src";

storiesOf("Components/Img", module)
  .add("default",
    withInfo({
      header: false,
      inline: true,
      propTables: false,
    })(() => {
      return (
        <App>
          <Img src={require("./images/img-gnb-logo.png")} width="125px" height="34px" />
        </App>
      );
    })
  )
  .add("with margin",
    withInfo({
      header: false,
      inline: true,
      propTables: false,
    })(() => {
      return (
        <App>
          <Img src={require("./images/img-gnb-logo.png")} width="125px" height="34px" m={3} />
        </App>
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
        <App>
          <table>
            <thead>
              <tr>
                <td> Size (xs) </td>
                <td> Size (sm) </td>
                <td> Size (md) </td>
                <td> Size (lg) </td>
                <td> Size (xl) </td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><Img src={require("./images/img-gnb-logo.png")} width="125px" height="34px" hiddendown={"xs"} /></td>
                <td><Img src={require("./images/img-gnb-logo.png")} width="125px" height="34px" hiddendown={"sm"} /></td>
                <td><Img src={require("./images/img-gnb-logo.png")} width="125px" height="34px" hiddendown={"md"} /></td>
                <td><Img src={require("./images/img-gnb-logo.png")} width="125px" height="34px" hiddendown={"lg"} /></td>
                <td><Img src={require("./images/img-gnb-logo.png")} width="125px" height="34px" hiddendown={"xl"} /></td>
              </tr>
              <tr>
                <td><Img src={require("./images/img-gnb-logo.png")} width="125px" height="34px" hiddenup={"xs"} /></td>
                <td><Img src={require("./images/img-gnb-logo.png")} width="125px" height="34px" hiddenup={"sm"} /></td>
                <td><Img src={require("./images/img-gnb-logo.png")} width="125px" height="34px" hiddenup={"md"} /></td>
                <td><Img src={require("./images/img-gnb-logo.png")} width="125px" height="34px" hiddenup={"lg"} /></td>
                <td><Img src={require("./images/img-gnb-logo.png")} width="125px" height="34px" hiddenup={"xl"} /></td>
              </tr>
            </tbody>
          </table>
        </App>
      );
    })
  );
