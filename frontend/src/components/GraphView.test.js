import GraphView from "./GraphView";
import { render, screen } from "../test-utils";

async function sleep(ms) {
    await new Promise((resolve) => setTimeout(resolve, ms));
}

describe("GraphView", () => {
    test("renders alice graph view", () => {
        render(<GraphView />);

        expect(screen.getByAltText(/Alice's profile picture/i)).toBeInTheDocument();
        expect(screen.getByAltText(/Path taken through the isogeny view/i)).toBeInTheDocument();
        expect(document.getElementById("alice-graph-image")).toBeInTheDocument();
    });

    test("renders bob graph view", () => {
        render(<GraphView isAlice={false} />);

        expect(screen.getByAltText(/Bob's profile picture/i)).toBeInTheDocument();
        expect(document.getElementById("bob-graph-image")).toBeInTheDocument();
    });


    test("renders second half correctly", () => {
        render(<GraphView firstHalf={false} />);

        expect(document.getElementById("alice-graph-image").src).toBe("http://localhost/graph-views/2-isogeny/step4.png");
    });

    test("load handler is called", () => {
        render(<GraphView />);

        expect(document.getElementById("alice-graph-image").src).toBe("http://localhost/graph-views/2-isogeny/step0.png");
        sleep(1000).then(() => {
            expect(document.getElementById("alice-graph-image").src).toBe("http://localhost/graph-views/2-isogeny/step1.png");
        })
    })
});
