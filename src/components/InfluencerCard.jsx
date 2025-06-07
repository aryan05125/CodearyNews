import React from "react";
import { Link } from "react-router-dom";

const platformIcons = {
  Instagram: "📸",
  YouTube: "▶️",
  TikTok: "🎵",
  X: "🐦",
  Facebook: "📘",
};

const InfluencerCard = ({ influencer, isTrending }) => {
  return (
    <Link
      to={`/influencer/${influencer.id}`}
      className={`bg-gray-900 rounded-xl p-4 text-white shadow-md hover:shadow-yellow-400 transition relative ${
        isTrending ? "border-2 border-yellow-400" : ""
      }`}
    >
      <img
        src={influencer.profilePic}
        alt={influencer.name}
        className="w-20 h-20 rounded-full object-cover mx-auto mb-4"
      />
      <h3 className="text-xl font-semibold mb-1 text-center">{influencer.name}</h3>

      <div className="flex justify-center gap-2 mb-2 text-yellow-400 text-lg">
        {influencer.platforms.map((p) => (
          <span key={p} title={p}>
            {platformIcons[p] || "🔗"}
          </span>
        ))}
      </div>

      <p className="text-center mb-2 text-sm">
        {influencer.followers.toLocaleString()} followers
      </p>

      <div className="flex justify-center gap-2 text-xs flex-wrap">
        {influencer.tags.map((tag) => (
          <span
            key={tag}
            className="bg-yellow-400 text-black px-2 py-1 rounded-full font-semibold"
          >
            {tag}
          </span>
        ))}
      </div>
    </Link>
  );
};

export default InfluencerCard;
