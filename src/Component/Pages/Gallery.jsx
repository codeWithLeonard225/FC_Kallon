import React, { useState } from "react";
import Navbar2 from "../Navigation/Navbar2";

const imageData = [
  {
    src: "/fckallonTraining.jpg", ///gallery/goal.jpg
    caption: "Winning Goal – Final Match",
    date: "March 3, 2025",
  },
  {
    src: "/player1.jpg",  ///gallery/team-celebration.jpg
    caption: "Team Celebrating Victory",
    date: "Feb 20, 2025",
  },
  {
    src: "/player3.jpg",   ///gallery/fans.jpg
    caption: "Loyal Fans in the Stands",
    date: "Jan 15, 2025",
  },
  {
    src: "/player4.jpg",  ///gallery/training.jpg
    caption: "Focused Training Session",
    date: "Feb 5, 2025",
  },
  {
    src: "/player2.jpg",  ///gallery/trophy.jpg
    caption: "Lifting the Championship Trophy",
    date: "March 4, 2025",
  },
  {
    src: "/diabi.jpg",  ///gallery/matchday.jpg
    caption: "Matchday Ready!",
    date: "Feb 28, 2025",
  },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <>
    <Navbar2/>
    <div className="bg-gray-100 min-h-screen py-10 px-4">
      <h1 className="text-3xl md:text-4xl font-bold text-center text-blue-700 mb-6">
        FC Kallon Gallery
      </h1>
      <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10">
        Explore some of our proudest moments, captured for eternity.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {imageData.map(({ src, caption, date }, index) => (
          <div
            key={index}
            onClick={() => setSelectedImage({ src, caption, date })}
            className="cursor-pointer overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-transform hover:scale-105 bg-white"
          >
            <img src={src} alt={caption} className="w-full h-64 object-cover" />
            <div className="p-3 text-center">
              <p className="font-semibold text-gray-700">{caption}</p>
              <p className="text-sm text-gray-500">{date}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative bg-white rounded-lg overflow-hidden max-w-2xl shadow-lg">
            <img
              src={selectedImage.src}
              alt={selectedImage.caption}
              className="w-full object-cover max-h-[80vh]"
            />
            <div className="p-4 text-center">
              <h2 className="text-lg font-bold text-gray-800">{selectedImage.caption}</h2>
              <p className="text-sm text-gray-500">{selectedImage.date}</p>
              <button
                onClick={() => setSelectedImage(null)}
                className="mt-4 text-red-500 hover:underline"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
    </>
  );
};

export default Gallery;
