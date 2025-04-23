export interface Experience {
    company: string;
    website?: string;
    title: string;
    dates: {
        from: string;
        to?: string;
    };
    stack: string[];
    details: string[];
}

export interface LocalizedStrings {
    experiences: Experience[];
    [key: string]: any;
}
