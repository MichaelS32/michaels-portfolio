import React from 'react';
import Grid from '@mui/material/Grid'; // Grid version 1
import Grid2 from '@mui/material/Unstable_Grid2'; // Grid version 2


const projects = [
    {
        name: "text editor",
        src: "https://text-editor-pwa3232.herokuapp.com/",
        github: "https://github.com/MichaelS32/text-editor"
    },
    {
        name: "date de-stresser",
        src: "https://yvettesalinas.github.io/date-destresser/",
        github: "https://github.com/yvettesalinas/date-destresser"
    },
    {
        name: "horiseon",
        src: "https://michaels32.github.io/Horiseon-Challenge-01/",
        github: "https://github.com/MichaelS32/Horiseon-Challenge-01"
    },
    {
        name: "Java Script Quiz",
        src: "https://michaels32.github.io/js-quiz/",
        github: "https://github.com/MichaelS32/js-quiz"
    }
]
function Portfolio() {
    return (
        <section>
            {projects.map((project) => (
                <div className="flex-row" key={project.name}>
                    <div>
                        <a href={project.src}>
                            <h2>{project.name}</h2>
                        </a>
                        <a href={project.github}>
                            <h3>Github Repo</h3>
                        </a>
                    </div>
                </div>
            ))}
        </section>
    )
}

export default Portfolio;