import Footer from "./Footer";
import { render, screen } from "../test-utils";

describe("Footer", () => {
    test("renders footer correctly", () => {
        render(<Footer />);

        expect(screen.getByRole("heading", { name: /introduction to sike/i })).toBeInTheDocument();
        expect(screen.getByAltText(/Logo de la Universidad de Sevilla/i)).toBeInTheDocument();
        expect(screen.getByAltText(/Logo del departamento de Matemáticas Aplicadas/i)).toBeInTheDocument();
    });
});
