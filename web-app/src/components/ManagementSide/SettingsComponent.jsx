import React from 'react';

const SettingsComponent = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-semibold mb-6">Settings</h1>
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="px-6 py-4">
          <h2 className="text-xl font-semibold mb-4">General Settings</h2>
          <div className="flex items-center justify-between mb-4">
            <span className="text-gray-600">Notification Sound</span>
            <label className="switch">
              <input type="checkbox" />
              <span className="slider"></span>
            </label>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-gray-600">Dark Mode</span>
            <label className="switch">
              <input type="checkbox" />
              <span className="slider"></span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsComponent;
