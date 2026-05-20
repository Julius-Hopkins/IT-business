import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { DeveloperService } from '../../../services/developer.service';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './admin.html',
  styleUrl: './admin.css',
})
export class AdminComponent implements OnInit {
  timestamp = new Date().toLocaleString();

  constructor(
    private developerService: DeveloperService,
    private router: Router
  ) {}

  ngOnInit() {
    if (!this.developerService.isDeveloperModeEnabled()) {
      this.router.navigate(['/']);
    }
  }
}
