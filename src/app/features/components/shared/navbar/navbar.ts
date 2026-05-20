import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { DeveloperService } from '../../../../services/developer.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar implements OnInit {
  mobileMenuOpen = false;
  developerModeEnabled = false;

  constructor(private developerService: DeveloperService) {}

  ngOnInit() {
    this.developerService.developerMode$.subscribe(
      (mode: boolean) => (this.developerModeEnabled = mode)
    );
  }

  toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  closeMobileMenu() {
    this.mobileMenuOpen = false;
  }

  toggleDeveloperMode() {
    this.developerService.toggleDeveloperMode();
  }
}
