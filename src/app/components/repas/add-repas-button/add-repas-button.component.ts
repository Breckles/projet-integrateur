import { Component, OnInit } from '@angular/core';
import { RecipesCardBlockComponent } from 'components/recipes-card-block/recipes-card-block.component';
import { ModalService } from 'services/modal.service';

@Component({
  selector: 'app-add-repas-button',
  templateUrl: './add-repas-button.component.html',
  styleUrls: ['./add-repas-button.component.scss']
})
export class AddRepasButtonComponent implements OnInit {

  
  constructor(private modalService: ModalService) {}

  ngOnInit(): void {
  }
  openModal() {
    this.modalService.openModal(RecipesCardBlockComponent);
  }
}

