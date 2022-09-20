import React from 'react';
import bio from '../../bio-pic.jpg'

function About() {
    return (
        <section>
            <div className='container'>
                <div className='row'>
                    <img className='card-image card-width img-thumbnail col-9 col-sm-9 col-md-5 col-lg-5 col-xl-5' src={bio} alt="It's me!" />
                    <div className='card portfolio-card col-9 col-sm-9 col-md-5 col-lg-5 col-xl-5'>
                        <div className='card-body about-me'>
                            <h1 id="about" className="about-me card-title">A little about me:</h1>
                            <p className="about-me card-text">My name is Michael Schneider. For a living I currently work on phone systems and network equipment while learning how to develop on the side. I've lived in South Texas my whole life, but I am eager to use web development as a way to get out and explore the world we live in. Being an avid lover of all things natural and outdoors, my goal is to create web environments that flow just as beatifully and in sync.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;