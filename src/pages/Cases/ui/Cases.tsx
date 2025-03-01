import Container from "../../../shared/ui/Container.js";
import GenericH2 from "../../../shared/ui/GenericH2.js";
import Case from "../../../entities/Case/ui/Case";

import { CategoriesContainer, StyledCasesContainer, StyledCategory } from "./Cases.styles";

import { CaseCategory, CasesResponse } from "../types/types";

import { useEffect, useState } from "react";
import { getCases, getCategories } from "../api/api";

export default function Cases() {

    const [categories, setCategories] = useState<CaseCategory[]>([]);
    const [activeCategory, setActiveCategory] = useState<string>("");
    const [cases, setCases] = useState<CasesResponse>([]);

    useEffect(() => {
        getCategories()
            .then(setCategories)
            .catch(error => console.log(error));
    }, []);

    const handleCategoryClick = (id: string) => {
        setActiveCategory(() => id === activeCategory ? "" : id);
    };

    useEffect(() => {
        getCases()
            .then(setCases)
            .catch(error => console.log(error));
    }, [])

    const filterCasesByCategory = (activeCategory: string): CasesResponse => {
        if (activeCategory === "") {
            return cases;
        } else {
            return cases.filter((caseItem) : boolean  => caseItem.categories[0].id === activeCategory);
        }
    };

    return <Container>
        <GenericH2>Кейсы</GenericH2>
        <CategoriesContainer>
            {categories.length > 0 ? categories.map((item : CaseCategory, index : number) => (
                <StyledCategory key={index} $isActiveCategory={ activeCategory === item.id } id={item.id} onClick={ () => handleCategoryClick(item.id)}>{item.name}</StyledCategory>
            )) :
                <>
                    {/* Можно сделать и не через хардкод, добавив проверку существует ли item, но...  */}
                    <StyledCategory>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</StyledCategory>
                    <StyledCategory>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</StyledCategory>
                    <StyledCategory>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</StyledCategory>
                    <StyledCategory>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</StyledCategory>
                </>}
        </CategoriesContainer>
        <StyledCasesContainer>
            { cases.length > 0 ? filterCasesByCategory(activeCategory).map((item, index) => (<Case key={ index } item = { item }></Case>)) :
                <>
                    <Case></Case>
                    <Case></Case>
                    <Case></Case>
                    <Case></Case>
                    <Case></Case>
                    <Case></Case>
                </>
            }
        </StyledCasesContainer>
    </Container>;
}