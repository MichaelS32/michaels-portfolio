import React from 'react';
import uuid from 'react-uuid';

// import photo0 from '../../photo0.png';
// import photo1 from '../../photo1.png';
// import photo2 from '../../photo2.png';
// import photo3 from '../../photo3.png';
// import photo4 from '../../photo4.png';




const projects = [
    {
        name: "Text Editor",
        src: "https://text-editor-pwa3232.herokuapp.com/",
        github: "https://github.com/MichaelS32/text-editor",
        // img: { photo0 },
        alt: "screenshot of deployed text editor app"
    },
    {
        name: "Date De-stresser",
        src: "https://yvettesalinas.github.io/date-destresser/",
        github: "https://github.com/yvettesalinas/date-destresser",
        // img: { photo1 },
        alt: "screenshot of date destresser app"
    },
    {
        name: "Horiseon",
        src: "https://michaels32.github.io/Horiseon-Challenge-01/",
        github: "https://github.com/MichaelS32/Horiseon-Challenge-01",
        // img: { photo2 },
        alt: "screenshot of deployed horiseon challenge website"
    },
    {
        name: "Java Script Quiz",
        src: "https://michaels32.github.io/js-quiz/",
        github: "https://github.com/MichaelS32/js-quiz",
        // img: { photo3 },
        alt: "screenshot of deployed java script quiz app"

    },
    {
        name: "Password Generator",
        src: "https://michaels32.github.io/password-generator/",
        github: "https://github.com/MichaelS32/password-generator",
        // img: { photo4 },
        alt: "screenshot of password generator app"
    }
]
function Portfolio() {
    return (
        <section id="portfolio">
            <div className='d-flex flex-wrap background' key={uuid()}>
                {projects.map((project, i) => (
                    <div className='card p-2 portfolio-card' key={uuid()}>

                        <img
                            // src={require(project.img)}
                            alt={project.alt}
                            key={project.alt}
                            className='img-thumbnail card-img-top'
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

export default Portfolio;