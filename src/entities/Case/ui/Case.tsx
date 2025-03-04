import { CaseItem } from "../../../pages/Cases/types/types";
import {
    StyledCase,
    StyledInnerCase,
    StyledInnerSVG,
    StyledInnerWhite,
    StyledTabletContainer,
    StyledTitle
} from "./Case.styles";


export default function Case( { item } : { item? : CaseItem } ){
    return <StyledCase
        id={ item?.id }
        $image={ item?.image }
        onClick={ () => item?.project_url === null ? open("") : open(item?.project_url)}>
        <StyledInnerCase>
            <StyledTitle>{item?.title}</StyledTitle>
            <StyledInnerSVG src={"src/shared/assets/Inner.svg"}/>
        </StyledInnerCase>
        <StyledTabletContainer>
            <StyledInnerWhite src={"src/shared/assets/InnerWhite.svg"}/>
            <StyledTitle>{item?.title}</StyledTitle>
            <p>{item?.description}</p>
        </StyledTabletContainer>
    </StyledCase>
}