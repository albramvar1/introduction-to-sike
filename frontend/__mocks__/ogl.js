class MockRenderer {
    constructor() {
        this.gl = {
            canvas: document.createElement('canvas'),
        };
    }
    setSize() {}
    render() {}
}

class MockProgram {
    constructor(_gl, options = {}) {
        this.uniforms = options.uniforms || {};
    }
}

class MockMesh {}

class MockTriangle {}

module.exports = {
    Renderer: MockRenderer,
    Program: MockProgram,
    Mesh: MockMesh,
    Triangle: MockTriangle,
};
