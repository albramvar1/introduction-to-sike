import { useEffect, useState } from "react";
import { ArrowBigDownDashIcon } from "lucide-animated"
import {
    Button,
    FormControl,
    FormLabel,
    TextField
} from "@mui/material";
import { useParameters } from "#src/contexts/ParametersContext";
import MotionDiv from "#components/MotionDiv";
import Characters from "#components/Characters";
import BobToAlice from "#components/BobToAlice";
import AliceToBob from "#components/AliceToBob";
import {useTranslation} from "react-i18next";

function Step1() {
    const { t } = useTranslation();
    const [error, setError] = useState(false)
    const [errorMessage, setErrorMessage] = useState(null)
    const parameters = useParameters();

    const isValid = (str) => {
        if(typeof(str)!=="string"){
            return false;
        }
        for(let i=0;i<str.length;i++){
            if(str.codePointAt(i)>127){
                return false;
            }
        }
        return true;
    }

    const handleChange = () => {
        const msg_element = document.getElementById("message");
        const message = msg_element.value

        if (!isValid(message)) {
            setError(true);
            setErrorMessage("Please, write a message with less weird characters (a clue: when in doubt, stick to letters)")
            msg_element.value = parameters.message;
            return;
        }

        parameters.message = message;
        console.log(`Updated message: ${parameters.message}`);
    }

    return (
        <MotionDiv className="step step1" id="encryption-step1">
            <h1 id="encryption-step1-title">{t("encryption.step1.title")}</h1>
            <FormControl className="message-input-group" id="message-input-group">
                <FormLabel htmlFor="message" className="">{t("encryption.step1.subtitle")}</FormLabel>
                <TextField
                    error={error}
                    helperText={error ? undefined : errorMessage}
                    id="message"
                    name="message"
                    placeholder={"Hello, world!"}
                    required
                    fullWidth
                    color={error ? "error" : "primary"}
                    className="input-field"
                    multiline
                    rows={4}
                    onChange={handleChange}
                />
            </FormControl>
            {/*<div className="button-container">
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    className="submit-button"
                    onClick={handleClick}
                >
                    Let"s go!
                </Button>
            </div>*/}
        </MotionDiv>
    )
}

function Step2() {
    const { t } = useTranslation();
    const parameters = useParameters();
    const [loading, setLoading] = useState(false);
    const [ENDPOINT, setEndpoint] = useState("https://introduction-to-sike-backend.onrender.com");

    useEffect(() => {
        if (parameters.message !== parameters.decodedMessage) {
            onClick();
        }
    }, [onClick, parameters.decodedMessage, parameters.message]);

    async function onClick() {
        setLoading(true);
        document.getElementById("generate-new-key").disabled = true;
        await fetch(ENDPOINT + "/sike/generate-key-pair?message=" + parameters.message)
            .then(response => response.json())
            .then(data => {
                parameters.key = data.key;
                parameters.keyBytes = data.keyBytes;
                parameters.encodedMessage = data.encodedMessage;
                parameters.decodedMessage = data.decodedMessage;
            })
            .catch(error => console.error("Error generating key:", error));
        setLoading(false);
        document.getElementById("generate-new-key").disabled = false;
    }

    return (
        <MotionDiv className="step step2" id="encryption-step2">
            <div className="key-container" id="key-container">
                {
                    loading ?
                        <img src="/images/loading.png" alt="Loading..." className="loading" />
                        :
                        <p className="math" id="key-value">{parameters.key}</p>
                }
            </div>
            <div className="button-container">
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    className="submit-button"
                    id="generate-new-key"
                    onClick={onClick}
                >
                    {t("encryption.step2")}
                </Button>
            </div>
        </MotionDiv>
    );
}

function Step3() {
    const { t } = useTranslation();

    return (
        <MotionDiv className="step step3" id="encryption-step3">
            <BobToAlice id="bob-to-alice" distance={-250}>
                <img className="key" src="/images/key-chain.png" alt="key" />
            </BobToAlice>
            <div className="note" id="note">
                <p>{t("encryption.step3.part1")}<span className="code">{t("encryption.step3.part2")}</span>{t("encryption.step3.part3")}</p>
            </div>
        </MotionDiv>
    )
}

function Step4() {
    const { t } = useTranslation();
    const parameters = useParameters();

    return (
        <MotionDiv className="step step4" id="encryption-step4">
            <Characters hideBob={true} />
            <div className="message-encoding" id="message-encoding">
                <p>{t("encryption.step4")}</p>
                <div className="message">{parameters.message}</div>
                <ArrowBigDownDashIcon className="arrow" />
                <div className="encoded-message">{parameters.encodedMessage}</div>
            </div>
        </MotionDiv>
    )
}

function Step5() {
    const { t } = useTranslation();

    return (
        <MotionDiv className="step step5" id="encryption-step5">
            <AliceToBob id="alice-to-bob" distance={250}>
                <img className="envelope" src="/images/envelope.png" alt="envelope" />
            </AliceToBob>
            <div className="note" id="note">
                <p>{t("encryption.step5.part1")}<span className="code">{t("encryption.step5.part2")}</span>{t("encryption.step5.part3")}</p>
            </div>
        </MotionDiv>
    )
}

function Step6() {
    const { t } = useTranslation();
    const parameters = useParameters();

    return (
        <MotionDiv className="step step6" id="encryption-step6">
            <Characters hideAlice={true} />
            <div className="message-decoding" id="message-decoding">
                <p>{t("encryption.step6")}</p>
                <div className="encoded-message">{parameters.encodedMessage}</div>
                <ArrowBigDownDashIcon className="arrow" />
                <div className="decoded-message">{parameters.decodedMessage}</div>
            </div>
        </MotionDiv>
    )
}

const steps = [
    { component: <Step1 /> },
    { component: <Step2 />, timeout: 10 },
    { component: <Step3 /> },
    { component: <Step4 /> },
    { component: <Step5 /> },
    { component: <Step6 /> },
]

export { steps }