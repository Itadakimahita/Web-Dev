
export interface Product {
    image: string;
    gallery: string[];
    name: string;
    description: string;
    rating: number;
    link: string;
    likes: number;
}

const smartphones: Product[] = [
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
        link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-chernyi-102298404/?c=750000000',
        likes: 0,
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
        link: 'https://kaspi.kz/shop/p/apple-iphone-16-pro-max-256gb-chernyi-123787551/?c=750000000',
        likes: 0,
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
        link: 'https://kaspi.kz/shop/p/xiaomi-redmi-13c-8-gb-256-gb-chernyi-114695323/?c=750000000',
        
        likes: 0,
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
        description: 'Samsung представила новый смартфон среднебюджетной A-серии – Galaxy A55, и на сегодня это топовая модель линейки, получившая значительные улучшения как в характеристиках, так и в программном обеспечении, в том числе и мощный процессор с графикой от AMD. Сейчас это единственный смартфон Самсунг с технологией бесшовного обновления – больше не нужно ждать',
        rating: 5,
        link: 'https://kaspi.kz/shop/p/samsung-galaxy-a55-5g-8-gb-256-gb-sirenevyi-117420262/?c=750000000',
        likes: 0,
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
        description: 'Samsung представила новый смартфон среднебюджетной A-серии – Galaxy A55, и на сегодня это топовая модель линейки, получившая значительные улучшения как в характеристиках, так и в программном обеспечении, в том числе и мощный процессор с графикой от AMD. Сейчас это единственный смартфон Самсунг с технологией бесшовного обновления – больше не нужно ждать',
        rating: 5,
        link: 'https://kaspi.kz/shop/p/samsung-galaxy-a55-5g-8-gb-256-gb-temno-sinii-117420207/?c=750000000',
        likes: 0,
      },
]

const laptops: Product[] = [
    {
        image: 'https://resources.cdn-kaspi.kz/img/m/p/h58/h61/86274830073886.jpg?format=gallery-large',
        gallery: [
          'https://resources.cdn-kaspi.kz/img/m/p/h58/h61/86274830073886.jpg?format=gallery-large',
          'https://resources.cdn-kaspi.kz/img/m/p/h39/hca/86274830139422.jpg?format=gallery-large',
          'https://resources.cdn-kaspi.kz/img/m/p/hb5/hb9/86274830204958.jpg?format=gallery-large'
        ],
        name: 'Ноутбук ThundeRobot 911 X Wild Hunter G2 ',
        description: 'Pro 15.6" / 16 Гб / SSD 512 Гб / Win 11 Pro /',
        rating: 5,
        link: 'https://kaspi.kz/shop/p/thunderobot-911-x-wild-hunter-g2-pro-15-6-16-gb-ssd-512-gb-win-11-pro--120386920/?c=750000000',
        likes: 0,
      },
      {
        image: 'https://resources.cdn-kaspi.kz/img/m/p/hf4/h52/64509322919966.jpg?format=gallery-large',
        gallery: [
          'https://resources.cdn-kaspi.kz/img/m/p/hf4/h52/64509322919966.jpg?format=gallery-large',
          'https://resources.cdn-kaspi.kz/img/m/p/h86/h70/64509325803550.jpg?format=gallery-large',
          'https://resources.cdn-kaspi.kz/img/m/p/h45/hb7/64509328457758.jpg?format=gallery-large'
        ],
        name: 'Ноутбук Apple MacBook Air 13 2022 ',
        description: '13.6" / 8 Гб / SSD 256 Гб / macOS / MLXW3',
        rating: 5,
        link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-2022-13-6-8-gb-ssd-256-gb-macos-mlxw3-105933794/?c=750000000',
        likes: 0,
      },
      {
        image: 'https://resources.cdn-kaspi.kz/img/m/p/h89/haa/64373052571678.jpg?format=gallery-large',
        gallery: [
          'https://resources.cdn-kaspi.kz/img/m/p/h89/haa/64373052571678.jpg?format=gallery-large',
          'https://resources.cdn-kaspi.kz/img/m/p/h5d/h65/64373055684638.jpg?format=gallery-large',
          'https://resources.cdn-kaspi.kz/img/m/p/h06/h47/64373056897054.jpg?format=gallery-large'
        ],
        name: 'Ноутбук Lenovo IdeaPad 3 ',
        description: '15.6" / 4 Гб / SSD 256 Гб / Без ОС / 15IGL05 / 81WQ00EMRK',
        rating: 4.9,
        link: 'https://kaspi.kz/shop/p/lenovo-ideapad-3-15-6-4-gb-ssd-256-gb-bez-os-15igl05-81wq00emrk-102878742/?c=750000000',
        likes: 0,
      },
      {
        image: 'https://resources.cdn-kaspi.kz/img/m/p/h76/h6c/85301691547678.jpg?format=gallery-large',
        gallery: [
          'https://resources.cdn-kaspi.kz/img/m/p/h76/h6c/85301691547678.jpg?format=gallery-large',
          'https://resources.cdn-kaspi.kz/img/m/p/ha4/hf8/85301691613214.jpg?format=gallery-large',
          'https://resources.cdn-kaspi.kz/img/m/p/h91/h27/85301691678750.jpg?format=gallery-large'
        ],
        name: 'Ноутбук ThundeRobot 911S Core D',
        description: '15.6" / 16 Гб / SSD 512 Гб / Без ОС / JT009K00F',
        rating: 4.9,
        link: 'https://kaspi.kz/shop/p/thunderobot-911s-core-d-15-6-16-gb-ssd-512-gb-bez-os-jt009k00f-117046774/?c=750000000',
        likes: 0,
      },
      {
        image: 'https://resources.cdn-kaspi.kz/img/m/p/p59/p53/15221547.jpg?format=gallery-large',
        gallery: [
          'https://resources.cdn-kaspi.kz/img/m/p/p59/p53/15221547.jpg?format=gallery-large',
          'https://resources.cdn-kaspi.kz/img/m/p/p92/p53/15221549.jpg?format=gallery-large',
          'https://resources.cdn-kaspi.kz/img/m/p/pfe/p55/15221550.jpg?format=gallery-large'
        ],
        name: 'Ноутбук Lenovo LOQ ',
        description: '15.6" / 16 Гб / SSD 512 Гб / Без ОС / 15IAX9 / 83GS005NRK',
        rating: 4.9,
        link: 'https://kaspi.kz/shop/p/thunderobot-911s-core-d-15-6-16-gb-ssd-512-gb-bez-os-jt009k00f-117046774/?c=750000000',
        likes: 0,
      },
]

