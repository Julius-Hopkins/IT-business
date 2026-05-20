import { Component, OnInit, signal} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../../services/api/api.service';
import { Project, BlogPost, ContactMessage, ServiceRequest } from '../../../services/api/models';

@Component({
  selector: 'app-api-demo',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './api-demo.html',
  styleUrl: './api-demo.css',
})
export class ApiDemo implements OnInit {
  activeTab: 'projects' | 'blog' | 'contact' | 'service' | 'health' = 'projects';

  // Projects
  projects: Project[] = [];
  projectsLoading = signal(false);

  // Blog
  blogPosts: BlogPost[] = [];
  blogLoading = signal(false);

  // Contact
  contactMessages: ContactMessage[] = [];
  contactLoading = signal(false);
  contactForm = { name: '', email: '', subject: '', message: '' };

  // Service Request
  serviceRequests: ServiceRequest[] = [];
  serviceLoading = signal(false);
  serviceForm = {
    serviceType: 'development' as 'development' | 'consulting' | 'support' | 'training',
    description: '',
    priority: 'medium' as 'low' | 'medium' | 'high',
    clientName: '',
    clientEmail: '',
    budget: 0,
  };

  // Health
  healthStatus: any = null;
  healthLoading = signal(false);

  apiResponse: any = null;
  apiError: any = null;

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.loadProjects();
  }

  // --- Projects ---
  loadProjects() {
    this.projectsLoading.set(true);
    this.apiError = null;
    this.apiService.getProjects().subscribe({
      next: (response) => {
        this.projects = response.data || [];
        this.apiResponse = response;
        this.projectsLoading.set(false);
      },
      error: (err) => {
        this.apiError = err;
        this.projectsLoading.set(false);
      },
    });
  }

  deleteProject(id: number) {
    this.apiService.deleteProject(id).subscribe({
      next: () => {
        this.loadProjects();
      },
    });
  }

  // --- Blog ---
  loadBlog() {
    this.blogLoading.set(true);
    this.apiError = null;
    this.apiService.getBlogPosts().subscribe({
      next: (response) => {
        this.blogPosts = response.data || [];
        this.apiResponse = response;
        this.blogLoading.set(false);
      },
      error: (err) => {
        this.apiError = err;
        this.blogLoading.set(false);
      },
    });
  }

  // --- Contact ---
  loadContactMessages() {
    this.contactLoading.set(true);
    this.apiError = null;
    this.apiService.getContactMessages().subscribe({
      next: (response) => {
        this.contactMessages = response.data || [];
        this.apiResponse = response;
        this.contactLoading.set(false);
      },
      error: (err) => {
        this.apiError = err;
        this.contactLoading.set(false);
      },
    });
  }

  submitContactMessage() {
    if (!this.contactForm.name || !this.contactForm.email || !this.contactForm.message) {
      alert('Please fill all required fields');
      return;
    }

    this.contactLoading.set(true);
    this.apiError = null;
    this.apiService.submitContactMessage(this.contactForm).subscribe({
      next: (response) => {
        this.apiResponse = response;
        this.contactForm = { name: '', email: '', subject: '', message: '' };
        this.loadContactMessages();
      },
      error: (err) => {
        this.apiError = err;
        this.contactLoading.set(false);
      },
    });
  }

  // --- Service Request ---
  loadServiceRequests() {
    this.serviceLoading.set(true);
    this.apiError = null;
    this.apiService.getServiceRequests().subscribe({
      next: (response) => {
        this.serviceRequests = response.data || [];
        this.apiResponse = response;
        this.serviceLoading.set(false);
      },
      error: (err) => {
        this.apiError = err;
        this.serviceLoading.set(false);
      },
    });
  }

  submitServiceRequest() {
    if (!this.serviceForm.description || !this.serviceForm.clientName || !this.serviceForm.clientEmail) {
      alert('Please fill all required fields');
      return;
    }

    this.serviceLoading.set(true);
    this.apiError = null;
    this.apiService.createServiceRequest(this.serviceForm).subscribe({
      next: (response) => {
        this.apiResponse = response;
        this.serviceForm = {
          serviceType: 'development',
          description: '',
          priority: 'medium',
          clientName: '',
          clientEmail: '',
          budget: 0,
        };
        this.loadServiceRequests();
      },
      error: (err) => {
        this.apiError = err;
        this.serviceLoading.set(false);
      },
    });
  }

  // --- Health Check ---
  checkHealth() {
    this.healthLoading.set(true);
    this.apiError = null;
    this.apiService.healthCheck().subscribe({
      next: (response) => {
        this.healthStatus = response.data;
        this.apiResponse = response;
        this.healthLoading.set(false);
      },
      error: (err) => {
        this.apiError = err;
        this.healthLoading.set(false);
      },
    });
  }

  switchTab(tab: 'projects' | 'blog' | 'contact' | 'service' | 'health') {
    this.activeTab = tab;
    this.apiResponse = null;
    this.apiError = null;
  }

  getBadgeColor(status: string): string {
    const colorMap: { [key: string]: string } = {
      completed: 'success',
      'in-progress': 'info',
      upcoming: 'warning',
    };
    return colorMap[status] || 'secondary';
  }

  getPriorityColor(priority: string): string {
    const colorMap: { [key: string]: string } = {
      high: 'danger',
      medium: 'warning',
      low: 'info',
    };
    return colorMap[priority] || 'secondary';
  }
}
