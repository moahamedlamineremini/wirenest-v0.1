import React from 'react';
import { Star } from 'lucide-react';
import { Review } from '../../types/product';

interface ReviewsSectionProps {
  reviews: Review[];
}

const ReviewsSection: React.FC<ReviewsSectionProps> = ({ reviews }) => {
  return (
    <section className="py-12">
      <h2 className="text-2xl font-bold mb-8">NOS CLIENTS SATISFAITS</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {reviews.map((review) => (
          <div key={review.id} className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-5 h-5 ${
                    i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                  }`}
                />
              ))}
            </div>
            <p className="text-gray-600 mb-4">{review.comment}</p>
            <div className="flex items-center">
              <span className="font-medium">{review.author}</span>
              {review.verified && (
                <span className="ml-2 text-sm text-green-600">✓ Achat vérifié</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ReviewsSection;