import { React, useMemo, useState } from 'react';
import axios from 'axios'
import Icon1 from '../../Images/house1.jpeg';
import Icon2 from '../../Images/house2.jpeg';
import Icon3 from '../../Images/house3.jpeg';
import { ServicesContainer, ServicesPay, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP } from './listingsectionelements';

const icons = [
    Icon1,
    Icon2,
    Icon3,];
const Listings = () => {
    const [properties, setProperties] = useState()
    useMemo(() => {
        const fetchData = async () => {
            const response = await axios.get("http://localhost:3000/properties")
            setProperties(response.data)
        }
        fetchData();
    }, [setProperties]);
    console.log(properties)
    return properties ? (
        <ServicesContainer>
            <ServicesH1>Current Listings</ServicesH1>
            <ServicesWrapper>
                {properties.map((x, index) => {
                    return (
                        <ServicesCard
                            key={index}
                        >
                            <ServicesIcon src={icons[index % icons.length]} />
                            <ServicesH2>{x.proName}</ServicesH2>
                            <ServicesP>{x.proType}</ServicesP>
                            <ServicesPay to='/listingspay'>Make an offer here!</ServicesPay>
                        </ServicesCard>)
                })}
            </ServicesWrapper>
        </ServicesContainer>

    ) : null
}


export default Listings;