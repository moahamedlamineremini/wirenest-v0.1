import React from 'react';
import { Link } from 'react-router-dom';
import DesignerCard from '../components/DesignerCard';
import FeatureSection from '../components/FeatureSection';
import Newsletter from '../components/Newsletter';
import Footer from '../components/footer';

function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="px-6 py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">La mode indépendante à portée de clic</h2>
            <p className="text-gray-600 mb-8">
              Bienvenue sur notre plateforme dédiée aux stylistes indépendants et aux passionnés de mode. Ici, chaque création raconte une histoire, chaque pièce est unique, et chaque talent mérite d'être découvert.
            </p>
            <div className="flex space-x-4">
              <Link
                to="/register"
                className="bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 inline-block"
              >
                Inscription
              </Link>
              <button className="border border-black px-8 py-3 rounded-full hover:bg-gray-100">
                Proposer mes services
              </button>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80"
              alt="Fashion showcase"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* Featured Designers */}
      <section className="px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-xl font-semibold mb-6">Les artistes de la semaine</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <DesignerCard
              name="Alicia M"
              image="https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&q=80"
            />
            <DesignerCard
              name="Louise P"
              image="https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&q=80"
            />
            <DesignerCard
              name="Eryk B"
              image="https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&q=80"
            />
            <DesignerCard
              name="Marie K"
              image="https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&q=80"
            />
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="px-6 py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-2xl font-bold mb-12 text-center">Pourquoi choisir notre plateforme ?</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureSection
              number="1"
              title="Pour soutenir des talents indépendants"
              description="En achetant ici, vous encouragez des créateurs passionnés et donnez vie à leurs projets."
            />
            <FeatureSection
              number="2"
              title="Pour des pièces uniques et personnalisées"
              description="Exprimez votre style avec des vêtements et accessoires que vous ne trouverez nulle part ailleurs."
            />
            <FeatureSection
              number="3"
              title="Pour une expérience fluide et transparente"
              description="De la découverte à la commande finale, tout est pensé pour vous simplifier la vie."
            />
          </div>
        </div>
      </section>

      <Newsletter />
      <Footer />
    </div>
  );
}

export default Home;