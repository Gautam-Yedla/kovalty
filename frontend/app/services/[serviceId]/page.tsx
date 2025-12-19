import { FC } from 'react';
import { notFound } from 'next/navigation';
import { ServicePageTemplate } from '@/components/features/services/ServicePageTemplate';
import { IServicePageData } from '@/types/services';
import allServicesData from '@/data/allServicesData';

interface IServicePageProps {
  params: {
    serviceId: string;
  };
}

const ServicePage: FC<IServicePageProps> = ({ params }) => {
  const data = params.serviceId ? (allServicesData as Record<string, IServicePageData>)[params.serviceId] : undefined;

  if (!data) {
    notFound();
  }

  return <ServicePageTemplate data={data} />;
};

export default ServicePage;

