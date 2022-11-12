import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';


function Nav(props) {
    const location = useLocation();

    const { pathname } = location;

    const splitLocation = pathname.split("/");

    return (
        <header className='background container'>
            

            <nav className='nav-container row'>
                <Link to='/' className='text-decoration-none col-4'>
                    <h1 className='logo'>
                        <div className='navbar-brand title-size'>
                             Michael Schneider
                        </div>
                    </h1>
                </Link>
                <ul className=" navbar has-shadow nav-links justify-content-around background col-6">

                    <NavLink exact='true' className={splitLocation[1] === "about" ? "active" : "nav"} to='/about'>
                        <li className='nav'>
                            <h2 className='nav hovering nav-text' href="#about">

                                About Me

                            </h2>
                        </li>
                    </NavLink>

                    <NavLink exact='true' className={splitLocation[1] === "contact" ? "active" : "nav"} to='/contact'>
                        <li className='nav'>
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