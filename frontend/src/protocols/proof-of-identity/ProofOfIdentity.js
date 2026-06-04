import MotionDiv from "#components/MotionDiv";
import Characters from "#components/Characters";
import React, {useCallback, useEffect, useState} from "react";
import AliceToBob from "#components/AliceToBob";
import BobToAlice from "#components/BobToAlice";
import {useTranslation} from "react-i18next";

async function sleep(ms) {
    await new Promise((resolve) => setTimeout(resolve, ms));
}

function Step1() {
    const { t } = useTranslation();

    return (
        <MotionDiv className="step step1" id="identity-step1">
            <img className="proof-of-identity-img" id="proof-of-identity-img" src="/images/zero-knowledge-graph.png"
                 alt="Base diagram for the zero-knowledge proof of identity protocol"/>
            <div className="note" id="note">
                <p>{t("proofOfIdentity.step1.part1")}</p>
                <p>T{t("proofOfIdentity.step1.part2")}<span className="math italic">ϕ</span>?</p>
            </div>
        </MotionDiv>
    );
}

function Step2() {
    const { t } = useTranslation();

    return (
        <MotionDiv className="step step2" id="identity-step2">
            <img className="proof-of-identity-img" id="proof-of-identity-img" src="/images/zero-knowledge-graph.png"
                 alt="Base diagram for the zero-knowledge proof of identity protocol"/>
            <div className="note" id="note">
                <p>{t("proofOfIdentity.step2.part1.part1")}<span className="math italic">(ψ,ϕ')</span>{t("proofOfIdentity.step2.part1.part2")}<span className="math italic">(ψ',ϕ')</span>.</p>
                <p>{t("proofOfIdentity.step2.part2")}<span className="math italic">(ψ,ψ')</span>.</p>
            </div>
        </MotionDiv>
    );
}

function Step3() {
    const { t } = useTranslation();

    return (
        <MotionDiv className="step step3" id="identity-step3">
            <Characters hideBob={true} />
            <div className="note" id="note">
                {t("proofOfIdentity.step3.part1")}<span className="math italic">R</span>{t("proofOfIdentity.step3.part2")}
            </div>
        </MotionDiv>
    );
}

function Step4() {
    const { t } = useTranslation();

    return (
        <MotionDiv className="step step4" id="identity-step4">
            <AliceToBob distance={270}>
                <div className="message" id="message"><span className="math italic">E/⟨R⟩, E/⟨S,R⟩</span></div>
            </AliceToBob>
            <div className="note" id="note">
                {t("proofOfIdentity.step4")}
            </div>
        </MotionDiv>
    );
}

function Step5(callback, deps) {
    const { t } = useTranslation();
    const [b, setB] = useState(0);
    const toggleB = useCallback(() => {
        sleep(1500).then(() => {
            setB(b === 0 ? 1 : 0);
            toggleB();
        })
    }, [b])

    useEffect(() => {
        toggleB();
    }, [toggleB]);
    
    return (
        <MotionDiv className="step step5" id="identity-step5">
            <BobToAlice distance={-290}>
                <div className="message" id="message"><span className="math italic">b = {b}</span></div>
            </BobToAlice>
            <div className="note" id="note">
                {t("proofOfIdentity.step5")}<span className="math italic">b</span>.
            </div>
        </MotionDiv>
    );
}

function Step6() {
    const { t } = useTranslation();

    return (
        <MotionDiv className="step step6" id="identity-step6">
            <Characters />
            <div className="grid-container" id="grid-container">
                <div className="b-0" id="b-0">
                    <div className="note">
                        <p>{t("proofOfIdentity.step6.conditional.part1")}<span className="math italic">b = 0</span>,</p>
                        <p>{t("proofOfIdentity.step6.conditional.part2")}<span className="math italic">R</span>{t("proofOfIdentity.step6.conditional.part3")}<span className="math italic">ϕ(R')</span></p>
                    </div>
                </div>
                <div className="b-1" id="b-1">
                    <div className="note">
                        <p>{t("proofOfIdentity.step6.conditional.part1")}<span className="math italic">b = 1</span>,</p>
                        <p>{t("proofOfIdentity.step6.conditional.part2")}<span className="math italic">ψ(S)</span></p>
                    </div>
                </div>
            </div>
            <div className="note conclusion" id="conclusion">
                {t("proofOfIdentity.step6.end")}
            </div>
        </MotionDiv>
    );
}

const steps = [
    { component: <Step1 /> },
    { component: <Step2 /> },
    { component: <Step3 /> },
    { component: <Step4 /> },
    { component: <Step5 /> },
    { component: <Step6 /> },
]

export { steps }