import { ReactNode } from "react";
import { StyledH2 } from "./GenericH2.styles";

export default function GenericH2({ children } : { children?: ReactNode }) {
    return <StyledH2>{ children }</StyledH2>;
}