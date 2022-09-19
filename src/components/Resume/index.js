import React from 'react';
import resume from '../../MichaelSchneider-2022resume.docx'

function Resume() {
    return (
        <section id="resume">
            <div >
                <a href={resume} download>Click here to download my resume</a>
            </div>
        </section>
    )
}

export default Resume;