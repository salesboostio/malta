
import * as React from "react";
import { create } from "react-test-renderer";
import { Button } from "../src/Button";

test("Button", () => {
    const node = create(<Button>Hello World!</Button>).toJSON();
    expect(node).toMatchSnapshot();
});
