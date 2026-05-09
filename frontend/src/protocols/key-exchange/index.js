import "./KeyExchange.css";
import React from 'react';
import MotionDiv from "#components/MotionDiv";
import Characters from "#components/Characters";
import GraphView from "#components/GraphView";
import BobToAlice from "#components/BobToAlice";
import AliceToBob from "#components/AliceToBob";

function Step1() {
    return (
        <MotionDiv className="step step1" id="keyexchange-step1">
            <Characters/>
            <div className="communication-container">
                <img src="/images/unsecure-communication.png" alt="Unsecured connection" className="communication-image"/>
                <div className="communication-note">
                    <div>
                        The public parameters to establish a secure connections are:
                        <ul>
                            <li>A big prime number <span className="math italic">p</span></li>
                            <li>An initial elliptic curve defined from the <span>finite group <span className="math">F<span
                                className="math subindex italic">p<span
                                className="math superindex">2</span></span></span></span></li>
                            <li>A pair of initial points <span className="math italic">{"{"} P<span
                                className="math subindex">A</span>, Q<span className="math subindex">A</span> {"}"}, {"{"} P<span
                                className="math subindex">B</span>, Q<span
                                className="math subindex">B</span> {"}"}</span> for each Alice and Bob, respectively.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </MotionDiv>
    )
}

function Step2() {
    return (
        <MotionDiv className="step step2" id="keyexchange-step2">
            <div className="graph-container">
                <img src="/graph-views/2-isogeny/2-isogeny.png" alt="2-Isogeny graph for prime 463" />
            </div>
            <div className="note-container">
                <div className="note">
                    <p>This is the 2-isogeny graph for the prime number <span className="math">p = 463 = 2<span className="superindex">4</span> · 3<span className="superindex">3</span> + 1</span>.</p>
                    <p>This graph represents elliptic curves as the nodes (grouped by a characteristic of them called <span className="italic">j-invariant</span>) and the isogenies between these curves as the edges.</p>
                    <p className="italic">Why is this graph so important?</p>
                    <p>Because it will allow us to visualize <span className="italic">how</span> the SIKE protocol works.</p>
                    <p>As we've already established, the primer we've chosen was <span className="math">p = 463 = 2<span className="superindex">4</span> · 3<span className="superindex">3</span> + 1</span>.</p>
                    <p>The exact bases and exponents used to calculate the prime are incredibly important because they set how the user will have to move through the graph.</p>
                    <p>This means Alice will have to travel through 4 nodes in the 2-isogeny graph, and Bob will have to travel through 3 nodes in the 3-isogeny graph (or viceversa).</p>
                    <p>This means that from the public initial elliptic curve <span className="math">E<span className="subindex">0</span></span>, Alice and Bob reach a different intermediate isogeny <span className="math italic">E<span className="subindex">A</span></span>, <span className="math italic">E<span className="subindex">B</span></span>, respectively.</p>
                </div>
            </div>
        </MotionDiv>
    )
}

function Step3() {
    return (
        <MotionDiv className="step step3" id="keyexchange-step3">
            <div className="dual-graph-container">
                <GraphView />
                <GraphView isAlice={false} />
            </div>
        </MotionDiv>
    )
}

function Step4() {
    return (
        <MotionDiv className="step step4" id="keyexchange-step4">
            <AliceToBob className="alice-to-bob" distance={250}>
                <span className="math italic image-points">
                    {"{"} φ<span className="math italic subindex">A</span>(P<span className="math subindex">B</span>),
                     φ<span className="math italic subindex">A</span>(Q<span className="math subindex">B</span>) {"}"}
                </span>
            </AliceToBob>
            <BobToAlice hideAlice={true} hideBob={true} className="bob-to-alice" distance={-250}>
                <span className="math italic image-points">
                    {"{"} φ<span className="math italic subindex">B</span>(P<span className="math subindex">A</span>),
                     φ<span className="math italic subindex">B</span>(Q<span className="math subindex">A</span>) {"}"}
                </span>
            </BobToAlice>
            <div className="note">
                <p>Alice sends the image of Bob's public initial points using her newly found isogeny <span className="math italic">E<span className="subindex">A</span></span>. Ídem with Bob, although using Alice's public initial points and his found isogeny <span className="math italic">E<span className="subindex">B</span></span>.</p>
            </div>
        </MotionDiv>
    )
}

function Step5() {
    return (
        <MotionDiv className="step step5" id="keyexchange-step5">
            <div className="dual-graph-container">
                <GraphView firstHalf={false} />
                <GraphView firstHalf={false} isAlice={false} />
            </div>
            <div className="note">
                <p>And then, we continue the journey through the graph!</p>
            </div>
        </MotionDiv>
    )
}

function Step6() {
    return (
        <MotionDiv className="step step6" id="keyexchange-step6">
            <div className="dual-graph-container">
                <div className="closeup-container">
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
            <div className="note">
                <p>And we arrive to the same isogeny <span className="math italic">E<span className="subindex">AB</span></span> that will function as the shared secret key.</p>
            </div>
        </MotionDiv>
    )
}

function Step7() {
    return (
        <MotionDiv className="step step7" id="keyexchange-step7">
            <Characters/>
            <div className="communication-container">
                <img src="/images/secure-communication.png" alt="Secured connection" className="communication-image"/>
                <div className="communication-note">
                    <div>
                        To finally secure our communication channels.
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