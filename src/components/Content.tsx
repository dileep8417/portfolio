import React, { Suspense, lazy } from 'react';
import { useAppContext } from '../AppContext';
import Footer from './Footer';

const Navbar = lazy(() => import('./Navbar'));

const About = lazy(() => import('./about/About'));

const Skills = lazy(() => import('./skills/Skills'));

const Projects = lazy(() => import('./projects/Projects'));

const Contact = lazy(() => import('./contact/Contact'));

const Content = function() {
    const { isLoading } = useAppContext();

    return (
        <div className={isLoading ? 'hide' : 'show'}>
            <Suspense>
                <Navbar />
            </Suspense>
            <main>
                <Suspense>
                    <About />
                </Suspense>

                <Suspense>
                    <Skills />
                </Suspense>
                
                <Suspense>
                    <Projects />
                </Suspense>

                <Suspense>
                    <Contact />
                </Suspense>
            </main>
            <Footer />
        </div>
    );
}

export default Content;