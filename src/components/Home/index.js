import React from 'react';
import { FadeIn } from 'react-slide-fade-in';


const Home = () => {
    return (
        <FadeIn
        from='left'
        positionOffset={500}
        triggerOffset={200}
        delayInMilliseconds={0}
        durationInMilliseconds={1000}
        >
            <div id="home" className=" home-card">
                <div className="">
                    <h1 className="card-text home-card">
                        Hi, I'm Michael Schneider, thanks for checking out my portfolio site!
                    </h1> <br />
                    <h2 className="card-text home-card">Full Stack Developer/ Designer</h2>
                </div>

            </div>
        </FadeIn>
    )
}

export default Home;