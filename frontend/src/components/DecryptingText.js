// source: https://seraui.com/docs/decrypting
"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
const CHARACTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()-+=[]{}|;:,.<>?";
function DecryptingText({
                            targetText,
                            speed = 8
                        }) {
    const [currentText, setCurrentText] = useState("");
    useEffect(() => {
        let animationFrameId;
        let iteration = 0;
        let isMounted = true;
        const animationSpeed = Math.max(1, speed);
        const scramble = () => {
            if (!isMounted) return;
            const newText = targetText.split("").map((char, index) => {
                if (iteration / animationSpeed > index) {
                    return targetText[index];
                }
                if (char === " ") return " ";
                return CHARACTERS[Math.floor(Math.random() * CHARACTERS.length)];
            }).join("");
            setCurrentText(newText);
            if (iteration < targetText.length * animationSpeed) {
                iteration += 1;
                animationFrameId = requestAnimationFrame(scramble);
            } else {
                setCurrentText(targetText);
            }
        };
        scramble();
        return () => {
            isMounted = false;
            if (animationFrameId) {
                cancelAnimationFrame(animationFrameId);
            }
        };
    }, [targetText, speed]);
    return <motion.div className="text-2xl md:text-4xl lg:text-5xl font-bold text-center break-words z-10 text-gray-200" initial={{
        opacity: 0
    }} animate={{
        opacity: 1
    }} transition={{
        duration: 0.5
    }}>
        {currentText}
    </motion.div>;
};

export default DecryptingText;