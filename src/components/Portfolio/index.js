import React from 'react';
import Grid from '@mui/material/Grid'; // Grid version 1
import Grid2 from '@mui/material/Unstable_Grid2'; // Grid version 2


const projects = [
    {
        name: "text editor",
        src: "https://text-editor-pwa3232.herokuapp.com/"
    },
    {
        name: "date de-stresser",
        src: "https://yvettesalinas.github.io/date-destresser/"
    },
    {
        name: "horiseon",
        src: "https://michaels32.github.io/Horiseon-Challenge-01/"
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
                    </div>
                </div>
            ))}
        </section>
    )
}

export default Portfolio;