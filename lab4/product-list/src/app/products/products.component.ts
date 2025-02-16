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
  styleUrls: ['./products.component.css'],
  imports: [CommonModule],
  standalone: true,
})

export class ProductsComponent {
  products: Product[] = [
    //1
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h32/h70/84378448199710.jpg?format=gallery-large',
      gallery: [
        'https://resources.cdn-kaspi.kz/img/m/p/h32/h70/84378448199710.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/h35/h8f/84378448232478.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/h3d/h8e/64208874405918.jpg?format=gallery-large'
      ],
      name: 'Смартфон Apple iPhone 13 128Gb черный',
      description: 'Apple iPhone 13 получил дисплей 6.1 дюйма Super Retina XDR, который отличается невероятно высокой плотностью пикселей — фотографии, видео и текст выглядят поразительно четко. А благодаря уменьшенной площади камеры TrueDepth на дисплее теперь больше места для изображения.',
      rating: 5,
      link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-chernyi-102298404/?c=750000000'
    },
    //2
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hcf/h69/87295489343518.png?format=gallery-large',
      gallery: [
        'https://resources.cdn-kaspi.kz/img/m/p/hcf/h69/87295489343518.png?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/h08/hd3/87295489376286.png?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/h04/h8b/87295489409054.png?format=gallery-large'
      ],
      name: 'Смартфон Apple iPhone 16 Pro Max 256Gb черный',
      description: 'Флагманский IPhone 16 Pro Max вобрал в себя лучшие черты современного гаджета. Это самое производительное устройство в линейке Apple iPhone с масштабным дисплеем, потрясающей производительностью и невероятной внешней эргономикой. Iphone 16 pro max – настоящий титан в своем семействе. ',
      rating: 5,
      link: 'https://kaspi.kz/shop/p/apple-iphone-16-pro-max-256gb-chernyi-123787551/?c=750000000'
    },
    //3
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h1b/h77/84526902706206.jpg?format=gallery-large',
      gallery: [
        'https://resources.cdn-kaspi.kz/img/m/p/h1b/h77/84526902706206.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/hf4/h4b/84526902771742.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/h0f/h2d/84526902837278.jpg?format=gallery-large'
      ],
      name: 'Смартфон Xiaomi Redmi 13C 8 ГБ/256 ГБ черный',
      description: 'Сертификация по безопасности для зрения TÜV Rheinland Low Blue Light Оптимизация для снижения усталости глаз и излучения синего света с помощью технологии Flicker Free Поддерживает FM-радио (с разъемом для наушников) Поддержка зарядки 18 Вт Оболочка MIUI 14. Смартфон не предназначен для ААА (тяжелых) игр. ',
      rating: 4.5,
      link: 'https://kaspi.kz/shop/p/xiaomi-redmi-13c-8-gb-256-gb-chernyi-114695323/?c=750000000'
    },
    //4
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h14/h12/85428764606494.png?format=gallery-large',
      gallery: [
        'https://resources.cdn-kaspi.kz/img/m/p/h14/h12/85428764606494.png?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/h7c/hf1/85428764672030.png?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/ha3/h7f/85428764737566.png?format=gallery-large'
      ],
      name: 'Смартфон Samsung Galaxy A55 5G 8 ГБ/256 ГБ сиреневый',
      description: 'Samsung представила новый смартфон среднебюджетной A-серии – Galaxy A55, и на сегодня это топовая модель линейки, получившая значительные улучшения как в характеристиках, так и в программном обеспечении, в том числе и мощный процессор с графикой от AMD. Сейчас это единственный смартфон Самсунг с технологией бесшовного обновления – больше не нужно ждать, пока обновится Android. A55 предлагает доступную цену, интересный дизайн с гармонией стекла и металла и почти флагманские характеристики, что чаще встречается среди китайских конкурентов.',
      rating: 5,
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-a55-5g-8-gb-256-gb-sirenevyi-117420262/?c=750000000'
    },
    //5
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h21/h36/85428899414046.png?format=gallery-large',
      gallery: [
        'https://resources.cdn-kaspi.kz/img/m/p/h21/h36/85428899414046.png?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/h14/hea/85428899479582.png?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/h96/h5b/85428899545118.png?format=gallery-large'
      ],
      name: 'Смартфон Samsung Galaxy A55 5G 8 ГБ/256 ГБ темно-синий',
      description: 'Samsung представила новый смартфон среднебюджетной A-серии – Galaxy A55, и на сегодня это топовая модель линейки, получившая значительные улучшения как в характеристиках, так и в программном обеспечении, в том числе и мощный процессор с графикой от AMD. Сейчас это единственный смартфон Самсунг с технологией бесшовного обновления – больше не нужно ждать, пока обновится Android. A55 предлагает доступную цену, интересный дизайн с гармонией стекла и металла и почти флагманские характеристики, что чаще встречается среди китайских конкурентов.',
      rating: 5,
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-a55-5g-8-gb-256-gb-temno-sinii-117420207/?c=750000000'
    },
    //6
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hce/h74/84963707191326.png?format=gallery-large',
      gallery: [
        'https://resources.cdn-kaspi.kz/img/m/p/hce/h74/84963707191326.png?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/ha1/hfe/84963707256862.png?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/had/hd9/84963583393822.png?format=gallery-large'
      ],
      name: 'Смартфон Samsung Galaxy S24 Ultra 5G 12 ГБ/256 ГБ черный',
      description: 'Samsung представила новый смартфон среднебюджетной A-серии – Galaxy A55, и на сегодня это топовая модель линейки, получившая значительные улучшения как в характеристиках, так и в программном обеспечении, в том числе и мощный процессор с графикой от AMD. Сейчас это единственный смартфон Самсунг с технологией бесшовного обновления – больше не нужно ждать, пока обновится Android. A55 предлагает доступную цену, интересный дизайн с гармонией стекла и металла и почти флагманские характеристики, что чаще встречается среди китайских конкурентов.',
      rating: 5,
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-s24-ultra-5g-12-gb-256-gb-chernyi-116044354/?c=750000000'
    },
    //7
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hcb/h7e/85063476838430.jpg?format=gallery-large',
      gallery: [
        'https://resources.cdn-kaspi.kz/img/m/p/hcb/h7e/85063476838430.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/hdc/hfa/85063476903966.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/h5d/h6d/85061702418462.jpg?format=gallery-large'
      ],
      name: 'Смартфон Realme Note 50 3 ГБ/64 ГБ черный',
      description: 'Смартфон Realme Note 50 диагональю 6.7" выполнен в голубом корпусе с защитой по стандарту IP54. Он поддерживает установку 2 SIM-карт, оборудован модулями 4G и GPS. Поэтому устройство без сбоев работает в беспроводной сети, при обрывах быстро восстанавливает связь. Также смартфон позволяет совершать звонки через Wi-Fi-сеть. Для хранения медиафайлов используется внутренняя память объемом 128 ГБ. В корпусе есть слот для карт microSD, microSDHC или microSDXC. Допускается установка карт объемом до 1 ТБ.',
      rating: 5,
      link: 'https://kaspi.kz/shop/p/realme-note-50-3-gb-64-gb-chernyi-116346407/?c=750000000'
    },
    //8
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h2b/h5e/85429009285150.png?format=gallery-large',
      gallery: [
        'https://resources.cdn-kaspi.kz/img/m/p/h2b/h5e/85429009285150.png?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/he5/h1d/85429009350686.png?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/hc5/h86/85429009416222.png?format=gallery-large'
      ],
      name: 'Смартфон Samsung Galaxy A35 5G 8 ГБ/128 ГБ темно-синий',
      description: 'Новый Samsung Galaxy A35 – это смартфон средней ценовой категории. Среднебюджетная серия Galaxy A постоянно обновляется и улучшается, предлагая пользователям улучшенные характеристики и приятную стоимость, и A35 стал достойным продолжением линейки.',
      rating: 4.9,
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-a35-5g-8-gb-128-gb-temno-sinii-117420446/?c=750000000'
    },
    //9
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hc0/h02/83108938809374.jpg?format=gallery-large',
      gallery: [
        'https://resources.cdn-kaspi.kz/img/m/p/hc0/h02/83108938809374.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/p0a/p46/19319585.png?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/p43/p46/19319587.png?format=gallery-large'
      ],
      name: 'Смартфон OPPO A78 8 ГБ/256 ГБ черный',
      description: 'Смартфон имеет экран AMOLED с разрешением FHD+, на который выводятся детализированные изображения с естественной цветопередачей. Интеллектуальная адаптивная подсветка позволяет с комфортом смотреть видеоконтент, мультимедийные материалы без напряжения зрения при разных условиях.',
      rating: 4.8,
      link: 'https://kaspi.kz/shop/p/oppo-a78-8-gb-256-gb-chernyi-112808573/?c=750000000'
    },
    //10
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hca/h8f/85986943762462.jpg?format=gallery-large',
      gallery: [
        'https://resources.cdn-kaspi.kz/img/m/p/hca/h8f/85986943762462.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/haa/hb7/85988322869278.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/h89/hd1/85988322967582.jpg?format=gallery-large'
      ],
      name: 'Смартфон Google Pixel 8a 8 ГБ/128 ГБ черный',
      description: 'Смартфон имеет экран AMOLED с разрешением FHD+, на который выводятся детализированные изображения с естественной цветопередачей. Интеллектуальная адаптивная подсветка позволяет с комфортом смотреть видеоконтент, мультимедийные материалы без напряжения зрения при разных условиях.',
      rating: 5,
      link: 'https://kaspi.kz/shop/p/google-pixel-8a-8-gb-128-gb-chernyi-119270938/?c=750000000'
    },
  ];

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