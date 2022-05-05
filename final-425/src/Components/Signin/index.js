import React from 'react';
import {Container, FormWrap, Icon, FormContent, Form, FormH1, FormLabel, FormInput, FormButton, Text, CreateButton} from './signinelements';

const SignIn = () => {
    return (
        <>
            <Container>
                <FormWrap>
                    <FormContent>
                        <Form action="#">
                            <FormH1>Sign in or Create your Account</FormH1>
                            <FormLabel htmlFor='for'>Email</FormLabel>
                            <FormInput type='email' required />
                            <FormLabel htmlFor='for'>Password</FormLabel>
                            <FormInput type='password' required />
                            <FormButton to='/'>Continue</FormButton>
                            <CreateButton type='createaccount'>Create Accout</CreateButton>
                            <Text>Forgot password?</Text>
                        </Form>
                    </FormContent>
                </FormWrap>
            </Container>

        </>

    )
}

export default SignIn