import { Component, OnInit } from '@angular/core';
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
  projectsLoading = false;

  // Blog
  blogPosts: BlogPost[] = [];
  blogLoading = false;

  // Contact
  contactMessages: ContactMessage[] = [];
  contactLoading = false;
  contactForm = { name: '', email: '', subject: '', message: '' };

  // Service Request
  serviceRequests: ServiceRequest[] = [];
  serviceLoading = false;
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
  healthLoading = false;

  apiResponse: any = null;
  apiError: any = null;

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.loadProjects();
  }

  // --- Projects ---
  loadProjects() {
    this.projectsLoading = true;
    this.apiError = null;
    this.apiService.getProjects().subscribe({
      next: (response) => {
        this.projects = response.data || [];
        this.apiResponse = response;
        this.projectsLoading = false;
      },
      error: (err) => {
        this.apiError = err;
        this.projectsLoading = false;
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
    this.blogLoading = true;
    this.apiError = null;
    this.apiService.getBlogPosts().subscribe({
      next: (response) => {
        this.blogPosts = response.data || [];
        this.apiResponse = response;
        this.blogLoading = false;
      },
      error: (err) => {
        this.apiError = err;
        this.blogLoading = false;
      },
    });
  }

  // --- Contact ---
  loadContactMessages() {
    this.contactLoading = true;
    this.apiError = null;
    this.apiService.getContactMessages().subscribe({
      next: (response) => {
        this.contactMessages = response.data || [];
        this.apiResponse = response;
        this.contactLoading = false;
      },
      error: (err) => {
        this.apiError = err;
        this.contactLoading = false;
      },
    });
  }

  submitContactMessage() {
    if (!this.contactForm.name || !this.contactForm.email || !this.contactForm.message) {
      alert('Please fill all required fields');
      return;
    }

    this.contactLoading = true;
    this.apiError = null;
    this.apiService.submitContactMessage(this.contactForm).subscribe({
      next: (response) => {
        this.apiResponse = response;
        this.contactForm = { name: '', email: '', subject: '', message: '' };
        this.loadContactMessages();
      },
      error: (err) => {
        this.apiError = err;
        this.contactLoading = false;
      },
    });
  }

  // --- Service Request ---
  loadServiceRequests() {
    this.serviceLoading = true;
    this.apiError = null;
    this.apiService.getServiceRequests().subscribe({
      next: (response) => {
        this.serviceRequests = response.data || [];
        this.apiResponse = response;
        this.serviceLoading = false;
      },
      error: (err) => {
        this.apiError = err;
        this.serviceLoading = false;
      },
    });
  }

  submitServiceRequest() {
    if (!this.serviceForm.description || !this.serviceForm.clientName || !this.serviceForm.clientEmail) {
      alert('Please fill all required fields');
      return;
    }

    this.serviceLoading = true;
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
        this.serviceLoading = false;
      },
    });
  }

  // --- Health Check ---
  checkHealth() {
    this.healthLoading = true;
    this.apiError = null;
    this.apiService.healthCheck().subscribe({
      next: (response) => {
        this.healthStatus = response.data;
        this.apiResponse = response;
        this.healthLoading = false;
      },
      error: (err) => {
        this.apiError = err;
        this.healthLoading = false;
      },
    });
  }

  switchTab(tab: 'projects' | 'blog' | 'contact' | 'service' | 'health') {
    this.activeTab = tab;
    this.apiResponse = null;
    this.apiError = null;
  }
}
