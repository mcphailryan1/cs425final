import React, { useState } from 'react';
import Navbar from '../Components/Navbar';

const AccountInfo = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <AccountEdit />
        </>
    );
};

export default AccountInfo;