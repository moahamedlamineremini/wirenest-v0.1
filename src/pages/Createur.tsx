import React from 'react';
import { useParams } from 'react-router-dom';
import Newsletter from '../components/Newsletter';
import Footer from '../components/footer';
import { Link } from 'react-router-dom';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  creator: string;
}

const Createur: React.FC = () => {
  const { id } = useParams();
  
  // Simuler les données du créateur (à remplacer par vos vraies données)
  const creator = {
    name: "Anna Maria",
    avatar: "/img/photo-createur-female.png",
    coverImage: "/img/leopard-pattern.jpg",
    rating: "4.2",
    followers: "1.2K",
    products: 29
  };

  // Simuler les produits (à remplacer par vos vraies données)
  const products: Product[] = [
    {
      id: 1,
      name: "T-shirt with Tape Details",
      price: 120,
      image: "/img/T-shirt.png",
      creator: "Amanda Dumont"
    },
    {
        id: 1,
        name: "T-shirt with Tape Details",
        price: 120,
        image: "/img/T-shirt.png",
        creator: "Amanda Dumont"
      },
      {
        id: 1,
        name: "T-shirt with Tape Details",
        price: 120,
        image: "/img/T-shirt.png",
        creator: "Amanda Dumont"
      },
      {
        id: 1,
        name: "T-shirt with Tape Details",
        price: 120,
        image: "/img/T-shirt.png",
        creator: "Amanda Dumont"
      },
      {
        id: 1,
        name: "T-shirt with Tape Details",
        price: 120,
        image: "/img/T-shirt.png",
        creator: "Amanda Dumont"
      },
      {
        id: 1,
        name: "T-shirt with Tape Details",
        price: 120,
        image: "/img/T-shirt.png",
        creator: "Amanda Dumont"
      },
      {
        id: 1,
        name: "T-shirt with Tape Details",
        price: 120,
        image: "/img/T-shirt.png",
        creator: "Amanda Dumont"
      },
      {
        id: 1,
        name: "T-shirt with Tape Details",
        price: 120,
        image: "/img/T-shirt.png",
        creator: "Amanda Dumont"
      },
    // ... autres produits
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="py-3 text-sm text-gray-500">
          <Link to="/" className="hover:text-gray-700">Home</Link>
          <span className="mx-2">{'>'}</span>
          <span>Casual</span>
        </div>

        {/* Main content container with gray background */}
        <div className="bg-gray-100 rounded-2xl shadow-sm">
          {/* Cover Image */}
          <div 
            className="w-full h-48 bg-cover bg-center rounded-t-2xl" 
            style={{ backgroundImage: `url(/img/leopard.png)` }} 
          />

          {/* Creator Info Section */}
          <div className="px-4 sm:px-8 py-4 sm:py-6 flex flex-col sm:flex-row items-center gap-4 sm:gap-0 sm:justify-between">
            {/* Left section - Profile pic and name */}
            <div className="flex flex-col sm:flex-row items-center sm:items-center gap-2 sm:gap-4">
              <img 
                src="/img/profile-pic.png"
                alt={creator.name}
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover border-4 border-white shadow-md"
              />
              <h1 className="text-xl sm:text-2xl font-semibold text-center sm:text-left">{creator.name}</h1>
            </div>

            {/* Middle section - Stats */}
            <div className="flex items-center gap-4 sm:gap-8 text-xs sm:text-sm text-gray-600">
              <span className="flex items-center gap-1">
                <span>⭐</span> {creator.rating}
              </span>
              <span className="flex items-center gap-1">
                <span>👥</span> {creator.followers}
              </span>
              <span className="flex items-center gap-1">
                <span>🛍️</span> {creator.products} produits
              </span>
            </div>

            {/* Right section - Buttons */}
            <div className="flex gap-2 sm:gap-3 w-full sm:w-auto">
              <button className="flex-1 sm:flex-none px-4 sm:px-6 py-2 sm:py-2.5 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                Messagerie
              </button>
              <button className="flex-1 sm:flex-none px-4 sm:px-6 py-2 sm:py-2.5 text-sm bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition-colors">
                Suivre
              </button>
            </div>
          </div>
        </div>

        {/* Products Section */}
        <div className="py-8">
          <div className="flex justify-between items-center mb-6">
            <span className="text-sm text-gray-600">
              Showing 1-10 of {products.length} Products
            </span>
            <select className="border rounded-lg px-3 py-2 text-sm bg-white">
              <option>Most Popular</option>
              <option>Newest</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
            </select>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {products.map((product) => (
              <div key={product.id} className="relative bg-gray-100 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow p-4">
                <div className="aspect-square relative">
                  <img 
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain"
                  />
                  <button className="absolute top-2 right-2 p-2 text-red-500 hover:scale-110 transition-transform">
                    ❤️
                  </button>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-white p-4 rounded-t-lg">
                  <h3 className="font-medium text-sm sm:text-base truncate">{product.name}</h3>
                  <p className="text-xs sm:text-sm text-gray-600 truncate">{product.creator}</p>
                  <p className="font-bold mt-1">{product.price}€</p>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center items-center space-x-2 mt-8">
            <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-100">
              <span className="sr-only">Previous</span>
              ‹
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-lg bg-black text-white">
              1
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-100">
              2
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-100">
              3
            </button>
            <span className="px-2">...</span>
            <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-100">
              10
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-100">
              <span className="sr-only">Next</span>
              ›
            </button>
          </div>
          </div>
          {/* Similar Products Section */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-8 text-center">Produits qui pourrait vous plaire</h2>
            <div className="relative">
              <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                {products.slice(0, 4).map((product) => (
                  <div key={product.id} className="relative bg-gray-100 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow p-4">
                    <div className="aspect-square relative">
                      <img 
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-contain"
                      />
                      <button className="absolute top-2 right-2 p-2 text-red-500 hover:scale-110 transition-transform">
                        ❤️
                      </button>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 bg-white p-4 rounded-t-lg">
                      <h3 className="font-medium text-sm sm:text-base truncate">{product.name}</h3>
                      <p className="text-xs sm:text-sm text-gray-600 truncate">{product.creator}</p>
                      <p className="font-bold mt-1">{product.price}€</p>
                    </div>
                  </div>
                ))}
              </div>
              <button className="absolute top-1/2 -right-4 transform -translate-y-1/2 w-8 h-8 flex items-center justify-center rounded-full bg-white shadow-md hover:bg-gray-50">
                <span className="sr-only">Next</span>
                ›
              </button>
            </div>
            <div className="flex justify-center mt-8">
              <button className="bg-[#5B89A6] text-white px-[56px] py-[14px] rounded-[56px] hover:bg-[#4A7A97] transition-colors text-base font-medium">
                Voir tout
              </button>
            </div>
          </div>
          </div>
          <div className="relative mt-32">
          <div className="absolute top-[-120px] left-0 right-0 z-10">
            <Newsletter />
          </div>
          <Footer />
        </div>
        </div>
  );
};

export default Createur;