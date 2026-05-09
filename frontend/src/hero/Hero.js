// src/hero/Hero.js
import React from "react";
import { motion } from "framer-motion";
import "./Hero.css";
import DecryptingText from "#components/DecryptingText";

const Hero = () => {
    return (
        <section className="hero" id="home-hero">
            <video
                autoPlay
                muted
                loop
                id="hero-video"
                className="hero-video"
                src="/video/abstract-white-curves.mp4"
                poster="/images/abstract-white-curves.png"
            />

            <div className="hero-content">
                <motion.h1
                    initial={{opacity: 0, y: 50}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 1}}
                >
                    <h1>
                        <DecryptingText targetText={"Introduction to "} className="decrypting-hero-text" />
                        <a href={"https://sike.org"}><DecryptingText targetText={"SIKE"} className="decrypting-hero-text" /></a>
                    </h1>
                </motion.h1>
                <motion.p
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{delay: 0.5, duration: 1}}
                >
                    An intuitive and graphic explanation of the protocol, its functioning and its mathematical basis.
                </motion.p>
            </div>
        </section>
    );
};

export default Hero;
