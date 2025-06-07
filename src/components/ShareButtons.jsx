import React from "react";

const ShareButtons = ({ url }) => {
  const copyLink = () => {
    navigator.clipboard.writeText(url);
    alert("Link copied to clipboard!");
  };

  const encodedUrl = encodeURIComponent(url);
  const text = encodeURIComponent("Check out this article!");

  return (
    <div className="flex gap-4 mt-4">
      <button
        onClick={copyLink}
        className="px-3 py-1 bg-yellow-400 text-black rounded-md hover:bg-yellow-500 transition"
      >
        Copy Link
      </button>
      <a
        href={`https://wa.me/?text=${text}%20${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        className="px-3 py-1 bg-green-500 text-white rounded-md hover:bg-green-600 transition"
      >
        WhatsApp
      </a>
      <a
        href={`https://twitter.com/intent/tweet?text=${text}&url=${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        className="px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
      >
        X (Twitter)
      </a>
      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        className="px-3 py-1 bg-blue-800 text-white rounded-md hover:bg-blue-900 transition"
      >
        Facebook
      </a>
    </div>
  );
};

export default ShareButtons;
