import { React } from 'react';
import Icon1 from '../../Images/person1.jpeg'
import { Container, FormWrap, ServicesIcon, FormContent, Form, FormH1, Icon, Text, ServicesIcon } from './realetorinfoelements';

const AccountEdit = () => {

    return (
        <>
            <Container>
                <FormWrap>
                    <FormContent>
                        <Form action="#">
                            <FormH1>Realator Information</FormH1>
                            <ServicesIcon src={Icon1} />
                            <Text>Name: </Text>
                            <Text>Email: </Text>
                            <Icon to='/agentsclick'>Click Here for Listings!</Icon>
                        </Form>
                    </FormContent>
                </FormWrap>
            </Container>

        </>

    )
}

export default AccountEdit