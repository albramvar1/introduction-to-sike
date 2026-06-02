import AliceToBob from "./AliceToBob";
import { render, screen } from "../test-utils";

describe("AliceToBob", () => {
    test("renders message correctly", () => {
        render(
            <AliceToBob id="alice-to-bob-test">
                <span>Message</span>
            </AliceToBob>
        );

        expect(screen.getByText("Message")).toBeInTheDocument();
    });
});
