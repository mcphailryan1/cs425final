import { React } from 'react';
import Icon1 from '../../Images/person1.jpeg'
import { Container, FormWrap, ServicesIcon, FormContent, Form, FormH1, Icon, Text } from './realetorinfoelements';

const AccountEdit = () => {

    return (
        <>
            <Container>
                <FormWrap>
                    <FormContent>
                        <Form action="#">
                            <FormH1>Realator Information</FormH1>
                            <ServicesIcon src={Icon1} />
                            <Text>Name: John Hirsch</Text>
                            <Text>Email: john@gmail.com</Text>
                            <Icon to='/listingspage'>Click Here for Listings!</Icon>
                        </Form>
                    </FormContent>
                </FormWrap>
            </Container>

        </>

    )
}

export default AccountEdit