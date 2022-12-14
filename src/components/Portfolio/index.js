import React from 'react';
import { FadeIn } from 'react-slide-fade-in';

import photo0 from '../../assets/photo0.png';
import photo1 from '../../assets/photo1.png';
import photo2 from '../../assets/photo2.png';
import photo3 from '../../assets/photo3.png';
import photo4 from '../../assets/photo4.png';
import photo5 from '../../assets/photo5.png';
import photo6 from '../../assets/photo6.png';
import photo7 from '../../assets/photo7.png';


function Portfolio() {
    return (
        <FadeIn
            from='bottom'
            positionOffset={500}
            triggerOffset={0}
            delayInMilliseconds={0}
            durationInMilliseconds={1000}
            >
            <section id="portfolio">
                <div className='container background'>
                    <div className='row project-container'>

                        <div className='card portfolio-card col-5 col-sm-5 col-md-3 col-lg-3 col-xl-3'>

                            <img
                                src={photo7}
                                alt='screenshot of text editor app'
                                className='project-image'
                            />


                            <div className='card-body portfolio-card'>

                                <a className="text-decoration-none" href='https://michaels32.github.io/mercury-com-react/'>
                                    <h2 className='card-title portfolio-card hovering text-size'>Mercury Communications</h2>
                                </a>
                                <a className="text-decoration-none" href='https://github.com/MichaelS32/mercury-com-react'>
                                    <h3 className='card-text portfolio-card hovering text-size'>Github Repo</h3>
                                </a>

                            </div>

                        </div>

                        <div className='card portfolio-card col-5 col-sm-5 col-md-3 col-lg-3 col-xl-3'>

                            <img
                                src={photo0}
                                alt='screenshot of text editor app'
                                className='project-image'
                            />


                            <div className='card-body portfolio-card'>

                                <a className="text-decoration-none" href='https://text-editor-pwa3232.herokuapp.com/'>
                                    <h2 className='card-title portfolio-card hovering text-size'>Text Editor</h2>
                                </a>
                                <a className="text-decoration-none" href='https://github.com/MichaelS32/text-editor'>
                                    <h3 className='card-text portfolio-card hovering text-size'>Github Repo</h3>
                                </a>

                            </div>

                        </div>

                        <div className='card portfolio-card col-5 col-sm-5 col-md-3 col-lg-3 col-xl-3'>

                            <img
                                src={photo1}
                                alt='screenshot of date destresser app'
                                className='project-image'
                            />


                            <div className='card-body portfolio-card'>

                                <a className="text-decoration-none" href='https://yvettesalinas.github.io/date-destresser/'>
                                    <h2 className='card-title portfolio-card hovering text-size'>Date De-stresser</h2>
                                </a>
                                <a className="text-decoration-none" href='https://github.com/yvettesalinas/date-destresser'>
                                    <h3 className='card-text portfolio-card hovering text-size'>Github Repo</h3>
                                </a>

                            </div>

                        </div>

                        <div className='card portfolio-card col-5 col-sm-5 col-md-3 col-lg-3 col-xl-3'>

                            <img
                                src={photo2}
                                alt='screenshot of horiseon challenge website'
                                className='project-image'
                            />


                            <div className='card-body portfolio-card'>

                                <a className="text-decoration-none" href='https://michaels32.github.io/Horiseon-Challenge-01/'>
                                    <h2 className='card-title portfolio-card hovering text-size'>Horiseon</h2>
                                </a>
                                <a className="text-decoration-none" href='https://github.com/MichaelS32/Horiseon-Challenge-01'>
                                    <h3 className='card-text portfolio-card hovering text-size'>Github Repo</h3>
                                </a>

                            </div>

                        </div>

                        <div className='card portfolio-card col-5 col-sm-5 col-md-3 col-lg-3 col-xl-3'>

                            <img
                                src={photo3}
                                alt='screenshot of java script quiz app'
                                className='project-image'
                            />


                            <div className='card-body portfolio-card'>

                                <a className="text-decoration-none" href='https://michaels32.github.io/js-quiz/'>
                                    <h2 className='card-title portfolio-card hovering text-size'>Java Script Quiz</h2>
                                </a>
                                <a className="text-decoration-none" href='https://github.com/MichaelS32/js-quiz'>
                                    <h3 className='card-text portfolio-card hovering text-size'>Github Repo</h3>
                                </a>

                            </div>

                        </div>

                        <div className='card portfolio-card col-5 col-sm-5 col-md-3 col-lg-3 col-xl-3'>

                            <img
                                src={photo4}
                                alt='screenshot of password generator app'
                                className='project-image'
                            />


                            <div className='card-body portfolio-card'>

                                <a className="text-decoration-none" href='https://michaels32.github.io/Password-Generator/'>
                                    <h2 className='card-title portfolio-card hovering text-size'>Password Generator</h2>
                                </a>
                                <a className="text-decoration-none" href='https://michaels32.github.io/Password-Generator/'>
                                    <h3 className='card-text portfolio-card hovering text-size'>Github Repo</h3>
                                </a>

                            </div>

                        </div>

                        <div className='card portfolio-card col-5 col-sm-5 col-md-3 col-lg-3 col-xl-3'>

                            <img
                                src={photo5}
                                alt='screenshot of note taker app'
                                className='project-image'
                            />


                            <div className='card-body portfolio-card'>

                                <a className="text-decoration-none" href='https://gentle-headland-13557.herokuapp.com/notes'>
                                    <h2 className='card-title portfolio-card hovering text-size'>Note Taker</h2>
                                </a>
                                <a className="text-decoration-none" href='https://github.com/MichaelS32/note-taker'>
                                    <h3 className='card-text portfolio-card hovering text-size'>Github Repo</h3>
                                </a>

                            </div>

                        </div>

                        <div className='card portfolio-card col-5 col-sm-5 col-md-3 col-lg-3 col-xl-3'>

                            <img
                                src={photo6}
                                alt='screenshot of SoFit App'
                                className='project-image'
                            />


                            <div className='card-body portfolio-card'>

                                <a className="text-decoration-none" href='https://so-fit.herokuapp.com/'>
                                    <h2 className='card-title portfolio-card hovering text-size'>SoFit</h2>
                                </a>
                                <a className="text-decoration-none" href='https://github.com/MichaelS32/fitness-tracker'>
                                    <h3 className='card-text portfolio-card hovering text-size'>Github Repo</h3>
                                </a>

                            </div>

                        </div>





                    </div>
                </div>
            </section>
        </FadeIn>
    )
}


export default Portfolio;