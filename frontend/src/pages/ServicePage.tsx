import { useParams } from 'react-router-dom';
import ServicePageTemplate from '../components/Services/ServicePageTemplate';
import allServicesData from '../data/allServicesData';

const ServicePage = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  const data = serviceId ? allServicesData[serviceId] : undefined;

  if (!data) {
    return <div style={{ padding: 40, textAlign: 'center' }}>Service not found.</div>;
  }

  return <ServicePageTemplate data={data} />;
};

export default ServicePage;
