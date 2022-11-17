import { Outlet } from 'react-router-dom';
import Nav from '../Nav';
import Footer from '../../assets/footer2.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, } from '@fortawesome/free-brands-svg-icons';

const Layout = () => {
    return (
        <div className='App'>
            <Nav />
            <div className='background'>

                <Outlet />

            </div>
            <img src={Footer} alt='tree and mountain' className='footer-pic' />
            <p className='footer-info d-inline-flex'>
            830.444.1615 | michaelschneider3232@gmail.com | <div>
                    <a target="_blank" rel='noreferrer' href='https://www.linkedin.com/in/michael-schneider-webdev/' exact='true' className='footer-icon'>
                        <FontAwesomeIcon icon={faLinkedin} color="#fefefe" />
                    </a>
                </div>  |  <div>
                    <a target="_blank" rel='noreferrer' href='https://github.com/MichaelS32' exact='true' className='footer-icon'>
                        <FontAwesomeIcon icon={faGithub} color="#fefefe" />
                    </a>
                </div>
            </p>
        </div>
    )
}

export default Layout;