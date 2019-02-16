import * as React from "react";
import {
  Button,
  Message,
} from "../../packages/malta";

class Index extends React.Component<any, any> {

  state = {
    show: false,
  };

  render() {
    return (
      <div style={{ paddingTop: "60px" }}>
        <Message type="info" message="TEST TEST" show={this.state.show} onDismiss={() => this.setState({ show: false })}/>
        <Button label={"Click"} onClick={() => this.setState({ show: true })}/>
      </div>
    );
  }
}

export default Index;
