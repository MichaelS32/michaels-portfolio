import React from 'react';
import resume from '../../michaelschneiderresume.pdf'
import screenshot from '../../assets/resume-screenshot.png';
import { FadeIn } from 'react-slide-fade-in';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, } from '@fortawesome/free-brands-svg-icons';

function Resume() {
    return (
        <FadeIn
            from='left'
            positionOffset={500}
            triggerOffset={200}
            delayInMilliseconds={0}
            durationInMilliseconds={1000}
            >
            <section id="resume">
                <div >
                    <p className='logo'>Click the document below to download my resume</p>
                    <a href={resume} download>
                        <img className='resume' src={screenshot} alt='resume screenshot' />
                    </a>
                </div>


                <div>
                    <a target="_blank" rel='noreferrer' href='https://www.linkedin.com/in/michael-schneider-webdev/' exact='true'>
                        <FontAwesomeIcon icon={faLinkedin} color="#fefefe" />
                    </a>
                </div>
                <div>
                    <a target="_blank" rel='noreferrer' href='https://github.com/MichaelS32' exact='true'>
                        <FontAwesomeIcon icon={faGithub} color="#fefefe" />
                    </a>
                </div>



            </section>
        </FadeIn>
    )
}

export default Resume;