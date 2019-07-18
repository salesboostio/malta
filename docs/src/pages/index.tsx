import * as React from "react";
import {
  App,
  Button,
  Flex,
  Split,
  Text,
  theme,
  Typo,
} from "@salesboost/malta";

class Index extends React.Component<any, any> {

  render() {
    return (
      <App theme={theme}>
        <div style={{ padding: "60px" }}>
          <Typo name="title_1">Typography</Typo>
          <Flex mt={4} flexDirection="column">
            <Flex flexDirection="row" alignItems="baseline">
              <Typo name="title_1">Title 1</Typo>
              <Typo ml={2} name="title_2">Title 2</Typo>
              <Typo ml={2} name="title_3">Title 3</Typo>
              <Typo ml={2} name="title_4">Title 4</Typo>
              <Typo ml={2} name="title_5">Title 5</Typo>
            </Flex>
            <Flex flexDirection="row" alignItems="baseline">
              <Typo ml={2} name="body_1">Body 1</Typo>
              <Typo ml={2} name="body_2">Body 2</Typo>
              <Typo ml={2} name="body_3">Body 3</Typo>
              <Typo ml={2} name="body_4">Body 4</Typo>
            </Flex>
            <Flex flexDirection="row" alignItems="baseline">
              <Typo ml={2} name="caption_1">Caption 1</Typo>
              <Typo ml={2} name="caption_2">Caption 2</Typo>
              <Typo ml={2} name="highlight_1">Highlight 1</Typo>
              <Typo ml={2} name="highlight_2">Highlight 2</Typo>
            </Flex>
          </Flex>
          <Typo mt={6} name="title_1">Button</Typo>
          <Flex mt={4} flexDirection="column">
            <Typo name="body_1">Normal</Typo>
            <Flex mt={2} flexDirection="row">
              <Button label="Solid" />
              <Button ml={1} line label="Line" />
            </Flex>
            <Typo mt={3} name="body_1">Disabled</Typo>
            <Flex mt={2} flexDirection="row">
              <Button disabled label="Solid" />
              <Button ml={1} line disabled label="Line" />
            </Flex>
            <Typo mt={3} name="body_1">Loading</Typo>
            <Flex mt={2} flexDirection="row">
              <Button loading label="Solid" />
              <Button ml={1} loading line label="Line" />
            </Flex>
          </Flex>
          <Typo mt={5} name="title_1">Split</Typo>
          <Split vertical length="20px" bg="#f00" />
          <Split horizontal length="20px" />
          <Typo mt={6} name="title_1">Custom</Typo>
          <Flex flexDirection="column">
            <Text hover={{ color: "#f00" }} >Of Text</Text>
          </Flex>
        </div>
      </App>
    );
  }
}

export default Index;
