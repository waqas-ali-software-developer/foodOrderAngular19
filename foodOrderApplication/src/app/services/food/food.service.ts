import { Injectable } from '@angular/core';
import { Foods } from '../../shared/models/food';
@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAll():Foods[] {
    return [
      {
        id: 1,
        name: 'Pizza',
        cookTime: '10-20',
        price: 10,
        favorite: false,
        origins: ['UK', 'Belgium'],
        stars: 4.2,
        imageUrl: 'food1.jpg',
        tags: ['Fast Food', 'Chinese']
      },
       {
        id: 2,
        name: 'Pizza2',
        cookTime: '15-20',
        price: 10,
        favorite: true,
        origins: ['Japan'],
        stars: 4.2,
        imageUrl: 'food2.jpg',
        tags: ['Fast Food', 'Chinese']
      },
        {
        id: 3,
        name: 'Burger',
        cookTime: '15-20',
        price: 10,
        favorite: true,
        origins: ['Japan', 'China'],
        stars: 4.2,
        imageUrl: 'food3.jpg',
        tags: ['Fast Food', 'Chinese']
      },
      {
        id: 3,
        name: 'Chips',
        cookTime: '15-20',
        price: 10,
        favorite: true,
        origins: ['Japan'],
        stars: 4.2,
        imageUrl: 'food4.jpg',
        tags: ['Fast Food', 'Chinese']
      },
      {
        id: 4,
        name: 'Pizza2',
        cookTime: '15-20',
        price: 10,
        favorite: true,
        origins: ['Japan'],
        stars: 3,
        imageUrl: 'food4.jpg',
        tags: ['Fast Food', 'Chinese']
      }
    ]
  }
}
