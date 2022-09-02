import { IRecipe } from './../../models/recipe';

import { Component, Input } from "@angular/core";


@Component({
    selector: 'app-quiz',
    templateUrl: './recipe.component.html'
})
export class RecipeComponent {
    @Input() recipe: IRecipe

    details: boolean = false;
}