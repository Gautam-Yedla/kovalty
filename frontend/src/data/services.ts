// // data/services.ts
// import {
//   BrainIcon,
//   GearsIcon,
//   DashboardIcon,
//   GraphIcon,
//   ShieldIcon,
//   HeadsetIcon,
// } from "../icons/Icons";
// import type { Service } from "../types";

// export const servicesFullData: Service[] = [
//   {
//     id: "application-development",
//     icon: DashboardIcon,
//     title: "Application Development",
//     description:
//       "We build robust, scalable web applications that drive business growth.",
//     features: [
//       "Custom Web App Development",
//       "High Performance & Scalability",
//       "API Integration",
//       "Responsive Design",
//     ],
//     color: "#407AFF",
//     gradient: "linear-gradient(135deg, #407AFF, #1E3A8A)",
//   },
//   {
//     id: "mobile-app-development",
//     icon: HeadsetIcon,
//     title: "Mobile App Development",
//     description:
//       "Native and cross-platform mobile solutions for iOS and Android.",
//     features: [
//       "iOS & Android Development",
//       "Cross-Platform Solutions",
//       "App Store Optimization",
//       "Push Notifications",
//     ],
//     color: "#DD3E58",
//     gradient: "linear-gradient(135deg, #DD3E58, #8B1E3F)",
//   },
//   {
//     id: "product-management",
//     icon: GraphIcon,
//     title: "Product Management",
//     description:
//       "Strategic planning, delivery, and lifecycle management for your products.",
//     features: [
//       "Market Research & Analysis",
//       "Agile Project Management",
//       "Product Roadmaps",
//       "Stakeholder Communication",
//     ],
//     color: "#BA71F5",
//     gradient: "linear-gradient(135deg, #BA71F5, #6D28D9)",
//   },
//   {
//     id: "qa-automation",
//     icon: ShieldIcon,
//     title: "QA & Automation",
//     description:
//       "Ensure quality and reliability with automated and manual testing services.",
//     features: [
//       "Automated Test Scripts",
//       "Regression Testing",
//       "Performance Testing",
//       "Security Audits",
//     ],
//     color: "#F75CD0",
//     gradient: "linear-gradient(135deg, #F75CD0, #9D174D)",
//   },
//   {
//     id: "cloud-services",
//     icon: GearsIcon,
//     title: "Cloud Services",
//     description:
//       "Deploy, scale, and manage your applications on secure cloud infrastructure.",
//     features: [
//       "AWS / Azure / GCP Deployments",
//       "Cloud Migration",
//       "Serverless Architecture",
//       "24/7 Cloud Monitoring",
//     ],
//     color: "#2A9D8F",
//     gradient: "linear-gradient(135deg, #2A9D8F, #064E3B)",
//   },
//   {
//     id: "ai-ml",
//     icon: BrainIcon,
//     title: "AI & ML",
//     description:
//       "Build intelligent, learning systems with cutting-edge AI and ML solutions.",
//     features: [
//       "Predictive Analytics",
//       "Natural Language Processing",
//       "Computer Vision",
//       "Model Training & Optimization",
//     ],
//     color: "#FFC300",
//     gradient: "linear-gradient(135deg, #FFC300, #B45309)",
//   },
// ];





export interface Service {
  id: number;
  sub: string;
  content: string;
  background: string;
}

export const services: Service[] = [
  {
    id: 1,
    sub: 'Application Development',
    content: 'Robust, scalable apps built to perform',
    background: 'rgb(64, 122, 255)', // blue
  },
  {
    id: 2,
    sub: 'Mobile App Development',
    content: 'Native & cross-platform mobile solutions',
    background: 'rgb(221, 62, 88)', // red
  },
  {
    id: 3,
    sub: 'Product Management',
    content: 'Strategic product planning & delivery',
    background: 'rgb(186, 113, 245)', // violet
  },
  {
    id: 4,
    sub: 'QA & Automation',
    content: 'Ensure quality with automated testing',
    background: 'rgb(247, 92, 208)', // pink
  },
  {
    id: 5,
    sub: 'Cloud Services',
    content: 'Deploy and scale on secure cloud infra',
    background: 'rgb(42, 157, 143)', // teal green
  },
  {
    id: 6,
    sub: 'AI & ML',
    content: 'Build intelligent, learning systems',
    background: 'rgb(255, 195, 0)', // gold yellow
  },
];

export const servicesData = [
  {
    slug: "ai-ml",
    title: "AI & Machine Learning Services",
    description: "Build intelligent, learning systems with cutting-edge AI and ML solutions."
  },
  {
    slug: "application-development",
    title: "Application Development",
    description: "Robust, scalable apps built to perform."
  },
  {
    slug: "mobile-app-development",
    title: "Mobile App Development",
    description: "Custom mobile solutions for Android and iOS platforms."
  },
  {
    slug: "product-management",
    title: "Product Management",
    description: "From idea to market, we guide your product journey."
  },
  {
    slug: "qa-automation",
    title: "QA & Automation",
    description: "Ensure quality and speed with automated testing solutions."
  },
  {
    slug: "cloud-services",
    title: "Cloud Services",
    description: "Scalable, secure, and cost-effective cloud solutions."
  }
];

