import React from 'react';
import Lottie from 'lottie-react';
import plantgrowth from '../assets/animations/plantgrowth.json';

const PlantProgress = () => {
  return (
    <div className="w-64 h-64 flex flex-col items-center justify-center bg-white shadow-lg rounded-lg">
      <Lottie animationData={plantgrowth} loop autoplay />
      <p className="mt-4 text-green-600 font-semibold">Your habit is growing 🌱</p>
    </div>
  );
};

export default PlantProgress;
