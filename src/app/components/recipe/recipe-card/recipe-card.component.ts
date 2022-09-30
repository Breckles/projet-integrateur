import {
  Component,
  Input,
  OnInit,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { IRecette } from 'models/recipe.model';
import { ModalService } from 'services/modal.service';

@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.scss'],
})
export class RecipeCardComponent implements OnInit {
  @Input()
  recipe!: IRecette;

  @Input()
  showButton: boolean = true;

  @ViewChild('modalContentTemplate')
  modalContentTemplate!: TemplateRef<any>;

  constructor(private ms: ModalService) {}

  ngOnInit(): void {
    if (!this.recipe) {
      throw new Error('You need to provide a recipe for this component');
    }
  }

  onAddRecipe() {
    this.ms.openModal(this.modalContentTemplate);
  }
}
