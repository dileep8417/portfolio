import React, { Suspense, lazy, useEffect } from "react";
import { firstName, lastName, description, resumeLink, githubLink } from "./about.data";
import { AiOutlineDownload, AiFillGithub } from 'react-icons/ai';
import { MdKeyboardDoubleArrowDown } from 'react-icons/md';
import { Link } from 'react-scroll';
import './About.css';
import { useAppContext } from "../../AppContext";
const LottieAnimation = lazy(() => import("./LottieAnimation"));

const About = function() {
    const { setIsLoading } = useAppContext();

    useEffect(() => {
        const $loaderFiller = document.getElementById('spalshscreen-filler')!;
        
        setTimeout(() => {
            $loaderFiller.style.width = '100%';
            setIsLoading(false);
        }, 1500)
    }, []);

    return (
        <section className='about-section'>
            <div className="left-container">
                <p className='heading'>Hi<span>...</span></p>
                
                <p className='heading'>I<span>’</span>m <span>{firstName}</span> {lastName}</p>
                
                <p className="description">{description}</p>

                <div className="btn-container">
                    <button className="icon-btn">Resume <AiOutlineDownload className='icon' /></button>
                    <a href={githubLink} target="_blank" className="icon-btn">Github <AiFillGithub className='icon' /></a>
                    <Link className="icon-btn know-more-btn"
                        to='skills-section'
                        spy={true}
                        smooth={true}
                        offset={-80}
                        hashSpy={true}
                        duration={500}
                    >More Info <MdKeyboardDoubleArrowDown className='icon' /></Link>
                </div>
            </div>

            <div className="right-container">
                <Suspense>
                    <LottieAnimation />
                </Suspense>
            </div>
        </section>
    );
}

export default About;