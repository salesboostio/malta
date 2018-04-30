
import * as React from "react";
import { create } from "react-test-renderer";
import { App } from "../../src/Layout/App";

test("App", () => {
    const node = create(<App />).toJSON();
    expect(node).toMatchSnapshot();
});
