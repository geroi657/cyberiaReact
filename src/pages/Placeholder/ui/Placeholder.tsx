import styled from "styled-components";

const StyledPlaceholder = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding-top: 5rem;
    padding-bottom: 15rem;
    width: 100%;
`;

const StyledP = styled.p`
    font-size: 6rem;
    font-weight: 400;
`;

export default function Placeholder() {
    return <StyledPlaceholder>
        <StyledP>Click "Кейсы" to see test task</StyledP>
        <p>Good stuff.</p>
    </StyledPlaceholder>
}