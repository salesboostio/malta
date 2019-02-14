import * as React from "react";
import * as ReactDOM from "react-dom";

export class Portal extends React.Component<any> {

  el: any;
  modalRoot: any;

  constructor(props: any) {
    super(props);
    this.el = document.createElement("div");
    this.modalRoot = document.getElementById("portal-root");
  }

  componentDidMount() {
    this.modalRoot.appendChild(this.el);
  }

  componentWillUnmount() {
    this.modalRoot.removeChild(this.el);
  }

  render() {
    return ReactDOM.createPortal(
      this.props.children,
      this.el,
    );
  }
}
