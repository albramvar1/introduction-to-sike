import Hero from "./Hero";
import { render, screen } from "../test-utils";

describe("Hero", () => {
    test("renders hero correctly", () => {
        render(<Hero />);

        expect(document.getElementById("home-hero")).toBeInTheDocument();
        expect(document.getElementById("hero-background")).toBeInTheDocument();
        expect(document.getElementById("hero-content")).toBeInTheDocument();
        expect(document.getElementById("hero-title")).toBeInTheDocument();
    });
});
