import { Link } from 'react-router-dom';


const Home = () => {
    return (
        <div id="home" className="container home-page">
            <div className="text-zone">
                <h1>
                    Hi, I'm Michael Schneider, thanks for checking out my portfolio site!
                </h1>
                <h2>Full Stack Developer/ Designer</h2>
                <Link to="/contact" className="flat-button">CONTACT ME</Link>
            </div>

        </div>
    )
}

export default Home;