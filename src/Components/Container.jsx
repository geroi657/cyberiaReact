import styled from "styled-components";

const StyledContainer = styled.div`
    width: 100%;
    max-width: 1330px;
    margin: 0 auto;
    padding: 0 2rem 0 2rem;
`;

export default function Container({ children }) {
    return <StyledContainer>
        { children }
    </StyledContainer>
}