import { Link, useLocation } from "react-router-dom";
import { Routes } from "../../Routes/Routes";
import { useEffect, useState } from "react";
import Container from "../../Container/ui/Container.js";
import { BreadcrumbsContainer, BreadcrumbsCurrent, BreadcrumbsPiece } from "./Breadcrumbs.styles";

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
            setBreadcrumbsLocation(() => (currentLocation in Routes ? Routes[currentLocation] : "404"));
        }
    }, [currentLocation]);

    return <Container>
        <BreadcrumbsContainer>
        <Link to={"/"}>
            <BreadcrumbsPiece>{ BreadcrumbsHome }</BreadcrumbsPiece>
        </Link>
        <BreadcrumbsCurrent> &nbsp; { BreadcrumbsLocation }</BreadcrumbsCurrent>
        </BreadcrumbsContainer>
    </Container>

};