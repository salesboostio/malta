import * as React from "react";
import * as ReactDOM from "react-dom";

export class Portal extends React.Component<any> {

  el = document.createElement("div");
  modalRoot = document.getElementById("portal-root");

  componentDidMount() {
    this.modalRoot.appendChild(this.el);
  }

  componentWillUnmount() {
    this.modalRoot.removeChild(this.el);
  }

  render() {
    if (!this.el) {
      return null;
    }
    return ReactDOM.createPortal(
      this.props.children,
      this.el,
    );
  }
}
