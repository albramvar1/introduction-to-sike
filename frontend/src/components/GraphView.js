import {useEffect, useState} from "react";

async function sleep(ms) {
    await new Promise((resolve) => setTimeout(resolve, ms));
}

function GraphView({ firstHalf=true, isAlice=true }) {
    const [firstIndexOfSecondHalf, setFirstIndexOfSecondHalf] = useState(isAlice ? 5 : 4);
    const [totalSteps, setTotalSteps] = useState(isAlice ? 8 : 6);
    const [currentIndex, setCurrentIndex] = useState(firstHalf ? 0 : firstIndexOfSecondHalf);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        const image = document.getElementById(`${isAlice ? "alice" : "bob"}-graph-image`);
        const waitingTime = 1000;
        sleep(waitingTime).then(() => {
            if ( loaded &&
                ((firstHalf && currentIndex < firstIndexOfSecondHalf)
                || (!firstHalf && currentIndex <= totalSteps))
            ) {
                setCurrentIndex(currentIndex + 1);
                image.src = `/graph-views/${isAlice ? "2" : "3"}-isogeny/step${currentIndex}.png`;
            }
        })
    }, [currentIndex, firstHalf, isAlice, loaded]);

    return (
        <div className="graph-view" >
            <img className="profile-picture"
                 src={`/people/${isAlice ? "alice" : "bob"}-head.png`}
                 alt={`${isAlice ? "Alice's" : "Bob's"} profile picture`}
            />
            <div className="carousel-container">
                <div className="carousel-item" >
                    <img
                        src={`/graph-views/${ isAlice ? "2" : "3" }-isogeny/step${ firstHalf ? "0" : firstIndexOfSecondHalf.toString() }.png`}
                        alt="Path taken through the isogeny view"
                        id={`${isAlice ? "alice" : "bob"}-graph-image`}
                        onLoad={() => setLoaded(true)}
                    />
                </div>
            </div>
        </div>
    )
}

export default GraphView;