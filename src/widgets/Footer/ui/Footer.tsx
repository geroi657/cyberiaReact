import Container from "../../../shared/Container/ui/Container.js";
import { Link } from "react-router-dom";
import {
    FooterContainer, FooterNavigation,
    FooterWrapper,
    InfoContainer, InfoPiece,
    LogoContainer,
    StyledFooter,
    StyledLogo, StyledNav,
    StyledP
} from "./Footer.styles";

export default function Footer() {
    return <StyledFooter>
        <Container>
            <FooterWrapper>
                <LogoContainer>
                    <StyledLogo src={"./src/shared/assets/Cyberia.svg"}></StyledLogo>
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