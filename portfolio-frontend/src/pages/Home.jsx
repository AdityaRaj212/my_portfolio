import React from 'react';
import { ReactTyped as Typed } from 'react-typed';
import './Home.css';
import profileImg from '../assets/profile.jpeg';
import { FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaGithub } from "react-icons/fa";

function Home() {
    return (
        <section className="home-container container">
            <div className="home-content">
                <h1>
                    <Typed
                        strings={["Welcome to My Portfolio", "I am Aditya Raj"]}
                        typeSpeed={50}
                        backSpeed={30}
                        loop
                    />
                </h1>
                <p className="intro-text">I am a passionate software developer and a student at IIT Kharagpur. I specialize in creating dynamic and engaging web applications. With experience in React, Node.js, and other modern technologies, I bring ideas to life through code.</p>
                <div className="cta-buttons">
                    <a href='/projects' className="explore-button">Explore My Work</a>
                    <a href='/contact' className="contact-button">Contact Me</a>
                </div>
                <div className="social-links">
                    <a href="https://github.com/AdityaRaj212" target="_blank" rel="noopener noreferrer">
                        <div className='social-img'>
                            <FaGithub />
                        </div>
                    </a>
                    <a href="https://www.linkedin.com/in/aditya-raj-shit-b30129258/" target="_blank" rel="noopener noreferrer">
                        <div className='social-img'>
                            <FaLinkedin />
                        </div>
                    </a>
                    <a href="mailto:adityaraj212.work@gmail.com">
                        <div className='social-img'>
                            <SiGmail />
                        </div>
                    </a>
                </div>
            </div>
            <div className="home-image">
                <img src={profileImg} alt="Aditya Raj's Image" />
            </div>
        </section>
    );
}

export default Home;
