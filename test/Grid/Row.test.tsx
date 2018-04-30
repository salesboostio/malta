
import * as React from "react";
import { create } from "react-test-renderer";
import { Row } from "../../src/Grid/Row";

test("Row", () => {
    const node = create(<Row />).toJSON();
    expect(node).toMatchSnapshot();
});
