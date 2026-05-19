export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  timestamp: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  status: 'completed' | 'in-progress' | 'upcoming';
  clientName: string;
  budget: number;
  startDate: string;
  endDate?: string;
}

export interface BlogPost {
  id: number;
  title: string;
  content: string;
  author: string;
  createdAt: string;
  tags: string[];
  featured: boolean;
}

export interface ContactMessage {
  id?: number;
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
  status?: 'new' | 'read' | 'responded';
  createdAt?: string;
}

export interface ServiceRequest {
  id?: number;
  serviceType: 'development' | 'consulting' | 'support' | 'training';
  description: string;
  priority: 'low' | 'medium' | 'high';
  clientName: string;
  clientEmail: string;
  budget?: number;
  createdAt?: string;
}
