import ProtocolView from "./ProtocolView";
import { render, screen } from "../../test-utils";
import {act} from "react";

describe("ProtocolView", () => {
    test("renders protocol view correctly", () => {
        render(<ProtocolView protocol="proof-of-identity" />);

        expect(document.getElementById("protocol")).toBeInTheDocument();
        expect(document.getElementById("start-button")).toBeInTheDocument();
    });

    test("renders player correctly", () => {
        render(<ProtocolView protocol="proof-of-identity" />);

        expect(screen.getByRole("button", { name: /back/i })).toBeInTheDocument();
        expect(screen.getByRole("button", { name: /play/i })).toBeInTheDocument();
        expect(screen.getByRole("button", { name: /forward/i })).toBeInTheDocument();
    });

    test("player button toggles play", () => {
        render(<ProtocolView protocol="proof-of-identity" />);

        const button = document.getElementById("button-play");
        expect(button.firstChild.src).toBe("http://localhost/player/play.svg");
        act(() => {
            button.click();
        });
        expect(button.firstChild.src).toBe("http://localhost/player/pause.svg");
    })

    test("player button increments and decrements steps", () => {
        render(<ProtocolView protocol="proof-of-identity" />);

        expect(document.getElementById("start-button")).toBeInTheDocument();

        const forwardButton = document.getElementById("button-forward");
        act(() => {
            forwardButton.click();
        });
        expect(document.getElementById("start-button")).not.toBeInTheDocument();

        const backButton = document.getElementById("button-back");
        act(() => {
            backButton.click();
        });
        expect(document.getElementById("start-button")).toBeInTheDocument();
    })

    test("start button toggles play", () => {
        render(<ProtocolView protocol="proof-of-identity" />);

        const startButton = document.getElementById("start-button");
        const playerButton = document.getElementById("button-play");
        expect(playerButton.firstChild.src).toBe("http://localhost/player/play.svg");
        act(() => {
            startButton.click();
        });
        expect(playerButton.firstChild.src).toBe("http://localhost/player/pause.svg");
    })

    test("renders start controls for proof-of-identity", () => {
        render(<ProtocolView protocol="proof-of-identity" />);

        expect(document.getElementById("start-button")).toBeInTheDocument();
    });

    test("renders start controls for key-exchange", () => {
        render(<ProtocolView protocol="key-exchange" />);

        expect(document.getElementById("start-button")).toBeInTheDocument();
    });

    test("renders start controls for encryption", () => {
        render(<ProtocolView protocol="encryption" />);

        expect(document.getElementById("start-button")).toBeInTheDocument();
    });
});
