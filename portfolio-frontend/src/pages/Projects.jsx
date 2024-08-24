import React, { useState } from 'react';
import './Projects.css';

const projects = [
    {
        title: 'Clash of Brains',
        shortDescription: 'A real-time 1v1 quiz app with dynamic matchmaking.',
        detailedDescription: 'A real-time 1v1 quiz app with dynamic matchmaking and gameplay analytics. Developed using React, Express, MongoDB, and Socket.io to create an engaging competitive environment.',
        repoLink: 'https://github.com/AdityaRaj212/Clash-of-brains',
        liveLink: 'https://clash-of-brains.onrender.com/'
    },
    {
        title: 'Scribble Board',
        shortDescription: 'A dynamic whiteboard application with various drawing tools.',
        detailedDescription: 'A dynamic whiteboard application with various drawing tools, created using HTML5 Canvas, React, and Tailwind CSS for an intuitive and interactive user experience.',
        repoLink: 'https://github.com/AdityaRaj212/Scribble-board',
        liveLink: 'https://scribble-board-six.vercel.app/'
    },
    {
        title: 'Post-away',
        shortDescription: 'A social networking app with real-time updates.',
        detailedDescription: 'A social networking app that provides real-time updates on posts, likes, and comments using React.js, Bootstrap, Express, MongoDB, JWT-based authentication, and Socket.io.',
        repoLink: 'https://github.com/AdityaRaj212/PostAway-Beta',
        liveLink: 'https://postaway-beta.onrender.com/'
    },
    // Add more projects as needed
];

function Projects() {
    const [hovered, setHovered] = useState(null);

    return (
        <section className="projects-container container">
            <h2 className="section-title">Projects</h2>
            <div className='projects'>
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className={`project-card ${hovered === index ? 'expanded' : ''}`}
                        onMouseEnter={() => setHovered(index)}
                        onMouseLeave={() => setHovered(null)}
                    >
                        <h3>{project.title}</h3>
                        <p>{hovered === index ? project.detailedDescription : project.shortDescription}</p>
                        <div className="project-links">
                            <a href={project.repoLink} target="_blank" rel="noopener noreferrer">GitHub</a>
                            <a href={project.liveLink} target="_blank" rel="noopener noreferrer">Live Demo</a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Projects;
