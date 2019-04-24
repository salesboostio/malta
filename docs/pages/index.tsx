import * as React from "react";
import {
  Icon,
} from "@salesboost/malta";

class Index extends React.Component<any, any> {

  render() {
    return (
      <div style={{ paddingTop: "60px" }}>
        <Icon name="download" color="#f00" />
        <Icon name="wand" color="#f00" />
      </div>
    );
  }
}

export default Index;
