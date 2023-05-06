import React from 'react';
import { Link } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';


export function Navbar(props) {

    return(
        <div className='spaceBetween-content'>
        <div className='spaceBetween'>
            <div>
            <img className="logo" src="img/logo.png"/>
            <span>Rainbow</span>
            </div>
                <nav>
                    <div className='links' role="navigation" aria-label="Navigation Bar">
                        <ul className="links-nav">
                            <li><Link to="/home" aria-label="Home">Home</Link></li>
                            <li><Link to="/map/1" aria-label="Map">Map</Link></li>
                            <li><Link to="/about" aria-label="About Us">About</Link></li>
                        </ul>
                    </div>
                </nav>
                <Dropdown className='drop-content'>
                <Dropdown.Toggle className='drop-down' variant="success" id="dropdown-basic">
                    
                </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href="/home">Home</Dropdown.Item>
                        <Dropdown.Item href="/map/1">Map</Dropdown.Item>
                        <Dropdown.Item href="/about">About</Dropdown.Item>
                    </Dropdown.Menu>
            </Dropdown>
        </div>
        </div>
    )
}