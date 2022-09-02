import { RecipesService } from './services/recipes.service';
import { IRecipe } from './models/recipe';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'web recipe app'

  recipes: IRecipe[] = []

  constructor(private service: RecipesService) {}
  
  ngOnInit(): void {
    this.service.getAll().subscribe({
      next: (recipes) => {
        console.log(recipes)
      }
    })
  }

}
