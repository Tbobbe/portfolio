export interface EducationObject {
    heading: string;
    years: string;
    text: string;
    mainImage: string;
    image1: string;
    image2: string;
    image3: string;
}

export interface EducationsObject {
    title: string;
    entries: EducationObject[];
}