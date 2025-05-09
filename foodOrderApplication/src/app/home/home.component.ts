import { Component } from '@angular/core';
import { FoodService } from '../services/food/food.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  foods: string[] = [];

  constructor(private foodService: FoodService) {
  }

  ngOnInit(): void {
    this.foods = this.foodService.getAll();
  }
}
