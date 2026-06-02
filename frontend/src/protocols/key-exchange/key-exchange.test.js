import { steps } from "./index";
import { render, screen } from "../../test-utils";

describe("Key exchange protocol steps", () => {
    test("renders step 1 correctly", () => {
        render(steps[0].component);

        expect(screen.getByAltText("alice")).toBeInTheDocument();
        expect(screen.getByAltText("bob")).toBeInTheDocument();
        expect(screen.getByAltText(/unsecured connection/i)).toBeInTheDocument();
    });

    test("renders step 2 correctly", () => {
        render(steps[1].component);

        expect(screen.getByAltText("2-Isogeny graph for prime 463")).toBeInTheDocument();
        expect(document.getElementById("graph-container")).toBeInTheDocument();
        expect(document.getElementById("note-container")).toBeInTheDocument();
    });

    test("renders step 3 correctly", () => {
        render(steps[2].component);

        expect(document.getElementById("dual-graph-container")).toBeInTheDocument();
        expect(document.getElementById("alice-graph-image")).toBeInTheDocument();
        expect(document.getElementById("bob-graph-image")).toBeInTheDocument();
    });

    test("renders step 4 correctly", () => {
        render(steps[3].component);

        expect(document.getElementById("alice-message-to-bob")).toBeInTheDocument();
        expect(document.getElementById("bob-message-to-alice")).toBeInTheDocument();
        expect(document.getElementById("note")).toBeInTheDocument();
    });

    test("renders step 5 correctly", () => {
        render(steps[4].component);

        expect(document.getElementById("dual-graph-container")).toBeInTheDocument();
        expect(document.getElementById("alice-graph-image")).toBeInTheDocument();
        expect(document.getElementById("bob-graph-image")).toBeInTheDocument();
    });

    test("renders step 6 correctly", () => {
        render(steps[5].component);

        expect(document.getElementById("dual-graph-container")).toBeInTheDocument();
        expect(document.getElementById("closeup-container")).toBeInTheDocument();
        expect(document.getElementById("note")).toBeInTheDocument();
    });

    test("renders step 7 correctly", () => {
        render(steps[6].component);

        expect(screen.getByAltText("alice")).toBeInTheDocument();
        expect(screen.getByAltText("bob")).toBeInTheDocument();
        expect(screen.getByAltText(/secure/i)).toBeInTheDocument();
    });
});
