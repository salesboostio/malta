import * as React from "react";
import {
  Br,
  Typo,
} from "@salesboost/malta";

class Index extends React.Component<any, any> {

  render() {
    return (
      <div style={{ padding: "60px" }}>
        <Typo name="title_1">Title 1</Typo>
        <Typo name="title_2">Title 2</Typo>
        <Typo name="title_3">Title 3</Typo>
        <Typo name="title_4">Title 4</Typo>
        <Typo name="title_5">Title 5</Typo>
        <Br />
        <Typo name="title_3" color="#23c1a6">Custom Title 3</Typo>
        <Br />
        <Typo name="body_1">Body 1</Typo>
        <Typo name="body_2">Body 2</Typo>
        <Typo name="body_3">Body 3</Typo>
        <Typo name="body_4">Body 4</Typo>
        <Br />
        <Typo name="caption_1">Caption 1</Typo>
        <Typo name="caption_2">Caption 2</Typo>
        <Br />
        <Typo name="highlight_1">Highlight 1</Typo>
        <Typo name="highlight_2">Highlight 2</Typo>
      </div>
    );
  }
}

export default Index;
