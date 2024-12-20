import ProductCard from '../components/Boutique/ProductCard';
import ReviewsSection from '../components/Boutique/ReviewsSection';
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import { products, reviews } from '../data/products';
import { useState, useEffect } from 'react';
import Newsletter from '../components/Newsletter';
import Footer from '../components/footer';
import { Link } from 'react-router-dom';
import { FavoritesProvider, useFavorites } from '../contexts/FavoritesContext';
import { Product } from '../types/product';
import { useCart } from '../contexts/CartContext';

const BoutiqueContent = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { favorites, addFavorite: addToFavorites, removeFavorite: removeFromFavorites, isFavorite } = useFavorites();
  const [favoriteProducts, setFavoriteProducts] = useState<Product[]>([]);
  const [, forceUpdate] = useState({});
  const { addToCart } = useCart();

  useEffect(() => {
    const updatedFavorites = products.filter(product => favorites.includes(product.id));
    setFavoriteProducts(updatedFavorites);
  }, [favorites]);

  const handlePrevious = () => {
    setCurrentIndex(prev => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    const maxIndex = Math.ceil(reviews.length / 3) - 1;
    setCurrentIndex(prev => Math.min(prev + 1, maxIndex));
  };

  const handleFavoriteClick = async (product: Product) => {
    if (isFavorite(product.id)) {
      await removeFromFavorites(product.id);
    } else {
      await addToFavorites(product.id);
    }
    forceUpdate({});
    window.location.href = '/';
  };

  const handleAddToCart = (product: Product) => {
    addToCart({
      id: product.id,
      name: product.name,
      size: product.size,
      color: product.color,
      price: product.price,
      image: product.image,
      quantity: 1
    });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gray-50 py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-[1fr,400px] gap-8 sm:gap-12 items-center">
            {/* Texte à gauche */}
            <div className="w-full">
              <h1 className="text-3xl sm:text-[2.8rem] font-bold mb-4 sm:mb-6 leading-snug">
                Découvrez la mode autrement : des{' '}
                <span className="bg-pink-200 px-2">créations uniques</span>, directement de{' '}
                <span className="text-blue-600">nos stylistes à vous</span>.
              </h1>
              {/* Boutons */}
              <div className="flex flex-col sm:flex-row gap-4 mt-4 sm:mt-6">
                <Link to="/register" className="bg-black text-white px-6 sm:px-8 py-3 rounded-full w-full sm:w-auto text-sm sm:text-base text-center">
                  Inscription
                </Link>
                <button className="border border-black px-6 sm:px-8 py-3 rounded-full w-full sm:w-auto text-sm sm:text-base">
                  Proposer mes services
                </button>
              </div>
              {/* Stats */}
              <div className="grid grid-cols-1 sm:flex flex-wrap gap-6 sm:gap-8 md:gap-12 mt-8 sm:mt-12">
                <div>
                  <div className="text-2xl sm:text-[2.5rem] font-bold">500+</div>
                  <div className="text-xs sm:text-sm text-gray-600">créations exclusives</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-[2.5rem] font-bold">90 %</div>
                  <div className="text-xs sm:text-sm text-gray-600">de satisfaction</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-[2.5rem] font-bold">1 clic</div>
                  <div className="text-xs sm:text-sm text-gray-600">
                    pour soutenir les talents indépendants et trouver votre style.
                  </div>
                </div>
              </div>
            </div>

            {/* Image à droite */}
            <div className="relative flex justify-center md:justify-end mt-8 md:mt-0">
              <img
                src="/img/senora.png"
                alt="Mode"
                className="w-[240px] sm:w-[280px] md:w-[320px] lg:w-[400px] h-auto object-contain"
                style={{ imageRendering: 'crisp-edges' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Nouveautés Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-8 text-center">Nouveautés</h2>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {products.slice(0, 4).map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                isFavorite={isFavorite(product.id)}
                onFavoriteClick={() => handleFavoriteClick(product)}
                onAddToCart={() => handleAddToCart(product)}
              />
            ))}
          </div>
          <div className="text-center mt-6 sm:mt-8">
            <button className="bg-[#5886b8] text-white px-12 sm:px-20 py-3 rounded-full w-full sm:w-auto">
              Voir tout
            </button>
          </div>
        </div>
      </section>

      {/* Une mode unique */}
      <section className="px-4 sm:px-6 py-8 sm:py-12 bg-gray-50">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-center">
          {/* Bloc d'image à gauche */}
          <div className="relative">
            <img
              src="/img/mode_unique.png"
              alt="Fashion showcase"
              className="rounded-lg shadow-xl w-full h-auto"
            />
          </div>

          <div className="text-center md:text-left">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-1">Une mode unique,
              <span className="text-lg sm:text-xl md:text-2xl font-bold"> pensée par des </span></h3>
            <h4 className="text-lg sm:text-xl md:text-2xl font-bold">stylistes indépendants pour des</h4>
            <h4 className="text-lg sm:text-xl md:text-2xl font-bold">consommateurs exigeants.</h4>
            <button className="bg-black text-white w-full sm:w-auto px-4 sm:px-6 py-2 rounded-full mt-3">
              En savoir plus sur notre mission
            </button>
          </div>
        </div>
      </section>

      {/* Sneakers personnalisées */}
      <section className="py-12 sm:py-16 px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-8 text-center">Sneakers personnalisées</h2>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {products.slice(4, 8).map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                isFavorite={isFavorite(product.id)}
                onFavoriteClick={() => handleFavoriteClick(product)}
                onAddToCart={() => handleAddToCart(product)}
              />
            ))}
          </div>
          <div className="text-center mt-6 sm:mt-8">
            <button className="bg-[#5886b8] text-white px-12 sm:px-20 py-3 rounded-full w-full sm:w-auto">
              Voir tout
            </button>
          </div>
        </div>
      </section>

      {/* Découvrez les créations */}
      <section className="py-8 sm:py-16 md:py-20 px-2 sm:px-4 md:px-8">
        <div className="max-w-5xl mx-auto rounded-2xl bg-[#F2F0F1] flex flex-col items-center min-h-[400px] sm:min-h-[500px] md:min-h-[600px]">
          <h2 className="text-xl sm:text-3xl md:text-4xl font-bold text-center pt-4 sm:pt-8 md:pt-10 pb-2 sm:pb-6 md:pb-8 px-2 sm:px-4">
            Découvrez les créations qui vous ressemblent
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 sm:gap-4 md:gap-8 p-2 sm:p-4 md:p-8 w-full max-w-5xl mx-auto">
            {/* Item 1 - Sneakers */}
            <div className="relative w-full h-[120px] sm:h-[180px] md:h-[220px] rounded-lg bg-[#F8F4F1] transform transition-all duration-300 hover:scale-[1.03] hover:shadow-sm cursor-pointer">
              <img
                src="/img/samba.png"
                alt="Sneakers personnalisées"
                className="w-full h-full object-cover rounded-lg"
              />
              <div className="absolute top-2 left-2 sm:top-3 sm:left-3">
                <span className="text-blue-600 font-bold text-sm sm:text-lg md:text-xl block">Sneakers</span>
                <span className="text-blue-600 font-bold text-sm sm:text-lg md:text-xl block">personnalisées</span>
              </div>
            </div>

            {/* Item 2 - Vestes */}
            <div className="relative w-full h-[120px] sm:h-[180px] md:h-[220px] rounded-lg bg-[#F8F4F1] flex items-center col-span-1 sm:col-span-2 transform transition-all duration-300 hover:scale-[1.03] hover:shadow-sm cursor-pointer">
              <p className="text-base sm:text-xl font-bold m-2 sm:m-4">
                Vestes et <br /> manteaux stylisés
              </p>
              <img
                src="/img/model.png"
                alt="Vestes et manteaux stylisés"
                className="w-1/3 h-full object-cover rounded-lg ml-auto"
              />
            </div>

            {/* Item 3 - Robes */}
            <div className="relative w-full h-[120px] sm:h-[180px] md:h-[220px] rounded-lg bg-[#F8F4F1] flex items-center col-span-1 sm:col-span-2 transform transition-all duration-300 hover:scale-[1.03] hover:shadow-sm cursor-pointer">
              <p className="text-base sm:text-xl font-bold absolute top-2 sm:top-3 left-2 sm:left-3">
                Robes uniques
              </p>
              <img
                src="/img/robe.png"
                alt="Robes uniques"
                className="w-1/3 h-full object-cover rounded-lg mx-auto"
              />
            </div>

            {/* Item 4 - Accessoires */}
            <div className="relative w-full h-[120px] sm:h-[180px] md:h-[220px] rounded-lg bg-[#F8F4F1] transform transition-all duration-300 hover:scale-[1.03] hover:shadow-sm cursor-pointer">
              <img
                src="/img/mano.png"
                alt="Accessoires"
                className="w-2/3 h-full object-cover rounded-lg ml-auto mr-2"
              />
              <div className="absolute top-2 sm:top-3 left-2 sm:left-3">
                <span className="text-black font-bold text-sm sm:text-lg md:text-xl block">Accessoires</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6">
        {/* Navigation Arrows */}
        <div className="absolute right-0 top-0 space-x-2 z-10 flex">
          <button
            onClick={handlePrevious}
            className="p-2 rounded-full hover:bg-gray-100 transition-colors"
            disabled={currentIndex === 0}
          >
            <ArrowBackRoundedIcon className="text-gray-600" />
          </button>
          <button
            onClick={handleNext}
            className="p-2 rounded-full hover:bg-gray-100 transition-colors"
            disabled={currentIndex >= Math.ceil(reviews.length / 3) - 1}
          >
            <ArrowForwardRoundedIcon className="text-gray-600" />
          </button>
        </div>

        {/* Reviews carousel */}
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-300 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`
            }}
          >
            <ReviewsSection reviews={reviews} />
          </div>
        </div>
      </section>
      <Newsletter />
      <Footer />
    </div>
  );
};

const Boutique = () => {
  return (
    <FavoritesProvider>
      <BoutiqueContent />
    </FavoritesProvider>
  );
};

export default Boutique;