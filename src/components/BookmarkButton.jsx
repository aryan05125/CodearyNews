import React, { useState, useEffect } from "react";

const BookmarkButton = ({ articleId }) => {
  const [bookmarked, setBookmarked] = useState(false);

  useEffect(() => {
    const bookmarks = JSON.parse(localStorage.getItem("bookmarks") || "[]");
    setBookmarked(bookmarks.includes(articleId));
  }, [articleId]);

  const toggleBookmark = () => {
    let bookmarks = JSON.parse(localStorage.getItem("bookmarks") || "[]");
    if (bookmarks.includes(articleId)) {
      bookmarks = bookmarks.filter((id) => id !== articleId);
      setBookmarked(false);
    } else {
      bookmarks.push(articleId);
      setBookmarked(true);
    }
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
  };

  return (
    <button
      onClick={toggleBookmark}
      className={`mt-4 px-4 py-2 rounded-md font-semibold transition ${
        bookmarked ? "bg-yellow-400 text-black" : "bg-gray-700 text-white"
      } hover:bg-yellow-400 hover:text-black`}
      aria-pressed={bookmarked}
    >
      {bookmarked ? "Bookmarked" : "Bookmark"}
    </button>
  );
};

export default BookmarkButton;
