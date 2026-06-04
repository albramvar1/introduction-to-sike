import "./KeyExchange.css";
import React from "react";
import MotionDiv from "#components/MotionDiv";
import Characters from "#components/Characters";
import GraphView from "#components/GraphView";
import BobToAlice from "#components/BobToAlice";
import AliceToBob from "#components/AliceToBob";
import {useTranslation} from "react-i18next";

function Step1() {
    const { t } = useTranslation();

    return (
        <MotionDiv className="step step1" id="keyexchange-step1">
            <Characters/>
            <div className="communication-container">
                <img src="/images/unsecure-communication.png" alt="Unsecured connection" className="communication-image"/>
                <div className="communication-note">
                    <div>
                        {t("keyExchange.step1.part1")}
                        <ul>
                            <li>{t("keyExchange.step1.part2")}<span className="math italic">p</span></li>
                            <li>{t("keyExchange.step1.part3")}<span className="math">F<span
                                className="math subindex italic">p<span
                                className="math superindex">2</span></span></span></li>
                            <li>{t("keyExchange.step1.part4")}<span className="math italic">{"{"} P<span
                                className="math subindex">A</span>, Q<span className="math subindex">A</span> {"}"}, {"{"} P<span
                                className="math subindex">B</span>, Q<span
                                className="math subindex">B</span> {"}"}</span>{t("keyExchange.step1.part5")}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </MotionDiv>
    )
}

function Step2() {
    const { t } = useTranslation();

    return (
        <MotionDiv className="step step2" id="keyexchange-step2">
            <div className="graph-container" id="graph-container">
                <img src="/graph-views/2-isogeny/2-isogeny.png" alt="2-Isogeny graph for prime 463" />
            </div>
            <div className="note-container" id="note-container">
                <div className="note">
                    <p>{t("keyExchange.step2.part1")}<span className="math">p = 463 = 2<span className="superindex">4</span> · 3<span className="superindex">3</span> + 1</span>.</p>
                    <p>{t("keyExchange.step2.part2")}<span className="italic">{t("keyExchange.step2.jInvariant")}</span>){t("keyExchange.step2.part3")}</p>
                    <p className="italic">{t("keyExchange.step2.problematic")}</p>
                    <p>{t("keyExchange.step2.part4")}<span className="italic">{t("keyExchange.step2.how")}</span>{t("keyExchange.step2.part5")}</p>
                    <p>{t("keyExchange.step2.part6")}<span className="math">p = 463 = 2<span className="superindex">4</span> · 3<span className="superindex">3</span> + 1</span>.</p>
                    <p>{t("keyExchange.step2.part7")}</p>
                    <p>{t("keyExchange.step2.part8")}</p>
                    <p>T{t("keyExchange.step2.part9")}<span className="math">E<span className="subindex">0</span></span>{t("keyExchange.step2.part10")}<span className="math italic">E<span className="subindex">A</span></span>, <span className="math italic">E<span className="subindex">B</span></span>{t("keyExchange.step2.part11")}</p>
                </div>
            </div>
        </MotionDiv>
    )
}

function Step3() {
    return (
        <MotionDiv className="step step3" id="keyexchange-step3">
            <div className="dual-graph-container" id="dual-graph-container">
                <GraphView />
                <GraphView isAlice={false} />
            </div>
        </MotionDiv>
    )
}

function Step4() {
    const { t } = useTranslation();

    return (
        <MotionDiv className="step step4" id="keyexchange-step4">
            <AliceToBob className="alice-to-bob" distance={250}>
                <span className="math italic image-points" id="alice-message-to-bob">
                    {"{"} φ<span className="math italic subindex">A</span>(P<span className="math subindex">B</span>),
                     φ<span className="math italic subindex">A</span>(Q<span className="math subindex">B</span>) {"}"}
                </span>
            </AliceToBob>
            <BobToAlice hideAlice={true} hideBob={true} className="bob-to-alice" distance={-250}>
                <span className="math italic image-points" id="bob-message-to-alice">
                    {"{"} φ<span className="math italic subindex">B</span>(P<span className="math subindex">A</span>),
                     φ<span className="math italic subindex">B</span>(Q<span className="math subindex">A</span>) {"}"}
                </span>
            </BobToAlice>
            <div className="note" id="note">
                <p>{t("keyExchange.step4.part1")}<span className="math italic">E<span className="subindex">A</span></span>{t("keyExchange.step4.part2")}<span className="math italic">E<span className="subindex">B</span></span>.</p>
            </div>
        </MotionDiv>
    )
}

function Step5() {
    const { t } = useTranslation();

    return (
        <MotionDiv className="step step5" id="keyexchange-step5">
            <div className="dual-graph-container" id="dual-graph-container">
                <GraphView firstHalf={false} />
                <GraphView firstHalf={false} isAlice={false} />
            </div>
            <div className="note">
                <p>{t("keyExchange.step5")}</p>
            </div>
        </MotionDiv>
    )
}

function Step6() {
    const { t } = useTranslation();

    return (
        <MotionDiv className="step step6" id="keyexchange-step6">
            <div className="dual-graph-container" id="dual-graph-container">
                <div className="closeup-container" id="closeup-container">
                    <div className="profile-picture-container">
                        <img src="/people/alice-head.png" alt="Alice's profile picture" className="alice-profile-picture" />
                    </div>
                    <img src="/graph-views/2-isogeny/closeup.png" alt="Closeup of final isogeny in the isogeny graph" className="closeup" />
                </div>
                <div className="closeup-container">
                    <div className="profile-picture-container">
                        <img src="/people/bob-head.png" alt="Bob's profile picture" className="bob-profile-picture" />
                    </div>
                    <img src="/graph-views/3-isogeny/closeup.png" alt="Closeup of final isogeny in the isogeny graph" className="closeup" />
                </div>
            </div>
            <div className="note" id="note">
                <p>{t("keyExchange.step6.part1")}<span className="math italic">E<span className="subindex">AB</span></span>{t("keyExchange.step6.part2")}</p>
            </div>
        </MotionDiv>
    )
}

function Step7() {
    const { t } = useTranslation();

    return (
        <MotionDiv className="step step7" id="keyexchange-step7">
            <Characters/>
            <div className="communication-container">
                <img src="/images/secure-communication.png" alt="Secured connection" className="communication-image"/>
                <div className="communication-note">
                    <div>
                        {t("keyExchange.step7")}
                    </div>
                </div>
            </div>
        </MotionDiv>
    )
}

const steps = [
    { component: <Step1 /> },
    { component: <Step2 />, timeout: 15 },
    { component: <Step3 />, timeout: 5 },
    { component: <Step4 /> },
    { component: <Step5 />, timeout: 5 },
    { component: <Step6 /> },
    { component: <Step7 /> },
]

export { steps }