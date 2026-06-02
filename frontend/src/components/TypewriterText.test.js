import TypewriterView from "./TypewriterText";
import { render } from "@testing-library/react";

describe("TypewriterText", () => {
    test("renders typewriter container", () => {
        render(<TypewriterView />);

        expect(document.querySelector(".font-mono")).toBeInTheDocument();
    });
});
