import React, {useState} from 'react';
import HeroSection from '../Components/HeroSection';
import Navbar from '../Components/Navbar';

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    };

    return(
        <>
            <Navbar />
            <HeroSection />
        </>
    );
};

export default Home;