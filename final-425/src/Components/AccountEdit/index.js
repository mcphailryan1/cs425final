import { React, useState, useEffect } from 'react';
import { Container, FormWrap, FormContent, Form, FormH1, FormLabel, FormInput, FormButton, Text } from './accounteditelements';
import axios from 'axios'
const AccountEdit = () => {
    const [formData, setFormData] = useState({})
    const [isEmailValidated, setEmailValidated] = useState(false);
    const [isPasswordValidated, setPasswordValidated] = useState(false);

    const handleSubmit = () => {
        const validate = async () => {
            const response = await axios.get(`http://localhost:3000/user/${formData.loginUsername}`)
            const authenticated = response.data.loginPassword === formData.password
            setPasswordValidated(authenticated)()
            setEmailValidated(response.data.loginUsername === formData.loginUsername)
            console.log(response)
        }
        validate()
    }

    useEffect(() => {
        if (isEmailValidated) {
            (async () => {
                await axios.post("localhost:3000/updateUser", { ...formData })
            })()
        }
    }, [setEmailValidated])
    useEffect(() => {
        if (isPasswordValidated) {
            (async () => {
                await axios.post("localhost:3000/updateUser", { ...formData })
            })()
        }
    }, [setPasswordValidated])
    return (
        <>
            <Container>
                <FormWrap>
                    <FormContent>
                        <Form action="#">
                            <FormH1>Edit Your Account Information</FormH1>
                            <FormLabel htmlFor='for'>Old Email Address:</FormLabel>
                            <FormInput type='email' onChange={x => setFormData({ ...formData, loginUsername: x.target.value })} />
                            <FormLabel htmlFor='for'>New Email Address:</FormLabel>
                            <FormInput type='email' onChange={x => setFormData({ ...formData, newLoginUsername: x.target.value })} />
                            <FormLabel htmlFor='for'>Old Password:</FormLabel>
                            <FormInput type='password' onChange={x => setFormData({ ...formData, password: x.target.value })} />
                            <FormLabel htmlFor='for'>New Password:</FormLabel>
                            <FormInput type='password' onChange={x => setFormData({ ...formData, newPassword: x.target.value })} />
                            <button onChange={handleSubmit}>RESET</button>
                            <Text>Forgot password?</Text>
                        </Form>
                    </FormContent>
                </FormWrap>
            </Container>

        </>

    )
}

export default AccountEdit