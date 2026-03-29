import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { RecipesComponent } from './pages/recipes/recipes.component';
import { PlannerComponent } from './pages/planner/planner.component';
import { FavoritesComponent } from './pages/favorites/favorites.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },

    {
        path: 'recipes',
        component: RecipesComponent
    },

    {
        path: 'planner',
        component: PlannerComponent
    },

    {
        path: 'favorites',
        component: FavoritesComponent
    },


    {
        path: '**',
        redirectTo: ''
    }
];
