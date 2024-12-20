import React from 'react';
import Newsletter from '../components/Newsletter';
import Footer from '../components/footer';
import { Link } from 'react-router-dom';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';

interface Creator {
  id: number;
  name: string;
  image: string;
  description: string;
  creations: number;
  date?: string;
  coverImage: string;
}

const Noscreateur: React.FC = () => {
  const creators: Creator[] = [
    {
      id: 1,
      name: "Louis Hoebregts",
      image: "/img/photo-createur-male.png",
      coverImage: "/img/createur1.png",
      description: "Une Veste En Denim Retravaillée Avec Des Patchs Colorés Et Des Touches De Peinture Artisanale",
      creations: 24,
      date: "12 juillet 2025"
    },
    {
      id: 2,
      name: "Emma Dubois",
      image: "/img/photo-createur-female.png",
      coverImage: "/img/createur2.png",
      description: "Créations Uniques De Bijoux En Matériaux Recyclés Et Pierres Semi-Précieuses",
      creations: 18,
      date: "15 août 2025"
    },
    {
      id: 3,
      name: "Thomas Laurent",
      image: "/img/photo-createur-male.png",
      coverImage: "/img/createur3.png",
      description: "Sacs En Cuir Végétal Avec Motifs Géométriques Contemporains",
      creations: 31,
      date: "3 septembre 2025"
    },
    {
      id: 4,
      name: "Sophie Martin",
      image: "/img/photo-createur-female.png",
      coverImage: "/img/createur4.png",
      description: "Collection De Vêtements Durables En Matières Naturelles Et Teintures Végétales",
      creations: 27,
      date: "20 octobre 2025"
    },
    {
      id: 5,
      name: "Marc Dupont",
      image: "/img/photo-createur-male.png",
      coverImage: "/img/createur5.png",
      description: "Accessoires De Mode Minimalistes En Bois Recyclé Et Métaux Précieux",
      creations: 15,
      date: "5 novembre 2025"
    },
    {
      id: 6,
      name: "Julie Moreau",
      image: "/img/photo-createur-female.png",
      coverImage: "/img/createur6.png",
      description: "Chaussures Artisanales Personnalisables En Cuir Italien",
      creations: 22,
      date: "18 décembre 2025"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="text-sm text-gray-500 mb-6">
        <Link to="/" className="hover:text-gray-700">Home</Link>
        <span className="mx-2">{'>'}</span>
        <span className="text-black">Stylistes</span>
      </div>
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
        {creators.map((creator) => (
          <Link
            to={`/createur/${creator.id}`}
            key={creator.id}
            className="block bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
          >
            <article className="h-full">
              <div className="relative">
                <div className="w-full h-36 md:h-48 lg:h-56 overflow-hidden"> {/* Réduction de la hauteur pour dézoomer */}
                  <img
                    src={creator.coverImage}
                    alt={`Photo de ${creator.name}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="p-2">
                <h2 className="text-sm font-semibold mb-1 line-clamp-2">{creator.name}</h2>
                <p className="text-gray-500 text-xs">{creator.description}</p>
                <div className="flex items-center justify-between mt-1 bg-gray-50 p-1 rounded-lg">
                  <div className="flex items-center">
                    <div className="w-6 h-6 rounded-full overflow-hidden">
                      <img
                        src={creator.image}
                        alt={creator.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="ml-1">
                      <h3 className="font-medium text-xs">{creator.name}</h3>
                      <p className="text-gray-500 text-xs">{creator.date}</p>
                    </div>
                  </div>
                  <BookmarkBorderIcon className="w-6 h-6" />
                </div>
              </div>
            </article>
          </Link>
        ))}
      </div>
      <div className="flex justify-center items-center space-x-2 mt-4 mb-4">
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
          9
        </button>
        <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-100">
          Suivant
        </button>
      </div>
      <div className="relative mt-32">
        <Newsletter />
        <Footer />
      </div>
    </div>
  );
};

export default Noscreateur;