import styled from "styled-components";
import { IsActiveCategory } from "../types/types"


export const CategoriesContainer = styled.div`
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

export const StyledCategory =  styled.button<IsActiveCategory>`
    padding: 0.625rem 2rem 0.625rem 2rem;
    filter: drop-shadow(8px 15px 9px #171B2C41);
    background-color: ${(props) => ( props.$isActiveCategory ? "#2D76F9" : "#313341")};
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

export const StyledCasesContainer = styled.div`
    padding: 3.25rem 0 6.25rem 0;
    display: flex;
    width: 100%;
    column-gap: 3.5%;
    row-gap: 2.25rem;
    flex-wrap: wrap;
`;