import { FC } from 'react';
import Newsletter from '../components/Newsletter';
import Footer from '../components/footer';
import { Link } from 'react-router-dom';

const NotrePlateforme: FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Container principal avec padding et fond gris + ombre légère */}
        <div className="bg-gray-60 rounded-2xl shadow-sm p-8">
      {/* Hero Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            La mode indépendante à portée de clic
          </h1>
          <p className="text-gray-600 mb-8">
            Bienvenue sur notre plateforme dédiée aux stylistes indépendants et aux passionnés de mode. Ici, chaque création raconte une histoire, chaque pièce est unique et chaque talent mérite d'être découvert. Notre mission est simple : connecter des créateurs passionnés à des consommateurs exigeants qui recherchent l'originalité et l'authenticité.
          </p>
          <div className="flex gap-4">
            <button className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 transition-colors">
              Inscription
            </button>
            <button className="border border-gray-300 px-6 py-3 rounded-md hover:bg-gray-50 transition-colors">
              Proposer mes services
            </button>
          </div>
        </div>
        <div>
          <img 
            src="/img/grospied.png" 
            alt="Mode indépendante"
          />
        </div>
      </div>

      {/* Artistes Section */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-8">Les artistes de la semaine</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* Artist Card 1 */}
          <Link to="/createur/1" className="group relative">
            <img 
              src="/img/platform1.png" 
              alt="Alexis.D" 
              className="w-full h-32 object-cover rounded-md"
            />
            <div className="absolute bottom-0 left-0 bg-white p-2">
              <p className="text-sm font-semibold text-gray-800">Alexis.D</p>
            </div>
          </Link>
          
          {/* Artist Card 2 */}
          <Link to="/createur/2" className="group relative">
            <img 
              src="/img/platform2.png" 
              alt="Lulia.V" 
              className="w-full h-32 object-cover rounded-md"
            />
            <div className="absolute bottom-0 left-0 bg-white p-2">
              <p className="text-sm font-semibold text-gray-800">Lulia.V</p>
            </div>
          </Link>

          {/* Artist Card 3 */}
          <Link to="/createur/3" className="group relative">
            <img 
              src="/img/platform3.png" 
              alt="Leya.K" 
              className="w-full h-32 object-cover rounded-md"
            />
            <div className="absolute bottom-0 left-0 bg-white p-2">
              <p className="text-sm font-semibold text-gray-800">Leya.K</p>
            </div>
          </Link>
        </div>
   


{/* Notre Vision Section */}
<div className="mt-16">
        <h2 className="text-3xl font-bold text-center mb-8">Notre vision</h2>
        <p className="text-xl text-center mb-8">Nous croyons en une mode différente</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative">
            <img 
              src="/img/platfrom-1-1.png" 
              alt="Urban Athletic Style" 
              className="w-full h-64 object-cover rounded-lg"
            />
            <div className="flex flex-wrap gap-2 mt-2">
              <span className="text-sm bg-gray-100 px-3 py-1 rounded-full">#UrbanAthletic</span>
              <span className="text-sm bg-gray-100 px-3 py-1 rounded-full">#Sportswear</span>
              <span className="text-sm bg-gray-100 px-3 py-1 rounded-full">#SportyStyle</span>
            </div>
          </div>
          <div className="relative">
            <img 
              src="/img/platform1-2.png" 
              alt="Creative Fashion" 
              className="w-full h-64 object-cover rounded-lg"
            />
            <div className="flex flex-wrap gap-2 mt-2">
              <span className="text-sm bg-gray-100 px-3 py-1 rounded-full">#Retro2000</span>
              <span className="text-sm bg-gray-100 px-3 py-1 rounded-full">#Y2K</span>
              <span className="text-sm bg-gray-100 px-3 py-1 rounded-full">#ModeCreative</span>
            </div>
          </div>
        </div>
      </div>

      {/* Pourquoi choisir notre plateforme Section */}
    <div className="mt-20">
      <h2 className="text-3xl font-bold text-center mb-12">Pourquoi choisir notre plateforme ?</h2>
      
      <div className="grid grid-cols-1 gap-12">
        {/* Raison 1 */}
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="w-full md:w-1/2">
            <img 
              src="/img/platform2-1.png" 
              alt="Soutenir des talents" 
              className="w-full h-[20rem] md:h-[28rem] object-cover rounded-lg"
            />
          </div>
          <div className="w-full md:w-1/2">
            <div className="flex items-center gap-4 mb-4">
              <img src="/img/1.png" alt="Numéro 1" className="w-16 md:w-24 h-16 md:h-24" />
              <h3 className="text-xl font-semibold">Pour soutenir des talents indépendants</h3>
            </div>
            <p className="text-gray-600">
              En achetant ici, vous encouragez des créateurs passionnés et donnez vie à leurs projets.
            </p>
          </div>
        </div>

        {/* Raison 2 */}
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="w-full md:w-1/2 order-2 md:order-1">
            <div className="flex items-center gap-4 mb-4">
              <img src="/img/2.png" alt="Numéro 2" className="w-16 md:w-24 h-16 md:h-24" />
              <h3 className="text-xl font-semibold">Pour des pièces uniques et personnalisées</h3>
            </div>
            <p className="text-gray-600">
              Exprimez votre style avec des vêtements et accessoires que vous ne trouverez nulle part ailleurs.
            </p>
          </div>
          <div className="w-full md:w-1/2 order-1 md:order-2">
            <img 
              src="/img/platform2-2.png" 
              alt="Pièces uniques" 
              className="w-full h-[20rem] md:h-[28rem] object-cover rounded-lg"
            />
          </div>
        </div>

        {/* Raison 3 */}
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="w-full md:w-1/2">
            <img 
              src="/img/platform2-3.png" 
              alt="Expérience fluide" 
              className="w-full h-[20rem] md:h-[28rem] object-cover rounded-lg"
            />
          </div>
          <div className="w-full md:w-1/2">
            <div className="flex items-center gap-4 mb-4">
              <img src="/img/3.png" alt="Numéro 3" className="w-16 md:w-24 h-16 md:h-24" />
              <h3 className="text-xl font-semibold">Pour une expérience fluide et transparente</h3>
            </div>
            <p className="text-gray-600">
              De la découverte d'un produit à la commande finale, tout est pensé pour vous simplifier la vie.
            </p>
          </div>
        </div>
      </div>
    </div>
      </div>
      </div>
      </div>
      <div className="relative mt-32 md:mt-32">
        <div className="absolute top-[-120px] md:top-[-120px] left-0 right-0 z-10 px-4 md:px-0">
          <Newsletter />
          <Footer />
        </div>
      </div>
      </div>
  );
};

export default NotrePlateforme;