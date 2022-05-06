import React, { useState } from 'react';
import Navbar from '../Components/Navbar';

const AccountInfo = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    };

    return (
        <>
            <Navbar />
            <AccountEdit />
        </>
    );
};

export default AccountInfo;