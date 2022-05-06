import React, {useState, useEffect} from 'react';
import { animateScroll as scroll } from 'react-scroll';
import {Nav, NavbarContainer, NavLogo, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink} from './NavbarElements';

const Navbar = ({ toggle }) => {

    const [scrollNav, setScrollNav] = useState(false)

    const changeNav = ()=> {
        if(window.scrollY >= 80) {
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, [])

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return(
        <>
            <Nav scrollNav={scrollNav}>
                <NavbarContainer>
                    <NavLogo to='/' onClick={toggleHome}>
                        CS 425 Final
                    </NavLogo>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="/agentspage"  duration={500}  exact='true' offset={-80}>Agents</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="/listingspage"  duration={500} exact='true' offset={-80}>Listings</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="/accountedit"  duration={500} exact='true' offset={-80}>Account</NavLinks>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to="/signin">Sign In</NavBtnLink>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
        </>
    );
};

export default Navbar