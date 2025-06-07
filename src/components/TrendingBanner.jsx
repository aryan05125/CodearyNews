import React, { useState, useEffect } from "react";

const TrendingBanner = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % items.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [items.length]);

  if (!items || items.length === 0) return null;

  return (
    <div className="relative w-full max-w-7xl mx-auto overflow-hidden rounded-lg mt-6 bg-yellow-100 dark:bg-yellow-900">
      <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {items.map((influencer, idx) => (
          <div
            key={influencer.id}
            className="flex-shrink-0 w-full flex items-center p-6 space-x-6 cursor-pointer"
          >
            <img
              src={influencer.profilePic}
              alt={influencer.name}
              className="w-20 h-20 rounded-full object-cover border-4 border-yellow-400"
            />
            <div>
              <h3 className="text-xl font-bold text-yellow-800 dark:text-yellow-300">{influencer.name}</h3>
              <p className="text-yellow-700 dark:text-yellow-200">{influencer.bio || influencer.platform}</p>
              <p className="mt-1 text-sm text-yellow-600 dark:text-yellow-400">
                Followers: {influencer.followers.toLocaleString()}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-2 left-0 right-0 flex justify-center space-x-2">
        {items.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`w-3 h-3 rounded-full transition-colors ${
              idx === currentIndex ? "bg-yellow-600 dark:bg-yellow-300" : "bg-yellow-400 dark:bg-yellow-700"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default TrendingBanner;
