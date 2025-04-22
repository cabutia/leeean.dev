export const filename = (str: string): string => {
    return str
        .toLowerCase()
        .replace(/[^a-zA-Z]/g, "_")
        .replace(/_{1,}/g, "_");
};

export const randomTime = (): string => {
    return `${Math.random().toString().substring(0, 5)}ms`;
};
