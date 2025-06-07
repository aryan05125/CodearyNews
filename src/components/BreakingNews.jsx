import React from "react";

const BreakingNews = ({ newsItems = [] }) => {
  return (
    <div className="bg-red-600 text-white font-bold overflow-hidden whitespace-nowrap">
      <div
        className="inline-block py-2 animate-marquee"
        style={{ animationDuration: `${newsItems.length * 8}s` }}
      >
        {newsItems.map((item, idx) => (
          <span key={idx} className="mx-6">
            ⚡ {typeof item === "string" ? item : item.title}
          </span>
        ))}
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        .animate-marquee {
          display: inline-block;
          white-space: nowrap;
          animation-name: marquee;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
          animation-play-state: running;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default BreakingNews;
