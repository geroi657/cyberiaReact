import styled from "styled-components";

const StyledNoMatch = styled.div`
    width: 100%;
    font-size: 15rem;
    padding: 10% 0 0 0;
    line-height: 15rem;
    font-weight: 500`;

const StyledP = styled.p`
    font-size: 1.25rem;
    line-height: 1rem;
`;

const NoMatchContainer = styled.div`
    width: 100%;
    height: 100%;`;

export default function NoMatch() {
    return <NoMatchContainer>
        <StyledNoMatch>404</StyledNoMatch>
        <StyledP>Такой страницы не существует</StyledP>
    </NoMatchContainer>;
};