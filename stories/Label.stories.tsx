import * as React from "react";
import { withInfo } from "@storybook/addon-info";
import { storiesOf } from "@storybook/react";
import { App, Label, Text } from "../src";

storiesOf("Components/Label", module)
  .add("default",
    withInfo({
      header: false,
      inline: true,
      propTables: false,
    })(() => {
      return (
        <App>
          <Label>
            이것은 라벨입니다.
          </Label>
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
          <Label color="black.dark">
            이것은 라벨입니다.
          </Label>
        </App>
      );
    })
  )
  .add("with bg",
    withInfo({
      header: false,
      inline: true,
      propTables: false,
    })(() => {
      return (
        <App>
          <Label bg="red">
            이것은 라벨입니다.
          </Label>
        </App>
      );
    })
  )
  .add("with fontSize",
    withInfo({
      header: false,
      inline: true,
      propTables: false,
    })(() => {
      return (
        <App>
          <Label fontSize="12px">
            이것은 라벨입니다.
          </Label>
        </App>
      );
    })
  )
  .add("with height",
    withInfo({
      header: false,
      inline: true,
      propTables: false,
    })(() => {
      return (
        <App>
          <Label height="40px">
            이것은 라벨입니다.
          </Label>
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
          <Label mt={3} mb="30px">
            이것은 라벨입니다.
          </Label>
        </App>
      );
    })
  )
  .add("with width",
    withInfo({
      header: false,
      inline: true,
      propTables: false,
    })(() => {
      return (
        <App>
          <Label width="300px">
            이것은 라벨입니다.
          </Label>
        </App>
      );
    })
  );
