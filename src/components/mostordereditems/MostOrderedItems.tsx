import React from "react";

const MostOrderedItems: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex flex-col">
        <h2 className="text-xl font-bold mb-4 grid justify-items-start">Most Ordered Food</h2>
        <p className="text-gray-500 text-start mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          malesuada...
        </p>
        <div className="mb-4">
          <hr className="my-2" />
          <div className="flex items-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-400"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 2a8 8 0 100 16 8 8 0 000-16zM6 10a1 1 0 011-1h6a1 1 0 010 2H7a1 1 0 01-1-1zm8-3a1 1 0 00-1-1h-1.586a1 1 0 110-2H14a2 2 0 012 2zm0 6a1 1 0 01-1 1h-1.586a1 1 0 100 2H14a2 2 0 001-1V9zm-8-2a2 2 0 100 4 2 2 0 000-4zm0-2a4 4 0 100 8 4 4 0 000-8zm0-2a6 6 0 100 12 6 6 0 000-12z"
                clipRule="evenodd"
              />
            </svg>
            <span>Fresh Salad Bowl</span>
            <span className="ml-2">IDR 45.000</span>
          </div>
          <hr className="my-2" />
          <div className="flex items-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-400"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 2a8 8 0 100 16 8 8 0 000-16zM6 10a1 1 0 011-1h6a1 1 0 010 2H7a1 1 0 01-1-1zm8-3a1 1 0 00-1-1h-1.586a1 1 0 110-2H14a2 2 0 012 2zm0 6a1 1 0 01-1 1h-1.586a1 1 0 100 2H14a2 2 0 001-1V9zm-8-2a2 2 0 100 4 2 2 0 000-4zm0-2a4 4 0 100 8 4 4 0 000-8zm0-2a6 6 0 100 12 6 6 0 000-12z"
                clipRule="evenodd"
              />
            </svg>
            <span>Chicken Noodles</span>
            <span className="ml-2">IDR 75.000</span>
          </div>
          <hr className="my-2" />
          <div className="flex items-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-400"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 2a8 8 0 100 16 8 8 0 000-16zM6 10a1 1 0 011-1h6a1 1 0 010 2H7a1 1 0 01-1-1zm8-3a1 1 0 00-1-1h-1.586a1 1 0 110-2H14a2 2 0 012 2zm0 6a1 1 0 01-1 1h-1.586a1 1 0 100 2H14a2 2 0 001-1V9zm-8-2a2 2 0 100 4 2 2 0 000-4zm0-2a4 4 0 100 8 4 4 0 000-8zm0-2a6 6 0 100 12 6 6 0 000-12z"
                clipRule="evenodd"
              />
            </svg>
            <span>Smoothie Fruits</span>
            <span className="ml-2">IDR 45.000</span>
          </div>
          <hr className="my-2" />
          <div className="flex items-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-400"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 2a8 8 0 100 16 8 8 0 000-16zM6 10a1 1 0 011-1h6a1 1 0 010 2H7a1 1 0 01-1-1zm8-3a1 1 0 00-1-1h-1.586a1 1 0 110-2H14a2 2 0 012 2zm0 6a1 1 0 01-1 1h-1.586a1 1 0 100 2H14a2 2 0 001-1V9zm-8-2a2 2 0 100 4 2 2 0 000-4zm0-2a4 4 0 100 8 4 4 0 000-8zm0-2a6 6 0 100 12 6 6 0 000-12z"
                clipRule="evenodd"
              />
            </svg>
            <span>Hot Chicken Wings</span>
            <span className="ml-2">IDR 45.000</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MostOrderedItems;
