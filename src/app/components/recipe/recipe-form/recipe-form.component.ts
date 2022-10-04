import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

import { IRecette, TypeRecette } from 'models/recipe.model';
import { IIngredientRecette } from 'models/ingredient-recette.model';
import { PoidMesure, Categorie } from 'models/article.model';
import { RecipeService } from 'services/recipe.service';

@Component({
  selector: 'app-recipe-form',
  templateUrl: './recipe-form.component.html',
  styleUrls: ['./recipe-form.component.scss'],
})
export class RecipeFormComponent implements OnInit {
  @Input()
  recipeToModify: IRecette | null = null;

  recipeForm!: FormGroup;

  ingredientFormList = new FormArray([]);

  constructor(private recipeService: RecipeService) {}

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

  ngOnInit(): void {
    this.onAddIngredient();

    if (!this.recipeToModify) {
      this.recipeForm = new FormGroup({
        nom: new FormControl<string>('', Validators.required),
        image: new FormControl<string>(''),
        nombreServis: new FormControl<number>(1, Validators.required),
        tempPreparation: new FormControl<number>(5, Validators.required),
        tempCuisson: new FormControl<number>(0, Validators.required),
        typeRecette: new FormControl<number>(
          TypeRecette.AUTRE,
          Validators.required
        ),
        instructions: new FormControl<string>(''),
        ingredients: this.ingredientFormList,
      });
    } else {
      //todo
      //create formarray for existing ingredients
      // for (const ingredient of this.recipeToModify.ingredients) {
      //   this.ingredientFormList.push(ingredient);
      // }

      this.recipeForm = new FormGroup({
        nom: new FormControl<string>(
          this.recipeToModify.nom,
          Validators.required
        ),
        image: new FormControl<string>(this.recipeToModify.image),
        nombreServis: new FormControl<number>(
          this.recipeToModify.nombreServis,
          Validators.required
        ),
        tempPreparation: new FormControl<number>(
          this.recipeToModify.tempPreparation,
          Validators.required
        ),
        tempCuisson: new FormControl<number>(
          this.recipeToModify.tempCuisson,
          Validators.required
        ),
        typeRecette: new FormControl<number>(
          this.recipeToModify.typeRecette,
          Validators.required
        ),
        instructions: new FormControl<string>(this.recipeToModify.instructions),
        ingredients: this.ingredientFormList,
      });
    }
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
    if (this.recipeForm.valid) {
      const recipe = {
        nom: this.recipeForm.value.nom as string,
        image: this.recipeForm.value.image as string,
        nombreServis: this.recipeForm.value.nombreServis as number,
        tempCuisson: this.recipeForm.value.tempCuisson as number,
        tempPreparation: this.recipeForm.value.tempPreparation as number,
        typeRecette: this.recipeForm.value.typeRecette,
        instructions: this.recipeForm.value.instructions as string,
        ingredients: this.recipeForm.value.ingredients as IIngredientRecette[],
      };
      if (!this.recipeToModify) {
        this.recipeService.createRecipe(recipe);
      } else {
        this.recipeService.updateRecipe({
          ...this.recipeToModify,
          ...recipe,
        });
      }
    }

    // this.recipeService.createRecipe(recipe);
  }
}
