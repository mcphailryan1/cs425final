import React from 'react';
import { Container, FormWrap, Icon, FormContent, Form, FormH1, FormLabel, FormInput, FormButton, Text, CreateButton } from './signinelements';
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Button } from '../ButtonElement';
import { useNavigate } from "react-router-dom";

const SignIn = ({ setSignedIn }) => {
    const [formState, setFormState] = useState({})
    const [signInStatus, setSignInStatus] = useState('signed-out')
    let navigate = useNavigate();

    useEffect(() => {

        if (signInStatus === 'signed-in') {
            setSignedIn(true)
            return navigate("/");
        } else if (signInStatus === 'unauthorized') { setSignedIn(false) }
    }, [signInStatus, setSignedIn])

    const signIn = () => {
        const fetchData = async () => {
            const response = await axios.get(`http://localhost:3000/user/${formState.email}`)
            const authenticated = response.data.loginPassword === formState.password
            console.log(response)
            authenticated ? setSignInStatus('signed-in') : setSignInStatus('unauthorized')
        }
        fetchData();

    }
    console.log()
    return (
        <>
            <Container>
                <FormWrap>
                    <FormContent>
                        <Form action="#">
                            <FormH1>Sign in or Create your Account</FormH1>
                            <FormLabel htmlFor='for'>Email</FormLabel>
                            <FormInput type='email' required onChange={(x) => { setFormState({ ...formState, email: x.target.value }) }} />
                            <FormLabel htmlFor='for'>Password</FormLabel>
                            <FormInput type='password' required onChange={(x) => { setFormState({ ...formState, password: x.target.value }) }} />
                            <button onClick={signIn}>Continue</button>
                            <CreateButton type='createaccount' >Create Account</CreateButton>
                            <Text>Forgot password?</Text>
                        </Form>
                    </FormContent>
                </FormWrap>
            </Container>

        </>

    )
}

export default SignIn