const tablets: Product[] = [
    {
        image: 'https://resources.cdn-kaspi.kz/img/m/p/h0b/hc4/84390016516126.jpg?format=gallery-large',
        gallery: [
          'https://resources.cdn-kaspi.kz/img/m/p/h0b/hc4/84390016516126.jpg?format=gallery-large',
          'https://resources.cdn-kaspi.kz/img/m/p/h80/hc4/84434711642142.jpg?format=gallery-large',
          'https://resources.cdn-kaspi.kz/img/m/p/h7d/h6a/84434711904286.png?format=gallery-large'
        ],
        name: 'Планшет Samsung Galaxy Tab A9+',
        description: '5G 11 дюйм 8 Гб/128 Гб серебристый',
        rating: 5,
        link: 'https://kaspi.kz/shop/p/samsung-galaxy-tab-a9-5g-11-djuim-8-gb-128-gb-serebristyi-114175605/?c=750000000',
        likes: 0,
    },
    {
        image: 'https://resources.cdn-kaspi.kz/img/m/p/hfa/h77/86745408634910.png?format=gallery-large',
        gallery: [
          'https://resources.cdn-kaspi.kz/img/m/p/hfa/h77/86745408634910.png?format=gallery-large',
          'https://resources.cdn-kaspi.kz/img/m/p/h4d/h58/86106953744414.jpg?format=gallery-large',
          'https://resources.cdn-kaspi.kz/img/m/p/hc6/hee/86745408536606.png?format=gallery-large'
        ],
        name: 'Планшет Apple iPad Air 2024',
        description: ' Wi-Fi 11 11 дюйм 8 Гб/128 Гб серый',
        rating: 5,
        link: 'https://kaspi.kz/shop/p/apple-ipad-air-2024-wi-fi-11-11-djuim-8-gb-128-gb-seryi-119778165/?c=750000000',
        likes: 0,
    },
    {
        image: 'https://resources.cdn-kaspi.kz/img/m/p/h20/hd4/84163009151006.jpg?format=gallery-large',
        gallery: [
          'https://resources.cdn-kaspi.kz/img/m/p/h20/hd4/84163009151006.jpg?format=gallery-large',
          'https://resources.cdn-kaspi.kz/img/m/p/h8f/h47/84163009216542.jpg?format=gallery-large',
        ],
        name: 'Планшет Xiaomi Redmi Pad SE',
        description: '11 дюйм 8 Гб/256 Гб серый',
        rating: 4.8,
        link: 'https://kaspi.kz/shop/p/xiaomi-redmi-pad-se-11-djuim-8-gb-256-gb-seryi-113758800/?c=750000000',
        likes: 0,
    },
    {
        image: 'https://resources.cdn-kaspi.kz/img/m/p/haa/hc8/84683600920606.png?format=gallery-large',
        gallery: [
          'https://resources.cdn-kaspi.kz/img/m/p/haa/hc8/84683600920606.png?format=gallery-large',
          'https://resources.cdn-kaspi.kz/img/m/p/h1a/h03/84680774451230.jpg?format=gallery-large',
          'https://resources.cdn-kaspi.kz/img/m/p/haf/hfa/84683600986142.jpg?format=gallery-large',
        ],
        name: 'Планшет Xiaomi Redmi Pad SE',
        description: '11 дюйм 8 Гб/256 Гб фиолетовый',
        rating: 4.8,
        link: 'https://kaspi.kz/shop/p/xiaomi-redmi-pad-se-11-djuim-8-gb-256-gb-seryi-113758800/?c=750000000',
        likes: 0,
    },
]

