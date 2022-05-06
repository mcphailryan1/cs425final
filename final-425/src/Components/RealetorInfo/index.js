import { React } from 'react';
import Icon1 from '../../Images/person1.jpeg'
import { Container, FormWrap, FormContent, Form, FormH1, FormLink, Text } from './realetorinfoelements';

const AccountEdit = () => {

    return (
        <>
            <Container>
                <FormWrap>
                    <FormContent>
                        <Form action="#">
                            <FormH1>Realator Information</FormH1>
                            <img>{Icon1}</img>
                            <Text>Name: </Text>
                            <Text>Email: </Text>
                            <FormLink>Click Here for Listings!</FormLink>
                        </Form>
                    </FormContent>
                </FormWrap>
            </Container>

        </>

    )
}

export default AccountEdit