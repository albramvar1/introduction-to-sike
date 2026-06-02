import React, { useState } from "react";
import "./Navbar.css";
import {Link} from "react-router-dom";

function Navbar() {
    const [pathname, setPathname] = useState(window.location.pathname);
    const updatePathname = (newPathname) => { setPathname(newPathname); };

    return (
        <nav className="navbar" id="navbar">
            <div className="nav-links">
                <div className="home-link">
                    <Link aria-label="home" to="/" className={pathname.length <= 1 ? "active" : ""} onClick={() => updatePathname("/")}>Home</Link>
                </div>
                <div className="protocol-links">
                    <div className="nav-links">
                        <div>
                            <Link aria-label="proof-of-identity" to="/protocols/proof-of-identity" className={pathname.includes("proof-of-identity") ? "active" : ""} onClick={() => updatePathname("/protocols/proof-of-identity")}>Zero-knowledge proof of identity</Link>
                        </div>
                        <div>
                            <Link aria-label="key-exchange" to="/protocols/key-exchange" className={pathname.includes("key-exchange") ? "active" : ""} onClick={() => updatePathname("/protocols/key-exchange")}>Key exchange</Link>
                        </div>
                        <div>
                            <Link aria-label="encryption" to="/protocols/encryption" className={pathname.includes("encryption") ? "active" : ""} onClick={() => updatePathname("/protocols/encryption")}>Encryption and decryption</Link>
                        </div>
                    </div>
                </div>
                <div className="about-link">
                    <Link aria-label="about" to={"/about"} className={pathname.includes("about") ? "active" : ""} onClick={() => updatePathname("/about")}>About</Link>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
