import About from "./About";
import { render, screen } from "../test-utils";
import {fireEvent} from "@testing-library/react";

window.scrollTo = jest.fn();

describe("About", () => {

    afterEach(() => {
        jest.resetAllMocks();
    });
    afterAll(() => {
        jest.clearAllMocks();
    });

    test("renders about section correctly", () => {
        render(<About />);

        expect(screen.getByText(/^About$/i)).toBeInTheDocument();
        expect(screen.getByText(/^Links of interest$/i)).toBeInTheDocument();
        expect(screen.getByText(/^Relevant articles$/i)).toBeInTheDocument();
    });

    test("handle scroll works correctly", () => {
        render(<About />);

        expect(document.getElementById("about")).not.toHaveClass("show");
        window.scrollTo(0, 150);
        fireEvent.scroll(window);
        expect(document.getElementById("about")).toHaveClass("show");
    })
});
