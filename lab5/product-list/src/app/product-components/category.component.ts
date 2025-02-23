import { CommonModule } from '@angular/common';
import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-category',
  template: `
    <div class="categories flex gap-4 p-4">
      <button *ngFor="let category of categories" 
              (click)="selectCategory(category)"
              class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
        {{ category }}
      </button>
    </div>
  `,
  imports: [CommonModule],
  styles: []
})
export class CategoryComponent {
  @Output() categorySelected = new EventEmitter<string>();

  categories: string[] = ['Smartphones', 'Laptops', 'Tablets', 'Accessories'];

  selectCategory(category: string) {
    this.categorySelected.emit(category);
  }
}
