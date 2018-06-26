import * as React from "react";
import styled from "styled-components";
import { withInfo } from "@storybook/addon-info";
import { storiesOf } from "@storybook/react";
import { App, Text, Accordion } from "../src";

const tooltipText = "사람이 아닌 프로그램이 계정에 접근하여 픽셀을 자동 설치하기 때문에 모든 정보는 안전하게 보호됩니다.\n픽셀 설치 후에는 계정 정보가 일체 파기되어 보관되지 않습니다.";

storiesOf("Components/Accordion", module)
  .add("default",
    withInfo({
      header: false,
      inline: true,
      propTables: false,
    })(() => {
      return (
        <App>
          <Accordion showText={true} text={tooltipText}>이것은 기본 아코디언입니다.</Accordion>
        </App>
      );
    })
  );
