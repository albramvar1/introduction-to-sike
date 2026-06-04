import Navbar from "./Navbar";
import { render, screen } from "../test-utils";
import {act} from "react";

describe("Navbar", () => {

    test("renders links correctly", () => {
        render(<Navbar />);

        const linkHomeElement = screen.getByRole("link", { name: "home" });
        expect(linkHomeElement).toBeInTheDocument();

        const linkAboutElement = screen.getByRole("link", { name: "about" });
        expect(linkAboutElement).toBeInTheDocument();

        const linkProofElement = screen.getByRole("link", { name: "proof-of-identity" });
        expect(linkProofElement).toBeInTheDocument();

        const linkKeyExchangeElement = screen.getByRole("link", { name: "key-exchange" });
        expect(linkKeyExchangeElement).toBeInTheDocument();

        const linkEncryptionElement = screen.getByRole("link", { name: "encryption" });
        expect(linkEncryptionElement).toBeInTheDocument();
    });

    test("home link click", () => {
        render(<Navbar />);

        const linkHomeElement = screen.getByRole("link", { name: "home" });
        act(() => { linkHomeElement.click(); });
        expect(linkHomeElement).toHaveClass("active");
    });

    test("proof of identity link click", () => {
        render(<Navbar />);

        const linkProofOfIdentityElement = screen.getByRole("link", { name: "proof-of-identity" });
        expect(linkProofOfIdentityElement).not.toHaveClass("active");
        act(() => { linkProofOfIdentityElement.click(); });
        expect(linkProofOfIdentityElement).toHaveClass("active");
    });

    test("key exchange link click", () => {
        render(<Navbar />);

        const linkKeyExchangeElement = screen.getByRole("link", { name: "key-exchange" });
        expect(linkKeyExchangeElement).not.toHaveClass("active");
        act(() => { linkKeyExchangeElement.click(); });
        expect(linkKeyExchangeElement).toHaveClass("active");
    });

    test("encryption link click", () => {
        render(<Navbar />);

        const linkEncryptionElement = screen.getByRole("link", { name: "encryption" });
        expect(linkEncryptionElement).not.toHaveClass("active");
        act(() => { linkEncryptionElement.click(); });
        expect(linkEncryptionElement).toHaveClass("active");
    });

    test("about link click", () => {
        render(<Navbar />);

        const linkAboutElement = screen.getByRole("link", { name: "about" });
        expect(linkAboutElement).not.toHaveClass("active");
        act(() => { linkAboutElement.click(); });
        expect(linkAboutElement).toHaveClass("active");
    });

    test("i18n renders in navbar", () => {
        render(<Navbar />);

        const languageTrigger = document.getElementById("language-trigger");
        expect(languageTrigger).toBeInTheDocument();

        act(() => { languageTrigger.click(); });

        expect(document.getElementsByClassName("dropdown-menu-item").length).toBeGreaterThan(0);
    });
});
