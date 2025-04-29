import React from "react";
import { Link } from "react-router-dom";
import {newsData} from "./NewsData"


const News = () => {
  return (
    <div id="news" className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-green-700 mb-6">FC Kallon News</h1>
      <div className="grid md:grid-cols-3 gap-6">
        {newsData.map(({ id, title, date, image, snippet }) => (
          <div key={id} className="bg-white shadow-md rounded-lg overflow-hidden">
            <img src={image} alt={title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-lg font-semibold text-gray-800 mb-1">{title}</h2>
              <p className="text-sm text-gray-500 mb-2">{date}</p>
              <p className="text-sm text-gray-700 mb-3">{snippet}</p>
              <Link
                to={`/news-details/${id}`}
                className="text-blue-600 hover:underline text-sm font-medium"
              >
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;
