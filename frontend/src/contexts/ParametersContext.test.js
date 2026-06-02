import { render, screen } from "@testing-library/react";
import { ParametersProvider, useParameters } from "./ParametersContext";

function ParametersConsumer() {
    const parameters = useParameters();
    return <p>{parameters.message}</p>;
}

describe("ParametersContext", () => {
    test("provides initial parameters to children", () => {
        render(
            <ParametersProvider>
                <ParametersConsumer />
            </ParametersProvider>
        );

        expect(screen.getByText("Hello, world!")).toBeInTheDocument();
    });
});
