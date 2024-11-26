import styled from "styled-components";

const StyledH2 = styled.h2`
    font-size: 3rem;
    font-weight: 600;
    padding-bottom: 4rem;
    line-height: 3.75rem;

    @media(max-width: 414px){
        padding-bottom: 3rem;
        line-height: 1.75rem;
        font-size: 1.25rem;
    }
`;

export default function GenericH2({ children }) {
    return <StyledH2>{ children }</StyledH2>;
}