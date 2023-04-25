import React from 'react';
import { Link } from 'react-router-dom';

export function Navbar(props) {

    return(
        <header className='spaceBetween'>
            <img className="logo" src="img/EnviteLogo.png" alt="envite company logo"/>
                <nav>
                    <div role="navigation" aria-label="Navigation Bar">
                        <ul className="links-nav">
                            <li><Link to="/home" aria-label="Home">Home</Link></li>
                            <li><Link to="/map/1" aria-label="Map">Map</Link></li>
                            <li><Link to="/about" aria-label="About Us">About</Link></li>
                        </ul>
                    </div>
                </nav>
        </header>
    )
}