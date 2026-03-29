import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

export interface RecipeCard {
  title: string;
  subtitle: string;
  tag: string;
  time: string;
  age: string;
  icon: string;
}

@Component({
  selector: 'app-recipe-carousel',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './recipe-carousel.component.html',
  styleUrl: './recipe-carousel.component.scss',
})
export class RecipeCarouselComponent {
  @Input() recipes: RecipeCard[] = [];
}
