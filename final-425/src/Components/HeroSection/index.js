import React from 'react';
import {HeroContainer, HeroContent, HeroH1, HeroP} from './HeroElements';

const HeroSection = () => {

    return(
        <HeroContainer>
            <HeroContent>
                <HeroH1>REAL ESTATE DATABASE APPLICATION:</HeroH1>
                <HeroP>
                This application shows Agents, properties on the market, recently sold properties, and allows for buyers to create their own account and put bids in on different properties. 
                "Agents" will show you all of the available agents, and will show you all of their listings when you click on them. 
                "Listings" will show you all of the differnet properties that are available for purchase or for rent.
                "Account" will let the user edit their account information, and "Sign In" will let either users (buyers) or agents to sign into their accountq
                </HeroP>
            </HeroContent>
        </HeroContainer>

    );
};

export default HeroSection;