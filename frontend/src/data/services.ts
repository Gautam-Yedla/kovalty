export interface Service {
  id: number;
  sub: string;
  content: string;
  background: string;
}

export const services: Service[] = [
  {
    id: 1,
    sub: "Application Development",
    content: "Robust, scalable apps built to perform",
    background: "rgb(64, 122, 255)", // blue
  },
  {
    id: 2,
    sub: "Mobile App Development",
    content: "Native & cross-platform mobile solutions",
    background: "rgb(221, 62, 88)", // red
  },
  {
    id: 3,
    sub: "Product Management",
    content: "Strategic product planning & delivery",
    background: "rgb(186, 113, 245)", // violet
  },
  {
    id: 4,
    sub: "QA & Automation",
    content: "Ensure quality with automated testing",
    background: "rgb(247, 92, 208)", // pink
  },
  {
    id: 5,
    sub: "Cloud Services",
    content: "Deploy and scale on secure cloud infra",
    background: "rgb(42, 157, 143)", // teal green
  },
  {
    id: 6,
    sub: "AI & ML",
    content: "Build intelligent, learning systems",
    background: "rgb(255, 195, 0)", // gold yellow
  },
];

export const servicesData = [
  {
    slug: "ai-ml",
    title: "AI & Machine Learning Services",
    description:
      "Build intelligent, learning systems with cutting-edge AI and ML solutions.",
  },
  {
    slug: "application-development",
    title: "Application Development",
    description: "Robust, scalable apps built to perform.",
  },
  {
    slug: "mobile-app-development",
    title: "Mobile App Development",
    description: "Custom mobile solutions for Android and iOS platforms.",
  },
  {
    slug: "product-management",
    title: "Product Management",
    description: "From idea to market, we guide your product journey.",
  },
  {
    slug: "qa-automation",
    title: "QA & Automation",
    description: "Ensure quality and speed with automated testing solutions.",
  },
  {
    slug: "cloud-services",
    title: "Cloud Services",
    description: "Scalable, secure, and cost-effective cloud solutions.",
  },
];
