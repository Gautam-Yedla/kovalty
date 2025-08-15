import React from "react";
import "../styles/cardStyling/ServiceCardStyling.css";
import type { Service } from "../data/services";

interface Props {
  service: Service;
  isAway: boolean;
  angle: number | null;
  zIndex: number;
}

const ServiceCard: React.FC<Props> = ({ service, isAway, angle, zIndex }) => {
  const style = isAway
    ? {
        transform: "translateY(-120vh) rotate(-48deg)",
        zIndex: 0,
      }
    : {
        transform: `rotate(${angle ?? 0}deg)`,
        zIndex,
      };

  return (
    <div
      className={`card ${isAway ? "away" : ""}`}
      style={{ ...style, background: service.background }}
    >
      <div className="sub">{service.sub}</div>
      <div className="content">{service.content}</div>
    </div>
  );
};

export default ServiceCard;
