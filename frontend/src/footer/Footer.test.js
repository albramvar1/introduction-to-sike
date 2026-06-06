import Footer from "./Footer";
import { render, screen } from "../test-utils";

describe("Footer", () => {
    test("renders footer correctly", () => {
        render(<Footer />);

        expect(document.getElementById("footer-image")).toBeInTheDocument();
        expect(document.getElementById("footer-title")).toBeInTheDocument();
        expect(document.getElementById("footer-navigation")).toBeInTheDocument();
        expect(document.getElementById("footer-subtitle")).toBeInTheDocument();
    });
});
