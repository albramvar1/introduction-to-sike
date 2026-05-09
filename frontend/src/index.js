import React from 'react';
import ReactDOM from 'react-dom/client';
import './global.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import App from "./App";
import ScrollToTop from "#components/ScrollToTop";

const theme = createTheme({
    palette: {
        primary: {
            main: window.getComputedStyle(document.body).getPropertyValue('--primary')
        },
        secondary: {
            main: window.getComputedStyle(document.body).getPropertyValue('--secondary')
        },
        info: {
            main: window.getComputedStyle(document.body).getPropertyValue('--darker')
        },
    }
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ThemeProvider theme={theme}>
        <React.StrictMode>
            <BrowserRouter>
                <ScrollToTop />
                <App />
            </BrowserRouter>
        </React.StrictMode>
    </ThemeProvider>
);

reportWebVitals();
