import React from 'react';

const categories = [
    {
        name: "About me",
        link: "#about",
        description: "just a little info on me"
    },
    {
        name: "Contact",
        link: "#contact",
        description: "how to get in touch with me"
    },
    {
        name: "Portfolio",
        link: "#portfolio",
        description: "A collection of my current and previous work!"
    },
    {
        name: "Resume",
        link: "#resume",
        description: "My current resume."
    },
]
function categorySelected(name) {
    console.log(`${name} clicked`)
}

function Nav() {
    return (
        <header>
            <h2>
                <a href="/">
                    <span role="img" aria-label="hammer">🔨</span> Michael's Workshop
                </a>
            </h2>
            <nav>
                <ul className="flex-row">

                    {categories.map((category) => (
                        <li key={category.name}>
                            <a href={category.link}>
                                <span onClick={() => categorySelected(category.name)}>
                                    {category.name}
                                </span>
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}

export default Nav;