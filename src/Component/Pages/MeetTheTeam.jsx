import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import classNames from "classnames";
import { Dialog } from "@headlessui/react";
import Slider from "react-slick"; // Import the slick carousel
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar2 from "../Navigation/Navbar2";




const players = [
    {
        name: "Issac Caulker",
        position: "Goalkeeper",
        image: "/goalkeper.jpg",
        bio: "A reliable shot-stopper with great reflexes and experience.",
        age: 28,
        district: "Freetown",
        gamesPlayed: 50,
        goalsScored: 0,
        assists: 1,
        cleanSheets: 30,
        yellowCards: 3,
        redCards: 1,
    },
    {
        name: "David Sesay",
        position: "Defender",
        image: "/player1.jpg",
        bio: "A solid defender known for his tackling and aerial strength.",
        age: 25,
        district: "Bo",
        gamesPlayed: 70,
        goalsScored: 5,
        assists: 3,
        cleanSheets: 15,
        yellowCards: 4,
        redCards: 0,
    },
    {
        name: "Sulaiman Koroma",
        position: "Midfielder",
        image: "/player2.jpg",
        bio: "A creative midfielder with excellent vision and passing range.",
        age: 24,
        district: "Kenema",
        gamesPlayed: 60,
        goalsScored: 10,
        assists: 8,
        cleanSheets: 5,
        yellowCards: 2,
        redCards: 0,
    },
    {
        name: "Abdulai Kamara",
        position: "Forward",
        image: "/player3.jpg",
        bio: "A clinical forward with a knack for scoring goals in crucial moments.",
        age: 26,
        district: "Makeni",
        gamesPlayed: 55,
        goalsScored: 18,
        assists: 4,
        cleanSheets: 0,
        yellowCards: 1,
        redCards: 0,
    },
    {
        name: "Musa Bah",
        position: "Defender",
        image: "/player4.jpg",
        bio: "A tough and physical center-back who commands the defense.",
        age: 27,
        district: "Port Loko",
        gamesPlayed: 80,
        goalsScored: 2,
        assists: 1,
        cleanSheets: 40,
        yellowCards: 5,
        redCards: 0,
    },
    {
        name: "Musa Fofanah",
        position: "Goalkeeper",
        image: "/player5.jpg",
        bio: "A highly dependable goalkeeper with excellent reflexes and shot-stopping abilities.",
        age: 22,
        district: "Kono",
        gamesPlayed: 30,
        goalsScored: 0,
        assists: 0,
        cleanSheets: 10,
        yellowCards: 1,
        redCards: 0,
    },
    {
        name: "Ismaila Bangura",
        position: "Midfielder",
        image: "/player6.jpg",
        bio: "A box-to-box midfielder with an engine that never stops and excellent stamina.",
        age: 29,
        district: "Freetown",
        gamesPlayed: 65,
        goalsScored: 7,
        assists: 5,
        cleanSheets: 6,
        yellowCards: 3,
        redCards: 1,
    },
    {
        name: "Salifu Kargbo",
        position: "Forward",
        image: "/diabi.jpg",
        bio: "A dynamic forward with pace, skill, and the ability to finish in tight spaces.",
        age: 23,
        district: "Bo",
        gamesPlayed: 40,
        goalsScored: 12,
        assists: 3,
        cleanSheets: 0,
        yellowCards: 2,
        redCards: 0,
    },
    {
        name: "Ibrahim Kamara",
        position: "Defender",
        image: "/player4.jpg",
        bio: "A no-nonsense central defender with excellent positional awareness.",
        age: 30,
        district: "Kenema",
        gamesPlayed: 100,
        goalsScored: 3,
        assists: 1,
        cleanSheets: 50,
        yellowCards: 6,
        redCards: 2,
    },
    {
        name: "Alhaji Sesay",
        position: "Midfielder",
        image: "/player1.jpg",
        bio: "A creative playmaker known for his dribbling, passing, and ability to control the tempo.",
        age: 27,
        district: "Makeni",
        gamesPlayed: 55,
        goalsScored: 9,
        assists: 12,
        cleanSheets: 7,
        yellowCards: 4,
        redCards: 0,
    }
];

const staff = [
    { name: "Coach John Keister", role: "Head Coach", image: "/kallon.jpg" },
    { name: "Beta Kanu", role: "Physio", image: "/staff2.jpg" },
    { name: "Zainab Sesay", role: "Team Manager", image: "/staff1.jpg" },
    { name: "Mohamed Conteh", role: "Goalkeeper Trainer", image: "/staff3.jpg" },
];

const positions = ["All", "Goalkeeper", "Defender", "Midfielder", "Forward"];

