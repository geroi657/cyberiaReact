import styled from "styled-components";

const StyledWrapper = styled.div`
    width: 100%;
    margin: 0 auto;
    flex: 1;
`;

export default function Wrapper({ children }) {
    return <StyledWrapper>
        { children }
    </StyledWrapper>
}