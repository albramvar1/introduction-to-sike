import BobToAlice from "./BobToAlice";
import { render, screen } from "../test-utils";

describe("BobToAlice", () => {
    test("renders message correctly", () => {
        render(
            <BobToAlice id="bob-to-alice-test">
                <span>Message</span>
            </BobToAlice>
        );

        expect(screen.getByText("Message")).toBeInTheDocument();
    });
});
