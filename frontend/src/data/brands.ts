import {
    Building2,
    Zap as Lightning,
    Globe,
    Cpu,
    Database,
    Cloud,
    Smartphone as Mobile,
    Zap
  } from 'lucide-react';
  import type { Brand } from '../types';
  
  export const brands: Brand[] = [
    { id: '1', name: 'TechCorp', logo: Building2, color: 'text-blue-600' },
    { id: '2', name: 'InnovateLab', logo: Lightning, color: 'text-purple-600' },
    { id: '3', name: 'GlobalTech', logo: Globe, color: 'text-green-600' },
    { id: '4', name: 'DataFlow', logo: Database, color: 'text-indigo-600' },
    { id: '5', name: 'CloudSync', logo: Cloud, color: 'text-cyan-600' },
    { id: '6', name: 'MobileFirst', logo: Mobile, color: 'text-orange-600' },
    { id: '7', name: 'ProcessorTech', logo: Cpu, color: 'text-red-600' },
    { id: '8', name: 'StartupHub', logo: Zap, color: 'text-yellow-600' }
  ];