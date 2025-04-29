import React from "react";
import { useParams, useNavigate } from "react-router-dom"; // ✅ import useNavigate
import {newsData} from "./NewsData"


export default function NewsDetails() {
    const { id } = useParams();
    const navigate = useNavigate(); // ✅ initialize navigate

    const article = newsData.find((item) => item.id === parseInt(id));

    if (!article) {
        return <div className="text-center text-red-500 py-10">News not found</div>;
    }

    return (
        <div className="max-w-4xl mx-auto p-6">
            <img
                src={article.image}
                alt={article.title}
                className="w-full h-64 object-cover rounded-lg mb-6
                md:w-2/3 md:mx-auto md:object-contain
                border border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-300"
            />

            <h1 className="text-3xl font-bold text-green-700 mb-2">{article.title}</h1>
            <p className="text-sm text-gray-500 mb-4">{article.date}</p>

            {/* Preserve paragraph breaks and spacing */}
            <div className="text-gray-700 leading-loose mb-6" style={{ whiteSpace: 'pre-wrap', wordWrap: 'break-word' }}>
                {article.content}
            </div>

            {/* ✅ Back button */}
            <button
                onClick={() => navigate(-1)}
                className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md transition duration-200"
            >
                ← Back to News
            </button>
        </div>
    );
}
