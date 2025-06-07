import React from "react";

const reactions = [
  { emoji: "👍", label: "Like", count: 124 },
  { emoji: "❤️", label: "Love", count: 87 },
  { emoji: "😂", label: "Haha", count: 34 },
  { emoji: "😮", label: "Wow", count: 19 },
  { emoji: "😢", label: "Sad", count: 6 },
  { emoji: "😡", label: "Angry", count: 2 },
];

const ViewerReactions = () => {
  return (
    <section className="mt-12 bg-gray-900 rounded-lg p-6 text-white">
      <h3 className="text-xl font-semibold mb-4">Viewer Reactions</h3>
      <div className="flex gap-6 flex-wrap">
        {reactions.map(({ emoji, label, count }) => (
          <div
            key={label}
            className="flex flex-col items-center cursor-pointer hover:text-yellow-400 transition"
            title={`${label}: ${count} reactions`}
          >
            <span className="text-3xl">{emoji}</span>
            <span className="mt-1 font-semibold">{count}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ViewerReactions;
