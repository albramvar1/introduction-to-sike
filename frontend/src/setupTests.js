import "@testing-library/jest-dom";

global.fetch = jest.fn(() =>
    Promise.resolve({
        status: 200,
        json: () => Promise.resolve({}),
    })
);

process.env.DEPLOYED_URL = process.env.DEPLOYED_URL || "http://localhost";

global.IntersectionObserver = class IntersectionObserver {
    constructor(callback) {
        this.callback = callback;
    }
    observe() {
        this.callback([{ isIntersecting: true }]);
    }
    unobserve() {}
    disconnect() {}
};

global.ResizeObserver = class ResizeObserver {
    observe() {}
    unobserve() {}
    disconnect() {}
};
