import React from 'react';

interface FeatureSectionProps {
  number: string;
  title: string;
  description: string;
}

const FeatureSection: React.FC<FeatureSectionProps> = ({ number, title, description }) => {
  return (
    <div className="text-center">
      <div className="inline-block text-3xl font-bold mb-4 relative">
        <span className="relative z-10">{number}</span>
        <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-200 rounded-full -z-10"></div>
      </div>
      <h4 className="text-xl font-semibold mb-3">{title}</h4>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

export default FeatureSection;