import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { articlesData } from "../data/articlesData";
import ShareButtons from "../components/ShareButtons";
import BookmarkButton from "../components/BookmarkButton";
import RelatedArticles from "../components/RelatedArticles";
import ViewerReactions from "../components/ViewerReactions";

const HIGHLIGHT_WORDS = ["viral", "creativity", "social media", "controversy", "dance", "collab"];

const highlightText = (text) => {
  const regex = new RegExp(`(${HIGHLIGHT_WORDS.join("|")})`, "gi");
  return text.split(regex).map((part, i) =>
    HIGHLIGHT_WORDS.some((word) => word.toLowerCase() === part.toLowerCase()) ? (
      <span key={i} className="text-yellow-400 font-semibold">
        {part}
      </span>
    ) : (
      part
    )
  );
};

const Article = () => {
  const { id } = useParams();
  const article = articlesData.find((a) => a.id === id);

  const [darkReadingMode, setDarkReadingMode] = useState(false);

  if (!article) {
    return <p className="text-center mt-20">Article not found.</p>;
  }

  const relatedArticles = articlesData.filter((a) => article.relatedIds.includes(a.id));

  const currentUrl = window.location.href;

  return (
    <div
      className={`max-w-4xl mx-auto p-6 rounded-lg transition-colors duration-500 ${
        darkReadingMode ? "bg-gray-900 text-yellow-300" : "bg-white text-gray-900"
      }`}
    >
      {/* Toggle Reading Mode */}
      <button
        onClick={() => setDarkReadingMode((prev) => !prev)}
        className="mb-6 px-4 py-2 rounded-md border border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black transition"
      >
        {darkReadingMode ? "Light Reading Mode" : "Dark Reading Mode"}
      </button>

      {/* Title */}
      <h1 className="text-4xl font-bold mb-4">{article.title}</h1>

      {/* Meta */}
      <div className="flex flex-wrap gap-4 text-sm text-gray-500 dark:text-yellow-400 mb-6">
        <span>By {article.author}</span>
        <span>{article.date}</span>
        {article.tags.map((tag) => (
          <span
            key={tag}
            className="bg-yellow-400 text-black px-2 rounded-full font-semibold"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Image */}
      <img
        src={article.imageUrl}
        alt={article.title}
        className="w-full rounded-lg mb-6 object-cover max-h-96 mx-auto"
      />

      {/* Content */}
      <p className="leading-relaxed text-lg">{highlightText(article.content)}</p>

      {/* Share & Bookmark */}
      <div className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-center mt-6 gap-4">
        <ShareButtons url={currentUrl} />
        <BookmarkButton articleId={article.id} />
      </div>

      {/* Related Articles */}
      <RelatedArticles articles={relatedArticles} />

      {/* Viewer Reactions */}
      <ViewerReactions />
    </div>
  );
};

export default Article;