const MeetTheTeam = () => {
    const [filter, setFilter] = useState("All");
    const [search, setSearch] = useState("");
    const [selectedPlayer, setSelectedPlayer] = useState(null);

    const filteredPlayers = players.filter(
        (p) =>
            (filter === "All" || p.position === filter) &&
            p.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <>
        <Navbar2/>
        <div className="px-4 sm:px-6 md:px-12 py-8 bg-white">
            <div className="text-center mb-10">
                <h1 className="text-3xl md:text-4xl font-bold text-blue-800">Meet the Team</h1>
                <p className="text-base md:text-lg text-gray-600 mt-2">Discover the Rangers' squad & staff</p>
            </div>

            <div className="mb-12 max-w-5xl mx-auto p-6 mt-12">
                <h2 className="text-xl md:text-2xl font-bold mb-6 text-green-800">🔧 Management & Staff</h2>

                <Slider
                    dots={true}
                    infinite={true}
                    speed={500}
                    slidesToShow={3}
                    slidesToScroll={1}
                    responsive={[
                        {
                            breakpoint: 1024,
                            settings: {
                                slidesToShow: 2,
                            },
                        },
                        {
                            breakpoint: 640,
                            settings: {
                                slidesToShow: 1,
                            },
                        },
                    ]}
                >
                    {staff.map((s, index) => (
                        <motion.div
                            key={index}
                            className="text-center border-t-4 border-yellow-500 p-4 bg-gray-50 rounded-lg shadow mx-2"
                            whileHover={{ scale: 1.05 }}
                        >
                            <img
                                src={s.image}
                                alt={s.name}
                                className="w-24 h-32 object-cover mx-auto mb-2 rounded-md shadow-md"
                            />
                            <h4 className="text-lg font-semibold">{s.name}</h4>
                            <p className="text-sm text-gray-600">{s.role}</p>
                        </motion.div>
                    ))}
                </Slider>
            </div>


            {/* Search & Filter */}
            <div className="flex flex-wrap justify-center gap-4 mb-6">
                <input
                    type="text"
                    placeholder="Search players..."
                    className="border px-4 py-2 rounded-full w-64 shadow-sm text-sm"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                {positions.map((pos) => (
                    <button
                        key={pos}
                        onClick={() => setFilter(pos)}
                        className={classNames(
                            "px-4 py-2 rounded-full border text-sm transition",
                            filter === pos
                                ? "bg-blue-700 text-white"
                                : "bg-white border-gray-300 text-gray-700 hover:bg-gray-100"
                        )}
                    >
                        {pos}
                    </button>
                ))}
            </div>

            {/* Player Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                <AnimatePresence>
                    {filteredPlayers.map((player, index) => (
                        <motion.div
                            key={index}
                            layout
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 20 }}
                            className="text-center bg-gray-50 p-4 rounded-lg shadow"
                            whileHover={{ y: -5, scale: 1.03 }}
                        >
                            <img
                                src={player.image}
                                alt={player.name}
                                className="w-24 h-32 object-cover mx-auto mb-2 rounded-md shadow-md"
                            />
                            <h4 className="text-lg font-semibold">{player.name}</h4>
                            <p className="text-sm text-gray-600">{player.position}</p>

                            {/* Read More Button */}
                            <button
                                onClick={() => setSelectedPlayer(player)}
                                className="mt-3 text-sm px-3 py-1 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition"
                            >
                                Read More
                            </button>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>

            {/* Player Modal */}
            <AnimatePresence>
                {selectedPlayer && (
                    <Dialog
                        open={true}
                        onClose={() => setSelectedPlayer(null)}
                        className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black bg-opacity-50"
                    >
                        <Dialog.Panel className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full relative">
                            <button
                                onClick={() => setSelectedPlayer(null)}
                                className="absolute top-2 right-2 text-gray-600 hover:text-red-600"
                            >
                                ✖
                            </button>
                            <img
                                src={selectedPlayer.image}
                                alt={selectedPlayer.name}
                                className="w-28 h-40 object-cover mx-auto mb-4 rounded-md shadow-md"
                            />
                            <h3 className="text-xl font-semibold text-center mb-1">{selectedPlayer.name}</h3>
                            <p className="text-center text-gray-500 mb-3">{selectedPlayer.position}</p>
                            <div className="space-y-2 mb-3">
                                <p><strong>Age:</strong> {selectedPlayer.age}</p>
                                <p><strong>District/Region:</strong> {selectedPlayer.district}</p>
                                <p><strong>Games Played:</strong> {selectedPlayer.gamesPlayed}</p>
                                <p><strong>Goals Scored:</strong> {selectedPlayer.goalsScored}</p>
                                <p><strong>Assists:</strong> {selectedPlayer.assists}</p>
                                <p><strong>Clean Sheets:</strong> {selectedPlayer.cleanSheets}</p>
                                <p><strong>Yellow Cards:</strong> {selectedPlayer.yellowCards}</p>
                                <p><strong>Red Cards:</strong> {selectedPlayer.redCards}</p>
                            </div>
                            <p className="text-sm text-gray-700 text-justify">{selectedPlayer.bio}</p>
                        </Dialog.Panel>
                    </Dialog>
                )}
            </AnimatePresence>
        </div>
        </>
    );
};

export default MeetTheTeam;
