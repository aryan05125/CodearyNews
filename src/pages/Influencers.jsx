import React, { useState, useEffect } from "react";
import InfluencerCard from "../components/InfluencerCard";
import { influencersData } from "../data/influencersData";

const PLATFORMS = ["Instagram", "YouTube", "TikTok", "X", "Facebook"];

const Influencers = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [platformFilter, setPlatformFilter] = useState(null);
  const [filteredInfluencers, setFilteredInfluencers] = useState(influencersData);

  useEffect(() => {
    let filtered = [...influencersData];

    if (platformFilter) {
      filtered = filtered.filter((inf) => inf.platforms.includes(platformFilter));
    }
    if (searchTerm.trim() !== "") {
      filtered = filtered.filter((inf) =>
        inf.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredInfluencers(filtered);
  }, [searchTerm, platformFilter]);

  const topTrending = influencersData
    .slice()
    .sort((a, b) => b.trendingScore - a.trendingScore)
    .slice(0, 10);

  return (
    <div className="max-w-7xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Influencers</h1>

      {/* Top 10 Trending */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">🔥 Top 10 Trending Influencers</h2>
        <div className="flex overflow-x-auto gap-4">
          {topTrending.map((inf) => (
            <InfluencerCard key={inf.id} influencer={inf} isTrending />
          ))}
        </div>
      </section>

      {/* Filters */}
      <div className="flex flex-wrap gap-4 mb-6 items-center">
        {/* Search Input */}
        <input
          type="search"
          placeholder="Search influencer..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="px-4 py-2 border rounded-md w-full max-w-md focus:outline-yellow-400 focus:ring-2 focus:ring-yellow-400"
        />

        {/* Platform Filter */}
        <select
          value={platformFilter || ""}
          onChange={(e) => setPlatformFilter(e.target.value || null)}
          className="px-4 py-2 border rounded-md"
        >
          <option value="">Filter by platform</option>
          {PLATFORMS.map((platform) => (
            <option key={platform} value={platform}>
              {platform}
            </option>
          ))}
        </select>
      </div>

      {/* Influencer Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredInfluencers.length > 0 ? (
          filteredInfluencers.map((inf) => (
            <InfluencerCard key={inf.id} influencer={inf} />
          ))
        ) : (
          <p className="text-center col-span-full text-gray-500">
            No influencers found for your search/filter.
          </p>
        )}
      </div>
    </div>
  );
};

export default Influencers;
