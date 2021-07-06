import React from 'react';
import Navlink from './Navlink';

function Header() {
    return (
        <header>
            <div className="navbar shadow">
                <div className="container">
                    <div className="brand">
                        <a href="">
                            <img src="" />
                        </a>
                    </div>
                    <nav>
                        <label htmlFor="show-menu">Show Menu</label>
                        <input type="checkbox" id="show-menu" role="button" />
                        <ul id="menu">
                            <Navlink content="Home" location="/" />
                            <Navlink content="Home" location="/" />
                            <Navlink content="Home" location="/" />
                            <Navlink content="Home" location="/" />
                            <Navlink content="Home" location="/" />
                        </ul>
                    </nav>
                </div>
            </div>
        </header>

    );
}

export default Header;