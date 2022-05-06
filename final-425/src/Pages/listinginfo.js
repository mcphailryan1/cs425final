import React, {useState} from 'react';
import Listings from '../Components/ListingSection'

const Listing = () => {
    const [isOpen, setIsOpen] = useState(false);

    return(
        <>
            <Listings />
        </>
    );
};

export default Listing;