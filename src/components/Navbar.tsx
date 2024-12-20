import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { useFavorites, FavoritesProvider } from '../contexts/FavoritesContext';
import { products } from '../data/products';

// Définir l'interface Product
interface Product {
  id: string; // Changé de number à string pour correspondre au type dans FavoritesContext
  name: string;
  price: number;
  image: string;
}

const NavbarContent = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isFavoritesOpen, setIsFavoritesOpen] = useState(false);
  const [favoriteProducts, setFavoriteProducts] = useState<Product[]>([]);
  const loginRef = useRef<HTMLDivElement>(null);
  const favoritesRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  const { favorites } = useFavorites();

  // Mettre à jour favoriteProducts chaque fois que favorites change
  useEffect(() => {
    const updatedFavorites = products.filter(product => favorites.includes(String(product.id))); // Conversion en string
    setFavoriteProducts(updatedFavorites);
  }, [favorites]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (loginRef.current && !loginRef.current.contains(event.target as Node)) {
        setIsLoginOpen(false);
      }
      if (favoritesRef.current && !favoritesRef.current.contains(event.target as Node)) {
        setIsFavoritesOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleRegisterClick = () => {
    setIsLoginOpen(false);
  };

  useEffect(() => {
    // Close the menu when navigating to a new page
    setIsMenuOpen(false);
  }, [location]);

  return (
    <nav className="px-4 sm:px-6 py-4 border-b">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4 sm:space-x-6">
            <div className="md:hidden flex justify-center w-full">
              <Link to="/">
                <img
                  src="/img/wirenest.png"
                  alt="logo"
                  className="w-24 h-8 object-contain hover:scale-110 hover:rotate-6 transition-all duration-300 ease-in-out"
                />
              </Link>
            </div>
            <div className="hidden md:flex items-center justify-center flex-1">
              <Link to="/">
                <img
                  src="/img/wirenest.png"
                  alt="logo"
                  className="w-32 h-12 object-contain hover:scale-110 hover:rotate-6 transition-all duration-300 ease-in-out"
                />
              </Link>
            </div>
            <div className="hidden md:flex space-x-6">
              <Link to="/boutique" className="text-gray-600 hover:text-black relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-black hover:after:w-full after:transition-all after:duration-300">Boutique</Link>
              <Link to="/plateforme" className="text-gray-600 hover:text-black relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-black hover:after:w-full after:transition-all after:duration-300">Notre plateforme</Link>
              <Link to="/about" className="text-gray-600 hover:text-black relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-black hover:after:w-full after:transition-all after:duration-300">Nos créateurs</Link>
              <Link to="/Cart" className="text-gray-600 hover:text-black relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-black hover:after:w-full after:transition-all after:duration-300">Panier</Link>
              <Link to="/faq" className="text-gray-600 hover:text-black relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-black hover:after:w-full after:transition-all after:duration-300">FAQ</Link>
            </div>
          </div>

          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <MenuIcon className="w-6 h-6 text-gray-600" />
          </button>

          <div className="hidden md:flex items-center flex-1 mx-6">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search for products..."
                className="w-full py-2 pl-4 pr-10 border rounded-full focus:outline-none focus:ring-2 focus:ring-gray-400"
              />
              <SearchOutlinedIcon className="absolute right-3 top-2.5 w-5 h-5 text-gray-600" />
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <div className="relative" ref={favoritesRef}>
              <div className="relative">
                <FavoriteBorderOutlinedIcon
                  className="w-5 h-5 text-gray-600 hover:text-black cursor-pointer"
                  onClick={() => setIsFavoritesOpen(!isFavoritesOpen)}
                />
                {favorites.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs">
                    {favorites.length}
                  </span>
                )}
              </div>
              {isFavoritesOpen && (
                <div className="absolute right-0 mt-2 w-96 bg-white rounded-lg shadow-lg p-6 z-50">
                  <h3 className="text-lg font-semibold mb-4">Mes Favoris ({favorites.length})</h3>
                  <div className="max-h-96 overflow-y-auto">
                    {favoriteProducts.length > 0 ? (
                      favoriteProducts.map(product => (
                        <div key={product.id} className="flex items-center gap-4 mb-4 pb-4 border-b">
                          <img src={product.image} alt={product.name} className="w-20 h-20 object-cover rounded" />
                          <div>
                            <h4 className="font-medium">{product.name}</h4>
                            <p className="text-gray-600">{product.price}€</p>
                          </div>
                        </div>
                      ))
                    ) : (
                      <p className="text-gray-500 text-center">Aucun favori pour le moment</p>
                    )}
                  </div>
                  <Link
                    to="/boutique"
                    className="block text-center mt-4 bg-black text-white py-2 rounded-lg hover:bg-gray-800"
                    onClick={() => setIsFavoritesOpen(false)}
                  >
                    Voir la boutique
                  </Link>
                </div>
              )}
            </div>
            <Link to="/cart">
              <ShoppingCartOutlinedIcon className="w-5 h-5 text-gray-600 hover:text-black cursor-pointer" />
            </Link>

            <div className="relative" ref={loginRef}>
              <PersonOutlineOutlinedIcon
                className="w-5 h-5 text-gray-600 cursor-pointer hover:text-black"
                onClick={() => setIsLoginOpen(!isLoginOpen)}
              />
              {isLoginOpen && (
                <div className="absolute right-0 mt-2 w-96 bg-white rounded-lg shadow-lg p-6 z-50">
                  <div className="text-center pb-6">
                    <h3 className="text-gray-800 text-2xl font-bold">Connexion</h3>
                  </div>
                  <form className="space-y-4">
                    <div>
                      <label className="font-medium">Email</label>
                      <input
                        type="email"
                        required
                        className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-black shadow-sm rounded-lg"
                      />
                    </div>
                    <div>
                      <label className="font-medium">Mot de passe</label>
                      <input
                        type="password"
                        required
                        className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-black shadow-sm rounded-lg"
                      />
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-x-3">
                        <input type="checkbox" id="remember-me" className="rounded border-gray-300" />
                        <label htmlFor="remember-me">Se souvenir de moi</label>
                      </div>
                      <a href="#" className="text-black hover:underline">Mot de passe oublié?</a>
                    </div>
                    <button className="w-full px-4 py-2 text-white font-medium bg-black hover:bg-gray-800 rounded-lg duration-150">
                      Se connecter
                    </button>
                  </form>
                  <button className="w-full mt-4 flex items-center justify-center gap-x-3 py-2.5 border rounded-lg text-sm font-medium hover:bg-gray-50 duration-150">
                    <svg className="w-5 h-5" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clipPath="url(#clip0_17_40)">
                        <path d="M47.532 24.5528C47.532 22.9214 47.3997 21.2811 47.1175 19.6761H24.48V28.9181H37.4434C36.9055 31.8988 35.177 34.5356 32.6461 36.2111V42.2078H40.3801C44.9217 38.0278 47.532 31.8547 47.532 24.5528Z" fill="#4285F4" />
                        <path d="M24.48 48.0016C30.9529 48.0016 36.4116 45.8764 40.3888 42.2078L32.6549 36.2111C30.5031 37.675 27.7252 38.5039 24.4888 38.5039C18.2275 38.5039 12.9187 34.2798 11.0139 28.6006H3.03296V34.7825C7.10718 42.8868 15.4056 48.0016 24.48 48.0016Z" fill="#34A853" />
                        <path d="M11.0051 28.6006C9.99973 25.6199 9.99973 22.3922 11.0051 19.4115V13.2296H3.03298C-0.371021 20.0112 -0.371021 28.0009 3.03298 34.7825L11.0051 28.6006Z" fill="#FBBC04" />
                        <path d="M24.48 9.49932C27.9016 9.44641 31.2086 10.7339 33.6866 13.0973L40.5387 6.24523C36.2 2.17101 30.4414 -0.068932 24.48 0.00161733C15.4055 0.00161733 7.10718 5.11644 3.03296 13.2296L11.005 19.4115C12.901 13.7235 18.2187 9.49932 24.48 9.49932Z" fill="#EA4335" />
                      </g>
                      <defs>
                        <clipPath id="clip0_17_40">
                          <rect width="48" height="48" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                    Continuer avec Google
                  </button>
                  <p className="text-center mt-4">Pas encore de compte? <Link to="/register" onClick={handleRegisterClick} className="font-medium text-black hover:underline">S'inscrire</Link></p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} mt-4`}>
          <div className="flex flex-col space-y-4">
            <div className="relative w-full mb-4">
              <input
                type="text"
                placeholder="Search for products..."
                className="w-full py-2 pl-4 pr-10 border rounded-full focus:outline-none focus:ring-2 focus:ring-gray-400"
              />
              <SearchOutlinedIcon className="absolute right-3 top-2.5 w-5 h-5 text-gray-600" />
            </div>
            <Link to="/boutique" className="text-gray-600 hover:text-black py-2">Boutique</Link>
            <Link to="/plateforme" className="text-gray-600 hover:text-black py-2">Notre plateforme</Link>
            <Link to="/about" className="text-gray-600 hover:text-black py-2">Nos créateurs</Link>
            <Link to="/Cart" className="text-gray-600 hover:text-black py-2">Panier</Link>
            <Link to="/faq" className="text-gray-600 hover:text-black py-2">FAQ</Link>
            <div className="flex space-x-4 pt-4 border-t">
              <div className="relative">
                <FavoriteBorderOutlinedIcon className="w-5 h-5 text-gray-600 hover:text-black cursor-pointer" />
                {favorites.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs">
                    {favorites.length}
                  </span>
                )}
              </div>
              <Link to="/cart">
                <ShoppingCartOutlinedIcon className="w-5 h-5 text-gray-600 hover:text-black cursor-pointer" />
              </Link>
              <PersonOutlineOutlinedIcon className="w-5 h-5 text-gray-600 cursor-pointer hover:text-black" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

const Navbar = () => {
  return (
    <FavoritesProvider>
      <NavbarContent />
    </FavoritesProvider>
  );
};

export default Navbar;