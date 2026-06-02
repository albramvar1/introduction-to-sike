import Characters from "./Characters";
import { render, screen } from "../test-utils";

describe("Characters", () => {
    test("renders alice and bob correctly", () => {
        render(<Characters />);

        expect(screen.getByAltText("alice")).toBeInTheDocument();
        expect(screen.getByAltText("bob")).toBeInTheDocument();
    });

    test("hides alice when requested", () => {
        render(<Characters hideAlice={true} />);

        expect(screen.getByAltText("alice")).toHaveStyle({ visibility: "hidden" });
        expect(screen.getByAltText("bob")).not.toHaveStyle({ visibility: "hidden" });
    });

    test("hides bob when requested", () => {
        render(<Characters hideBob={true} />);

        expect(screen.getByAltText("alice")).not.toHaveStyle({ visibility: "hidden" });
        expect(screen.getByAltText("bob")).toHaveStyle({ visibility: "hidden" });
    });
});
