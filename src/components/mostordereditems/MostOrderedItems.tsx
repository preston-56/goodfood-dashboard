import React from "react";
import { mostOrderedItems } from "../../data";
import NoodlesImage from "../../assets/noodles.jpg";
import BurgerImage from "../../assets/burger.jpg";
import SaladImage from "../../assets/salad.jpg";
import SmoothieImage from "../../assets/smoothie.jpg";
import WingsImage from "../../assets/chicken.jpg";

const images: { [key: string]: string } = {
  "Vegatable Burger": BurgerImage,
  "Fresh Salad Bowl": SaladImage,
  "Smoothie Fruits": SmoothieImage,
  "Hot Chicken Wings": WingsImage,
  "Chicken Noodles": NoodlesImage,
};

const MostOrderedItems: React.FC = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md mb-4">
      <div className="flex flex-col">
        <h2 className="text-xl font-bold mb-4 grid justify-items-start">Most Ordered Food</h2>
        <p className="text-gray-500 text-start mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada...
        </p>
        {mostOrderedItems.map((item, index) => (
          <React.Fragment key={index}>
            <div className="flex items-center space-x-4">
              <img src={images[item.name]} alt={item.name} className="mt-1 h-10 w-10 rounded-full" />
              <div>{item.name}</div>
              <div style={{ marginLeft: "auto" }}>${item.price.toFixed(3)}</div>
            </div>
            <hr className="border-t border-gray-300 w-full my-1" />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default MostOrderedItems;
