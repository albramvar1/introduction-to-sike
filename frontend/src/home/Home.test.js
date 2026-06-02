import Home from "./Home";
import { render } from "../test-utils";

describe("Home", () => {
    test("renders home correctly", () => {
        render(<Home />);

        expect(document.getElementById("home-hero")).toBeInTheDocument();
        expect(document.getElementById("protocols-wrapper")).toBeInTheDocument();
        expect(document.getElementById("about-wrapper")).toBeInTheDocument();
    });
});
