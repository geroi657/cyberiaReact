import styled from "styled-components";

export const StyledCase = styled.div<{ $image?: string }>`
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

export const StyledInnerCase = styled.div`
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

export const StyledInnerSVG = styled.img`
    position: absolute;
    right: -6px;
    top: -6px;
    width: 25px;
    height: 25px;
`;

export const StyledTitle = styled.h3`
    font-size: 1.5rem;
    font-weight: 600;
`;

export const StyledTabletContainer = styled.div`
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

export const StyledInnerWhite = styled.img`
    width: 23px;
    height: 23px;
`;