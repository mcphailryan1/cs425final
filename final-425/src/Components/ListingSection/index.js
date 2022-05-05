import React from 'react';
import Icon1 from '../../Images/house1.jpeg';
import Icon2 from '../../Images/house2.jpeg';
import Icon3 from '../../Images/house3.jpeg';
import {ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP} from './listingsectionelements';

const Listings = () => {
    return (
        <ServicesContainer>
            <ServicesH1>Current Listings</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon1} />
                    <ServicesH2>Reduce Costs</ServicesH2>
                    <ServicesP>We will help to remove skjdfhsfhsjk and increase your overall sdlkfsdjfh.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon2} />
                    <ServicesH2>Ritual Offices</ServicesH2>
                    <ServicesP>Access our website anywhere in the world.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon3} />
                    <ServicesH2>Premium Benefits</ServicesH2>
                    <ServicesP>Unlock our special membership safasd that does afsdad.</ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>

    )
}


export default Listings;