const accessories: Product[] = [
    {
        image: 'https://resources.cdn-kaspi.kz/img/m/p/h5a/h16/86607711633438.jpg?format=gallery-large',
        gallery: [
          'https://resources.cdn-kaspi.kz/img/m/p/h5a/h16/86607711633438.jpg?format=gallery-large',
          'https://resources.cdn-kaspi.kz/img/m/p/hd1/hde/86607711666206.jpg?format=gallery-large',
          'https://resources.cdn-kaspi.kz/img/m/p/h6f/hc9/86607711698974.jpg?format=gallery-large',
        ],
        name: 'Фитнес-браслет Xiaomi Smart Band 9 ',
        description: `Общие характеристики

    Операционная система
        Android Wear

    Тип
        фитнес-браслет

    Поддержка платформ
        iOS, Android

    Установка сторонних приложений
        Нет

    Уведомления с просмотром или ответом
        SMS, WhatsApp

    Вибрация
        Да`,
        rating: 4.8,
        link: 'https://kaspi.kz/shop/p/xiaomi-smart-band-9-chernyi-121749494/?c=750000000',
        likes: 0,
    },
    {
        image: 'https://resources.cdn-kaspi.kz/img/m/p/hab/h9e/87208106000414.png?format=gallery-large',
        gallery: [
          'https://resources.cdn-kaspi.kz/img/m/p/hab/h9e/87208106000414.png?format=gallery-large',
          'https://resources.cdn-kaspi.kz/img/m/p/hb7/he8/87208106131486.png?format=gallery-large',
          'https://resources.cdn-kaspi.kz/img/m/p/h5e/hfe/87208106197022.jpg?format=gallery-large',
        ],
        name: 'Фитнес-браслет Xiaomi Smart Band 9 ',
        description: `Общие характеристики

    Операционная система
        Android Wear

    Тип
        фитнес-браслет

    Поддержка платформ
        Android, iOS

    Установка сторонних приложений
        Нет

    Уведомления с просмотром или ответом
        SMS, WhatsApp

    Вибрация
        Да`,
        rating: 4.8,
        link: 'https://kaspi.kz/shop/p/xiaomi-smart-band-9-serebristyi-123923885/?c=750000000',
        likes: 0,
    },
    {
        image: 'https://resources.cdn-kaspi.kz/img/m/p/pa6/p57/8582534.png?format=gallery-large',
        gallery: [
          'https://resources.cdn-kaspi.kz/img/m/p/pa6/p57/8582534.png?format=gallery-large',
          'https://resources.cdn-kaspi.kz/img/m/p/p17/p58/8582538.png?format=gallery-large',
          'https://resources.cdn-kaspi.kz/img/m/p/pb2/p5e/8582556.png?format=gallery-large',
        ],
        name: 'Фитнес-браслет Xiaomi Smart Band 9 Active',
        description: `Общие характеристики

    Операционная система
        MIUI Watch OS

    Тип
        фитнес-браслет

    Поддержка платформ
        Android, iOS

    Установка сторонних приложений
        Нет

    Уведомления с просмотром или ответом
        SMS, WhatsApp

    Вибрация
        Да`,
        rating: 5,
        link: 'https://kaspi.kz/shop/p/xiaomi-smart-band-9-active-chernyi-130113995/?c=750000000',
        likes: 0,
    },
    {
        image: 'https://resources.cdn-kaspi.kz/img/m/p/p2b/pbc/8999022.jpg?format=gallery-large',
        gallery: [
          'https://resources.cdn-kaspi.kz/img/m/p/p2b/pbc/8999022.jpg?format=gallery-large',
          'https://resources.cdn-kaspi.kz/img/m/p/p47/pbc/8999023.jpg?format=gallery-large',
          'https://resources.cdn-kaspi.kz/img/m/p/p63/pbc/8999024.jpg?format=gallery-large',
        ],
        name: 'Фитнес-браслет Xiaomi Smart Band 9 Pro',
        description: `Общие характеристики

    Операционная система
        MIUI Watch OS

    Тип
        фитнес-браслет

    Поддержка платформ
        Android, iOS`,
        rating: 5,
        link: 'https://kaspi.kz/shop/p/xiaomi-smart-band-9-pro-chernyi-130236510/?c=750000000',
        likes: 0,
    },
]

export {smartphones, tablets, laptops, accessories};