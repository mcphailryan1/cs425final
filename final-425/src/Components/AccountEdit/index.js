import React from 'react';
import {Container, FormWrap, FormContent, Form, FormH1, FormLabel, FormInput, FormButton, Text} from './accounteditelements';

const AccountEdit = () => {
    return (
        <>
            <Container>
                <FormWrap>
                    <FormContent>
                        <Form action="#">
                            <FormH1>Edit Your Account Information</FormH1>
                            <FormLabel htmlFor='for'>Old Email Address:</FormLabel>
                            <FormInput type='email' />
                            <FormLabel htmlFor='for'>New Email Address:</FormLabel>
                            <FormInput type='email' />
                            <FormLabel htmlFor='for'>Old Password:</FormLabel>
                            <FormInput type='password'  />
                            <FormLabel htmlFor='for'>New Password:</FormLabel>
                            <FormInput type='password'  />
                            <FormButton to='/'>RESET</FormButton>
                            <Text>Forgot password?</Text>
                        </Form>
                    </FormContent>
                </FormWrap>
            </Container>

        </>

    )
}

export default AccountEdit