import React from "react";
import type { Brand } from "../types";
import "../styles/cardStyling/BrandLogoStyling.css";

interface BrandLogoProps {
  brand: Brand;
}

const BrandLogo: React.FC<BrandLogoProps> = ({ brand }) => {
  const Icon = brand.logo;
  return (
    <div className="brand-logo-root">
      <div className="brand-logo-content">
        <Icon className={`brand-logo-icon ${brand.color}`} />
        <span className="brand-logo-name">{brand.name}</span>
      </div>
    </div>
  );
};

export default BrandLogo;