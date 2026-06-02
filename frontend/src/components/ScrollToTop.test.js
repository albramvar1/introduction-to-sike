import ScrollToTop from "./ScrollToTop";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

describe("ScrollToTop", () => {
    test("scrolls to top on mount", () => {
        const scrollTo = jest.fn();
        document.documentElement.scrollTo = scrollTo;

        render(
            <MemoryRouter initialEntries={["/"]}>
                <ScrollToTop />
            </MemoryRouter>
        );

        expect(scrollTo).toHaveBeenCalledWith({
            top: 0,
            left: 0,
            behavior: "instant",
        });
    });
});
