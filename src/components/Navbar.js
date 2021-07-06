import React from 'react';
import Navlink from './Navlink';

function Navbar() {
    return (
        <nav>
            <label htmlFor="show-menu">Show Menu</label>
            <input type="checkbox" id="show-menu" role="button" />
            <ul id="menu">
                <Navlink content="Home" location="/" />
                <Navlink content="Trivia" location="/trivia" />
                <Navlink content="Answers" location="/answers" />
            </ul>
        </nav>
    );
}

export default Navbar;