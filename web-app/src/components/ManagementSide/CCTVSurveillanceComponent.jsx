import React from 'react';

const CCTVSurveillanceComponent = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-semibold mb-6">CCTV Surveillance</h1>
      <div className="bg-white rounded-lg shadow overflow-hidden relative">
        {/* Video Player */}
        <div className="aspect-w-16 aspect-h-9">
          {/* Replace the source with your live streaming video URL */}
          <video controls className="w-full h-full">
            <source src="your-live-stream-url" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        {/* Time and Date Details */}
        <div className="absolute bottom-0 left-0 right-0 bg-gray-900 text-white p-4">
          <div className="flex justify-between items-center">
            <div>
              <span className="text-sm">Date:</span>
              <span className="ml-2">May 24, 2024</span>
            </div>
            <div>
              <span className="text-sm">Time:</span>
              <span className="ml-2">10:30 AM</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CCTVSurveillanceComponent;
