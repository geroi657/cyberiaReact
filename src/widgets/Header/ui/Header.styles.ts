import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export const Container = styled(motion.div)`
    position: fixed;
    width: 100%;
    z-index: 10;

    @media(max-width: 414px){
        background-color: #20212C;
    }
`;

export const StyledHeader = styled.header`
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

export const StyledIMG = styled.img`
    position: relative;
    width: 131px;
    height: 28px;
    cursor: pointer;

    @media(max-width: 414px){
        width: 93px;
        height: 20px;
    }
`;

export const BurgerMenuContainer = styled(motion.div)`
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

export const StyledNav = styled.nav`
    display: flex;
    align-items: center;
    column-gap: 7.5%;

    @media(max-width: 1100px){
        display: none;
    }
`;

export const StyledNavLink = styled.div`
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

export const BurgerOpen = styled.img`
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

export const BurgerCloseContainer = styled.div`
    position: relative;
    display: flex;
    justify-content: right;
    width: 100%;
    padding-bottom: 0.5rem;
`;

export const BurgerClose = styled(BurgerOpen)`
    position: relative;
    right: 2rem;
`;

export const BurgerNav = styled.nav`
    display: flex;
    flex-direction: column;
`;

export const StyledBurgerNavLink = styled(StyledNavLink)`
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

export const BurgerNavContainer = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 1.75rem;
`;

export const BurgerSeparatorContainer = styled.div`
    width: 100%;
    padding: 0 2rem 0 2rem;
    height: 2px;
`;

export const BurgerSeparator = styled.div`
    width: 100%;
    height: 2px;
    background-color: #2B2D3A;
`;

export const StyledP = styled.p`
    padding: 0.875rem 0 0 2rem;
    font-size: 1.125rem;
    color: #9AA8BA;
`;

export const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 1.5rem;
    padding-right: 2rem;
    padding-left: 2rem;
`;

export const InfoPiece = styled.a`
    font-size: 1rem;
    transition: 0.2s all;
    color: #afb2d6;

    &:active {
        color: #9AA8BA;
    }
`;

export const StyledLink = styled(Link)`
    width: 131px;
    height: 28px;

    @media(max-width: 414px){
        width: 93px;
        height: 20px;
    }
`;