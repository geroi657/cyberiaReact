import { NoMatchContainer, StyledNoMatch, StyledP } from "./NoMatch.styles";

export default function NoMatch() {
    return <NoMatchContainer>
        <StyledNoMatch>404</StyledNoMatch>
        <StyledP>Такой страницы не существует</StyledP>
    </NoMatchContainer>;
};