// src/components/CategoryTag.jsx
import React from "react";

const categoryColors = {
  Instagram: "bg-pink-500 text-white",
  YouTube: "bg-red-600 text-white",
  Twitter: "bg-blue-500 text-white",
  TikTok: "bg-gray-800 text-white",
  Facebook: "bg-blue-700 text-white",
  Default: "bg-gray-600 text-white",
};

const CategoryTag = ({ category }) => {
  const colorClass = categoryColors[category] || categoryColors.Default;

  return (
    <span
      className={`inline-block px-3 py-1 text-xs font-semibold rounded-full cursor-default select-none transition-shadow duration-200 hover:shadow-lg ${colorClass}`}
      title={category}
    >
      {category}
    </span>
  );
};

export default CategoryTag;
