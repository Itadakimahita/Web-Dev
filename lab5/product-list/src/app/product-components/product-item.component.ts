import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

interface Product {
    image: string;
    gallery: string[];
    name: string;
    description: string;
    rating: number;
    link: string;
    likes: number;
}

@Component({
  selector: 'app-product-item',
  template: `
    <div class="product-card bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105">
      <img [src]="product.image" alt="{{ product.name }}" class="h-70 object-cover">
      <div class="gallery flex gap-2 p-2">
        <img *ngFor="let img of product.gallery" [src]="img" 
             alt="{{ product.name }}" 
             class="gallery-image w-12 h-12 object-cover rounded-md border">
      </div>

      <div class="p-4">
        <h3 class="text-lg font-semibold text-gray-800">{{ product.name }}</h3>
        <p class="text-sm text-gray-600 mt-2">{{ product.description }}</p>
        <p class="text-yellow-500 font-medium mt-2">⭐ {{ product.rating }}</p>
      </div>

      <div class="buttons flex justify-between p-4">
        <button (click)="remove.emit(product)" class="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition">Remove</button>
        <button (click)="increaseLikes()" class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">Like ({{ product.likes }})</button>
      </div>

      <div class="buttons flex justify-between p-4">
        <button (click)="share(product, 'whatsapp')" 
                class="whatsapp-btn bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition">
          Share on WhatsApp
        </button>
        <button (click)="share(product, 'telegram')" 
                class="telegram-btn bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
          Share on Telegram
        </button>
      </div>

    </div>
  `,
  imports: [CommonModule],
  styles: []
})

export class ProductItemComponent {
  @Input() product: any;
  @Output() remove = new EventEmitter<any>();


  increaseLikes() {
    this.product.likes++;
  }

  share(product: Product, platform: string) {
    let shareUrl = '';
    if (platform === 'whatsapp') {
      shareUrl = `https://wa.me/?text=${product.link}`;
    } else if (platform === 'telegram') {
      shareUrl = `https://t.me/share/url?url=${product.link}`;
    }
    window.open(shareUrl, '_blank');
  }

}
