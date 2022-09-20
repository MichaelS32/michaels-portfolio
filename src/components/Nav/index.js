import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';


function Nav(props) {
    const location = useLocation();

    const { pathname } = location;

    const splitLocation = pathname.split("/");

    return (
        <header>
            <Link to='/' className='text-decoration-none'>
                <h1 className='logo'>
                    <div className='navbar-brand'>
                        <span role="img" aria-label="hammer">🔨</span> Michael's Workshop
                    </div>
                </h1>
            </Link>

            <nav>
                <ul className="flex-row navbar has-shadow justify-content-around background">

                    <NavLink exact='true' className={splitLocation[1] === "about" ? "active" : "nav"} to='/about'>
                        <li className='nav'>
                            <h2 className='nav hovering nav-text' href="#about">

                                About Me

                            </h2>
                        </li>
                    </NavLink>

                    <NavLink exact='true' className={splitLocation[1] === "contact" ? "active" : "nav"} to='/contact'>
                        <li className={`nav 'navActive'}`}>
                            <h2 className='nav hovering nav-text' href="#contact">

                                Contact

                            </h2>
                        </li>
                    </NavLink>

                    <NavLink exact='true' className={splitLocation[1] === "portfolio" ? "active" : "nav"} to='/portfolio'>
                        <li className='nav'>
                            <h2 className='nav hovering nav-text text-decoration-none' href="#portfolio">

                                Portfolio

                            </h2>
                        </li>
                    </NavLink>

                    <NavLink exact='true' className={splitLocation[1] === "resume" ? "active" : "nav"} to='/resume'>
                        <li className='nav'>
                            <h2 className='nav hovering nav-text' href="#resume">

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