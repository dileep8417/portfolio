import React from 'react';
import { skillsCategories } from './skills';
import Section from '../wrappers/Section';
import './Skills.css';

const Skills = function() {
    return (
        <Section heading='Tech Stack'  sectionId='skills-section'>
            <div className="skill-categories">
                {skillsCategories.map(skillsCategorie => {
                    return (
                        <div key={skillsCategorie.categoryName} className="skill-category">
                            <div className="category-heading">{skillsCategorie.categoryName}</div>
                            <div className="category-skills">
                                {skillsCategorie.skills.map(skill => {
                                    return (
                                        <div key={skill.name} className="skill-container">
                                            <img src={skill.logo} className={`skill-logo ${skill.name}`} alt="" />
                                            <div className="skill-name">{skill.name}</div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                    );
                })}
            </div>
        </Section>
    );
}

export default Skills;