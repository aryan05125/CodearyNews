// src/components/NewsCard.jsx
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const NewsCard = ({ news }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-gradient-to-br from-[#1f1f1f] to-[#2c2c2c] dark:from-[#111] dark:to-[#222] rounded-2xl shadow-md overflow-hidden transition-all duration-300 text-white hover:shadow-yellow-400"
    >
      {/* News Image */}
      <div className="relative h-48 w-full overflow-hidden">
        <img
          src={news.imageUrl}
          alt={news.title}
          className="h-full w-full object-cover hover:scale-110 transition-transform duration-500"
        />
        <span className="absolute top-2 right-2 bg-yellow-500 text-black px-2 py-1 text-xs rounded-lg">
          {news.category}
        </span>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-1 line-clamp-2">{news.title}</h3>
        <p className="text-sm text-gray-300 mb-2 line-clamp-3">{news.description}</p>

        <div className="flex justify-between items-center text-xs text-gray-400 mb-3">
          <span>By {news.source}</span>
          <span>{news.date}</span>
        </div>

        <Link
          to={`/news/${news.id}`}
          className="inline-block text-sm text-yellow-400 hover:underline"
        >
          Read more →
        </Link>
      </div>
    </motion.div>
  );
};

export default NewsCard;
