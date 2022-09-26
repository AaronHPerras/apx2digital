import React from "react";
import Intro from "./Intro";

const Home = () => {
    

    return (
        <div className="home-bucket">
            <Intro/>
            <div style={{color:'white'}}>
                link
                <a href="https://www.google.com" aria-label="go to google">google</a>
            </div>
        </div>
    );
}

export default Home;