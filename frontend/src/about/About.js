import React, { useEffect, useState } from "react";
import "./About.css";

const About = () => {
    const [visible, setVisible] = useState(window.location.pathname.includes("about"));

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
            <h2>About</h2>
            <p>
                This project was carried out as a TFG for the University of Seville. For more information please refer to <a href="mailto:albramvar1@alum.us.es">Alba Ramos Vargas</a>, who created this page, or <a href="mailto:armario@us.es">José Andrés Armario Sampalo</a>, who tutored it.
            </p>
            <h3>Links of interest</h3>
            <ul>
                <li><a href="https://www.sike.org">SIKE official page</a></li>
                <li><a href="https://github.com/wultra/sike-java">Repository on Github of the Java implementation of SIKE</a></li>
                <li><a href="https://github.com/albramvar1/introduction-to-sike">Repository on Github of this page</a></li>
            </ul>
            <h3>Relevant articles</h3>
            <ul>
                <li><a href="https://www.degruyterbrill.com/document/doi/10.1515/jmc-2012-0015/html#articleAbstractView">Towards quantum-resistant cryptosystems from supersingular elliptic curve isogenies.</a></li>
                <li><a href="https://eprint.iacr.org/2019/1321.pdf">Supersingular isogeny key exchange for beginners</a></li>
                <li><a href="https://eprint.iacr.org/2022/975">An efficient key recovery attack on SIDH</a></li>
            </ul>
        </section>
    );
};

export default About;
