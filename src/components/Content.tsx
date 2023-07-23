import React, { Suspense, lazy } from 'react';
import { useAppContext } from '../AppContext';

const Navbar = lazy(() => import('./Navbar'));

const About = lazy(() => import('./about/About'));

const Skills = lazy(() => import('./skills/Skills'));

const Projects = lazy(() => import('./projects/Projects'));

const Contact = lazy(() => import('./contact/Contact'));

const Content = function() {
    const { isLoading }: boolean = useAppContext();

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
        </div>
    );
}

export default Content;