import styled from "styled-components";
import {Link, useLocation} from "react-router-dom";
import JSON from "../../app/Routes.json";
import { useEffect, useState } from "react";
import Container from "./Container.js";

const BreadcrumbsContainer = styled.div`
    padding: 10.25rem 0 8rem 0;
    display: flex;

    @media(max-width: 414px){
        padding-bottom: 2.875rem;
        padding-top: 7rem;
    }
`;

const BreadcrumbsPiece = styled.p`
    color: #9AA8BA;
    font-weight: 400;
    font-size: 1.125rem;
    transition: 0.2s all;

    &:hover {
        color: #77808f;
    }

    @media(max-width: 414px){
        font-size: 12px;
    }
`;

const BreadcrumbsCurrent = styled(BreadcrumbsPiece)`
    color: #C4D2E3;
`;


export default function Breadcrumbs() {

    const [BreadcrumbsHome, setBreadcrumbsHome] = useState("Главная");
    const [BreadcrumbsLocation, setBreadcrumbsLocation] = useState("");
    const currentLocation = useLocation().pathname.split("/").filter(Boolean).pop();

    useEffect(() => {

        if (currentLocation == null) {
            setBreadcrumbsHome(() => "Главная")
            setBreadcrumbsLocation("");
        } else {
            setBreadcrumbsHome("Главная /");
            setBreadcrumbsLocation(() => (currentLocation in JSON ? JSON[currentLocation] : "404"));
        }
    }, [currentLocation]);

    return <Container>
        <BreadcrumbsContainer>
        <Link to={"/"}>
            <BreadcrumbsPiece>{ BreadcrumbsHome }</BreadcrumbsPiece>
        </Link>
        <BreadcrumbsCurrent> &nbsp; {BreadcrumbsLocation}</BreadcrumbsCurrent>
        </BreadcrumbsContainer>
    </Container>

};