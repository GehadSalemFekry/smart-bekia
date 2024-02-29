import React from 'react';

const HowItWorks = () => {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">How It Works</h2>
        <div className="flex flex-col md:flex-row justify-center gap-8">
          <div className="flex-1">
            <h3 className="text-xl font-semibold mb-4">For Sellers</h3>
            <p className="text-gray-600 mb-4">1. Sign up and list your tech components or materials.</p>
            <p className="text-gray-600 mb-4">2. Connect with buyers and negotiate the terms.</p>
            <p className="text-gray-600">3. Complete the transaction securely and efficiently.</p>
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-semibold mb-4">For Buyers</h3>
            <p className="text-gray-600 mb-4">1. Browse the wide variety of available items.</p>
            <p className="text-gray-600 mb-4">2. Contact sellers to get more details or negotiate.</p>
            <p className="text-gray-600">3. Purchase safely using our secure transaction system.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
