import React from 'react';
import { Link } from 'react-router-dom';

interface Category {
  name: string;
  image: string;
  link: string;
}

const categories: Category[] = [
  {
    name: 'Sneakers personnalisées',
    image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&q=80',
    link: '/boutique/sneakers'
  },
  {
    name: 'Vestes et manteaux stylisés',
    image: 'https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&q=80',
    link: '/boutique/vestes'
  },
  {
    name: 'Robes uniques',
    image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&q=80',
    link: '/boutique/robes'
  },
  {
    name: 'Accessoires',
    image: 'https://images.unsplash.com/photo-1611923134239-b9be5b4c6a49?auto=format&fit=crop&q=80',
    link: '/boutique/accessoires'
  }
];

const CategorySection: React.FC = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-gray-50 p-6 rounded-lg">
      {categories.map((category) => (
        <Link 
          key={category.name}
          to={category.link}
          className="group relative"
        >
          <div className="aspect-square w-full overflow-hidden rounded-lg">
            <img
              src={category.image}
              alt={category.name}
              className="h-full w-full object-cover object-center group-hover:opacity-75"
            />
          </div>
          <h3 className="mt-2 text-sm font-medium text-gray-900">{category.name}</h3>
        </Link>
      ))}
    </div>
  );
};

export default CategorySection;