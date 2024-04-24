import React from "react";

const RatingChart: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex flex-col">
        <h2 className="flex justify-items-start text-xl font-bold mb-4">Your Rating</h2>
        <p className="text-gray-500 text-start mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          malesuada...
        </p>
        <div className="flex space-x-4">
          {/* Icons with circles representing ratings */}
          <div className="bg-gray-200 rounded-full h-10 w-10 flex items-center justify-center">
            85% Hygiene
          </div>
          <div className="bg-gray-200 rounded-full h-10 w-10 flex items-center justify-center">
            85% Food Taste
          </div>
          <div className="bg-gray-200 rounded-full h-10 w-10 flex items-center justify-center">
            92% Packaging
          </div>
        </div>
      </div>
    </div>
  );
};

export default RatingChart;
