import { React } from "react";
import {
  Container,
  FormWrap,
  FormContent,
  Form,
  FormH1,
  FormH2,
  FormLabel,
  FormInput,
  Text,
} from "./listinginfoelements";
import axios from "axios";
import Icon1 from "../../Images/house1.jpeg";

const ListingExample = () => {
  return (
    <>
      <Container>
        <FormWrap>
          <FormContent>
            <Form action="#">
              <FormH1>Listing Information:</FormH1>
              <img>{Icon1}</img>
              <Text>Address: </Text>
              <Text>Price: </Text>

              <FormH2>Make an Offer</FormH2>
       
              <FormLabel htmlFor="for">Your Email</FormLabel>
              <FormInput type="email"/>
              <FormLabel htmlFor="for">Card Information:</FormLabel>
              <FormInput type="text" />
              <FormLabel htmlFor="for">Expiration Date:</FormLabel>
              <FormInput type="date" />
              <FormLabel htmlFor="for">CCV:</FormLabel>
              <FormInput type="text" />
              <button>SUBMIT</button>
             </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default ListingExample;
