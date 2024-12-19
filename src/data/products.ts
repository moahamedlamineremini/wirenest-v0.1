import { Product, Review } from '../types/product';

export const products: Product[] = [
  {
    id: '1',
    name: 'T-shirt with Tape Details',
    designer: 'Antoine Dumont',
    price: 120,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80',
    category: 'T-shirts'
  },
  {
    id: '2',
    name: 'Custom Denim Jacket',
    designer: 'Marie Laurent',
    price: 250,
    image: 'https://images.unsplash.com/photo-1551537482-f2075a1d41f2?auto=format&fit=crop&q=80',
    category: 'Jackets'
  },
  {
    id: '3',
    name: 'Printed Hoodie',
    designer: 'Lucas Martin',
    price: 150,
    image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&q=80',
    category: 'Hoodies'
  },
  {
    id: '4',
    name: 'Designer Sneakers',
    designer: 'Sophie Dubois',
    price: 180,
    image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&q=80',
    category: 'Sneakers'
  },
  {
  id: '5',
    name: 'NIKE CUSTOM DUNK X STUSSY Green version 1',
    designer: 'Nike',
    price: 450,
    image: 'https://i.pinimg.com/736x/a5/f9/13/a5f91369ad206ee6dd128324c37f21ff.jpg',
    category: 'Sneakers'
  },
  {
    id: '6',
    name: 'Custom Air force',
    designer: 'Marie Laurent',
    price: 180,
    image: 'https://i.pinimg.com/736x/fe/09/3a/fe093a62f71593f9b458c3e027bca43e.jpg',
    category: 'Sneakers'
  },
  {
    id: '7',
    name: 'Custom Air force',
    designer: 'Daniela Martin',
    price: 190,
    image: 'https://i.etsystatic.com/30655200/r/il/90f1f0/5348412375/il_794xN.5348412375_923p.jpg',
    category: 'Sneakers'
  },
  {
    id: '8',
    name: 'Designer Sneakers',
    designer: 'Théo Dubois',
    price: 118,
    image: 'https://eveux.de/cdn/shop/files/Men-s-shoes-new-breathable-small-white-shoes-Korean-version-trend-versatile-casual-shoes-wear-resistant_f694eadb-098e-4d6d-86ac-7c1444415975.webp?v=1719479507&width=1800',
    category: 'Sneakers'
  }
];

export const reviews: Review[] = [
  {
    id: '1',
    author: 'Sarah M.',
    rating: 5,
    comment: "J'ai adoré cette collection! Le style et la qualité sont exceptionnels.",
    verified: true
  },
  {
    id: '2',
    author: 'Alex K.',
    rating: 5,
    comment: "Service client au top et délais de livraison respectés. Je recommande!",
    verified: true
  },
  {
    id: '3',
    author: 'James L.',
    rating: 4,
    comment: "Très satisfait de mon achat. Le design est unique et la qualité est au rendez-vous.",
    verified: true
  },
  {
    id: '4',
    author: 'Marie D.',
    rating: 4,
    comment: "Les chaussures sont magnifiques et très confortables. Je suis ravie de mon achat!",
    verified: false
  },
  {
    id: '5', 
    author: 'Thomas B.',
    rating: 4,
    comment: "Excellent rapport qualité-prix. Le design est vraiment original.",
    verified: true
  },
  {
    id: '6',
    author: 'Sophie R.',
    rating: 4,
    comment: "La livraison a été rapide et les sneakers sont conformes à la description.",
    verified: false
  },
  {
    id: '7',
    author: 'Pierre M.',
    rating: 4,
    comment: "Très belle finition, je recommande vivement ce vendeur!",
    verified: true
  }
];