'use client';

import { FC } from 'react';
import { IServicePageData } from '@/types/services';
import { Button } from '@/components/ui/Button';

interface IProps {
    data: IServicePageData;
}

export const ServicePageTemplate: FC<IProps> = ({ data }) => {
    return (
        <div className="min-h-screen pb-20 bg-background text-foreground">
            {/* Hero Section */}
            <section className="py-24 px-4 bg-primary text-primary-foreground text-center">
                <div className="max-w-4xl mx-auto pt-20">
                    <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
                        {data.hero.title}
                    </h1>
                    <p className="text-xl md:text-2xl text-primary-foreground/90 leading-relaxed">
                        {data.hero.subtitle}
                    </p>
                </div>
            </section>

            {/* Expertise Section */}
            <section className="py-24 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4">{data.expertiseTitle}</h2>
                        <p className="text-xl text-muted-foreground">
                            {data.expertiseSubtitle}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {data.services.map((service) => (
                            <div
                                key={service.id}
                                className="p-8 border-2 border-border bg-card group hover:border-accent transition-all duration-300"
                            >
                                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform inline-block">
                                    {service.icon}
                                </div>
                                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    {service.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="py-24 px-4 bg-muted/30">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4">{data.processTitle}</h2>
                        <p className="text-xl text-muted-foreground">
                            {data.processSubtitle}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {data.processSteps.map((step) => (
                            <div key={step.number} className="relative">
                                <div className="text-6xl font-black text-accent/10 absolute -top-8 -left-4">
                                    0{step.number}
                                </div>
                                <div className="relative z-10">
                                    <h3 className="text-2xl font-bold mb-3 flex items-center gap-3">
                                        <span className="w-8 h-8 rounded-full bg-accent text-accent-foreground text-sm flex items-center justify-center font-bold">
                                            {step.number}
                                        </span>
                                        {step.title}
                                    </h3>
                                    <p className="text-muted-foreground leading-relaxed">
                                        {step.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 px-4 bg-accent text-accent-foreground text-center">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-black mb-6">
                        {data.ctaTitle}
                    </h2>
                    <p className="text-xl mb-10 text-accent-foreground/90 font-medium">
                        {data.ctaSubtitle}
                    </p>
                    <Button
                        variant="primary"
                        size="lg"
                        className="bg-primary text-primary-foreground border-none hover:bg-primary/90"
                    >
                        {data.ctaButton}
                    </Button>
                </div>
            </section>
        </div>
    );
};
