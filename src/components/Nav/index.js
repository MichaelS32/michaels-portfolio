import React, { useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom'


function categorySelected(name) {
    console.log(`${name} clicked`)
}

function Nav(props) {

    useEffect(() => {
        document.title = categorySelected.name
    })

    return (
        <header>
            <Link to='/home' className='text-decoration-none'>
                <h1 className='logo'>
                    <div className='navbar-brand'>
                        <span role="img" aria-label="hammer">🔨</span> Michael's Workshop
                    </div>
                </h1>
            </Link>

            <nav>
                <ul className="flex-row navbar has-shadow justify-content-around background">

                    <NavLink exact='true' activeclassname='active' className='text-decoration-none' to='/about'>
                        <li className='nav'>
                            <h2 className='nav hovering' href="#about">

                                About Me

                            </h2>
                        </li>
                    </NavLink>

                    <NavLink exact='true' activeclassname='active' className='text-decoration-none ' to='/contact'>
                        <li className={`nav 'navActive'}`}>
                            <h2 className='nav hovering' href="#contact">

                                Contact

                            </h2>
                        </li>
                    </NavLink>

                    <NavLink exact='true' activeclassname='active' className='text-decoration-none' to='/portfolio'>
                        <li className='nav'>
                            <h2 className='nav hovering' href="#portfolio">

                                Portfolio

                            </h2>
                        </li>
                    </NavLink>

                    <NavLink exact='true' activeclassname='active' className='text-decoration-none' to='/resume'>
                        <li className='nav'>
                            <h2 className='nav hovering' href="#resume">

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