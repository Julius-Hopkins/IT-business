import { Injectable } from '@angular/core';
import { Observable, of, delay, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { ApiResponse, Project, BlogPost, ContactMessage, ServiceRequest } from './models';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private readonly API_DELAY = 800; // Simulate network delay

  // Mock data
  private mockProjects: Project[] = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'Scalable e-commerce solution',
      technologies: ['Angular', 'Node.js', 'MongoDB', 'Stripe'],
      status: 'completed',
      clientName: 'TechRetail Inc',
      budget: 50000,
      startDate: '2024-01-15',
      endDate: '2024-06-30',
    },
    {
      id: 2,
      title: 'Cloud Dashboard',
      description: 'Cloud infrastructure management',
      technologies: ['React', 'AWS', 'Docker'],
      status: 'completed',
      clientName: 'CloudVenture Ltd',
      budget: 75000,
      startDate: '2024-03-01',
      endDate: '2024-09-15',
    },
    {
      id: 3,
      title: 'Mobile Banking App',
      description: 'Secure mobile banking application',
      technologies: ['React Native', 'Firebase', 'TypeScript'],
      status: 'in-progress',
      clientName: 'FinanceCore',
      budget: 120000,
      startDate: '2024-08-01',
    },
  ];

  private mockBlogPosts: BlogPost[] = [
    {
      id: 1,
      title: 'Getting Started with Angular 21',
      content: 'Learn the basics of Angular 21 and build modern web applications...',
      author: 'John Developer',
      createdAt: '2024-12-10',
      tags: ['angular', 'frontend', 'tutorial'],
      featured: true,
    },
    {
      id: 2,
      title: 'Microservices Architecture Best Practices',
      content: 'Explore best practices for building scalable microservices...',
      author: 'Jane Architect',
      createdAt: '2024-12-05',
      tags: ['architecture', 'backend', 'kubernetes'],
      featured: true,
    },
  ];

  public contactMessages: ContactMessage[] = [];
  private serviceRequests: ServiceRequest[] = [];

  // --- Projects ---
  getProjects(): Observable<ApiResponse<Project[]>> {
    return of({
      success: true,
      data: this.mockProjects,
      timestamp: new Date().toISOString(),
    }).pipe(delay(this.API_DELAY));
  }

  getProjectById(id: number): Observable<ApiResponse<Project>> {
    const project = this.mockProjects.find(p => p.id === id);
    return of({
      success: !!project,
      data: project,
      error: project ? undefined : 'Project not found',
      timestamp: new Date().toISOString(),
    }).pipe(delay(this.API_DELAY));
  }

  createProject(project: Omit<Project, 'id'>): Observable<ApiResponse<Project>> {
    const newProject: Project = {
      ...project,
      id: Math.max(...this.mockProjects.map(p => p.id), 0) + 1,
    };
    this.mockProjects.push(newProject);
    return of({
      success: true,
      data: newProject,
      timestamp: new Date().toISOString(),
    }).pipe(delay(this.API_DELAY));
  }

  updateProject(id: number, updates: Partial<Project>): Observable<ApiResponse<Project>> {
    const index = this.mockProjects.findIndex(p => p.id === id);
    if (index === -1) {
      return of({
        success: false,
        error: 'Project not found',
        timestamp: new Date().toISOString(),
      }).pipe(delay(this.API_DELAY));
    }
    this.mockProjects[index] = { ...this.mockProjects[index], ...updates };
    return of({
      success: true,
      data: this.mockProjects[index],
      timestamp: new Date().toISOString(),
    }).pipe(delay(this.API_DELAY));
  }

  deleteProject(id: number): Observable<ApiResponse<null>> {
    const index = this.mockProjects.findIndex(p => p.id === id);
    if (index === -1) {
      return of({
        success: false,
        error: 'Project not found',
        timestamp: new Date().toISOString(),
      }).pipe(delay(this.API_DELAY));
    }
    this.mockProjects.splice(index, 1);
    return of({
      success: true,
      timestamp: new Date().toISOString(),
    }).pipe(delay(this.API_DELAY));
  }

  // --- Blog Posts ---
  getBlogPosts(): Observable<ApiResponse<BlogPost[]>> {
    return of({
      success: true,
      data: this.mockBlogPosts,
      timestamp: new Date().toISOString(),
    }).pipe(delay(this.API_DELAY));
  }

  getFeaturedBlogPosts(): Observable<ApiResponse<BlogPost[]>> {
    return of({
      success: true,
      data: this.mockBlogPosts.filter(p => p.featured),
      timestamp: new Date().toISOString(),
    }).pipe(delay(this.API_DELAY));
  }

  createBlogPost(post: Omit<BlogPost, 'id' | 'createdAt'>): Observable<ApiResponse<BlogPost>> {
    const newPost: BlogPost = {
      ...post,
      id: Math.max(...this.mockBlogPosts.map(p => p.id), 0) + 1,
      createdAt: new Date().toISOString(),
    };
    this.mockBlogPosts.push(newPost);
    return of({
      success: true,
      data: newPost,
      timestamp: new Date().toISOString(),
    }).pipe(delay(this.API_DELAY));
  }

  // --- Contact Messages ---
  submitContactMessage(message: Omit<ContactMessage, 'id' | 'createdAt' | 'status'>): Observable<ApiResponse<ContactMessage>> {
    const newMessage: ContactMessage = {
      ...message,
      id: Math.max(...this.contactMessages.map(m => m.id || 0), 0) + 1,
      status: 'new',
      createdAt: new Date().toISOString(),
    };
    this.contactMessages.push(newMessage);
    console.log('Message stored:', newMessage);
    return of({
      success: true,
      data: newMessage,
      timestamp: new Date().toISOString(),
    }).pipe(delay(this.API_DELAY));
  }

  getContactMessages(): Observable<ApiResponse<ContactMessage[]>> {
    return of({
      success: true,
      data: this.contactMessages,
      timestamp: new Date().toISOString(),
    }).pipe(delay(this.API_DELAY));
  }

  // --- Service Requests ---
  createServiceRequest(request: Omit<ServiceRequest, 'id' | 'createdAt'>): Observable<ApiResponse<ServiceRequest>> {
    const newRequest: ServiceRequest = {
      ...request,
      id: Math.max(...this.serviceRequests.map(r => r.id || 0), 0) + 1,
      createdAt: new Date().toISOString(),
    };
    this.serviceRequests.push(newRequest);
    return of({
      success: true,
      data: newRequest,
      timestamp: new Date().toISOString(),
    }).pipe(delay(this.API_DELAY));
  }

  getServiceRequests(priority?: string): Observable<ApiResponse<ServiceRequest[]>> {
    let filtered = this.serviceRequests;
    if (priority) {
      filtered = filtered.filter(r => r.priority === priority);
    }
    return of({
      success: true,
      data: filtered,
      timestamp: new Date().toISOString(),
    }).pipe(delay(this.API_DELAY));
  }

  // --- Health Check ---
  healthCheck(): Observable<ApiResponse<{ status: string; uptime: number }>> {
    return of({
      success: true,
      data: {
        status: 'online',
        uptime: Math.floor(Date.now() / 1000),
      },
      timestamp: new Date().toISOString(),
    }).pipe(delay(200));
  }

  // --- Error handling example ---
  simulateError(): Observable<ApiResponse<null>> {
    return throwError(() => ({
      success: false,
      error: 'Example error for testing',
      timestamp: new Date().toISOString(),
    })).pipe(delay(this.API_DELAY));
  }
}
