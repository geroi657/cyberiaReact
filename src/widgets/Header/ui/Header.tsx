import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../shared/redux/store";

import {
    BurgerClose,
    BurgerCloseContainer,
    BurgerMenuContainer, BurgerNav, BurgerNavContainer,
    BurgerOpen, BurgerSeparator, BurgerSeparatorContainer,
    Container, InfoContainer, InfoPiece, StyledBurgerNavLink,
    StyledHeader,
    StyledIMG,
    StyledLink,
    StyledNav,
    StyledNavLink, StyledP
} from "./Header.styles";

export default function Header(){

    const mobile = useSelector((state: RootState) => state.mobile.mobile);

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
        setHasMounted(true);
        setAttached(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);

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
        initial={{ backgroundColor: "#00000000", backdropFilter: "none" }}
        transition={{ duration: 0.4 }}>
        <motion.div animate={ !mobile ? { paddingTop: hasMounted && attached ? "2rem" : "4rem" } : {}}
                    initial={{ paddingTop: !mobile ? "4rem" : "0" }}
                    transition={{ duration: 0.4 }}>
            <StyledHeader>
                <StyledLink to={"/"}>
                    <StyledIMG src="./src/shared/assets/Cyberia.svg" alt={"Cyberia"}/>
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
                <BurgerOpen onClick={ handleBurger } src={"./src/shared/assets/BurgerOpen.svg"}/>
                <BurgerMenuContainer
                    animate={{left: burger ? "0" : "100%"}}
                    initial={{left: "100%"}}>
                    <BurgerCloseContainer>
                        <BurgerClose onClick={ handleBurger } src={"./src/shared/assets/BurgerClose.svg"}></BurgerClose>
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