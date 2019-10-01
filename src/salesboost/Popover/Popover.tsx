import React from "react";
import { ButtonContainer, Container, ContentContainer } from "./components/PopoverWrapper";
import PopoverButton from "./components/PopoverButton";
import PopoverContent from "./components/PopoverContent";
import PopoverItem from "./components/PopoverItem";

export interface Props {
  topSide?: boolean;
  bottomSide?: boolean;
  rightSide?: boolean;
  leftSide?: boolean;
}

interface State {
  show: boolean;
  closing: boolean;
}

class Popover extends React.Component<Props, State> {
  static defaultProps = {
    bottomSide: true,
    rightSide: true,
  };

  static Button = PopoverButton;
  static Content = PopoverContent;
  static Item = PopoverItem;

  popoverWrapperRef: React.RefObject<HTMLDivElement> = React.createRef();

  state = {
    show: false,
    closing: false,
  };


  componentDidMount() {
    document.addEventListener("mousedown", this.handleOutsideClick, false);
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleOutsideClick, false);
  }

  handleOutsideClick = (e: MouseEvent) => {
    if (this.popoverWrapperRef.current && !this.popoverWrapperRef.current.contains(e.target as Node)) {
      this.handleButtonClick();
    } else if (this.popoverWrapperRef.current && this.state.show) {
      this.handleButtonClick();
    }
  }

  handleButtonClick = () => {
    this.setState((state) => ({
      show: true,
      closing: state.show,
    }), () => {
      if (this.state.closing) {
        this.popoverWrapperRef.current.addEventListener("animationend", this.handleAnimationEnd);
      }
    });
  }

  handleAnimationEnd = () => {
    this.setState({
      show: false,
      closing: false,
    });
  }

  render() {
  const children = React.Children.map(this.props.children,
    (child: React.ReactElement<any>) =>
    React.cloneElement(child, {clicked: this.state.show}));
  return(
      <Container>
        <ButtonContainer onClick={this.handleButtonClick}>
          {children[0]}
        </ButtonContainer>
        {this.state.show &&
          <ContentContainer
            ref={this.popoverWrapperRef}
            show={this.state.show}
            closing={this.state.closing}
            {...this.props}
          >
            {children[1]}
          </ContentContainer>}
      </Container>
    );
  }
}

export default Popover;