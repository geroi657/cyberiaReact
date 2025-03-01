import styled from "styled-components";
import { ReactNode } from "react";

const StyledWrapper = styled.div`
    width: 100%;
    margin: 0 auto;
    flex: 1;
`;

export default function Wrapper({ children } : { children?: ReactNode }) {
    return <StyledWrapper>
        { children }
    </StyledWrapper>
}