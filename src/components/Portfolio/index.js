import React from 'react';
import uuid from 'react-uuid';

import photo0 from 'https://github.com/MichaelS32/michaels-portfolio/tree/main/src/assets/photo0.png';
import photo1 from 'https://github.com/MichaelS32/michaels-portfolio/tree/main/src/assets/photo1.png';
import photo2 from 'https://github.com/MichaelS32/michaels-portfolio/tree/main/src/assets/photo2.png';
import photo3 from 'https://github.com/MichaelS32/michaels-portfolio/tree/main/src/assets/photo3.png';
import photo4 from 'https://github.com/MichaelS32/michaels-portfolio/tree/main/src/assets/photo4.png';




const projects = [
    {
        name: "Text Editor",
        src: "https://text-editor-pwa3232.herokuapp.com/",
        github: "https://github.com/MichaelS32/text-editor",
        imge: { photo0 },
        alt: "screenshot of text editor app"
    },
    {
        name: "Date De-stresser",
        src: "https://yvettesalinas.github.io/date-destresser/",
        github: "https://github.com/yvettesalinas/date-destresser",
        imge: { photo1 },
        alt: "screenshot of date destresser app"
    },
    {
        name: "Horiseon",
        src: "https://michaels32.github.io/Horiseon-Challenge-01/",
        github: "https://github.com/MichaelS32/Horiseon-Challenge-01",
        imge: { photo2 },
        alt: "screenshot of horiseon challenge website"
    },
    {
        name: "Java Script Quiz",
        src: "https://michaels32.github.io/js-quiz/",
        github: "https://github.com/MichaelS32/js-quiz",
        imge: { photo3 },
        alt: "screenshot of java script quiz app"

    },
    {
        name: "Password Generator",
        src: "https://michaels32.github.io/password-generator/",
        github: "https://michaels32.github.io/Password-Generator/",
        imge: { photo4 },
        alt: "screenshot of password generator app"
    }
]
function Portfolio() {
    return (
        <section id="portfolio">
            <div className='d-flex flex-wrap background' key={uuid()}>
                {projects.map((project, imge) => (
                    <div className='card p-2 portfolio-card' key={uuid()}>

                        <img
                            src={project.imge}
                            alt={project.alt}
                            key={project.alt}
                            className='card-image'
                        />


                        <div className='card-body portfoliocard' key={uuid()}>

                            <a className="text-decoration-none" href={project.src} key={project.src}>
                                <h2 className='card-title portfolio-card hovering' key={project.name}>{project.name}</h2>
                            </a>
                            <a className="text-decoration-none" key={project.github} href={project.github}>
                                <h3 className='card-text portfolio-card hovering' key={uuid()}>Github Repo</h3>
                            </a>

                        </div>

                    </div>
                ))}
            </div>
        </section>
    )
}

console.log(projects.imge);
export default Portfolio;