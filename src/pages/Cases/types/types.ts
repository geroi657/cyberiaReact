export type CaseCategory = {
    id: string;
    name: string;
};

export type CaseItem = {
    id: string;
    title: string;
    slug: string;
    project_url: string | null;
    image: string;
    image_dark: string;
    description: string;
    categories: CaseCategory[];
};

export type CasesResponse = CaseItem[];

export type IsActiveCategory = { $isActiveCategory?: boolean };
