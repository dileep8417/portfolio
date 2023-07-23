import React from 'react';
import { projects } from './projects.data';
import './Projects.css';
import Section from '../wrappers/Section';
import { HiOutlineExternalLink } from 'react-icons/hi';
import imgTest from '../../assets/images/test.png';

const Projects = function() {
    return (
        <Section heading='Some Recent Projects'  sectionId='projects-section'>
            <div className="projects-container">
                {projects.map(project => {
                    return (
                        <div key={project.title} className="project-card">
                            <div className="card-header">
                                <div className="project-content">
                                    <div className="project-title">{project.title}</div>
                                    <div className="project-description">{project.description}</div>
                                    <div className="project-features">
                                        {project.features.map(feature => {
                                            return <div key={feature} className="feature">{feature}</div>
                                        })}
                                    </div>
                                </div>
                                <div className="links">
                                    {project.workLinks.sourceCode ? <a className='btn primary-btn' href={project.workLinks.sourceCode}>Source Code <HiOutlineExternalLink className="icon" /></a> : ''}
                                    {project.workLinks.demo ? <a className='btn teritory-btn' href={project.workLinks.demo}>Live Demo <HiOutlineExternalLink className="icon" /></a> : ''}
                                </div>
                            </div>
                            <div className="card-footer">
                                <img src={imgTest} alt="" />
                            </div>
                        </div>

                    );
                })}
            </div>
        </Section>
    );
}

export default Projects;