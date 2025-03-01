import {CasesResponse} from "../types/types";

export async function getCategories() : Promise<[]> {
    const response = await fetch("https://api.test.cyberia.studio/api/v1/project-categories");
    if (!response.ok) {
        throw new Error(response.statusText);
    }
    const data = await response.json();
    return data.items;
}

export async function getCases() : Promise<CasesResponse> {
    const response = await fetch("https://api.test.cyberia.studio/api/v1/projects");
    if (!response.ok) {
        throw new Error(response.statusText);
    }
    const data = await response.json();
    return data.items;
}