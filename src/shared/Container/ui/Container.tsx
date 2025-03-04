import { ReactNode } from "react";
import { StyledContainer } from "./Container.styles";

export default function Container({ children } : { children?: ReactNode }) {
    return <StyledContainer>
        { children }
    </StyledContainer>
}