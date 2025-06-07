import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LOCAL_STORAGE_KEY = "codearynews_bookmarks";

const Bookmark = () => {
  const [bookmarks, setBookmarks] = useState([]);

  // Load bookmarks from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (saved) {
      setBookmarks(JSON.parse(saved));
    }
  }, []);

  // Save bookmarks back to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(bookmarks));
  }, [bookmarks]);

  // Remove a single bookmark
  const removeBookmark = (id) => {
    setBookmarks((prev) => prev.filter((item) => item.id !== id));
  };

  // Clear all bookmarks
  const clearAll = () => {
    setBookmarks([]);
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Your Bookmarks</h1>

      {bookmarks.length === 0 ? (
        <div className="text-center text-gray-500 mt-20">
          <p className="text-xl mb-4">No bookmarks saved yet.</p>
          <p>Start adding your favorite news articles to bookmarks!</p>
        </div>
      ) : (
        <>
          <div className="flex justify-end mb-6">
            <button
              onClick={clearAll}
              className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md transition"
              aria-label="Clear all bookmarks"
            >
              Clear All Bookmarks
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {bookmarks.map((news) => (
              <div
                key={news.id}
                className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl shadow-lg overflow-hidden text-white flex flex-col"
              >
                <img
                  src={news.imageUrl}
                  alt={news.title}
                  className="h-48 w-full object-cover"
                />

                <div className="p-4 flex flex-col flex-grow">
                  <h2 className="font-semibold text-lg mb-2 line-clamp-2">
                    {news.title}
                  </h2>
                  <p className="text-sm text-gray-300 mb-4 line-clamp-3">
                    {news.description}
                  </p>

                  <div className="mt-auto flex justify-between items-center text-xs text-gray-400 mb-3">
                    <span>By {news.source}</span>
                    <span>{news.date}</span>
                  </div>

                  <div className="flex justify-between items-center">
                    <Link
                      to={`/article/${news.id}`}
                      className="text-yellow-400 hover:underline text-sm"
                      aria-label={`View full article: ${news.title}`}
                    >
                      View Full Article →
                    </Link>

                    <button
                      onClick={() => removeBookmark(news.id)}
                      aria-label={`Remove bookmark for ${news.title}`}
                      className="text-red-500 hover:text-red-700 transition"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Bookmark;
