interface Stats {
    stat: string;
    desc: string;
}

export interface ProjectData {
    slug: string;
    title: string;
    description: string;
    mainImage: string;
    caseStudyImages: string[];
    impact: string[];
    stats: Stats[];
}