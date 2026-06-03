import "./ProtocolView.css";
import "#protocols/proof-of-identity/ProofOfIdentity.css";
import "#protocols/key-exchange/KeyExchange.css";
import "#protocols/encryption/Encryption.css";
import {useCallback, useEffect, useState} from "react";
import {TypeAnimation} from "react-type-animation";
import { steps as proofSteps } from "#protocols/proof-of-identity/ProofOfIdentity.js";
import { steps as exchangeSteps } from "#protocols/key-exchange/KeyExchange.js";
import { steps as encryptionSteps } from "#protocols/encryption/Encryption.js";
import MotionDiv from "#components/MotionDiv";

function StartButton() {
    return (
        <MotionDiv className="start-button beveled" id="start-button">
            <TypeAnimation
                sequence={[
                    "", 1000,
                    "start!", 5000
                ]}
                wrapper="span"
                speed={10}
                repeat={Infinity}
                className={"quantico-regular"}
                id="start-button"
            />
        </MotionDiv>
    );
}

function Final() {
    return (
        <MotionDiv className="final beveled" id="final">
            <TypeAnimation
                sequence={[
                    "and that'd be all!", 1000,
                    "hope you've enjoyed this presentation", 5000
                ]}
                wrapper="span"
                speed={10}
                repeat={Infinity}
                className={"quantico-regular"}
            />
        </MotionDiv>
    )
}

async function sleep(ms) {
    await new Promise((resolve) => setTimeout(resolve, ms));
}

function ProtocolView({ protocol }) {
    const [isPlaying, setIsPlaying] = useState(false);
    const [steps, setSteps] = useState([]);
    const [currentStep, setCurrentStep] = useState(0);
    const lastStep = steps.length;

    const togglePlaying = useCallback(() => {
        setIsPlaying(!isPlaying);
    }, [isPlaying]);
    const incrementStep = useCallback(() => {
        if (currentStep < lastStep)
            setCurrentStep(currentStep + 1);
    }, [currentStep, lastStep]);
    const decrementStep = useCallback(() => {
        if (currentStep > 0)
            setCurrentStep(currentStep - 1);
    }, [currentStep]);
    
    const handleStart = useCallback((event) => {
        incrementStep();
        setIsPlaying(true);
    }, [incrementStep]);

    const handleEnd = useCallback((event) => {
        setCurrentStep(0);
    })

    useEffect(() => {
        setIsPlaying(false);
        setCurrentStep(0);
    }, [protocol]);

    useEffect(() => {
        const startButton = document.getElementById("start-button");
        if (currentStep === 0 && startButton)
            startButton.addEventListener("click", handleStart);

        return () => {
            if (startButton)
                startButton.removeEventListener("click", handleStart);
        }
    }, [handleStart, currentStep]);

    useEffect(() => {
        const endButton = document.getElementById("final");
        if (endButton)
            endButton.addEventListener("click", handleEnd);

        return () => {
            if (endButton)
                endButton.removeEventListener("click", handleEnd);
        }
    }, [handleEnd]);

    useEffect(() => {
        console.log("Loading step number ", currentStep);
        if (currentStep >= lastStep) {
            setIsPlaying(false);
        }
        if (isPlaying) {
            const timeout = steps[currentStep-1] === undefined || steps[currentStep-1].timeout === undefined ? 5 : steps[currentStep-1].timeout
            sleep(timeout*500).then(() => {
                if (isPlaying)
                    incrementStep();
            });
        }
    }, [incrementStep, isPlaying, lastStep, currentStep, steps]);

    useEffect(() => {
        let auxSteps;

        switch (protocol) {
            case "proof-of-identity":
                auxSteps = proofSteps;
                break;
            case "key-exchange":
                auxSteps = exchangeSteps;
                break;
            case "encryption":
                auxSteps = encryptionSteps;
                break;
            default:
                auxSteps = [];
                break;
        }

        auxSteps.push({ component: <Final /> })
        setSteps(auxSteps);
        console.log(`Total number of steps: ${steps.length}`);
    }, [protocol, steps]);
    
    const renderStep = (step) => {
        if (step > 0 && step <= lastStep) {
            return steps[step-1].component
        } else {
            return <StartButton />
        }
    }

    return (
        <div className="protocol" id="protocol">
            <div className="protocol-container">
                <div className="content" id="content">
                    { renderStep(currentStep) }
                </div>
                <div className="buttons">
                    <button id="button-back" className="button beveled" onClick={() => decrementStep()}>
                        <img src="/player/back.svg" alt="Back"/>
                    </button>
                    <button id="button-play" className="button beveled" onClick={() => togglePlaying()}>
                        { isPlaying ?
                            <img src="/player/pause.svg" alt="Pause"/> :
                            <img src="/player/play.svg" alt="Play"/>
                        }
                    </button>
                    <button id="button-forward" className="button beveled" onClick={() => incrementStep()}>
                        <img src="/player/forward.svg" alt="Forward"/>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ProtocolView;