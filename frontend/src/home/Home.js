import React from "react";
import Hero from "#src/hero/Hero";
import Protocols from "#protocols/Protocols";
import About from "#src/about/About";
import "./Home.css";

function Home() {
    return (
        <div className="home">
            <Hero/>
            <div className="protocols-wrapper">
                <Protocols/>
            </div>
            <div className="about-wrapper">
                <About/>
            </div>
        </div>
    );
}

export default Home;
