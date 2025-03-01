import styled from "styled-components";
import Container from "../shared/ui/Container.js";
import { Link } from "react-router-dom";

const StyledFooter = styled.footer`
    width: 100%;
    padding: 8rem 0 9rem 0;
    background-color: #313341;

    @media(max-width: 800px){
        padding-top: 1.875rem;
        padding-bottom: 3rem;
    }
`;

const FooterWrapper = styled.div`
    display: flex;

    @media(max-width: 800px){
        flex-direction: column;
        row-gap: 2.875rem;
        align-items: center;
    }
`;

const LogoContainer = styled.div`
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

const StyledLogo = styled.img`
    width: 196px;
    height: 41px;

    @media(max-width: 414px){
        width: 102px;
        height: 21px;
    }
`;

const StyledP = styled.p`
    font-size: 1.125rem;

    @media(max-width: 414px){
        font-size: 0.875rem;
        text-align: center;
    }
`;

const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 1.5rem;
`;

const InfoPiece = styled.a`
    font-size: 1.125rem;
    transition: 0.2s all;

    &:hover {
        color: #afb2d6;
    }

    @media(max-width: 414px){
        font-size: 0.875rem;
    }
`;

const FooterNavigation = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-row-gap: 1.5rem;
    grid-column-gap: 1.5rem;
`;

const StyledNav = styled(StyledP)`
    transition: 0.2s all;
    text-align: left;
    
    &:hover{
        color: #afb2d6;
    }
`;

const FooterContainer = styled.div`
    width: 35%;
    display: grid;
    grid-template-columns:  1fr 1fr;
    grid-column-gap: 1rem;

    @media(max-width: 800px){
        width: fit-content;
    }
`;

export default function Footer() {
    return <StyledFooter>
        <Container>
            <FooterWrapper>
                <LogoContainer>
                    <StyledLogo src={"./src/assets/Cyberia.svg"}></StyledLogo>
                    <StyledP>Веб-разработка и<br />усиление IT-команд</StyledP>
                </LogoContainer>
                <FooterContainer>
                    <InfoContainer>
                        <InfoPiece href={"tel:89991234567"}>+7 999 123 45 67</InfoPiece>
                        <InfoPiece href={"email:hello@cyberia.studio"}>hello@cyberia.studio</InfoPiece>
                        <InfoPiece href={"ego:53.369055, 83.758315"}>ул.Ярных, д.35, оф.10</InfoPiece>
                    </InfoContainer>
                    <FooterNavigation>
                        <Link to={"/agency"}>
                            <StyledNav>Агентство</StyledNav>
                        </Link>
                        <Link to={"/blog"}>
                            <StyledNav>Блог</StyledNav>
                        </Link>
                        <Link to={"/services"}>
                            <StyledNav>Услуги</StyledNav>
                        </Link>
                        <Link to={"/contacts"}>
                            <StyledNav>Контакты</StyledNav>
                        </Link>
                        <Link to={"/cases"}>
                            <StyledNav>Кейсы</StyledNav>
                        </Link>
                    </FooterNavigation>
                </FooterContainer>
            </FooterWrapper>
        </Container>
    </StyledFooter>;
}