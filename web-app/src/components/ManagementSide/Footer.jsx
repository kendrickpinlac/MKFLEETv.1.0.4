import React from 'react';

const DashboardFooter = () => {
  return (
    <div className="bg-gray-800 text-white py-4 px-6 flex justify-between items-center mt-auto ml-64"> {/* Added ml-64 for left padding matching sidebar width */}
      <p style={{ fontSize: '11px', userSelect: 'none' }}>&copy; 2024 MKFLEET Magu Klowi Transport Services</p>
      <div className="flex items-center">
        <p style={{ fontSize: '11px', userSelect: 'none' }}>Designed and Developed by Pinlac, K.</p>
      </div>
    </div>
  );
};

export default DashboardFooter;
