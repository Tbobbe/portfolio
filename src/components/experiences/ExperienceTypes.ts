export interface ExperienceObject {
    heading: string;
    years: string;
    text: string;
    logo: string;
}

export interface ExperiencesObject {
    title: string;
    entries: ExperienceObject[];
}