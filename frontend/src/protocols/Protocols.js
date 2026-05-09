import React, { useEffect, useState } from "react";
import "./Protocols.css";

const protocols = [
    {
        title: "Zero-knowledge proof of identity",
        description: "How do we prove who we are? Discover the basis of SIKE.",
        url: "/protocols/proof-of-identity",
    },
    {
        title: "Key exchange",
        description: "Similarly structured as Diffie-Hellman, this key exchange protocol makes the most of today's cryptography.",
        url: "/protocols/key-exchange",
    },
    {
        title: "Encryption and decryption",
        description: "An adaptation of Elgamal to use the SIKE protocol",
        url: "/protocols/encryption",
    }
];

function Protocols() {
    const [visible, setVisible] = useState(window.location.pathname.includes("protocols"));

    useEffect(() => {
        const handleScroll = () => {
            const section = document.getElementById("protocols");
            if (section) {
                const rect = section.getBoundingClientRect();
                if (rect.top < window.innerHeight - 100) {
                    setVisible(true);
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <section className="protocols" id="protocols">
            <h2 className={`fade-in ${visible ? "show" : ""}`}>Protocols</h2>
            <div className="protocols-list">
                {protocols.map((protocol, index) => (
                    <a href={protocol.url} key={index}  className={`protocols-card fade-in ${visible ? "show" : ""}`}>
                        <div className="content-wrapper">
                            <h3>{protocol.title}</h3>
                            <p>{protocol.description}</p>
                        </div>
                    </a>
                ))}
            </div>
        </section>
    );
};

export default Protocols;
