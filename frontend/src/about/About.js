import React, { useEffect, useState } from "react";
import "./About.css";
import {useTranslation} from "react-i18next";

const About = () => {
    const [visible, setVisible] = useState(window.location.pathname.includes("about"));
    const { t } = useTranslation();

    useEffect(() => {
        const handleScroll = () => {
            const section = document.getElementById("about");
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
        <section  className={`about fade-in ${visible ? "show" : ""}`} id="about">
            <h2 id="about-heading">{t("about.title")}</h2>
            <p>{t("about.subtitle")}</p>
            <h3 id="links-of-interest">{t("about.links.title")}</h3>
            <ul>
                <li><a href="https://www.sike.org">{t("about.links.sike")}</a></li>
                <li><a href="https://github.com/wultra/sike-java">{t("about.links.sikeJava")}</a></li>
                <li><a href="https://github.com/albramvar1/introduction-to-sike">{t("about.links.tfg")}</a></li>
            </ul>
            <h3 id="relevant-articles">{t("about.articles.title")}</h3>
            <ul>
                <li><a href="https://www.degruyterbrill.com/document/doi/10.1515/jmc-2012-0015/html#articleAbstractView">{t("about.articles.towards")}</a></li>
                <li><a href="https://eprint.iacr.org/2019/1321.pdf">{t("about.articles.beginners")}</a></li>
                <li><a href="https://eprint.iacr.org/2022/975">{t("about.articles.efficientAttack")}</a></li>
            </ul>
        </section>
    );
};

export default About;
