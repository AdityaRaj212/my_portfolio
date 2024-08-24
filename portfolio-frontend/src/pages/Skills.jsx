import React from 'react';
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaDatabase, FaJsSquare, FaGitAlt, FaGithub } from 'react-icons/fa';
import { SiExpress } from "react-icons/si";
import './Skills.css';

const skills = [
    { name: 'HTML5', icon: <FaHtml5 /> },
    { name: 'CSS3', icon: <FaCss3Alt /> },
    { name: 'JavaScript', icon: <FaJsSquare /> },
    { name: 'React', icon: <FaReact /> },
    { name: 'Node.js', icon: <FaNodeJs /> },
    { name: 'Express.js', icon: <SiExpress /> },
    { name: 'MongoDB', icon: <FaDatabase /> },
    { name: 'Git', icon: <FaGitAlt /> },
    { name: 'GitHub', icon: <FaGithub /> },
];

function Skills() {
    return (
        <section className="skills-container container">
            <h2 className="section-title">Skills</h2>
            <div className="skills-grid">
                {skills.map((skill, index) => (
                    <div key={index} className="skill-card floating-icon">
                        <div className="skill-icon">{skill.icon}</div>
                        <h3 className="skill-title">{skill.name}</h3>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Skills;
