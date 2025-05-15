import { Component } from '@angular/core';
import { FoodService } from '../services/food/food.service';
import { CommonModule } from '@angular/common';
import { Foods } from '../shared/models/food';
import { RmNgStarRatingComponent } from 'rm-ng-star-rating';
import { ActivatedRoute } from '@angular/router';
import { identifierName } from '@angular/compiler';
import { SearchComponent } from '../search/search.component';

@Component({
  selector: 'app-home',
  imports: [CommonModule,RmNgStarRatingComponent, SearchComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  foods: Foods[] = [];

  constructor(private foodService: FoodService, private router: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.router.params.subscribe(params => {
      if(params['searchItem'])
        this.foods = this.foodService.getAll().filter(food => food.name.toLocaleLowerCase().includes(params['searchItem'].toLowerCase()));
    else
        this.foods = this.foodService.getAll();
  
    })
  }
}
