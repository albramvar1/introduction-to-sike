import MotionDiv from "#components/MotionDiv";
import Characters from "#components/Characters";
import React, {useCallback, useEffect, useState} from "react";
import AliceToBob from "#components/AliceToBob";
import BobToAlice from "#components/BobToAlice";

async function sleep(ms) {
    await new Promise((resolve) => setTimeout(resolve, ms));
}

function Step1() {
    return (
        <MotionDiv className="step step1" id="identity-step1">
            <img className="proof-of-identity-img" id="proof-of-identity-img" src="/images/zero-knowledge-graph.png"
                 alt="Base diagram for the zero-knowledge proof of identity protocol"/>
            <div className="note" id="note">
                <p>This diagram is the base of the zero-knowledge proof of identity that SIKE uses. The nodes are elliptic
                    curves and the arrows between them are isogenies we compute from them.</p>
                <p>The question then is, which arrows of the diagram can we reveal without compromising our secret <span
                    className="math italic">ϕ</span>?</p>
            </div>
        </MotionDiv>
    );
}

function Step2() {
    return (
        <MotionDiv className="step step2" id="identity-step2">
            <img className="proof-of-identity-img" id="proof-of-identity-img" src="/images/zero-knowledge-graph.png"
                 alt="Base diagram for the zero-knowledge proof of identity protocol"/>
            <div className="note" id="note">
                <p>It cannot be neither <span className="math italic">(ψ,ϕ')</span> nor <span className="math italic">(ψ',ϕ')</span>.</p>
                <p>SIKE chose <span className="math italic">(ψ,ψ')</span>.</p>
            </div>
        </MotionDiv>
    );
}

function Step3() {
    return (
        <MotionDiv className="step step3" id="identity-step3">
            <Characters hideBob={true} />
            <div className="note" id="note">
                Alice chooses a random point <span className="math italic">R</span> and computes a concrete instance of the diagram we showed before.
            </div>
        </MotionDiv>
    );
}

function Step4() {
    return (
        <MotionDiv className="step step4" id="identity-step4">
            <AliceToBob distance={270}>
                <div className="message" id="message"><span className="math italic">E/⟨R⟩, E/⟨S,R⟩</span></div>
            </AliceToBob>
            <div className="note" id="note">
                She sends Bob two of the nodes and waits to see how he answers.
            </div>
        </MotionDiv>
    );
}

function Step5(callback, deps) {
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
                He returns Alice a random bit <span className="math italic">b</span>.
            </div>
        </MotionDiv>
    );
}

function Step6() {
    return (
        <MotionDiv className="step step6" id="identity-step6">
            <Characters />
            <div className="grid-container" id="grid-container">
                <div className="b-0" id="b-0">
                    <div className="note">
                        <p>If <span className="math italic">b = 0</span>,</p>
                        <p>Alice reveals <span className="math italic">R</span> and <span className="math italic">ϕ(R')</span></p>
                    </div>
                </div>
                <div className="b-1" id="b-1">
                    <div className="note">
                        <p>If <span className="math italic">b = 1</span>,</p>
                        <p>Alice reveals <span className="math italic">ψ(S)</span></p>
                    </div>
                </div>
            </div>
            <div className="note conclusion" id="conclusion">
                Either way, Bob manages to complete the diagram.
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