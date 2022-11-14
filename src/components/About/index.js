import React from 'react';
import bio from '../../bio-pic.jpg'
import 'react-slideshow-image/dist/styles.css';
import { FadeIn } from 'react-slide-fade-in';


function About() {
    return (
        <FadeIn
            from='bottom'
            positionOffset={500}
            triggerOffset={200}
            delayInMilliseconds={0}
            durationInMilliseconds={1000}
            >
            <section>
                <div className='container'>
                    <div className='row about-layout'>
                        
                            <img className='prof-pic col-9 col-sm-9 col-md-5 col-lg-5 col-xl-5' src={bio} alt="It's me!" />
                        
                        
                            <div className='card portfolio-card col-9 col-sm-9 col-md-5 col-lg-5 col-xl-5'>
                                <div className='card-body about-me'>
                                    <h1 id="about" className="about-me card-title">A little about me:</h1>
                                    <p className="about-me card-text">
                                        I'm an adaptable full-stack developer looking for a position within an established company where I can use my creativity and coding knowledge to produce 
                                        a great user experience.
                                        <br />
                                        <br />
                                        I would describe myself as an adventurous, competitive and intuitive builder with a knack for problem solving. From legos to woodworking and now phone systems and web apps, 
                                        I have always had a passion for making things with my own two hands and doing my best to figure out the bugs in the process. When I'm not building something I like to hike or take out 
                                        my kayak for a relaxing time on the lake.
                                    </p>
                                </div>
                            </div>
                            
                    
                    </div>
                </div>
            </section>
        </FadeIn>
    );
}

export default About;