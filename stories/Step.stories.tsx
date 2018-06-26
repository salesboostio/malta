import * as React from "react";
import { action } from '@storybook/addon-actions';
import { withInfo } from "@storybook/addon-info";
import { storiesOf } from "@storybook/react";
import { App, Step } from "../src";

const items_3_step = [
  { title: "페이스북 정보 입력" },
  { title: "Cafe24 계정 입력" },
  { title: "연락처 입력" }
];

const items_4_step = [
  { title: "페이스북 정보 입력", link: "#1" },
  { title: "카카오 픽셀 ID 입력", link: "#2" },
  { title: "Cafe24 계정 입력", link: "#3" },
  { title: "연락처 입력", link: "#4" }
];

const items_5_step = [
  { title: "페이스북 정보 입력", link: "#1" },
  { title: "구글 픽셀 ID 입력", link: "#2" },
  { title: "카카오 픽셀 ID 입력", link: "#3" },
  { title: "Cafe24 계정 입력", link: "#4" },
  { title: "연락처 입력", link: "#5" }
];

const items_with_completed = [
  { title: "페이스북 정보 입력", completed: true },
  { title: "카카오 픽셀 ID 입력", completed: true },
  { title: "Cafe24 계정 입력", completed: true },
  { title: "연락처 입력", completed: false }
];

const items_with_callback = [
  { title: "페이스북 정보 입력", callback: action('click-step(1)')  },
  { title: "카카오 픽셀 ID 입력", callback: action('click-step(2)')  },
  { title: "Cafe24 계정 입력", callback: action('click-step(3)')  },
  { title: "연락처 입력", callback: action('click-step(4)') }
]

const items_with_router_link = [
  { id: "step-link-1", title: "페이스북 정보 입력", link: "#router_link_1", callback: action('click-step(1)')  },
  { id: "step-link-2", title: "카카오 픽셀 ID 입력", link: "#router_link_2", callback: action('click-step(2)')  },
  { id: "step-link-3", title: "Cafe24 계정 입력", link: "#router_link_3", callback: action('click-step(3)')  },
  { id: "step-link-4", title: "연락처 입력", link: "#router_link_4", callback: action('click-step(4)') }
]

storiesOf("Components/Step", module)
  .add("default",
    withInfo({
      header: false,
      inline: true,
      propTables: false,
    })(() => {
      return (
        <App>
          <Step items={items_3_step} />
        </App>
      );
    })
  )
  .add("with 4 step",
    withInfo({
      header: false,
      inline: true,
      propTables: false,
    })(() => {
      return (
        <App>
          <Step items={items_4_step} />
        </App>
      );
    })
  )
  .add("with 5 step",
    withInfo({
      header: false,
      inline: true,
      propTables: false,
    })(() => {
      return (
        <App>
          <Step items={items_5_step} />
        </App>
      );
    })
  )
  .add("with callback",
    withInfo({
      header: false,
      inline: true,
      propTables: false,
    })(() => {
      return (
        <App>
          <Step items={items_with_callback} />
        </App>
      );
    })
  )
  .add("with completed",
    withInfo({
      header: false,
      inline: true,
      propTables: false,
    })(() => {
      return (
        <App>
          <Step items={items_with_completed} />
        </App>
      );
    })
  )
  .add("with current step",
    withInfo({
      header: false,
      inline: true,
      propTables: false,
    })(() => {
      return (
        <App>
          <Step current={3} items={items_with_completed} />
        </App>
      );
    })
  )
  .add("with use router",
    withInfo({
      header: false,
      inline: true,
      propTables: false,
    })(() => {
      return (
        <App>
          <Step useRouter={true} items={items_with_router_link} />
        </App>
      );
    })
  );
