import { t } from "i18next";

const whatsappMessage = () => {
    return encodeURI(t("site:whatsapp-message"));
};

export const data = {
    linkedin: {
        url: "https://www.linkedin.com/in/gleandro/",
        label: "gleandro",
    },
    whatsapp: {
        url: `https://wa.me/5491123883164?text=${whatsappMessage()}`,
        number: "+54 9 11 2388 3164",
    },
    instagram: {
        url: "https://instagram.com/leeean.dev",
        user: "leeean.dev",
    },
    permalinks: {
        techStack: "/#tech-stack",
        contact: "/#contact",
        career: "/#job-history",
    },
};
