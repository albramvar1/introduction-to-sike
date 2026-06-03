// src/hero/Hero.js
import React from "react";
import { motion } from "framer-motion";
import "./Hero.css";
import DecryptingText from "#components/DecryptingText";
import Grainient from "#components/Grainient";

const Hero = () => {
    return (
        <section className="hero" id="home-hero">
            {/*<video
                autoPlay
                muted
                loop
                id="hero-video"
                className="hero-video"
                src="/video/abstract-white-curves.mp4"
                poster="/images/abstract-white-curves.png"
            />*/}
            <div className="hero-background" id="hero-background">
                <Grainient
                    color1="#b1b1b1"
                    color2="#dadada"
                    color3="#b1b1b1"
                    timeSpeed={0.25}
                    colorBalance={0}
                    warpStrength={1}
                    warpFrequency={5}
                    warpSpeed={2.8}
                    warpAmplitude={5}
                    blendAngle={0}
                    blendSoftness={0.05}
                    rotationAmount={500}
                    noiseScale={2.5}
                    grainAmount={0.1}
                    grainScale={2}
                    grainAnimated={false}
                    contrast={1.5}
                    gamma={1}
                    saturation={1}
                    centerX={0}
                    centerY={0}
                    zoom={0.9}
                />
            </div>

            <div className="hero-content" id="hero-content">
                <motion.div
                    initial={{opacity: 0, y: 50}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 1}}
                >
                    <h1 id="hero-title">
                        <DecryptingText targetText={"Introduction to "} className="decrypting-hero-text" />
                        <a href={"https://sike.org"}><DecryptingText targetText={"SIKE"} className="decrypting-hero-text" /></a>
                    </h1>
                </motion.div>
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
