import { FC }                              from 'react';
import type { Brand }                       from '@/types';
import '@/styles/cardStyling/BrandLogoStyling.css';

interface IProps {
  brand: Brand;
}

const BrandLogo: FC<IProps> = ({ brand }) => {
  const Icon = brand.logo;
  return (
    <div className = "brand-logo-root">
      <div className = "brand-logo-content">
        <Icon className = {`brand-logo-icon ${brand.color}`} />
        <span className = "brand-logo-name">{brand.name}</span>
      </div>
    </div>
  );
};

export default BrandLogo;