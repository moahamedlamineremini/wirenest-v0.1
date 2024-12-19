export interface Product {
  id: string;
  name: string;
  designer: string;
  price: number;
  image: string;
  category: string;
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  comment: string;
  verified: boolean;
}