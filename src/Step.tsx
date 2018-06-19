import * as React from "react";
import styled from "styled-components";
import { colors, fontSizes, fontWeights, space } from "./theme";
const {
  height,
  width,
} = require("styled-system");
import { generateQuery } from "./tools/mediaQuery";

/*
  Total Step Width = 80% (Default Step = 4)
  StepWidth = (TotalStepWidth / StepCount)
  LeftLineOffset = -(10 / StepWidth), (absolute : -10%)
  LineWidth(Left, Right) = ? [TODO]
  DashedLineWidth = (50% + StepWidth)
  DashedLineLeft = 100 - (DashedLineWidth / 2)

  Step 3 = 26.66%, LeftLineOffset = -37.5%, LineWidth = 76% (76.66), DashedLineWidth = 76%, DashedLineLeft = 61%
  Step 4 = 20%, LeftLineOffset = -50%, LineWidth = 85%, DashedLineWidth = 70%, DashedLineLeft = 65%
  Step 5 = 16%, LeftLineOffset = -62.5%, LineWidth = 89%, DashedLineWidth = 56%, DashedLineLeft = 72%
*/
const Line = styled.hr`
  position: absolute;
  display: inline-block;
  border-color: ${colors.black._20};
  border-bottom: none;
  width: 85%;
  top: 20px;
  margin: 0;
`;

const LeftLine = Line.extend`
  left: -50%;
`;
const RightLine = Line.extend`
  right: -50%;
`;
const DashedLine = Line.extend`
  border-top: dashed 1px ${colors.black._20};
  width: 70%;
  left: 65%;
`;

const StyledStep = styled.div`
  position: relative;
  text-align: center;
`;

const StepWrap = styled.div`
  position: relative;
  display: inline-block;
  width: 20%;
  height: 60px;
  vertical-align: top;

  ${generateQuery("max-width", "sm", `
    height: auto;
  `)};

  &.step-3 {
    width: 26.66%;
    & ${LeftLine},
    & ${RightLine} {
      width: 76%;
    }
    & ${LeftLine} {
      left: -37.5%;
    }
    & ${RightLine} {
      right: -37.5%;
    }
    & ${DashedLine} {
      width: 76%;
      left: 61%;
    }
  }

  &.step-4 {
    width: 20%;
    & ${LeftLine},
    & ${RightLine} {
      width: 85%;
    }
    & ${LeftLine} {
      left: -50%;
    }
    & ${RightLine} {
      right: -50%;
    }
    & ${DashedLine} {
      width: 70%;
      left: 65%;
    }
  }

  &.step-5 {
    width: 16%;
    & ${LeftLine},
    & ${RightLine} {
      width: 89%;
    }
    & ${LeftLine} {
      left: -62.5%;
    }
    & ${RightLine} {
      right: -62.5%;
    }
    & ${DashedLine} {
      width: 56%;
      left: 72%;
    }
  }
`;

const StepItem = styled.a`
  text-decoration: none;
  color: ${colors.black.hint};
  font-weight: ${fontWeights.regular};
  cursor: pointer;

  & svg {
    fill: ${colors.blue.deep};
  }

  &.active {
    color: ${colors.blue.deep};
    font-weight: ${fontWeights.medium};
  }
  &:hover {
    color: ${colors.blue.deep};
  }
`;

const StepSeq = styled.div`
  display: block;
  font-size: ${fontSizes.h3 * 1.33}px;
  line-height: 2;
  height: 40px;
`;

const StepTitle = styled.div`
  font-size: ${fontSizes.h3}px;
  margin: 0 ${space[1]}px;

  ${generateQuery("max-width", "sm", `
    display: none;
  `)};
`;

const MobileStepTitle = styled.div`
  color: ${colors.blue.deep};
  font-size: ${fontSizes.h4}px;
  font-weight: ${fontWeights.medium};
  height: 40px;
  line-height: 40px;

  ${generateQuery("min-width", "sm", `
    display: none;
  `)};
`;

export interface IItem {
  id?: string;
  title: string;
  link?: any;
  completed?: boolean;
  callback?: Function;
}

export interface IProps {
  items: IItem[];
  current?: number;
  useRouter?: Boolean;
  // event
  onClick?: React.MouseEventHandler<HTMLElement>;
}

export class Step extends React.Component<IProps, any> {
  constructor(props: IProps) {
    super(props);
    const { current } = props;
    this.state = {
      current: current
    };
  }

  public static defaultProps: IProps = {
    items: [],
    current: 1,
    useRouter: false,
    // event
    onClick: () => {}
  };

  private renderStep(items: IItem[], useRouter: Boolean) {
    const check = <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40">
      <path d="M16.9 26.627l13.435-13.435a1 1 0 1 1 1.414 1.415L17.607 28.749a1 1 0 0 1-1.415 0l-8.485-8.486a1 1 0 1 1 1.414-1.414l7.778 7.778z" />
    </svg>;
    const stepItems = items.map((item, index) => {
      return <StepWrap className={"step-" + items.length} key={index}>
        {index == 0 && (<LeftLine />)}
        <StepItem
          className={index == this.state.current ? "active" : ""}
          href={useRouter ? undefined : item.link}
          onClick={evt => {
            if (item.callback !== undefined) item.callback(index, item.link, item.id, evt);
          }}
          >
          <StepSeq>{item.completed ? check : (index + 1)}</StepSeq>
          <StepTitle>{item.title}</StepTitle>
        </StepItem>
        {(index + 1) == items.length && (<RightLine />)}
        {(index + 1) != items.length && (<DashedLine />)}
      </StepWrap>;
    });
    return stepItems;
  }

  public render() {
    const { items, useRouter } = this.props;
    const { current } = this.state;
    return (
      <StyledStep>
        {this.renderStep(items, useRouter)}
        <MobileStepTitle>{items[current].title}</MobileStepTitle>
      </StyledStep>
    );
  }
}
