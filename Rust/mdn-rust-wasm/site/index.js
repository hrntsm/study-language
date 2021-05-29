const js = import("./node_modules/@hrntsm/hello-wasm/hello_wasm");
js.then(js => {
    js.greet("WebAssembly");
});