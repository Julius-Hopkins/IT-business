import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {
  projects: Project[] = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'Built a scalable e-commerce platform with Angular and Node.js. Integrated payment processing, inventory management, and real-time notifications.',
      technologies: ['Angular', 'Node.js', 'MongoDB', 'Stripe'],
      image: '🛒',
    },
    {
      id: 2,
      title: 'Cloud Infrastructure Management',
      description: 'Developed a comprehensive cloud infrastructure management dashboard for monitoring and scaling resources across AWS and Azure.',
      technologies: ['React', 'AWS', 'Azure', 'Docker'],
      image: '☁️',
    },
    {
      id: 3,
      title: 'Mobile Banking App',
      description: 'Engineered a secure mobile banking application with biometric authentication, fund transfers, and transaction history.',
      technologies: ['React Native', 'Firebase', 'TypeScript', 'Redux'],
      image: '🏦',
    },
    {
      id: 4,
      title: 'Data Analytics Dashboard',
      description: 'Created a real-time data analytics dashboard with visualizations, predictive analytics, and custom reporting features.',
      technologies: ['Vue.js', 'D3.js', 'Python', 'PostgreSQL'],
      image: '📊',
    },
    {
      id: 5,
      title: 'Enterprise CRM System',
      description: 'Implemented a full-featured CRM system with customer management, sales pipeline tracking, and automated workflows.',
      technologies: ['Angular', 'C#', '.NET', 'SQL Server'],
      image: '👥',
    },
    {
      id: 6,
      title: 'API Gateway & Microservices',
      description: 'Architected and deployed a microservices infrastructure with API gateway, service discovery, and load balancing.',
      technologies: ['Kubernetes', 'Docker', 'Go', 'gRPC'],
      image: '🔗',
    },
  ];
}
