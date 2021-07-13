import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

function Header({ authorised }) {
    return (
        
        <header>
            <div className="navbar shadow">
                <div className="container">
                    <div className="brand">
                        <Link to="/">
                            <img src="/images/logo.png" alt="Deej Potter Designs logo." height="150" />
                        </Link>
                    </div>
                    <Navbar authorised={authorised}/>
                </div>
            </div>
        </header>

    );
}

export default Header;