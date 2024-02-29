import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white text-center py-6">
      <div className="max-w-4xl mx-auto px-4">
        <p>© {new Date().getFullYear()} Smart Bekia Marketplace. All rights reserved.</p>
        <p className="text-sm mt-2">Contact us: gehadsalemfekry@aucegypt.edu</p>
        {/* Add any additional links or information here */}
      </div>
    </footer>
  );
};

export default Footer;
