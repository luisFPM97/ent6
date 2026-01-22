// Datos simulados de productos estilo Mercado Libre
export const mockProducts = [
  {
    id: 1,
    title: "iPhone 14 Pro Max 256GB",
    description: "iPhone 14 Pro Max con Dynamic Island, cámara de 48MP, chip A16 Bionic y pantalla Super Retina XDR de 6.7 pulgadas. Incluye cargador y audífonos originales.",
    price: 1299.99,
    images: [
      "https://http2.mlstatic.com/D_NQ_NP_2X_773516-MLA52660731791_112022-F.webp",
      "https://http2.mlstatic.com/D_NQ_NP_2X_906598-MLA52660731793_112022-F.webp"
    ],
    category: {
      id: 1,
      name: "Smartphones"
    },
    brand: "Apple"
  },
  {
    id: 2,
    title: "Samsung Galaxy S23 Ultra 512GB",
    description: "Samsung Galaxy S23 Ultra con S Pen integrado, cámara de 200MP, procesador Snapdragon 8 Gen 2 y pantalla Dynamic AMOLED 2X de 6.8 pulgadas.",
    price: 1199.99,
    images: [
      "https://http2.mlstatic.com/D_NQ_NP_2X_690501-MLA69789578149_062023-F.webp",
      "https://http2.mlstatic.com/D_NQ_NP_2X_915830-MLA69789578151_062023-F.webp"
    ],
    category: {
      id: 1,
      name: "Smartphones"
    },
    brand: "Samsung"
  },
  {
    id: 3,
    title: "MacBook Pro 14'' M3 Pro 16GB RAM",
    description: "MacBook Pro 14 pulgadas con chip M3 Pro, 16GB de RAM unificada, SSD de 512GB. Pantalla Liquid Retina XDR. Rendimiento profesional para creativos.",
    price: 2499.99,
    images: [
      "https://http2.mlstatic.com/D_NQ_NP_2X_644045-MLU72672867562_112023-F.webp",
      "https://http2.mlstatic.com/D_NQ_NP_2X_720238-MLU72672867563_112023-F.webp"
    ],
    category: {
      id: 2,
      name: "Laptops"
    },
    brand: "Apple"
  },
  {
    id: 4,
    title: "Auriculares Sony WH-1000XM5",
    description: "Auriculares inalámbricos con cancelación de ruido líder en la industria, audio Hi-Res, batería de hasta 30 horas y diseño premium ultraligero.",
    price: 399.99,
    images: [
      "https://http2.mlstatic.com/D_NQ_NP_2X_694105-MLA69400378366_052023-F.webp",
      "https://http2.mlstatic.com/D_NQ_NP_2X_711822-MLA69400378368_052023-F.webp"
    ],
    category: {
      id: 3,
      name: "Audio"
    },
    brand: "Sony"
  },
  {
    id: 5,
    title: "Smart TV Samsung 65'' QLED 4K",
    description: "Smart TV QLED 4K con tecnología Quantum Dot, HDR10+, procesador Neural Quantum 4K y sistema operativo Tizen. Gaming Hub integrado.",
    price: 1299.99,
    images: [
      "https://http2.mlstatic.com/D_NQ_NP_2X_959123-MLA69869890806_062023-F.webp",
      "https://http2.mlstatic.com/D_NQ_NP_2X_773964-MLA69869890808_062023-F.webp"
    ],
    category: {
      id: 4,
      name: "TV & Video"
    },
    brand: "Samsung"
  },
  {
    id: 6,
    title: "PlayStation 5 Digital Edition",
    description: "Consola PlayStation 5 Edición Digital con SSD ultra rápido de 825GB, gráficos ray tracing, audio 3D Tempest y control DualSense incluido.",
    price: 449.99,
    images: [
      "https://http2.mlstatic.com/D_NQ_NP_2X_947295-MLA46523522343_062021-F.webp",
      "https://http2.mlstatic.com/D_NQ_NP_2X_819017-MLA46523522344_062021-F.webp"
    ],
    category: {
      id: 5,
      name: "Gaming"
    },
    brand: "Sony"
  },
  {
    id: 7,
    title: "iPad Air 11'' M2 256GB WiFi",
    description: "iPad Air con chip M2, pantalla Liquid Retina de 11 pulgadas, cámara frontal horizontal de 12MP y compatible con Apple Pencil Pro.",
    price: 749.99,
    images: [
      "https://http2.mlstatic.com/D_NQ_NP_2X_830466-MLA74348810275_022024-F.webp",
      "https://http2.mlstatic.com/D_NQ_NP_2X_651644-MLA74348810277_022024-F.webp"
    ],
    category: {
      id: 6,
      name: "Tablets"
    },
    brand: "Apple"
  },
  {
    id: 8,
    title: "Cámara Canon EOS R6 Mark II",
    description: "Cámara mirrorless full-frame de 24.2MP con video 4K 60fps, estabilización de imagen de 5 ejes, AF Dual Pixel II y ráfaga de 40 fps.",
    price: 2499.99,
    images: [
      "https://http2.mlstatic.com/D_NQ_NP_2X_982537-MLA52656421792_112022-F.webp",
      "https://http2.mlstatic.com/D_NQ_NP_2X_631482-MLA52656421794_112022-F.webp"
    ],
    category: {
      id: 7,
      name: "Cámaras"
    },
    brand: "Canon"
  },
  {
    id: 9,
    title: "Reloj Inteligente Apple Watch Series 9",
    description: "Apple Watch Series 9 con chip S9, pantalla Always-On Retina, GPS, resistencia al agua 50m, monitoreo de salud avanzado y watchOS 10.",
    price: 429.99,
    images: [
      "https://http2.mlstatic.com/D_NQ_NP_2X_682823-MLA71784340530_092023-F.webp",
      "https://http2.mlstatic.com/D_NQ_NP_2X_856449-MLA71784340532_092023-F.webp"
    ],
    category: {
      id: 8,
      name: "Wearables"
    },
    brand: "Apple"
  },
  {
    id: 10,
    title: "Laptop Dell XPS 15 Intel i7 32GB",
    description: "Dell XPS 15 con procesador Intel Core i7-13700H, 32GB RAM, SSD 1TB, NVIDIA RTX 4050, pantalla OLED 3.5K táctil de 15.6 pulgadas.",
    price: 1999.99,
    images: [
      "https://http2.mlstatic.com/D_NQ_NP_2X_747526-MLU72597854986_112023-F.webp",
      "https://http2.mlstatic.com/D_NQ_NP_2X_957382-MLU72597854987_112023-F.webp"
    ],
    category: {
      id: 2,
      name: "Laptops"
    },
    brand: "Dell"
  },
  {
    id: 11,
    title: "Auriculares Bose QuietComfort Ultra",
    description: "Auriculares inalámbricos premium con cancelación de ruido adaptativa, audio espacial inmersivo, hasta 24 horas de batería y modo transparencia.",
    price: 429.99,
    images: [
      "https://http2.mlstatic.com/D_NQ_NP_2X_765284-MLA72714385125_112023-F.webp",
      "https://http2.mlstatic.com/D_NQ_NP_2X_950843-MLA72714385127_112023-F.webp"
    ],
    category: {
      id: 3,
      name: "Audio"
    },
    brand: "Bose"
  },
  {
    id: 12,
    title: "Xiaomi 13 Pro 256GB 5G",
    description: "Xiaomi 13 Pro con procesador Snapdragon 8 Gen 2, cámara Leica de 50.3MP, carga rápida de 120W y pantalla AMOLED 2K de 6.73 pulgadas.",
    price: 899.99,
    images: [
      "https://http2.mlstatic.com/D_NQ_NP_2X_611257-MLA69534037504_052023-F.webp",
      "https://http2.mlstatic.com/D_NQ_NP_2X_853608-MLA69534037506_052023-F.webp"
    ],
    category: {
      id: 1,
      name: "Smartphones"
    },
    brand: "Xiaomi"
  }
];

export const mockCategories = [
  { id: 1, name: "Smartphones" },
  { id: 2, name: "Laptops" },
  { id: 3, name: "Audio" },
  { id: 4, name: "TV & Video" },
  { id: 5, name: "Gaming" },
  { id: 6, name: "Tablets" },
  { id: 7, name: "Cámaras" },
  { id: 8, name: "Wearables" }
];

export const mockUser = {
  firstName: "Usuario",
  lastName: "Demo",
  email: "demo@ejemplo.com"
};
