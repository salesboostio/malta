import * as React from "react";
import { action } from '@storybook/addon-actions';
import { withInfo } from "@storybook/addon-info";
import { storiesOf } from "@storybook/react";
import { App, Tab, TabList } from "../src";

storiesOf("Components/Tab", module)
  .add("default",
    withInfo({
      header: false,
      inline: true,
      propTables: false,
    })(() => {
      return (
        <App>
          <TabList>
            <Tab onClick={action('click-tab(1)')} selected>Tab 1</Tab>
            <Tab onClick={action('click-tab(2)')}>Tab 2</Tab>
          </TabList>
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
          <TabList width="600px">
            <Tab onClick={action('click-tab(1)')} width={0.33} selected>Tab 1</Tab>
            <Tab onClick={action('click-tab(2)')} width={0.33}>Tab 2</Tab>
            <Tab onClick={action('click-tab(3)')} width={0.33}>Tab 3</Tab>
          </TabList>
        </App>
      );
    })
  );
