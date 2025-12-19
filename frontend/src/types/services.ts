export interface IServicePageData {
    hero: {
        title: string;
        subtitle: string;
    };
    expertiseTitle: string;
    expertiseSubtitle: string;
    services: Array<{
        id: number;
        icon: string;
        title: string;
        description: string;
    }>;
    processTitle: string;
    processSubtitle: string;
    processSteps: Array<{
        number: number;
        title: string;
        description: string;
    }>;
    ctaTitle: string;
    ctaSubtitle: string;
    ctaButton: string;
}
