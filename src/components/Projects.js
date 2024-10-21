import React from 'react';
import './projects.css';
import portfolio from './portfolio.png';
import carImage from './car.png';
import todoImage from './todo.png';

const projects = [
  {
    title: 'Portfolio Website',
    image: portfolio, 
    description: 'Tech Stack: React, CSS, Nodejs, expressjs',
    liveLink: '#', 
    codeLink: '#', 
  },
  {
    title: 'Car Rental System',
    image: carImage,
    description: 'Tech Stack: MERN Stack, CSS',
    liveLink: '#', 
    codeLink: '#',
  },
  {
    title: 'Todo List',
    image: todoImage,
    description: 'Tech Stack: HTML, CSS, Javascript, ReactJs',
    liveLink: '#',
    codeLink: '#',
  },
  {
    title: '####',
    image: todoImage, 
    description: '####',
    liveLink: '#',
    codeLink: '#',
  }
 
];

const Projects = () => {
  return (
    <div id="projects" className="projects-container">
      <h1>Projects</h1>
      <p>Things I've built so far</p>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-buttons">
              <a href={project.liveLink} className="btn">Live Preview</a>
              <a href={project.codeLink} className="btn">View Code</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
