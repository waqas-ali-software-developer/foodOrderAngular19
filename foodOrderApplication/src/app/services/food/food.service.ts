import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAll(): string[] {
    return [
      'food1.jpg',
      'food2.jpg',
      'food3.jpg',
      'food4.jpg',
      'food5.jpg',
      'food6.jpg',
      'food7.jpg',
      'food8.jpg',
    ]
  }
}
