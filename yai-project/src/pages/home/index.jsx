import React from 'react';
import Hero from './sections/Hero';
import AboutProduct from './sections/AboutProduct';
import AboutInnovator from './sections/AboutInnovator';
import Works from './sections/Works';
import Contact from './sections/Contact';

const Home = () => {
    return (
        <div>
            <Hero />
            <AboutProduct />
            <AboutInnovator />
            <Works />
            <Contact />
        </div>
    );
};

export default Home
