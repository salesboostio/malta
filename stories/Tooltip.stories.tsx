import * as React from "react";
import styled from "styled-components";
import { withInfo } from "@storybook/addon-info";
import { storiesOf } from "@storybook/react";
import { App, Box, Text, Tooltip } from "../src";

const tooltipText = "사람이 아닌 프로그램이 계정에 접근하여 픽셀을 자동 설치하기 때문에 모든 정보는 안전하게 보호됩니다.\n픽셀 설치 후에는 계정 정보가 일체 파기되어 보관되지 않습니다.";

storiesOf("Components/Tooltip", module)
  .add("default", () => {
    return (
      <App>
        <Tooltip text={tooltipText}>이것은 기본 툴팁입니다. (Hover over me)</Tooltip>
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
          <Tooltip text={tooltipText} color="black.dark">이것은 다크 블랙 툴팁입니다.</Tooltip><br/>
          <Tooltip text={tooltipText} color="black.standard">이것은 스탠다드 블랙 툴팁입니다.</Tooltip><br/>
          <Tooltip text={tooltipText} color="black.sub">이것은 서브 블랙 툴팁입니다.</Tooltip><br/>
          <Tooltip text={tooltipText} color="black.hint">이것은 힌트 블랙 툴팁입니다.</Tooltip><br/>
          <Tooltip text={tooltipText} color="blue.royal">이것은 로열 블루 툴팁입니다.</Tooltip><br/>
          <Tooltip text={tooltipText} color="blue.deep">이것은 딥 블루 툴팁입니다.</Tooltip><br/>
        </App>
      );
    })
  )
  .add("with backgroundColor",
    withInfo({
      header: false,
      inline: true,
      propTables: false,
    })(() => {
      return (
        <App>
          <Tooltip text={tooltipText} bg="black.dark" borderColor="black.dark">이것은 배경이 다크 블랙인 툴팁입니다.</Tooltip><br/>
          <Tooltip text={tooltipText} bg="black.standard" borderColor="black.standard">이것은 배경이 스탠다드 블랙인 툴팁입니다.</Tooltip><br/>
          <Tooltip text={tooltipText} bg="black.sub" borderColor="black.sub">이것은 배경이 서브 블랙인 툴팁입니다.</Tooltip><br/>
          <Tooltip text={tooltipText} bg="black.hint" borderColor="black.hint">이것은 배경이 힌트 블랙인 툴팁입니다.</Tooltip><br/>
          <Tooltip text={tooltipText} bg="blue.royal" borderColor="blue.royal">이것은 배경이 로열 블루인 툴팁입니다.</Tooltip><br/>
          <Tooltip text={tooltipText} bg="blue.deep" borderColor="blue.deep">이것은 배경이 딥 블루인 툴팁입니다.</Tooltip><br/>
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
          <Tooltip text={tooltipText} fontSize="h1">이것은 h1 크기의 툴팁입니다.</Tooltip><br/>
          <Tooltip text={tooltipText} fontSize="h2">이것은 h2 크기의 툴팁입니다.</Tooltip><br/>
          <Tooltip text={tooltipText} fontSize="h3">이것은 h3 크기의 툴팁입니다.</Tooltip><br/>
          <Tooltip text={tooltipText} fontSize="h4">이것은 h4 크기의 툴팁입니다.</Tooltip><br/>
          <Tooltip text={tooltipText} fontSize="h5">이것은 h5 크기의 툴팁입니다.</Tooltip><br/>
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
          <Tooltip text={tooltipText} fontWeight="medium">이것은 fontWeight이 medium인 툴팁입니다.</Tooltip><br/>
          <Tooltip text={tooltipText} fontWeight="regular">이것은 fontWeight이 regular인 툴팁입니다.</Tooltip><br/>
          <Tooltip text={tooltipText} fontWeight="demiLight">이것은 fontWeight이 demiLight인 툴팁입니다.</Tooltip><br/>
          <Tooltip text={tooltipText} fontWeight="light">이것은 fontWeight이 light인 툴팁입니다.</Tooltip><br/>
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
          <Tooltip text={tooltipText} lineHeight="1">이것은 lineHeight이 1인 툴팁입니다.</Tooltip><br/>
          <Tooltip text={tooltipText} lineHeight="2">이것은 lineHeight이 2인 툴팁입니다.</Tooltip><br/>
        </App>
      );
    })
  )
  .add("with placement",
    withInfo({
      header: false,
      inline: true,
      propTables: false,
    })(() => {
      return (
        <App>
          <Box mx={5} p={5}>
            <Tooltip placement="top" text={tooltipText}>이것은 Top 툴팁입니다.</Tooltip><br/>
            <Tooltip placement="right" text={tooltipText}>이것은 Right 툴팁입니다.</Tooltip><br/>
            <Tooltip placement="left" text={tooltipText}>이것은 Left 툴팁입니다.</Tooltip><br/>
            <Tooltip placement="bottom" text={tooltipText}>이것은 Bottom 툴팁입니다.</Tooltip><br/>
          </Box>
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
          <Tooltip text={tooltipText} m={0}>이것은 margin(m)이 0단계인 툴팁입니다.</Tooltip><br/>
          <Tooltip text={tooltipText} m={1}>이것은 margin(m)이 1단계인 툴팁입니다. m은 0~5단계까지 가능합니다.</Tooltip><br/>
          <Tooltip text={tooltipText} mt={1}>이것은 margin-top(mt)이 1단계인 툴팁입니다. mt는 0~5단계까지 가능합니다.</Tooltip><br/>
          <Tooltip text={tooltipText} mr={1}>이것은 margin-right(mr)이 1단계인 툴팁입니다. mr는 0~5단계까지 가능합니다.</Tooltip><br/>
          <Tooltip text={tooltipText} mb={1}>이것은 margin-bottom(mb)이 1단계인 툴팁입니다. mb는 0~5단계까지 가능합니다.</Tooltip><br/>
          <Tooltip text={tooltipText} ml={1}>이것은 margin-left(ml)이 1단계인 툴팁입니다. ml는 0~5단계까지 가능합니다.</Tooltip><br/>
          <Tooltip text={tooltipText} p={0}>이것은 padding(p)이 0단계인 툴팁입니다.</Tooltip><br/>
          <Tooltip text={tooltipText} p={1}>이것은 padding(p)이 1단계인 툴팁입니다. p은 0~5단계까지 가능합니다.</Tooltip><br/>
          <Tooltip text={tooltipText} pt={1}>이것은 padding-top(pt)이 1단계인 툴팁입니다. pt는 0~5단계까지 가능합니다.</Tooltip><br/>
          <Tooltip text={tooltipText} pr={1}>이것은 padding-right(pr)이 1단계인 툴팁입니다. pr는 0~5단계까지 가능합니다.</Tooltip><br/>
          <Tooltip text={tooltipText} pb={1}>이것은 padding-bottom(pb)이 1단계인 툴팁입니다. pb는 0~5단계까지 가능합니다.</Tooltip><br/>
          <Tooltip text={tooltipText} pl={1}>이것은 padding-left(pl)이 1단계인 툴팁입니다. pl는 0~5단계까지 가능합니다.</Tooltip><br/>
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
          <Tooltip text={tooltipText} align="left">이것은 align이 left인 툴팁입니다.</Tooltip><br/>
          <Tooltip text={tooltipText} align="center">이것은 align이 center인 툴팁입니다.</Tooltip><br/>
          <Tooltip text={tooltipText} align="right">이것은 align이 right인 툴팁입니다.</Tooltip><br/>
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
          <Tooltip text={tooltipText} width={1}>이것은 width가 100%인 툴팁입니다.</Tooltip><br/>
          <Tooltip text={tooltipText} width={0.5}>이것은 width가 50%인 툴팁입니다.</Tooltip><br/>
          <Tooltip text={tooltipText} width="150px">이것은 width가 150px인 툴팁입니다.</Tooltip><br/>
        </App>
      );
    })
  );
