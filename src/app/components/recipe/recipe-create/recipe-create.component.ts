import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

import { Recette, TypeRecette } from 'models/recipe.model';
import { IIngredientRecette } from 'models/ingredient-recette.model';
import { PoidMesure, Categorie } from 'models/article.model';

@Component({
  selector: 'app-recipe-create',
  templateUrl: './recipe-create.component.html',
  styleUrls: ['./recipe-create.component.scss'],
})
export class RecipeCreateComponent implements OnInit {
  ingredientFormList = new FormArray([]);

  typeLabels = ['Entree', 'Plat Principale', 'Dessert', 'A cote', 'Autre'];
  poidMesureLabels = [
    'g',
    'kg',
    'ml',
    'l',
    'unite',
    'tasse',
    'c. the',
    'c. soupe',
  ];
  categorieLabels = [
    'Fruits et Legumes',
    'Viande',
    'Charcuterie',
    'Produits Laitiers',
    'Boulangerie',
    'Collation',
    'Autre',
  ];

  recipeForm = new FormGroup({
    nom: new FormControl<string>('', Validators.required),
    image: new FormControl<string>(''),
    nombreServis: new FormControl<number>(1, Validators.required),
    tempPreparation: new FormControl<number>(5, Validators.required),
    tempCuisson: new FormControl<number>(0, Validators.required),
    typeRecette: new FormControl<TypeRecette>(
      TypeRecette.AUTRE,
      Validators.required
    ),
    ingredients: this.ingredientFormList,
  });

  ngOnInit(): void {
    this.onAddIngredient();
  }

  onAddIngredient() {
    const ingredients = this.recipeForm.get('ingredients') as FormArray;
    ingredients.push(
      new FormGroup({
        nom: new FormControl<string>('', Validators.required),
        preparation: new FormControl<string>(''),
        quantite: new FormControl<number>(1),
        unites: new FormControl<PoidMesure>(
          PoidMesure.UNITE,
          Validators.required
        ),
        categorie: new FormControl<Categorie>(
          Categorie.AUTRE,
          Validators.required
        ),
      })
    );
  }

  onRemoveIngredient(index: number) {
    const ingredients = this.recipeForm.get('ingredients') as FormArray;

    ingredients.removeAt(index);
  }

  getIngredientControls() {
    return (<FormArray>this.recipeForm.get('ingredients')).controls;
    // return this.recipeForm.get('ingredients') as FormArray;
  }

  onSubmit() {
    console.log(this.recipeForm);
  }
}
