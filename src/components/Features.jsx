import React from 'react';
import { ShieldCheckIcon, PuzzleIcon, LightningBoltIcon } from '@heroicons/react/outline';

const FeatureCard = ({ icon, title, description }) => (
  <div className="flex flex-col items-center text-center p-4 md:p-6">
    <div className="h-12 w-12 mb-2 text-blue-500">{icon}</div>
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
    <p className="text-sm md:text-base text-gray-600">{description}</p>
  </div>
);

const Features = () => {
  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Why Choose Us?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <FeatureCard
            icon={<ShieldCheckIcon />}
            title="Secure Transactions"
            description="Experience safe and secure transactions with our platform's advanced security measures."
          />
          <FeatureCard
            icon={<PuzzleIcon />}
            title="Wide Variety"
            description="Discover a vast selection of components and materials, catering to all your technological needs."
          />
          <FeatureCard
            icon={<LightningBoltIcon />}
            title="Ease of Use"
            description="Navigate our platform with ease, thanks to our user-friendly interface designed for your convenience."
          />
        </div>
      </div>
    </div>
  );
};

export default Features;
