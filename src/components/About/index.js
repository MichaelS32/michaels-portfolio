import React from 'react';
// import bio from '../../bio-pic.jpg'

function About() {
    return (
        <section>
            {/* <img className='card-img-top' src={require(bio)} alt="It's me!" /> */}
            <div className='card portfolio-card card-width '>
                <div className='card-body'>
                    <h1 id="about" className="about-me card-title">A little about me:</h1>
                    <p className="about-me card-text">My name is Michael Schneider. For a living I currently work on phone systems and network equipment while learning how to develop on the side. I've lived in South Texas my whole life, but I am eager to use web development as a way to get out and explore the world we live in. Being an avid lover of all things natural and outdoors, my goal is to create web environments that flow just as beatifully and in sync.</p>
                </div>
            </div>
        </section>
    );
}

export default About;