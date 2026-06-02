import Grainient from "./Grainient";
import { render, screen } from "../test-utils";

describe("Grainient", () => {
    test("renders grainient container", () => {
        render(<Grainient color1="#000000" color2="#111111" color3="#222222" />);

        expect(document.querySelector(".grainient-container")).toBeInTheDocument();
    });
});
