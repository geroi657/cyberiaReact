import styled from 'styled-components';
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useContext, useEffect, useState } from "react";

import { Theme } from "./ThemeProvider.jsx";

const Container = styled(motion.div)`
    position: fixed;
    width: 100%;
    z-index: 10;

    @media(max-width: 414px){
        background-color: #20212C;
    }
`;

const StyledHeader = styled.header`
    display: flex;
    align-items: center;
    position: relative;
    width: 100%;
    max-width: 1330px;
    margin: 0 auto;
    column-gap: 15%;
    padding: 0 2rem 2rem 2rem;

    @media(max-width: 414px){
        background-color: #20212C;
        padding-bottom: 1.5rem;
        padding-top: 1.5rem;
    };
`;

const StyledIMG = styled.img`
    position: relative;
    width: 131px;
    height: 28px;
    cursor: pointer;

    @media(max-width: 414px){
        width: 93px;
        height: 20px;
    }
`;

const BurgerMenuContainer = styled(motion.div)`
    display: none;
    width: 100%;
    height: 100dvh;
    padding-top: 1.125rem;
    position: absolute;
    top: 0;
    left: 100%;
    background-color: #24252F;

    @media(max-width: 1100px){
        display: block;
    }
`;

const StyledNav = styled.nav`
    display: flex;
    align-items: center;
    column-gap: 7.5%;

    @media(max-width: 1100px){
        display: none;
    }
`;

const StyledNavLink = styled.div`
    font-size: 1.125rem;
    padding: 0.5rem 1rem 0.5rem 1rem;
    color: white;
    font-weight: 400;
    transition: 0.125s all;
    border-radius: 7px;

    &:hover {
        background-color: #00000025;
    }
`;

const BurgerOpen = styled.img`
    display: none;
    width: 48px;
    height: 48px;
    position: absolute;
    right: 2rem;
    padding: 0.5rem;
    transition: 0.02s;

    &:active{
        background-color: #00000020;
    }

    @media(max-width: 1100px){
        display: block;
    }
`;

const BurgerCloseContainer = styled.div`
    position: relative;
    display: flex;
    justify-content: right;
    width: 100%;
    padding-bottom: 0.5rem;
`;

const BurgerClose = styled(BurgerOpen)`
    position: relative;
    right: 2rem;
`;

const BurgerNav = styled.nav`
    display: flex;
    flex-direction: column;
`;

const StyledBurgerNavLink = styled(StyledNavLink)`
    width: 100%;
    padding: 0.875rem 2rem 0.875rem 2rem;
    transition: 0.02s;
    
    &:hover{
        background-color: transparent;
    }
    
    &:active{
        background-color: #00000020;
    }
`;

const BurgerNavContainer = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 1.75rem;
`;

const BurgerSeparatorContainer = styled.div`
    width: 100%;
    padding: 0 2rem 0 2rem;
    height: 2px;
`;

const BurgerSeparator = styled.div`
    width: 100%;
    height: 2px;
    background-color: #2B2D3A;
`;

const StyledP = styled.p`
    padding: 0.875rem 0 0 2rem;
    font-size: 1.125rem;
    color: #9AA8BA;
`;

const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 1.5rem;
    padding-right: 2rem;
    padding-left: 2rem;
`;

const InfoPiece = styled.a`
    font-size: 1rem;
    transition: 0.2s all;
    color: #afb2d6;

    &:active {
        color: #9AA8BA;
    }
`;

const StyledLink = styled(Link)`
    width: 131px;
    height: 28px;

    @media(max-width: 414px){
        width: 93px;
        height: 20px;
    }
`;

export default function Header(){

    const { mobile } = useContext( Theme );

    const [attached, setAttached] = useState(false);
    const [hasMounted, setHasMounted] = useState(false);
    const [burger, setBurger] = useState(false);

    const handleScroll = () => {
        setAttached(window.scrollY > 50);
    };

    const handleBurger = () => {
        setBurger(!burger);
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        setHasMounted(true)

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return <Container
        animate={!mobile && {
            backgroundColor: hasMounted && attached ? "#00000015" : "#00000000",
            backdropFilter: hasMounted && attached ? "blur(6px)" : "none",
            paddingTop: "0"
        }}
        initial={{backgroundColor: "#00000000", backdropFilter: "none"}}
        transition={{duration: 0.4}}>
        <motion.div animate={ !mobile ? { paddingTop: hasMounted && attached ? "2rem" : "4rem" } : {}}
                    initial={{paddingTop: !mobile ? "4rem" : "0"}}
                    transition={{duration: 0.4}}>
            <StyledHeader>
                <StyledLink to={"/"}>
                    <StyledIMG to="/" src="./src/assets/Cyberia.svg" alt={"Cyberia"}/>
                </StyledLink>
                <StyledNav>
                    <Link to="/agency">
                        <StyledNavLink>Агенство</StyledNavLink>
                    </Link>
                    <Link to="/services">
                        <StyledNavLink>Услуги</StyledNavLink>
                    </Link>
                    <Link to="/cases">
                        <StyledNavLink>Кейсы</StyledNavLink>
                    </Link>
                    <Link to="/blog">
                        <StyledNavLink>Блог</StyledNavLink>
                    </Link>
                    <Link to="/contacts">
                        <StyledNavLink>Контакты</StyledNavLink>
                    </Link>
                </StyledNav>
                <BurgerOpen onClick={ handleBurger } src={"./src/assets/BurgerOpen.svg"}/>
                <BurgerMenuContainer
                    animate={{left: burger ? "0" : "100%"}}
                    initial={{left: "100%"}}>
                    <BurgerCloseContainer>
                        <BurgerClose onClick={ handleBurger } src={"./src/assets/BurgerClose.svg"}></BurgerClose>
                    </BurgerCloseContainer>
                    <BurgerNavContainer>
                        <BurgerNav>
                        <Link to="/agency">
                            <StyledBurgerNavLink onClick={ handleBurger }>Агенство</StyledBurgerNavLink>
                        </Link>
                        <Link to="/services">
                            <StyledBurgerNavLink onClick={ handleBurger }>Услуги</StyledBurgerNavLink>
                        </Link>
                        <Link to="/cases">
                            <StyledBurgerNavLink onClick={ handleBurger }>Кейсы</StyledBurgerNavLink>
                        </Link>
                        <Link to="/blog">
                            <StyledBurgerNavLink onClick={ handleBurger }>Блог</StyledBurgerNavLink>
                        </Link>
                        <Link to="/contacts">
                            <StyledBurgerNavLink onClick={ handleBurger }>Контакты</StyledBurgerNavLink>
                        </Link>
                        </BurgerNav>
                        <BurgerSeparatorContainer>
                            <BurgerSeparator/>
                        </BurgerSeparatorContainer>
                        <StyledP>Контакты:</StyledP>
                        <InfoContainer>
                            <InfoPiece onClick={ handleBurger } href={"tel:89991234567"}>+7 999 123 45 67</InfoPiece>
                            <InfoPiece onClick={ handleBurger } href={"email:hello@cyberia.studio"}>hello@cyberia.studio</InfoPiece>
                            <InfoPiece onClick={ handleBurger } href={"ego:53.369055, 83.758315"}>ул.Ярных, д.35, оф.10</InfoPiece>
                        </InfoContainer>
                        <BurgerSeparatorContainer>
                            <BurgerSeparator/>
                        </BurgerSeparatorContainer>
                    </BurgerNavContainer>
                </BurgerMenuContainer>
            </StyledHeader>
        </motion.div>
    </Container>;
};