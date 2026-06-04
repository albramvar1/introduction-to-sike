import Protocols from "./Protocols";
import { render, screen } from "../test-utils";
import {fireEvent} from "@testing-library/react";

describe("Protocols", () => {
    test("renders protocols correctly", () => {
        render(<Protocols />);

        expect(document.getElementById("protocol-title")).toBeInTheDocument();
        expect(document.getElementById("protocols-list")).toBeInTheDocument();
    });

    test("handle scroll works correctly", () => {
        render(<Protocols />);

        expect(document.getElementById("protocols")).not.toHaveClass("show");
        window.scrollTo(0, 150);
        fireEvent.scroll(window);
        expect(document.getElementById("protocols")).toHaveClass("show");
    })
});
