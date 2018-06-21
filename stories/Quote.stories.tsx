import * as React from "react";
import styled from "styled-components";
import { withInfo } from "@storybook/addon-info";
import { storiesOf } from "@storybook/react";
import { App, Quote } from "../src";

storiesOf("Components/Quote", module)
  .add("default", () => {
    return (
      <App>
        <Quote>이것은 기본 인용구입니다.</Quote>
      </App>
    );
  })
  .add("with color",
    withInfo({
      header: false,
      inline: true,
      propTables: false,
    })(() => {
      return (
        <App>
          <Quote color="black.sub">이것은 서브 블랙 인용구입니다.</Quote>
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
          <Quote fontSize="h1">이것은 h1 크기의 인용구입니다.</Quote>
        </App>
      );
    })
  )
  .add("with fontWeight",
    withInfo({
      header: false,
      inline: true,
      propTables: false,
    })(() => {
      return (
        <App>
          <Quote fontWeight="medium">이것은 fontWeight이 medium인 인용구입니다.</Quote>
        </App>
      );
    })
  )
  .add("with lineHeight",
    withInfo({
      header: false,
      inline: true,
      propTables: false,
    })(() => {
      return (
        <App>
          <Quote lineHeight="1">이것은 lineHeight이 1인 텍스트입니다.</Quote>
        </App>
      );
    })
  )
  .add("with space (margin, padding)",
    withInfo({
      header: false,
      inline: true,
      propTables: false,
    })(() => {
      return (
        <App>
          <Quote m={1}>이것은 margin(m)이 1단계인 텍스트입니다. m은 0~5단계까지 가능합니다.</Quote>
        </App>
      );
    })
  );
