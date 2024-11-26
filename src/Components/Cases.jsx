import Container from "./Container.jsx";
import GenericH2 from "./GenericH2.jsx";

import {useContext, useEffect, useState} from "react";
import { Theme } from "./ThemeProvider.jsx";
import styled from "styled-components";

const CategoriesContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;

    @media(max-width: 1100px){
        flex-wrap: wrap;
        column-gap: 2%;
        row-gap: 1rem;
    }
    
    @media(max-width: 414px){
        flex-wrap: wrap;
        column-gap: 2%;
        row-gap: 1rem;
    }
`;

const StyledCategory =  styled.button`
    padding: 0.625rem 2rem 0.625rem 2rem;
    filter: drop-shadow(8px 15px 9px #171B2C41);
    background-color: ${(props) => ( props.$isactivecategory ? "#2D76F9" : "#313341")};
    font-weight: 400;
    color: #EEF3FF;
    border-radius: 7px;
    transition: 0.2s all;

    &:hover {
        background-color: #2D76F9;
    }

    @media (max-width: 1100px) {
        column-gap: 2%;
        row-gap: 1rem;
        padding-left: 0.5rem;
        padding-right: 0.5rem;
        width: 48%;
    }
    
    
    @media(max-width: 414px){
        column-gap: 2%;
        row-gap: 1rem;
        padding-left: 0.5rem;
        padding-right: 0.5rem;
        width: 47.5%;
        font-size: 0.75rem;
    }
`;

const StyledP = styled.p`
    text-align: center;
    width: 100%;
`;

const StyledCase = styled.div`
    position: relative;
    border-radius: 12px;
    width: 31%;
    max-width: 390px;
    aspect-ratio: 1.023;
    background-position: 50%;
    background-size: cover;
    background-color: #31334175;
    background-image: url(${(props) => (props.$image)});
    cursor: pointer;
    z-index: 3;

    @media(max-width: 1100px){
        width: 48%;
        max-width: 48%;
        background-image: url(${(props) => (props.$image)});
    }

    @media(max-width: 620px){
        width: 100%;
        max-width: 100%;
        column-gap: 2%;
        row-gap: 1rem;
    }
`;

const StyledCasesContainer = styled.div`
    padding: 3.25rem 0 6.25rem 0;
    display: flex;
    width: 100%;
    column-gap: 3.5%;
    row-gap: 2.25rem;
    flex-wrap: wrap;
`;

const StyledInnerCase = styled.div`
    position: absolute;
    top: 5%;
    right: 7%;
    width: 100%;
    height: 100%;
    max-width: 128px;
    max-height: 128px;
    padding: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    background-color: #313341;
    z-index: 1;

    @media(max-width: 1100px){
        display: none;
    }
`;

const StyledInnerSVG = styled.img`
    position: absolute;
    right: -6px;
    top: -6px;
    width: 25px;
    height: 25px;
`;

const StyledTitle = styled.h3`
    font-size: 1.5rem;
    font-weight: 600;
`;

const StyledDescription = styled.p`
    
`;

const StyledTabletContainer = styled.div`
    height: 100%;
    width: 100%;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    row-gap: 0.675rem;
    justify-content: end;
    border-radius: 12px;
    background-image: linear-gradient(to top, #090B21 0%, #31334100 100%);
    opacity: 0;
    transition: 0.2s all;
    z-index: 2;
    
    &:hover{
        opacity: 1;
    }

    @media(max-width: 1100px){
        opacity: 1;
    }
`;

const StyledInnerWhite = styled.img`
    width: 23px;
    height: 23px;
`;

export default function Cases() {

    const [categories, setCategories] = useState([]);
    const [activeCategory, setActiveCategory] = useState("");
    const [cases, setCases] = useState([]);

    const {tablet, mobile} = useContext(Theme);

    useEffect(() => {
        fetch("https://api.test.cyberia.studio/api/v1/project-categories")
            .then(response => {
                if (!response.ok) {
                    throw new Error("Something went wrong")
            }
            return response.json();})
            .then(data => { setCategories(() => data.items)})
            .catch(err => console.log("Encountered error: ", err));
    }, []);

    const handleCategoryClick = (id) => {
        setActiveCategory(() => id === activeCategory ? "" : id);
    };

    useEffect(() => {
        fetch("https://api.test.cyberia.studio/api/v1/projects")
            .then(response => {
                if (!response.ok) {
                    throw new Error("Something went wrong")
                }
                return response.json();})
            .then(data => { setCases(() => data.items)})
            .catch(err => console.log("Encountered error: ", err));
    }, [])

    const filterCasesByCategory = (activeCategory) => {
        if (activeCategory === "") {
            return cases;
        } else {
            return cases.filter(caseItem => caseItem.categories[0].id === activeCategory);
        }
    };

    return <Container>
        <GenericH2>Кейсы</GenericH2>
        <CategoriesContainer>
            {categories.length > 0 ? categories.map((item, index) => (
                <StyledCategory key={index} $isactivecategory={ activeCategory === item.id } id={item.id} onClick={ () => handleCategoryClick(item.id)}>{item.name}</StyledCategory>
            )) :
                <>
                    <StyledCategory>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</StyledCategory>
                    <StyledCategory>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</StyledCategory>
                    <StyledCategory>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</StyledCategory>
                    <StyledCategory>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</StyledCategory>
                </>}
        </CategoriesContainer>
        <StyledCasesContainer>
            {cases.length > 0 ? filterCasesByCategory(activeCategory).map((item, index) => (
                <StyledCase key={index}
                            id={item.id}
                            $description={item.description}
                            $image={item.image}
                            $projectURL={item.url}
                            onClick={ () => window.open(item.url)}>
                        <StyledInnerCase>
                            <StyledTitle>{item.title}</StyledTitle>
                            <StyledInnerSVG src={"src/assets/Inner.svg"}/>
                        </StyledInnerCase>
                        <StyledTabletContainer>
                            <StyledInnerWhite src={"src/assets/InnerWhite.svg"}/>
                            <StyledTitle>{item.title}</StyledTitle>
                            <StyledDescription>{item.description}</StyledDescription>
                        </StyledTabletContainer>
                </StyledCase>)) :
                <>
                    <StyledCase>
                        <StyledInnerCase>
                            <StyledTitle></StyledTitle>
                        </StyledInnerCase>
                    </StyledCase>
                    <StyledCase>
                            <StyledInnerCase>
                                <StyledTitle></StyledTitle>
                            </StyledInnerCase>
                    </StyledCase>
                    <StyledCase>
                            <StyledInnerCase>
                                <StyledTitle></StyledTitle>
                            </StyledInnerCase>
                    </StyledCase>
                    <StyledCase>
                            <StyledInnerCase>
                                <StyledTitle></StyledTitle>
                            </StyledInnerCase>
                    </StyledCase>
                    <StyledCase>
                            <StyledInnerCase>
                                <StyledTitle></StyledTitle>
                            </StyledInnerCase>
                    </StyledCase>
                    <StyledCase>
                            <StyledInnerCase>
                                <StyledTitle></StyledTitle>
                            </StyledInnerCase>
                    </StyledCase>
                    <StyledCase>
                            <StyledInnerCase>
                                <StyledTitle></StyledTitle>
                            </StyledInnerCase>
                    </StyledCase>
                    <StyledCase>
                            <StyledInnerCase>
                                <StyledTitle></StyledTitle>
                            </StyledInnerCase>
                    </StyledCase>
                    <StyledCase>
                            <StyledInnerCase>
                                <StyledTitle></StyledTitle>
                            </StyledInnerCase>
                    </StyledCase>
                </>}
        </StyledCasesContainer>
    </Container>;
}