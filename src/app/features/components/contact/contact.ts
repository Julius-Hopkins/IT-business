import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  formData = {
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  };

  submitted = false;

  onSubmit() {
    if (this.formData.name && this.formData.email && this.formData.message) {
      this.submitted = true;
      console.log('Form submitted:', this.formData);
      setTimeout(() => {
        this.formData = { name: '', email: '', phone: '', subject: '', message: '' };
        this.submitted = false;
      }, 3000);
    }
  }

  services = [
    { icon: '💻', name: 'Custom Development', description: 'Tailored software solutions built to your specifications' },
    { icon: '🏗️', name: 'Architecture Design', description: 'Scalable and robust system architecture planning' },
    { icon: '☁️', name: 'Cloud Solutions', description: 'Migration and optimization for AWS, Azure, and more' },
    { icon: '🔒', name: 'Security Consulting', description: 'Security audits and vulnerability assessments' },
    { icon: '📱', name: 'Mobile Development', description: 'iOS and Android apps for your business' },
    { icon: '🚀', name: 'DevOps & Deployment', description: 'CI/CD pipelines and infrastructure automation' },
  ];
}
