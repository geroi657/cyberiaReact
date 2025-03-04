import { ReactNode } from "react";
import { StyledWrapper } from "./Wrapper.styles";

export default function Wrapper({ children } : { children?: ReactNode }) {
    return <StyledWrapper>
        { children }
    </StyledWrapper>
}