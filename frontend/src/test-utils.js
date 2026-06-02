import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { ParametersProvider } from "#src/contexts/ParametersContext";

const theme = createTheme();

function AllProviders({ children }) {
    return (
        <ThemeProvider theme={theme}>
            <ParametersProvider>
                <BrowserRouter future={{
                    v7_startTransition: true,
                    v7_relativeSplatPath: true,
                }}>
                    {children}
                </BrowserRouter>
            </ParametersProvider>
        </ThemeProvider>
    );
}

const customRender = (ui, { wrapper: Wrapper = AllProviders, ...options } = {}) =>
    render(ui, { wrapper: Wrapper, ...options });

export * from "@testing-library/react";
export * from "@testing-library/user-event"
export { customRender as render };