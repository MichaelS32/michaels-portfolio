import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';


const projects = [
    {
        name: "text editor",
        src: "https://text-editor-pwa3232.herokuapp.com/",
        github: "https://github.com/MichaelS32/text-editor",
        img: "../../../assets/images/jate-screenshot.jpg",
        alt: "screenshot of deployed text editor app"
    },
    {
        name: "date de-stresser",
        src: "https://yvettesalinas.github.io/date-destresser/",
        github: "https://github.com/yvettesalinas/date-destresser",
        img: "../../../assets/images/date-destresser-screenshot.jpg",
        alt: "screenshot of date destresser app"
    },
    {
        name: "horiseon",
        src: "https://michaels32.github.io/Horiseon-Challenge-01/",
        github: "https://github.com/MichaelS32/Horiseon-Challenge-01",
        img: "../../../assets/images/horiseon-screenshot.jpg",
        alt: "screenshot of deployed horiseon challenge website"
    },
    {
        name: "Java Script Quiz",
        src: "https://michaels32.github.io/js-quiz/",
        github: "https://github.com/MichaelS32/js-quiz",
        img: "../../../assets/images/js-quiz-screenshot.jpg",
        alt: "screenshot of deployed java script quiz app"

    }
]
function Portfolio() {
    return (
        <section>
            {projects.map((project) => (
                <Card sx={{ maxWidth: 345 }} key={project.name}>
                    <CardActionArea key={project.name}>
                        <CardMedia
                            component="img"
                            height="140"
                            image={project.img}
                            alt={project.alt}
                            key={project.alt}
                        />
                        <CardContent>
                            <div key={project.name}>

                                <a href={project.src} key={project.src}>
                                    <h2 key={project.name}>{project.name}</h2>
                                </a>
                                <a key={project.github} href={project.github}>
                                    <h3 key={project.github}>Github Repo</h3>
                                </a>

                            </div>
                        </CardContent>
                    </CardActionArea>

                </Card>

            ))}
        </section>
    )
}

export default Portfolio;