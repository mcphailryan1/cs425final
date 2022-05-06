import React, {useState} from 'react';
import Navbar from '../Components/Navbar';
import Agent from '../Components/AgentsSection'

const Agents = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    };

    return(
        <>
            <Agent />
        </>
    );
};

export default Agents;