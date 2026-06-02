import Protocols from "./Protocols";
import { render, screen } from "../test-utils";
import {fireEvent} from "@testing-library/react";

describe("Protocols", () => {
    test("renders protocols correctly", () => {
        render(<Protocols />);

        expect(screen.getByRole("heading", { name: /protocols/i })).toBeInTheDocument();
        expect(screen.getByRole("link", { name: /zero-knowledge proof of identity/i })).toBeInTheDocument();
        expect(screen.getByRole("link", { name: /key exchange/i })).toBeInTheDocument();
        expect(screen.getByRole("link", { name: /encryption and decryption/i })).toBeInTheDocument();
    });

    test("handle scroll works correctly", () => {
        render(<Protocols />);

        expect(document.getElementById("protocols")).not.toHaveClass("show");
        window.scrollTo(0, 150);
        fireEvent.scroll(window);
        expect(document.getElementById("protocols")).toHaveClass("show");
    })
});
