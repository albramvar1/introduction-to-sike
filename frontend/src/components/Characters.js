function Characters({ hideAlice = false, hideBob = false }) {
    return (
        <div className="characters">
            <img className="user alice" src="/people/alice.png" alt="alice" style={hideAlice ? {visibility: "hidden"} : null} />
            <img className="user bob" src="/people/bob.png" alt="bob" style={hideBob ? {visibility: "hidden"} : null} />
        </div>
    )
}

export default Characters;