import DecryptingText from "./DecryptingText";
import { render, screen } from "../test-utils";

describe("DecryptingText", () => {
    test("renders target text after animation", async () => {
        render(<DecryptingText targetText="SIKE" speed={1} />);

        expect(await screen.findByText("SIKE")).toBeInTheDocument();
    });
});
