import React from 'react';
import resume from '../../michaelschneiderresume.pdf'
import screenshot from '../../assets/resume-screenshot.png';
import { FadeIn } from 'react-slide-fade-in';


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



            </section>
        </FadeIn>
    )
}

export default Resume;