export const get = (from: object, selector: string) =>
  selector
    .replace(/\[([^\[\]]*)\]/g, ".$1.")
    .split(".")
    .filter((t: any) => t !== "")
    .reduce((prev: any, cur: any): any => prev && prev[cur], from);

export const getValueFromTheme = (theme: object, value: string) =>
  get(theme, value) ? get(theme, value) : value;
