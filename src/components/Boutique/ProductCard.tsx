import React from 'react';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Product } from '../../types/product';

interface ProductCardProps {
  product: Product;
  isFavorite: boolean;
  onFavoriteClick: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, isFavorite, onFavoriteClick }) => {
  return (
    <div className="group relative">
      <div className="aspect-square w-full overflow-hidden rounded-lg">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover object-center group-hover:opacity-75"
        />
        <button className="absolute top-2 right-2 p-2" onClick={onFavoriteClick}>
          {isFavorite ? (
            <FavoriteIcon className="w-5 h-5 text-red-500" />
          ) : (
            <FavoriteBorderIcon className="w-5 h-5 text-gray-600" />
          )}
        </button>
      </div>
      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-sm text-gray-700">{product.name}</h3>
          <p className="mt-1 text-sm text-gray-500">{product.designer}</p>
        </div>
        <p className="text-sm font-medium text-gray-900">{product.price}€</p>
      </div>
    </div>
  );
};

export default ProductCard;