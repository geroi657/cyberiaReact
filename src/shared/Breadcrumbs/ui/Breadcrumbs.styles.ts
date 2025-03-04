import styled from "styled-components";

export const BreadcrumbsContainer = styled.div`
    padding: 10.25rem 0 8rem 0;
    display: flex;

    @media(max-width: 414px){
        padding-bottom: 2.875rem;
        padding-top: 7rem;
    }
`;

export const BreadcrumbsPiece = styled.p`
    color: #9AA8BA;
    font-weight: 400;
    font-size: 1.125rem;
    transition: 0.2s all;

    &:hover {
        color: #77808f;
    }

    @media(max-width: 414px){
        font-size: 12px;
    }
`;

export const BreadcrumbsCurrent = styled(BreadcrumbsPiece)`
    color: #C4D2E3;
`;