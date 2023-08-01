export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
}

export const products = [
  {
    id: 1,
    name: 'Phone XL',
    price: 799,
    description: 'A large phone with one of the best screens',
    imageUrl: "assets/cellulare1.jpg"
  },
  {
    id: 2,
    name: 'Phone Mini',
    price: 699,
    description: 'A great phone with one of the best cameras',
    imageUrl: "assets/cellulare3.jpg"
  },
  {
    id: 3,
    name: 'Phone Standard',
    price: 299,
    description: 'A great phone with one of the best processors',
    imageUrl: "assets/cellulare2.jpg"
  },
  {
    id: 4,
    name: 'Phone Large',
    price: 279,
    description: 'A great phone with one of the best processors',
    imageUrl: "assets/cellulare4.jpg"
  },
];



