export interface Service {
    id: string;
    icon: React.ElementType;
    title: string;
    description: string;
    features: string[];
    color: string;
    gradient: string;
  }
  
  export interface Testimonial {
    id: string;
    name: string;
    role: string;
    company: string;
    content: string;
    avatar: string;
    rating: number;
  }
  
  export interface Brand {
    id: string;
    name: string;
    logo: React.ElementType;
    color: string;
  }