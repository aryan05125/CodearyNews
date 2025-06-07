import React, { useState, useEffect, useMemo } from "react";
import { newsData, influencersData, categories } from "../data/searchData";

const useDebounce = (value, delay) => {
  const [debouncedVal, setDebouncedVal] = useState(value);
  useEffect(() => {
    const handler = setTimeout(() => setDebouncedVal(value), delay);
    return () => clearTimeout(handler);
  }, [value, delay]);
  return debouncedVal;
};

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const debouncedSearchTerm = useDebounce(searchTerm, 300);

  const filteredNews = useMemo(() => {
    return newsData.filter((item) => {
      const matchCategory = selectedCategory === "All" || item.category === selectedCategory;
      const matchTitle = item.title.toLowerCase().includes(debouncedSearchTerm.toLowerCase());
      return matchCategory && matchTitle;
    });
  }, [debouncedSearchTerm, selectedCategory]);

  const filteredInfluencers = useMemo(() => {
    return influencersData.filter((inf) =>
      inf.name.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
    );
  }, [debouncedSearchTerm]);

  const noResults = debouncedSearchTerm && filteredNews.length === 0 && filteredInfluencers.length === 0;

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Search</h1>

      {/* Search input + category filter */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-center gap-4 mb-8">
        <input
          type="text"
          placeholder="Search news or influencers..."
          className="border border-gray-400 rounded-md px-4 py-2 flex-grow focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="border border-gray-400 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      {/* Results */}
      {noResults && (
        <p className="text-center text-red-500 text-lg mt-10">Try something else, no results found.</p>
      )}

      {/* News Results */}
      {filteredNews.length > 0 && (
        <>
          <h2 className="text-2xl font-semibold mb-4">News Results</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {filteredNews.map((news) => (
              <div
                key={news.id}
                className="bg-gray-900 text-white rounded-lg overflow-hidden shadow-md hover:shadow-yellow-400 transition cursor-pointer"
              >
                <img
                  src={news.imageUrl}
                  alt={news.title}
                  className="w-full h-40 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-lg">{news.title}</h3>
                  <span className="inline-block mt-2 bg-yellow-400 text-black px-2 py-1 rounded-full text-sm font-semibold">
                    {news.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      {/* Influencer Results */}
      {filteredInfluencers.length > 0 && (
        <>
          <h2 className="text-2xl font-semibold mt-10 mb-4">Influencer Results</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {filteredInfluencers.map((inf) => (
              <div
                key={inf.id}
                className="bg-white rounded-lg shadow-md p-4 flex items-center gap-4 cursor-pointer hover:shadow-yellow-400 transition"
              >
                <img
                  src={inf.profilePic}
                  alt={inf.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-semibold text-lg">{inf.name}</h3>
                  <p className="text-gray-600 text-sm">
                    {inf.platforms.join(", ")}
                  </p>
                  <p className="text-gray-500 text-xs">
                    {inf.followers.toLocaleString()} followers
                  </p>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Search;
