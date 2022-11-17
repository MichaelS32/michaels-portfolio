import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';


function Nav(props) {
    const location = useLocation();

    const { pathname } = location;

    const splitLocation = pathname.split("/");

    return (
        <header className='container'>
            <Link to='/' className='text-decoration-none spacing'>
                <h1 className='logo-top'>
                    <div className='title-size'>
                        Michael Schneider
                    </div>
                </h1>
            </Link>

            <nav className='nav-container row'>

                <ul className=" navbar has-shadow nav-links justify-content-around background ">

                    <NavLink exact='true' className={splitLocation[1] === "about" ? "active" : "nav"} to='/about'>
                        <li className='nav'>
                            <h2 className={splitLocation[1] === 'about' ? "active" : 'nav hovering nav-text'} href="#about">

                                About Me

                            </h2>
                        </li>
                    </NavLink>

                    <NavLink exact='true' className={splitLocation[1] === "portfolio" ? "active" : "nav"} to='/portfolio'>
                        <li className='nav'>
                            <h2 className={splitLocation[1] === 'portfolio' ? "active" : 'nav hovering nav-text'} href="#portfolio">

                                Portfolio

                            </h2>
                        </li>
                    </NavLink>

                    <NavLink exact='true' className={splitLocation[1] === "contact" ? "active" : "nav"} to='/contact'>
                        <li className='nav'>
                            <h2 className={splitLocation[1] === 'contact' ? "active" : 'nav hovering nav-text'} href="#contact">

                                Contact

                            </h2>
                        </li>
                    </NavLink>

                    <NavLink exact='true' className={splitLocation[1] === "resume" ? "active" : "nav"} to='/resume'>
                        <li className='nav'>
                            <h2 className={splitLocation[1] === 'resume' ? "active" : 'nav hovering nav-text'} href="#resume">

                                Resume

                            </h2>
                        </li>
                    </NavLink>

                </ul>
            </nav>
        </header>
    );
}

export default Nav;