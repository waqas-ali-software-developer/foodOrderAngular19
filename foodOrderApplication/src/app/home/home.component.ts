import { Component } from '@angular/core';
import { FoodService } from '../services/food/food.service';
import { CommonModule } from '@angular/common';
import { Foods } from '../shared/models/food';
import { RmNgStarRatingComponent } from 'rm-ng-star-rating';
@Component({
  selector: 'app-home',
  imports: [CommonModule,RmNgStarRatingComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  foods: Foods[] = [];

  constructor(private foodService: FoodService) {
  }

  ngOnInit(): void {
    this.foods = this.foodService.getAll();
  }
}
