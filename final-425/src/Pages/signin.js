import React from 'react';
import Navbar from '../Components/Navbar';
import SignIn from '../Components/Signin';

const SigninPage = ({ setSignedIn }) => {
    return (
        <>
            <SignIn setSignedIn={setSignedIn} />
        </>
    )
}

export default SigninPage;