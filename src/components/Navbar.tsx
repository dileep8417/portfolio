import React from 'react';
import { Link } from 'react-scroll';
import "../styles/Navbar.css";
import Logo from './Logo';

const Navbar = function() {

    const links: string[] = [
        'About',
        'Skills',
        'Projects',
        'Contact'
    ];

    return (
        <nav>
            <Logo />
            <ul>
               {links.map((link, index) => {
                const targetSection = link.toLowerCase() + '-section';
                return <li key={index}>
                    <Link activeClass="active"
                        to={targetSection}
                        spy={true}
                        smooth={true}
                        offset={-150}
                        hashSpy={true}
                        duration={500}
                    >
                        {link}
                    </Link>
                </li>
               })}
            </ul>
        </nav>
    );
}

export default Navbar;