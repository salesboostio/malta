import * as React from "react";
import * as classNames from "classnames";

export interface ColSize {
  span?: number;
  order?: number;
  offset?: number;
  push?: number;
  pull?: number;
}

export interface ColProps extends React.HTMLAttributes<HTMLDivElement> {
  span?: number;
  order?: number;
  offset?: number;
  push?: number;
  pull?: number;
  xs?: number | ColSize;
  sm?: number | ColSize;
  md?: number | ColSize;
  lg?: number | ColSize;
  xl?: number | ColSize;
  xxl?: number | ColSize;
  prefixCls?: string;
}

export class Col extends React.Component<ColProps, {}> {
  render() {
    const props: any = this.props;
    const { span, order, offset, push, pull, className, children, prefixCls = "col", ...others } = props;
    let sizeClassObj = {};
    ["xs", "sm", "md", "lg", "xl", "xxl"].forEach(size => {
      let sizeProps: ColSize = {};
      if (typeof props[size] === "number") {
        sizeProps.span = props[size];
      } else if (typeof props[size] === "object") {
        sizeProps = props[size] || {};
      }

      delete others[size];

      if (size === "xs") {
        sizeClassObj = {
          ...sizeClassObj,
          [`${prefixCls}-${sizeProps.span}`]: sizeProps.span !== undefined,
          [`order-${sizeProps.order}`]: sizeProps.order || sizeProps.order === 0,
          [`offset-${sizeProps.offset}`]: sizeProps.offset || sizeProps.offset === 0,
          [`push-${sizeProps.push}`]: sizeProps.push || sizeProps.push === 0,
          [`pull-${sizeProps.pull}`]: sizeProps.pull || sizeProps.pull === 0,
        };
      } else {
        sizeClassObj = {
          ...sizeClassObj,
          [`${prefixCls}-${size}-${sizeProps.span}`]: sizeProps.span !== undefined,
          [`order-${size}-${sizeProps.order}`]: sizeProps.order || sizeProps.order === 0,
          [`offset-${size}-${sizeProps.offset}`]: sizeProps.offset || sizeProps.offset === 0,
          [`push-${size}-${sizeProps.push}`]: sizeProps.push || sizeProps.push === 0,
          [`pull-${size}-${sizeProps.pull}`]: sizeProps.pull || sizeProps.pull === 0,
        };
      }
    });
    const classes = classNames({
      [`${prefixCls}-${span}`]: span !== undefined,
      [`order-${order}`]: order,
      [`offset-${offset}`]: offset,
      [`push-${push}`]: push,
      [`pull-${pull}`]: pull,
    }, className, sizeClassObj);

    return <div {...others} className={classes}>{children}</div>;
  }
}
