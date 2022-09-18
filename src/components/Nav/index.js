import React, { useEffect } from 'react';


function categorySelected(name) {
    console.log(`${name} clicked`)
}

function Nav(props) {
    const {
        contactSelected,
        currentCategory,
        setContactSelected

    } = props;

    useEffect(() => {
        document.title = categorySelected.name
    })

    return (
        <header>
            <h2 className='logo'>
                <a href="/" className='navbar-brand'>
                    <span role="img" aria-label="hammer">🔨</span> Michael's Workshop
                </a>
            </h2>
            <nav>
                <ul className="flex-row navbar has-shadow justify-content-around">


                    <li className='nav'>
                        <a className='nav' href="#about">
                            <span className='nav' onClick={() => setContactSelected(false)}>
                                About Me
                            </span>
                        </a>
                    </li>
                    <li className={`nav ${contactSelected && 'navActive'}`}>
                        <a className='nav' href="#contact">
                            <span className='nav' onClick={() => setContactSelected(true)}>
                                Contact
                            </span>
                        </a>
                    </li>
                    <li className='nav'>
                        <a className='nav' href="#portfolio">
                            <span className='nav' onClick={() => setContactSelected(false)}>
                                Portfolio
                            </span>
                        </a>
                    </li>
                    <li className='nav'>
                        <a className='nav' href="#resume">
                            <span className='nav' onClick={() => setContactSelected(false)}>
                                Resume
                            </span>
                        </a>
                    </li>

                </ul>
            </nav>
        </header>
    );
}

export default Nav;