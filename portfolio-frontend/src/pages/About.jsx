// src/pages/About.jsx
import React from 'react';
import './About.css';
import profileImage from '../assets/profile.jpeg';

function About() {
    return (
        <section className="about-container container">
            <div className="about-content">
                <h2>About Me</h2>
                <p>Hello! I'm Aditya Raj, a third-year undergraduate student at IIT Kharagpur with a passion for software development and competitive programming.</p>
                <p>My journey in software engineering has equipped me with strong skills in various programming languages and frameworks. From front-end technologies like React and CSS to back-end solutions with Node.js and MongoDB, I enjoy turning ideas into real, impactful products.</p>
                <p>Currently, I am focused on exploring new technologies and working on diverse projects to continually expand my knowledge and expertise. My goal is to contribute to cutting-edge projects and grow as a proficient software engineer.</p>
            </div>
            <img className="about-image" src={profileImage} alt="Aditya Raj Shit" />
        </section>
    );
}

export default About;
