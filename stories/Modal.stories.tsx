import * as React from "react";
import { action } from '@storybook/addon-actions';
import { withInfo } from "@storybook/addon-info";
import { storiesOf } from "@storybook/react";
import { App, Modal } from "../src";

storiesOf("Components/Modal", module)
  .add("default",
    withInfo({
      header: false,
      inline: true,
      propTables: false,
    })(() => {
      return (
        <App>
          <Modal
            onRequestClose={action('click-close')}
            open={true}>
            <p>Modal Contents</p>
          </Modal>
        </App>
      );
    })
  )
  .add("with Title",
    withInfo({
      header: false,
      inline: true,
      propTables: false,
    })(() => {
      return (
        <App>
          <Modal
            modalHeading="Modal Title"
            onRequestClose={action('click-close')}
            open={true}>
            <p>Modal Contents</p>
          </Modal>
        </App>
      );
    })
  )
  .add("with Width",
    withInfo({
      header: false,
      inline: true,
      propTables: false,
    })(() => {
      return (
        <App>
          <Modal
            onRequestClose={action('click-close')}
            open={true}
            width="800px">
            <p>Modal Contents</p>
          </Modal>
        </App>
      );
    })
  );
