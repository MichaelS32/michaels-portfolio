import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import photo0 from './assets/portfolio/photo0';
import photo1 from './assets/portfolio/photo1';
import photo2 from './assets/portfolio/photo2';
import photo3 from './assets/portfolio/photo3';
import photo4 from './assets/portfolio/photo4';


const projects = [
    {
        name: "Text Editor",
        src: "https://text-editor-pwa3232.herokuapp.com/",
        github: "https://github.com/MichaelS32/text-editor",
        img: { photo0 },
        alt: "screenshot of deployed text editor app"
    },
    {
        name: "Date De-stresser",
        src: "https://yvettesalinas.github.io/date-destresser/",
        github: "https://github.com/yvettesalinas/date-destresser",
        img: { photo1 },
        alt: "screenshot of date destresser app"
    },
    {
        name: "Horiseon",
        src: "https://michaels32.github.io/Horiseon-Challenge-01/",
        github: "https://github.com/MichaelS32/Horiseon-Challenge-01",
        img: { photo2 },
        alt: "screenshot of deployed horiseon challenge website"
    },
    {
        name: "Java Script Quiz",
        src: "https://michaels32.github.io/js-quiz/",
        github: "https://github.com/MichaelS32/js-quiz",
        img: { photo3 },
        alt: "screenshot of deployed java script quiz app"

    },
    {
        name: "Password Generator",
        src: "https://michaels32.github.io/password-generator/",
        github: "https://github.com/MichaelS32/password-generator",
        img: { photo4 },
        alt: "screenshot of password generator app"
    }
]
function Portfolio() {
    return (
        <section id="portfolio">
            <div className='d-flex flex-wrap'>
                {projects.map((project, i) => (
                    <Card className='p-2' sx={{ maxWidth: 345 }} key={project.name}>
                        <CardActionArea key={project.name}>
                            <CardMedia>
                                <img className='img-thumbnail'
                                    src={`${project.img}`}
                                    alt={project.alt}
                                    key={project.img}
                                />
                            </CardMedia>
                            <CardContent>
                                <div key={project.name}>

                                    <a className="text-decoration-none" href={project.src} key={project.src}>
                                        <h2 key={project.name}>{project.name}</h2>
                                    </a>
                                    <a className="text-decoration-none" key={project.github} href={project.github}>
                                        <h3 key={project.github}>Github Repo</h3>
                                    </a>

                                </div>
                            </CardContent>
                        </CardActionArea>

                    </Card>

                ))}
            </div>
        </section>
    )
}

export default Portfolio;