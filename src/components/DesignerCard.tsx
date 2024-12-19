import React from 'react';

interface DesignerCardProps {
  name: string;
  image: string;
}

const DesignerCard: React.FC<DesignerCardProps> = ({ name, image }) => {
  return (
    <div className="group cursor-pointer">
      <div className="relative overflow-hidden rounded-lg aspect-square">
        <img 
          src={image} 
          alt={name}
          className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-300"
        />
      </div>
      <p className="mt-2 text-sm font-medium">{name}</p>
    </div>
  );
}

export default DesignerCard;