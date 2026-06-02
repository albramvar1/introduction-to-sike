import { steps } from "./index";
import { render } from "../../test-utils";
import userEvent from "@testing-library/user-event";
import {act} from "react";
import {waitFor} from "@testing-library/react";

describe("Proof of identity protocol steps", () => {
    afterEach(() => {
        jest.runOnlyPendingTimers()
        jest.useRealTimers()
    })

    test("renders step 1 correctly", () => {
        render(steps[0].component);

        expect(document.getElementById("proof-of-identity-img")).toBeInTheDocument();
        expect(document.getElementById("note")).toBeInTheDocument();
    });

    test("renders step 2 correctly", () => {
        render(steps[1].component);

        expect(document.getElementById("proof-of-identity-img")).toBeInTheDocument();
        expect(document.getElementById("note")).toBeInTheDocument();
    });

    test("renders step 3 correctly", () => {
        render(steps[2].component);

        expect(document.getElementById("note")).toBeInTheDocument();
    });

    test("renders step 4 correctly", () => {
        render(steps[3].component);

        expect(document.getElementById("message")).toBeInTheDocument();
        expect(document.getElementById("note")).toBeInTheDocument();
    });

    test("renders step 5 correctly", () => {
        render(steps[4].component);

        expect(document.getElementById("message")).toBeInTheDocument();
        expect(document.getElementById("note")).toBeInTheDocument();
    });

    test("step 5 random bit", async () => {
        jest.useFakeTimers();

        render(steps[4].component);

        const randomBitOriginalValue = document.getElementById("message").innerHTML;
        await waitFor(() => {
            expect(document.getElementById("message").innerHTML).not.toBe(randomBitOriginalValue);
        }, { timeout: 1600 });
    });

    test("renders step 6 correctly", () => {
        render(steps[5].component);

        expect(document.getElementById("grid-container")).toBeInTheDocument();
        expect(document.getElementById("conclusion")).toBeInTheDocument();
    });
});
