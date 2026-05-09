import "./ProtocolView.css";
import "#protocols/proof-of-identity/ProofOfIdentity.css";
import "#protocols/key-exchange/KeyExchange.css";
import "#protocols/encryption/Encryption.css";
import {useCallback, useEffect, useState} from "react";
import {TypeAnimation} from "react-type-animation";
import { steps as proofSteps } from "#protocols/proof-of-identity"
import { steps as exchangeSteps } from "#protocols/key-exchange"
import { steps as encryptionSteps } from "#protocols/encryption";
import MotionDiv from "#components/MotionDiv";
import {useParameters} from "#src/contexts/ParametersContext";

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
    const parameters = useParameters();
    const [isPlaying, setIsPlaying] = useState(false);
    const togglePlaying = () => { setIsPlaying(!isPlaying); };
    const [steps, setSteps] = useState([]);
    const [currentStep, setCurrentStep] = useState(0);
    const incrementStep = () => { if (currentStep < lastStep) setCurrentStep(currentStep + 1); };
    const decrementStep = () => { if (currentStep > 0) setCurrentStep(currentStep - 1); };
    const lastStep = steps.length;
    
    const handleStart = useCallback((event) => {
        console.log("Starting protocol demonstration");
        incrementStep();
        setIsPlaying(true);
    }, [incrementStep]);

    useEffect(() => {
        setIsPlaying(false);
        setCurrentStep(0);
    }, [protocol]);

    useEffect(() => {
        if (currentStep === 0)
            document.getElementById("start-button").addEventListener("click", handleStart);
    }, [handleStart, currentStep])

    useEffect(() => {
        console.log('Loading step number ', currentStep);
        if (currentStep >= lastStep) {
            setIsPlaying(false);
        }
        if (isPlaying) {
            const timeout = steps[currentStep-1] === undefined || steps[currentStep-1].timeout === undefined ? 5 : steps[currentStep-1].timeout
            sleep(timeout*1000).then(() => {
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
        <div className="protocol">
            <div className="protocol-container">
                <div className="content" id="content">
                    { renderStep(currentStep) }
                </div>
                <div className="buttons">
                    <button className="button beveled" onClick={() => decrementStep()}>
                        <img src="/player/back.svg" alt="Back"/>
                    </button>
                    <button className="button beveled" onClick={() => togglePlaying()}>
                        { isPlaying ?
                            <img src="/player/pause.svg" alt="Pause"/> :
                            <img src="/player/play.svg" alt="Play"/>
                        }
                    </button>
                    <button className="button beveled" onClick={() => incrementStep()}>
                        <img src="/player/forward.svg" alt="Forward"/>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ProtocolView;