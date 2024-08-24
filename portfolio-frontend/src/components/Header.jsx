import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import signature from './../assets/signature.png'

function Header() {
    return (
        <header>
            <nav className="container">
                {/* <h1>Aditya Raj</h1> */}
                <a href='/'>
                    <img className='signature' src={signature} alt="Aditya Raj"></img>
                </a>
                <ul>
                    <li><Link to="/" smooth>Home</Link></li>
                    <li><Link to="/about" smooth>About</Link></li>
                    <li><Link to="/skills" smooth>Skills</Link></li>
                    <li><Link to="/projects" smooth>Projects</Link></li>
                    <li><Link to="/contact" smooth>Contact</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
