import React, { useState, useEffect } from "react";
import NewsCard from "../components/NewsCard";
import { newsData } from "../data/newsData";


const PLATFORMS = ["Instagram", "YouTube", "X", "TikTok", "Facebook"];
const SUBCATEGORIES = ["Reels", "Shorts", "Vlogs", "Drama", "Dance", "Collab"];
const SORT_OPTIONS = ["Latest", "Most Viewed", "Most Bookmarked"];

// Dummy data import

const Categories = () => {
  const [platform, setPlatform] = useState(null);
  const [subcategory, setSubcategory] = useState(null);
  const [sortBy, setSortBy] = useState("Latest");
  const [filteredNews, setFilteredNews] = useState(newsData);

  useEffect(() => {
    let filtered = [...newsData];

    if (platform) {
      filtered = filtered.filter((news) => news.platform === platform);
    }
    if (subcategory) {
      filtered = filtered.filter((news) => news.tags.includes(subcategory));
    }

    // Sorting logic
    if (sortBy === "Latest") {
      filtered.sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
      );
    } else if (sortBy === "Most Viewed") {
      filtered.sort((a, b) => b.views - a.views);
    } else if (sortBy === "Most Bookmarked") {
      filtered.sort((a, b) => b.bookmarks - a.bookmarks);
    }

    setFilteredNews(filtered);
  }, [platform, subcategory, sortBy]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <h1 className="text-3xl font-bold mb-6">Categories</h1>

      {/* Platform Tabs */}
      <div className="flex flex-wrap gap-3 mb-4">
        {PLATFORMS.map((plat) => (
          <button
            key={plat}
            onClick={() => setPlatform(platform === plat ? null : plat)}
            className={`px-4 py-2 rounded-full font-semibold transition ${
              platform === plat
                ? "bg-yellow-400 text-black"
                : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
            }`}
          >
            {plat}
          </button>
        ))}
      </div>

      {/* Sub-category Filters */}
      <div className="flex flex-wrap gap-3 mb-6">
        {SUBCATEGORIES.map((subcat) => (
          <button
            key={subcat}
            onClick={() => setSubcategory(subcategory === subcat ? null : subcat)}
            className={`px-3 py-1 rounded-full text-sm font-medium transition ${
              subcategory === subcat
                ? "bg-yellow-400 text-black"
                : "bg-gray-300 dark:bg-gray-600 text-gray-800 dark:text-gray-300"
            }`}
          >
            {subcat}
          </button>
        ))}
      </div>

      {/* Sort Dropdown */}
      <div className="mb-6 flex justify-end">
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="px-3 py-2 rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
        >
          {SORT_OPTIONS.map((option) => (
            <option key={option} value={option}>
              Sort by: {option}
            </option>
          ))}
        </select>
      </div>

      {/* News Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredNews.length > 0 ? (
          filteredNews.map((news) => <NewsCard key={news.id} news={news} />)
        ) : (
          <p className="col-span-full text-center text-gray-500 dark:text-gray-400">
            No news found for selected filters.
          </p>
        )}
      </div>
    </div>
  );
};

export default Categories;
