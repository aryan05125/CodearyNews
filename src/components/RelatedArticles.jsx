import React from "react";
import { Link } from "react-router-dom";

const RelatedArticles = ({ articles }) => {
  if (!articles.length) return null;

  return (
    <section className="mt-12">
      <h3 className="text-xl font-semibold mb-4">Related Articles</h3>
      <div className="flex overflow-x-auto gap-4">
        {articles.map((article) => (
          <Link
            key={article.id}
            to={`/article/${article.id}`}
            className="min-w-[250px] bg-gray-900 rounded-lg overflow-hidden shadow-md hover:shadow-yellow-400 transition"
          >
            <img
              src={article.imageUrl}
              alt={article.title}
              className="h-36 w-full object-cover"
            />
            <div className="p-3 text-white">
              <h4 className="font-semibold text-lg">{article.title}</h4>
              <p className="text-sm text-gray-400">{article.date}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default RelatedArticles;
