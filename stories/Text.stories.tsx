import * as React from "react";
import styled from "styled-components";
import { withInfo } from "@storybook/addon-info";
import { storiesOf } from "@storybook/react";
import { App, Text } from "../src";

storiesOf("Components/Text", module)
  .add("default", () => {
    return (
      <App>
        <Text>이것은 기본 텍스트입니다.</Text>
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
          <div>
            <Text color="black.dark">이것은 다크 블랙 텍스트입니다. (기본값)</Text>
            <Text color="black.standard">이것은 스탠다드 블랙 텍스트입니다.</Text>
            <Text color="black.sub">이것은 서브 블랙 텍스트입니다.</Text>
            <Text color="black.hint">이것은 힌트 블랙 텍스트입니다.</Text>
            <Text color="blue.royal">이것은 로열 블루 텍스트입니다.</Text>
            <Text color="blue.deep">이것은 딥 블루 텍스트입니다.</Text>
          </div>
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
          <div>
            <Text fontSize="h1">이것은 h1 크기의 텍스트입니다.</Text>
            <Text fontSize="h2">이것은 h2 크기의 텍스트입니다.</Text>
            <Text fontSize="h3">이것은 h3 크기의 텍스트입니다. (기본값)</Text>
            <Text fontSize="h4">이것은 h4 크기의 텍스트입니다.</Text>
            <Text fontSize="h5">이것은 h5 크기의 텍스트입니다.</Text>
          </div>
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
          <div>
            <Text fontWeight="medium">이것은 fontWeight이 medium인 텍스트입니다.</Text>
            <Text fontWeight="regular">이것은 fontWeight이 regular인 텍스트입니다. (기본값)</Text>
            <Text fontWeight="demiLight">이것은 fontWeight이 demiLight인 텍스트입니다.</Text>
            <Text fontWeight="light">이것은 fontWeight이 light인 텍스트입니다.</Text>
          </div>
        </App>
      );
    })
  )
  .add("with letterSpacing",
    withInfo({
      header: false,
      inline: true,
      propTables: false,
    })(() => {
      return (
        <App>
          <div>
            <Text letterSpacing="-1px">이것은 letterSpacing이 -1px인 텍스트입니다.</Text>
            <Text letterSpacing="1px">이것은 letterSpacing이 1px인 텍스트입니다.</Text>
            <Text letterSpacing="2px">이것은 letterSpacing이 2px인 텍스트입니다.</Text>
          </div>
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
          <div>
            <Text lineHeight="1">이것은 lineHeight이 1인 텍스트입니다.</Text>
            <Text lineHeight="2">이것은 lineHeight이 2인 텍스트입니다.</Text>
          </div>
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
          <div>
            <Text m={0}>이것은 margin(m)이 0단계인 텍스트입니다. (기본값)</Text>
            <Text m={1}>이것은 margin(m)이 1단계인 텍스트입니다. m은 0~5단계까지 가능합니다.</Text>
            <Text mt={1}>이것은 margin-top(mt)이 1단계인 텍스트입니다. mt는 0~5단계까지 가능합니다.</Text>
            <Text mr={1}>이것은 margin-right(mr)이 1단계인 텍스트입니다. mr는 0~5단계까지 가능합니다.</Text>
            <Text mb={1}>이것은 margin-bottom(mb)이 1단계인 텍스트입니다. mb는 0~5단계까지 가능합니다.</Text>
            <Text ml={1}>이것은 margin-left(ml)이 1단계인 텍스트입니다. ml는 0~5단계까지 가능합니다.</Text>
            <Text p={0}>이것은 padding(p)이 0단계인 텍스트입니다. (기본값)</Text>
            <Text p={1}>이것은 padding(p)이 1단계인 텍스트입니다. p은 0~5단계까지 가능합니다.</Text>
            <Text pt={1}>이것은 padding-top(pt)이 1단계인 텍스트입니다. pt는 0~5단계까지 가능합니다.</Text>
            <Text pr={1}>이것은 padding-right(pr)이 1단계인 텍스트입니다. pr는 0~5단계까지 가능합니다.</Text>
            <Text pb={1}>이것은 padding-bottom(pb)이 1단계인 텍스트입니다. pb는 0~5단계까지 가능합니다.</Text>
            <Text pl={1}>이것은 padding-left(pl)이 1단계인 텍스트입니다. pl는 0~5단계까지 가능합니다.</Text>
          </div>
        </App>
      );
    })
  )
  .add("with textAlign",
    withInfo({
      header: false,
      inline: true,
      propTables: false,
    })(() => {
      return (
        <App>
          <div>
            <Text align="left">이것은 align이 left인 텍스트입니다. (기본값)</Text>
            <Text align="center">이것은 align이 center인 텍스트입니다.</Text>
            <Text align="right">이것은 align이 right인 텍스트입니다.</Text>
          </div>
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
          <div>
            <Text width={1}>이것은 width가 100%인 텍스트입니다. (기본값)</Text>
            <Text width={0.5}>이것은 width가 50%인 텍스트입니다.</Text>
            <Text width="150px">이것은 width가 150px인 텍스트입니다.</Text>
          </div>
        </App>
      );
    })
  );
