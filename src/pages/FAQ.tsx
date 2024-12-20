import React from 'react';
import FAQItem from '../components/FAQ/FAQItem';
import { faqData } from '../data/faqData';
import Newsletter from '../components/Newsletter';
import Footer from '../components/footer';

const FAQ = () => {
  return (
    <div className="min-h-screen bg-white py-16">
      <div className="max-w-3xl mx-auto px-6">
        <h1 className="text-3xl font-bold mb-2">FOIRE AUX QUESTIONS (FAQ)</h1>
        <p className="text-gray-600 mb-8">
          Bienvenue dans la section FAQ du site des Cercle des Diamantaires. Nous avons regroupé ici les questions les plus fréquentes pour vous garantir une expérience d'achat agréable et transparente. Si vous avez besoin d'une assistance supplémentaire, n'hésitez pas à nous contacter.
        </p>

        <div className="space-y-2">
          {faqData.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
            />
          ))}
        </div>
      </div>
      <div className="relative mt-16">
        <Newsletter />
        <Footer />
        </div>
    </div>
  );
};

export default FAQ;