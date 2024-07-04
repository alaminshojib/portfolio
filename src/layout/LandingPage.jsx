import React from 'react';
import Home from '../components/Home';
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Education from '../components/Education';
import Contact from '../components/Contact';

const LandingPage = () => {
    return (
        <div className='bg-gray-900'>
            <Home></Home>
            <Skills></Skills>
            <Experience></Experience>
            <Projects></Projects>
            <Education></Education>
            <Contact></Contact>
        </div>
    );
};

export default LandingPage;