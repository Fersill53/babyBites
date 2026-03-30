import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-bottom-nav',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, MatIconModule],
  templateUrl: './bottom-nav.component.html',
  styleUrl: './bottom-nav.component.scss',
})
export class BottomNavComponent {
  navItems = [
    { label: 'Home', icon: 'home', route: '/' },
    { label: 'Recipes', icon: 'restaurant_menu', route: '/recipes' },
    { label: 'Planner', icon: 'calendar_month', route: '/planner' },
    { label: 'Favorites', icon: 'favorite', route: '/favorites' },
  ];
}
