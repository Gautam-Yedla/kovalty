import ServicePageTemplate from "@/components/Services/ServicePageTemplate";
import allServicesData from "@/data/allServicesData";
import { notFound } from "next/navigation";

interface PageProps {
  params: {
    serviceId: string;
  };
}

export default function ServicePage({ params }: PageProps) {
  const { serviceId } = params;
  const data = serviceId ? allServicesData[serviceId] : undefined;

  if (!data) {
    notFound();
  }

  return <ServicePageTemplate data={data} />;
}

