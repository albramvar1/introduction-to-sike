import React, { useEffect, useState } from "react";
import "./Protocols.css";
import {useTranslation} from "react-i18next";

function Protocols() {
    const [visible, setVisible] = useState(window.location.pathname.includes("protocols"));
    const { t } = useTranslation();

    const protocols = [
        {
            title: t("protocols.proofOfIdentity.title"),
            description: t("protocols.proofOfIdentity.description"),
            url: "/protocols/proof-of-identity",
        },
        {
            title: t("protocols.keyExchange.title"),
            description: t("protocols.keyExchange.description"),
            url: "/protocols/key-exchange",
        },
        {
            title: t("protocols.encryption.title"),
            description: t("protocols.encryption.description"),
            url: "/protocols/encryption",
        }
    ];

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
        <section className={`protocols fade-in ${visible ? "show" : ""}`} id="protocols">
            <h2 id="protocol-title">{t("protocols.title")}</h2>
            <div className="protocols-list" id="protocols-list">
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
