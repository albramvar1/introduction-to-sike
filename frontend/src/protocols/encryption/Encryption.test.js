import { steps } from "./Encryption";
import { render, screen } from "../../test-utils";
import {act} from "react";
import {fireEvent, getByText, waitFor} from "@testing-library/react";
import { initialParameters } from "../../contexts/ParametersContext";

describe("Encryption protocol steps", () => {
    beforeEach(() => {
        process.env.REACT_APP_DEPLOYED_URL = "http://localhost";
        global.fetch = jest.fn(() =>
            Promise.resolve({
                status: 200,
                json: () => Promise.resolve({
                    key: "test-key",
                    keyBytes: "test-bytes",
                    encodedMessage: "test-encoded",
                }),
            })
        );
        initialParameters.message = "test-message";
        initialParameters.decodedMessage = "test-message";
    });

    test("renders step 1 correctly", () => {
        render(steps[0].component);

        expect(screen.getByRole("heading", { name: /let's try it out/i })).toBeInTheDocument();
        expect(screen.getByLabelText(/write a message to bob/i)).toBeInTheDocument();

    });

    test("step 1 handle change", () => {
        render(steps[0].component);

        const message = "NEW MESSAGE VALUE";
        const inputField = document.getElementById("message");
        fireEvent.change(inputField, { target: { value: message } });
        expect(inputField.value).toBe(message);
    });

    test("step 1 handle change error", () => {
        render(steps[0].component);

        const message = "NOT VALID MESSAGE😀";
        const inputField = document.getElementById("message");
        fireEvent.change(inputField, { target: { value: message } });
        expect(inputField.value).not.toBe(message);
    });

    test("renders step 2 correctly", () => {
        render(steps[1].component);

        expect(document.getElementById("key-container")).toBeInTheDocument();
        expect(screen.getByRole("button", { name: /generate new key/i })).toBeInTheDocument();
    });

    test("step 2 on click", async () => {
        render(steps[1].component);

        const originalKeyValue = document.getElementById("key-value").innerHTML;
        const button = screen.getByRole("button", { name: /generate new key/i });
        act(() => { button.click() });
        await waitFor(() => {
            expect(document.getElementById("key-value")).toBeInTheDocument();
        });
        expect(document.getElementById("key-value").innerHTML).not.toBe(originalKeyValue);
    });

    test("renders step 3 correctly", () => {
        render(steps[2].component);

        expect(document.getElementById("bob-to-alice")).toBeInTheDocument();
        expect(document.getElementById("note")).toBeInTheDocument();
    });

    test("renders step 4 correctly", () => {
        render(steps[3].component);

        expect(document.getElementById("message-encoding")).toBeInTheDocument();
    });

    test("renders step 5 correctly", () => {
        render(steps[4].component);

        expect(document.getElementById("alice-to-bob")).toBeInTheDocument();
        expect(document.getElementById("note")).toBeInTheDocument();
    });

    test("renders step 6 correctly", () => {
        render(steps[5].component);

        expect(document.getElementById("message-decoding")).toBeInTheDocument();
    });
});
