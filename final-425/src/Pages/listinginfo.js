import React, {useState} from 'react';
import Navbar from '../Components/Navbar';
import Listings from '../Components/ListingSection'

const Listing = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    };

    return(
        <>
            <Navbar />
            <Listings />
        </>
    );
};

export default Listing;