import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Product {
  image: string;
  gallery: string[];
  name: string;
  description: string;
  rating: number;
  link: string;
}

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  imports: [CommonModule],
  standalone: true,
})

export class ProductsComponent {
  products: Product[] = [
    {
      image: 'https://via.placeholder.com/150',
      gallery: [
        'https://via.placeholder.com/150',
        'https://via.placeholder.com/150',
        'https://via.placeholder.com/150'
      ],
      name: 'Product 1',
      description: 'Description of Product 1',
      rating: 4.5,
      link: 'https://kaspi.kz'
    },
    {
      image: 'https://via.placeholder.com/150',
      gallery: [
        'https://via.placeholder.com/150',
        'https://via.placeholder.com/150',
        'https://via.placeholder.com/150'
      ],
      name: 'Product 2',
      description: 'Description of Product 1',
      rating: 4.5,
      link: 'https://kaspi.kz'
    },
    {
      image: 'https://via.placeholder.com/150',
      gallery: [
        'https://via.placeholder.com/150',
        'https://via.placeholder.com/150',
        'https://via.placeholder.com/150'
      ],
      name: 'Product 3',
      description: 'Description of Product 1',
      rating: 4.5,
      link: 'https://kaspi.kz'
    },
  ];

  share(product: Product, platform: string) {
    const url = encodeURIComponent(product.link);
    let shareUrl = '';
    if (platform === 'whatsapp') {
      shareUrl = `https://wa.me/?text=${url}`;
    } else if (platform === 'telegram') {
      shareUrl = `https://t.me/share/url?url=${url}`;
    }
    window.open(shareUrl, '_blank');
  }
}