import { Routes, Route, Navigate } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import Protocols from "./protocols/Protocols";
import About from "./about/About";
import Home from "./home/Home";
import Navbar from "./navbar/Navbar";
import Footer from "./footer/Footer";
import ProtocolView from "./protocols/protocol-view/ProtocolView";
import {ParametersProvider} from "#src/contexts/ParametersContext";

function ErrorFallback({ error, resetErrorBoundary }) {
    return (
        <div role="alert">
            <p>Something went wrong:</p>
            <pre>{error.message}</pre>
            <button onClick={resetErrorBoundary}>Try again</button>
        </div>
    )
}

function App() {
    return (
        <ParametersProvider>
            <ErrorBoundary FallbackComponent={ErrorFallback}>
                <Navbar />
                <Routes>
                    <Route path="/" exact={true} element={<Home />}/>
                    <Route path="/protocols" element={<Protocols />}/>
                    <Route path="/protocols/proof-of-identity" element={<ProtocolView protocol={"proof-of-identity"} />}/>
                    <Route path="/protocols/key-exchange" element={<ProtocolView protocol={"key-exchange"} />}/>
                    <Route path="/protocols/encryption" element={<ProtocolView protocol={"encryption"} />}/>
                    <Route path="/about" element={<About />}/>
                    <Route path="*" element={<Navigate to="/"/>}/>
                </Routes>
                <Footer />
            </ErrorBoundary>
        </ParametersProvider>
    )
}

export default App;