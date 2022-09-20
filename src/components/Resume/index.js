import React from 'react';
import resume from '../../MichaelSchneider-2022resume.docx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, } from '@fortawesome/free-brands-svg-icons';

function Resume() {
    return (
        <section id="resume">
            <div >
                <a href={resume} download>Click here to download my resume</a>
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
    )
}

export default Resume;