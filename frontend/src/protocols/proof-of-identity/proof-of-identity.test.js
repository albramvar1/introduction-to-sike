import { steps } from "./index";
import { render } from "../../test-utils";

describe("Proof of identity protocol steps", () => {
    test("renders step 1 correctly", () => {
        render(steps[0]);
    });
});
