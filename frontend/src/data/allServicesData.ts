import type { ServicePageData } from "../components/Services/ServicePageTemplate";

const allServicesData: Record<string, ServicePageData> = {
  "ai-ml": {
    hero: {
      title: "AI & Machine Learning Services",
      subtitle:
        "Build intelligent, learning systems with cutting-edge AI and ML solutions.",
    },
    expertiseTitle: "Our Expertise",
    expertiseSubtitle: "A comprehensive suite of AI & ML services.",
    services: [
      {
        id: 1,
        icon: "🧠",
        title: "Predictive Analytics",
        description: "Forecast trends and behaviors using advanced ML models.",
      },
      {
        id: 2,
        icon: "🗣️",
        title: "Natural Language Processing",
        description: "Extract insights from text and speech data.",
      },
      {
        id: 3,
        icon: "👁️",
        title: "Computer Vision",
        description: "Analyze images and videos for actionable intelligence.",
      },
      {
        id: 4,
        icon: "🤖",
        title: "Model Training & Optimization",
        description: "Build, train, and optimize custom AI models.",
      },
    ],
    processTitle: "Our Process",
    processSubtitle: "A proven methodology for AI project success.",
    processSteps: [
      {
        number: 1,
        title: "Discovery",
        description: "Understand your business needs and data.",
      },
      {
        number: 2,
        title: "Development",
        description: "Build and train tailored AI/ML models.",
      },
      {
        number: 3,
        title: "Deployment",
        description: "Integrate solutions into your workflow.",
      },
      {
        number: 4,
        title: "Support",
        description: "Ongoing optimization and support.",
      },
    ],
    ctaTitle: "Ready to Transform with AI?",
    ctaSubtitle: "Let’s build something intelligent together.",
    ctaButton: "Get in Touch",
  },
  "application-development": {
    hero: {
      title: "Application Development",
      subtitle: "Robust, scalable apps built to perform.",
    },
    expertiseTitle: "Our Expertise",
    expertiseSubtitle: "Custom web and enterprise applications.",
    services: [
      {
        id: 1,
        icon: "💻",
        title: "Web App Development",
        description: "Modern, scalable web applications.",
      },
      {
        id: 2,
        icon: "🔗",
        title: "API Integration",
        description: "Seamless integration with third-party services.",
      },
      {
        id: 3,
        icon: "⚡",
        title: "Performance Optimization",
        description: "Fast, reliable, and secure apps.",
      },
      {
        id: 4,
        icon: "📱",
        title: "Responsive Design",
        description: "Apps that work on any device.",
      },
    ],
    processTitle: "Our Process",
    processSubtitle: "From idea to launch, we cover it all.",
    processSteps: [
      {
        number: 1,
        title: "Consultation",
        description: "Understand your requirements.",
      },
      {
        number: 2,
        title: "Design & Build",
        description: "Develop and test your application.",
      },
      {
        number: 3,
        title: "Launch",
        description: "Deploy and monitor your app.",
      },
      {
        number: 4,
        title: "Support",
        description: "Continuous improvement and support.",
      },
    ],
    ctaTitle: "Ready to Build?",
    ctaSubtitle: "Let’s create your next big thing.",
    ctaButton: "Start Project",
  },
  "mobile-app-development": {
    hero: {
      title: "Mobile App Development",
      subtitle: "Custom mobile solutions for Android and iOS platforms.",
    },
    expertiseTitle: "Our Expertise",
    expertiseSubtitle: "Delivering engaging, user-friendly mobile experiences.",
    services: [
      {
        id: 1,
        icon: "📱",
        title: "iOS App Development",
        description: "High-quality native apps for iPhones and iPads.",
      },
      {
        id: 2,
        icon: "🤖",
        title: "Android App Development",
        description: "Custom Android apps optimized for performance.",
      },
      {
        id: 3,
        icon: "🔄",
        title: "Cross-Platform Apps",
        description: "Single-codebase solutions with Flutter or React Native.",
      },
      {
        id: 4,
        icon: "🎨",
        title: "UI/UX Design",
        description: "Stunning and intuitive mobile interfaces.",
      },
    ],
    processTitle: "Our Process",
    processSubtitle: "From concept to app store.",
    processSteps: [
      {
        number: 1,
        title: "Planning",
        description: "Define goals and user personas.",
      },
      {
        number: 2,
        title: "Design",
        description: "Create wireframes and prototypes.",
      },
      {
        number: 3,
        title: "Development",
        description: "Build robust and secure apps.",
      },
      {
        number: 4,
        title: "Launch & Maintenance",
        description: "App store submission and updates.",
      },
    ],
    ctaTitle: "Bring Your App Idea to Life",
    ctaSubtitle: "Let’s create a mobile experience your users will love.",
    ctaButton: "Get Started",
  },
  "product-management": {
    hero: {
      title: "Product Management",
      subtitle: "From idea to market, we guide your product journey.",
    },
    expertiseTitle: "Our Expertise",
    expertiseSubtitle: "Building products that succeed in competitive markets.",
    services: [
      {
        id: 1,
        icon: "📊",
        title: "Market Research",
        description: "Data-driven insights to validate your product idea.",
      },
      {
        id: 2,
        icon: "🗺️",
        title: "Roadmap Planning",
        description: "Clear, actionable product strategies.",
      },
      {
        id: 3,
        icon: "🛠️",
        title: "MVP Development",
        description: "Build minimal viable products quickly.",
      },
      {
        id: 4,
        icon: "📈",
        title: "Growth Strategy",
        description: "Scale your product for maximum reach.",
      },
    ],
    processTitle: "Our Process",
    processSubtitle: "Turning vision into viable products.",
    processSteps: [
      {
        number: 1,
        title: "Research",
        description: "Understand your market and competition.",
      },
      {
        number: 2,
        title: "Strategy",
        description: "Define product features and roadmap.",
      },
      {
        number: 3,
        title: "Execution",
        description: "Coordinate teams to build your product.",
      },
      {
        number: 4,
        title: "Growth",
        description: "Optimize for user acquisition and retention.",
      },
    ],
    ctaTitle: "Let’s Launch Your Product",
    ctaSubtitle: "From strategy to execution, we’ve got you covered.",
    ctaButton: "Book a Consultation",
  },
  "qa-automation": {
    hero: {
      title: "QA & Automation",
      subtitle: "Ensure quality and speed with automated testing solutions.",
    },
    expertiseTitle: "Our Expertise",
    expertiseSubtitle:
      "Comprehensive testing strategies for flawless delivery.",
    services: [
      {
        id: 1,
        icon: "🧪",
        title: "Automated Testing",
        description: "Reduce human error and increase efficiency.",
      },
      {
        id: 2,
        icon: "⚙️",
        title: "Continuous Integration",
        description: "Seamlessly test in your CI/CD pipeline.",
      },
      {
        id: 3,
        icon: "🔍",
        title: "Manual Testing",
        description: "Detailed, human-led quality checks.",
      },
      {
        id: 4,
        icon: "📄",
        title: "Test Reporting",
        description: "Clear, actionable test result documentation.",
      },
    ],
    processTitle: "Our Process",
    processSubtitle: "Quality at every stage.",
    processSteps: [
      {
        number: 1,
        title: "Assessment",
        description: "Identify areas for automation.",
      },
      {
        number: 2,
        title: "Implementation",
        description: "Integrate automated testing tools.",
      },
      {
        number: 3,
        title: "Execution",
        description: "Run automated and manual test suites.",
      },
      {
        number: 4,
        title: "Review",
        description: "Analyze reports and improve continuously.",
      },
    ],
    ctaTitle: "Deliver with Confidence",
    ctaSubtitle: "Automate your QA process today.",
    ctaButton: "Talk to Us",
  },
  "cloud-services": {
    hero: {
      title: "Cloud Services",
      subtitle: "Scalable, secure, and cost-effective cloud solutions.",
    },
    expertiseTitle: "Our Expertise",
    expertiseSubtitle: "Helping businesses leverage the power of the cloud.",
    services: [
      {
        id: 1,
        icon: "☁️",
        title: "Cloud Migration",
        description: "Move your workloads to the cloud seamlessly.",
      },
      {
        id: 2,
        icon: "🛡️",
        title: "Cloud Security",
        description: "Protect data with advanced cloud security measures.",
      },
      {
        id: 3,
        icon: "📦",
        title: "Storage Solutions",
        description: "Efficient cloud-based storage and backup.",
      },
      {
        id: 4,
        icon: "⚡",
        title: "Cloud Optimization",
        description: "Maximize performance and cost savings.",
      },
    ],
    processTitle: "Our Process",
    processSubtitle: "Your journey to the cloud.",
    processSteps: [
      {
        number: 1,
        title: "Assessment",
        description: "Evaluate your infrastructure and needs.",
      },
      {
        number: 2,
        title: "Migration",
        description: "Move data and apps to the cloud.",
      },
      {
        number: 3,
        title: "Optimization",
        description: "Fine-tune cloud usage for efficiency.",
      },
      {
        number: 4,
        title: "Maintenance",
        description: "Ongoing monitoring and updates.",
      },
    ],
    ctaTitle: "Embrace the Cloud",
    ctaSubtitle: "Future-proof your business with cloud technology.",
    ctaButton: "Get Started",
  },
};

export default allServicesData;
