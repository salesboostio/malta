
import * as React from "react";
import { create } from "react-test-renderer";
import { Col } from "../../src/Grid/Col";

test("Col", () => {
    const node = create(<Col />).toJSON();
    expect(node).toMatchSnapshot();
});
