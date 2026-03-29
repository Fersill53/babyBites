import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

import { HeaderComponent } from '../../shared/header/header.component'
import { RecipeCarouselComponent, RecipeCard } from '../../shared/recipe-carousel/recipe-carousel.component';
import { C } from '@angular/cdk/keycodes';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    HeaderComponent,
    RecipeCarouselComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  featuredRecipes: RecipeCard[] = [
    {
      title: 'Sweet Potato Mash',
      subtitle: 'Creamy + freezer friendly',
      tag: 'Popular',
      time: '15 min',
      age: '12+ mo',
      icon: 'restaurant'
    },

    {
      title: 'Banana Oat Bites',
      subtitle: 'Easy Breakfast Prep',
      tag: 'Quick Prep',
      time: '20 min',
      age: '12+ mo',
      icon: 'bakery_dining'
    },

    {
      title: 'Avocado Pasta',
      subtitle: 'Soft and Simple',
      tag: 'Lunch',
      time: '15 min',
      age: '12+ mo',
      icon: 'lunch_dining'
    },

    {
      title: 'Apple Cinnamon Bowl',
      subtitle: 'Warm + Comforting',
      tag: 'Favorite',
      time: '10 min',
      age: '12+ mo',
      icon: 'icecream'
    },

    {
      title: 'Veggie Chicken Blend',
      subtitle: 'Batch Cook Idea',
      tag: 'Freezer',
      time: '25 min',
      age: '12+ mo',
      icon: 'dinner_dining'
    }
  ];

  categories = [
    { name: 'Breakfast', icon: 'wb_sunny' },
    { name: 'Lunch', icon: 'lunch_dining' },
    { name: 'Dinner', icon: 'dinner_dining' },
    { name: 'Snacks', icon: 'cookie' },
    { name: 'Freezer', icon: 'ac_unit' },
    { name: 'Quick Prep', icon: 'bolt' },
  ];

}
