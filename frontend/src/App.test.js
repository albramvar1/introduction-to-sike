import App from "./App";
import { render } from "./test-utils";

describe("App", () => {
    beforeEach(() => {
        global.fetch = jest.fn(() => Promise.resolve({ status: 200 }));
        process.env.DEPLOYED_URL = "http://localhost";
    });

    test("renders app correctly", () => {
        render(<App />);

        expect(document.getElementById("navbar")).toBeInTheDocument();
        expect(document.getElementById("home")).toBeInTheDocument();
        expect(document.getElementById("footer")).toBeInTheDocument();
    });
});
