import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { HeaderComponent } from '../../shared/header/header.component';

interface RecipeListItem {
  title: string;
  description: string;
  tag: string;
  time: string;
  age: string;
  icon: string;
}

@Component({
  selector: 'app-recipes',
  standalone: true,
  imports: [CommonModule, MatIconModule, HeaderComponent],
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.scss'
})
export class RecipesComponent {
  filters = ['All', 'Breakfast', 'Lunch', 'Dinner', 'Snacks', 'Freezer'];

  recipes: RecipeListItem[] = [
    {
      title: 'Sweet Potato Mash',
      description: 'Smooth, simple, and great for batch prep.',
      tag: 'Breakfast',
      time: '15 min',
      age: '12+ mo',
      icon: 'restaurant'
    },
    {
      title: 'Banana Oat Bites',
      description: 'Soft little bites for a quick meal prep session.',
      tag: 'Snacks',
      time: '20 min',
      age: '12+ mo',
      icon: 'bakery_dining'
    },
    {
      title: 'Avocado Pasta',
      description: 'Creamy pasta with a soft texture for easy eating.',
      tag: 'Lunch',
      time: '15 min',
      age: '12+ mo',
      icon: 'lunch_dining'
    },
    {
      title: 'Veggie Chicken Blend',
      description: 'A batch-cook recipe that works well for freezer prep.',
      tag: 'Dinner',
      time: '25 min',
      age: '12+ mo',
      icon: 'dinner_dining'
    },
    {
      title: 'Apple Cinnamon Bowl',
      description: 'Warm and cozy with a soft spoon-friendly texture.',
      tag: 'Breakfast',
      time: '10 min',
      age: '12+ mo',
      icon: 'icecream'
    },
    {
      title: 'Pea Potato Mix',
      description: 'Mild flavor and easy to portion into prep containers.',
      tag: 'Freezer',
      time: '18 min',
      age: '12+ mo',
      icon: 'eco'
    }
  ];
}