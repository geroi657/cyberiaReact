import styled from "styled-components";

export const StyledFooter = styled.footer`
    width: 100%;
    padding: 8rem 0 9rem 0;
    background-color: #313341;

    @media(max-width: 800px){
        padding-top: 1.875rem;
        padding-bottom: 3rem;
    }
`;

export const FooterWrapper = styled.div`
    display: flex;

    @media(max-width: 800px){
        flex-direction: column;
        row-gap: 2.875rem;
        align-items: center;
    }
`;

export const LogoContainer = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 1.625rem;
    padding-right: 9.875rem;

    @media(max-width: 800px){
        row-gap: 0.75rem;
        width: 100%;
        align-items: center;
        padding-right: 0;
    }
`;

export const StyledLogo = styled.img`
    width: 196px;
    height: 41px;

    @media(max-width: 414px){
        width: 102px;
        height: 21px;
    }
`;

export const StyledP = styled.p`
    font-size: 1.125rem;

    @media(max-width: 414px){
        font-size: 0.875rem;
        text-align: center;
    }
`;

export const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 1.5rem;
`;

export const InfoPiece = styled.a`
    font-size: 1.125rem;
    transition: 0.2s all;

    &:hover {
        color: #afb2d6;
    }

    @media(max-width: 414px){
        font-size: 0.875rem;
    }
`;

export const FooterNavigation = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-row-gap: 1.5rem;
    grid-column-gap: 1.5rem;
`;

export const StyledNav = styled(StyledP)`
    transition: 0.2s all;
    text-align: left;
    
    &:hover{
        color: #afb2d6;
    }
`;

export const FooterContainer = styled.div`
    width: 35%;
    display: grid;
    grid-template-columns:  1fr 1fr;
    grid-column-gap: 1rem;

    @media(max-width: 800px){
        width: fit-content;
    }
`;