import * as React from "react";
import ReactSelect from "react-select";
import styled from "styled-components";
import { colors, fontSizes, fontWeights, space } from "./theme";

const Wrapper = styled.div`
  width: 100%;
`;

const Label = styled.label`
  color: ${colors.black.dark};
  display: inline-block;
  font-size: ${fontSizes.h4}px;
  font-weight: ${fontWeights.demiLight};
  margin-bottom: ${space[1]}px;
`;

export interface IItem {
  id: string;
  label: string;
  value: any;
}

export interface IProps {
  label?: string;
  placeholder?: string;
  disabled?: boolean;
  items: IItem[];
  onChange?: React.MouseEventHandler<HTMLElement>;
}

const styles = {
  control: (styles: any, props: any) => {
    const { isDisabled } = props;
    return {
      ...styles,
      backgroundColor: isDisabled ? colors.black._5 : colors.white.standard,
      borderWidth: 1,
      borderRadius: 2,
      borderColor: colors.black._20,
      boxShadow: `0 2px 6px 2px ${colors.black._3}`,
      height: "60px",
    };
  },
  valueContainer: (styles: any) => {
    return {
      ...styles,
      color: colors.black.dark,
      fontSize: fontSizes.h3,
      fontWeight: fontWeights.regular,
      padding: `0 ${space[2]}px`,
    };
  },
  indicatorSeparator: (styles: any) => {
    return {
      display: "none",
    };
  },
  placeholder: (styles: any) => {
    return {
      ...styles,
      color: colors.black.hint,
      fontSize: fontSizes.h3,
      fontWeight: fontWeights.regular,
    };
  },
  menu: (styles: any) => {
    return {
      ...styles,
      borderRadius: 2,
    };
  },
  option: (styles: any, props: any) => {
    const { isFocused } = props;
    return {
      ...styles,
      alignItems: "center",
      backgroundColor: isFocused ? colors.black._5 : colors.white.standard,
      color: colors.black.dark,
      display: "flex",
      fontSize: fontSizes.h3,
      fontWeight: fontWeights.regular,
      height: "60px",
      padding: `0 ${space[2]}px`,
      ":active": {
        backgroundColor: colors.black._5,
      },
    };
  },
};

export class Select extends React.Component<IProps, any> {
  public static defaultProps: IProps = {
    items: [],
  };

  private renderLabel() {
    const { label } = this.props;
    if (label) {
      return <Label>{label}</Label>;
    }
    return null;
  }

  public render() {
    const { placeholder, disabled, items, onChange } = this.props;
    return (
      <Wrapper>
        {this.renderLabel()}
        <ReactSelect
          placeholder={placeholder || ""}
          isDisabled={disabled}
          name="item"
          options={items}
          styles={styles}
          onChange={onChange}
        />
      </Wrapper>
    );
  }
}
