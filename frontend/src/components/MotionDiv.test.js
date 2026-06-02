import MotionDiv from "./MotionDiv";
import { render, screen } from "../test-utils";

describe("MotionDiv", () => {
    test("renders children with id and className", () => {
        render(
            <MotionDiv id="motion-test" className="test-class">
                <p>Motion content</p>
            </MotionDiv>
        );

        const container = document.getElementById("motion-test");
        expect(container).toBeInTheDocument();
        expect(container).toHaveClass("test-class");
        expect(screen.getByText("Motion content")).toBeInTheDocument();
    });
});
