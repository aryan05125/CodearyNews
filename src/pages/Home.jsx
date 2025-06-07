import React, { useState, useEffect } from "react";
import NewsCard from "../components/NewsCard";
import InfluencerCard from "../components/InfluencerCard";
import CategoryTag from "../components/CategoryTag";
import TrendingBanner from "../components/TrendingBanner";
    
import { motion } from "framer-motion";

import { newsData } from "../data/newsData";  // Dummy or API fetched data
import { influencersData } from "../data/influencersData";

const PLATFORMS = ["Instagram", "YouTube", "Twitter", "TikTok"];
const CATEGORIES = ["Viral", "Controversy", "Collab"];

const Home = () => {
  const [platformFilter, setPlatformFilter] = useState(null);
  const [categoryFilter, setCategoryFilter] = useState(null);
  const [newsList, setNewsList] = useState(newsData.slice(0, 10)); // initially 10 news
  const [visibleCount, setVisibleCount] = useState(10);

  // Filter news by platform and category
  const filteredNews = newsList.filter((news) => {
    if (platformFilter && news.platform !== platformFilter) return false;
    if (categoryFilter && !news.tags.includes(categoryFilter)) return false;
    return true;
  });

  // Load more news handler
  const loadMore = () => {
    setVisibleCount((prev) => {
      const newCount = prev + 10;
      setNewsList(newsData.slice(0, newCount));
      return newCount;
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Trending Banner */}
      <TrendingBanner items={influencersData.slice(0, 5)} />

      {/* Platform Tabs */}
      <div className="flex space-x-4 mt-8 justify-center">
        {PLATFORMS.map((platform) => (
          <button
            key={platform}
            onClick={() => setPlatformFilter(platformFilter === platform ? null : platform)}
            className={`px-4 py-2 rounded-full font-semibold transition ${
              platformFilter === platform
                ? "bg-yellow-400 text-black"
                : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
            }`}
          >
            {platform}
          </button>
        ))}
      </div>

      {/* Category Tags */}
      <div className="flex space-x-3 mt-4 justify-center flex-wrap">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setCategoryFilter(categoryFilter === cat ? null : cat)}
            className={`px-3 py-1 rounded-full text-sm font-medium transition ${
              categoryFilter === cat
                ? "bg-yellow-400 text-black"
                : "bg-gray-300 dark:bg-gray-600 text-gray-800 dark:text-gray-300"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Latest News Feed */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.1 },
          },
        }}
      >
        {filteredNews.map((news) => (
          <motion.div
            key={news.id}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <NewsCard news={news} />
          </motion.div>
        ))}
      </motion.div>

      {/* Load More Button */}
      {visibleCount < newsData.length && (
        <div className="flex justify-center mt-8">
          <button
            onClick={loadMore}
            className="px-6 py-2 rounded-full bg-yellow-400 text-black font-semibold hover:bg-yellow-500 transition"
          >
            Load More
          </button>
        </div>
      )}

      {/* Top Influencers (Horizontal Scroll) */}
      <h2 className="text-2xl font-bold mt-12 mb-6">Top Influencers</h2>
      <div className="flex overflow-x-auto space-x-4 pb-4">
        {influencersData.map((inf) => (
          <InfluencerCard key={inf.id} influencer={inf} />
        ))}
      </div>
    </div>
  );
};

export default Home;
