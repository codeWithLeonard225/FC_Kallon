import React, { useState } from "react";
import { motion } from "framer-motion";
import { backgroundImageStyle } from "./AboutData";

const formations = {
  default: [[1], [4], [4], [2]], // GK, DEF, MID, ATT
  attack: [[1], [3], [4], [3]],
  defend: [[1], [5], [4], [1]],
};

const formationNumbers = {
  default: "4-4-1-1",
  attack: "3-4-3",
  defend: "5-2-2_1",
};

// Special movement styles
const getCustomStyle = (formation, playerNumber) => {
  if (formation === "default") {
    if (playerNumber === 6 || playerNumber === 9 || playerNumber === 7 || playerNumber === 8) {
      return { marginTop: "-50px" }; // Move midfielders 6 and 7 up
    }
    if (playerNumber === 2 || playerNumber === 3 || playerNumber === 4 || playerNumber === 5) {
      return { marginTop: "-50px" }; // Move midfielders 6 and 7 up
    }
    if (playerNumber === 10 ) {
      return { marginTop: "-50px",  }; // Move midfielders 6 and 7 up
    }
  }

  if (formation === "attack") {
    if (playerNumber === 9 || playerNumber === 10 || playerNumber === 11) {
      return { marginTop: "25px" }; // Move wide forwards up
    }
  }
  if (formation === "defend") {
    if ( playerNumber === 3 || playerNumber === 4 || playerNumber === 5) {
      return { marginTop: "-50px" }; // Move midfielders 6 and 7 up
    }
    if ( playerNumber === 8 || playerNumber === 9 ) {
      return { marginTop: "-50px" }; // Move midfielders 6 and 7 up
    }
  }

  return {}; // Default no adjustment
};

const FormationField = ({ formation }) => {
  const layout = formations[formation];
  let playerCounter = 1;

  return (
    <div
      className="w-full max-w-xl h-[400px] rounded-xl p-4 flex flex-col justify-between border-4 border-white shadow-inner"
      style={{ ...backgroundImageStyle, backgroundColor: "rgba(0, 0, 0, 0.4)" }}
    >
      {layout.map((line, rowIndex) => (
        <div key={rowIndex} className="flex justify-center gap-3">
          {Array.from({ length: line[0] }).map((_, i) => {
            const playerNumber = playerCounter++;
            const customStyle = getCustomStyle(formation, playerNumber);

            return (
              <motion.div
              key={i}
              layout
              transition={{ duration: 0.5, type: "spring" }}
              className={`w-10 h-10 ${playerNumber === 1 ? "bg-yellow-400" : "bg-white"} border-2 border-gray-800 rounded-full flex items-center justify-center font-semibold text-gray-800 shadow-md`}
              style={customStyle}
            >
              {playerNumber === 1 ? "GK" : playerNumber}
            </motion.div>
            
            );
          })}
        </div>
      ))}
    </div>
  );
};

const About = () => {
  const [formation, setFormation] = useState("default");
  const [selectedFormationNumber, setSelectedFormationNumber] = useState(null);

  const handleFormation = (type) => {
    setFormation(type);
    setSelectedFormationNumber(formationNumbers[type]);
  };

  return (
    <section className="bg-gray-100 py-10">
      <h1 className="pt-10 text-4xl font-extrabold text-center text-blue-900 mb-10 uppercase tracking-wide">
        About FC Kallon
      </h1>

      <div id="about" className="flex flex-col md:flex-row px-6 md:px-16 gap-10 max-w-screen-xl mx-auto">
        {/* Left Section - Club History */}
        <div className="md:w-7/12 space-y-6">
          <h2 className="text-3xl font-bold text-blue-800">🏆 Club History</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            FC Kallon, founded by the legendary Mohamed Kallon, is one of Sierra Leone's most iconic football clubs.
            Born out of a passion for excellence and community upliftment, FC Kallon has rapidly risen to prominence, becoming a powerhouse of talent and ambition.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            With a mission to develop the next generation of football stars, FC Kallon symbolizes resilience, unity, and relentless pursuit of greatness both on and off the field.
            Our journey is filled with inspiring victories, unforgettable memories, and a commitment to the beautiful game.
          </p>
        </div>

        {/* Right Section - Club Formation Animation */}
        <div className="md:w-5/12 flex flex-col items-center">
          <h2 className="text-3xl font-bold text-green-700 mb-4">⚙️ Club Formation</h2>

          {/* Buttons */}
          <div className="flex gap-4 mb-6">
            {["default", "attack", "defend"].map((type) => (
              <div className="flex flex-col items-center" key={type}>
                <button
                  onClick={() => handleFormation(type)}
                  className={`${
                    type === "default"
                      ? "bg-blue-700 hover:bg-blue-900"
                      : type === "attack"
                      ? "bg-green-700 hover:bg-green-900"
                      : "bg-red-700 hover:bg-red-900"
                  } text-white px-4 py-2 rounded transition duration-300 ease-in-out transform hover:scale-105`}
                >
                  {type.charAt(0).toUpperCase() + type.slice(1)}
                </button>
                {selectedFormationNumber === formationNumbers[type] && (
                  <span className="text-sm text-gray-600 mt-1">
                    {formationNumbers[type]}
                  </span>
                )}
              </div>
            ))}
          </div>

          {/* Formation Field */}
          <FormationField formation={formation} />
        </div>
      </div>
    </section>
  );
};

export default About;
