import React, { useState } from "react";
import { format, parseISO } from "date-fns";

const fixtures = [
  {
    id: 1,
    date: "2025-04-25",
    time: "16:00",
    homeTeam: "FC Kallon",
    awayTeam: "East End Lions",
    venue: "SKD Stadium",
    status: "Upcoming",
    score: "0 - 0",
  },
  {
    id: 2,
    date: "2025-04-20",
    time: "16:00",
    homeTeam: "Kamboi Eagles",
    awayTeam: "FC Kallon",
    venue: "Kenema Field",
    status: "Completed",
    score: "1 - 2",
  },
  {
    id: 3,
    date: "2025-05-02",
    time: "18:00",
    homeTeam: "FC Kallon",
    awayTeam: "Ports Authority",
    venue: "SKD Stadium",
    status: "Upcoming",
    score: "0 - 0",
  },
];

// Helper to extract month string like "April 2025"
const getMonthYear = (date) => format(parseISO(date), "MMMM yyyy");

const FixturesPage = () => {
  const [statusFilter, setStatusFilter] = useState("All");
  const [monthFilter, setMonthFilter] = useState("All");

  const allMonths = [
    ...new Set(fixtures.map((f) => getMonthYear(f.date))),
  ].sort();

  const filteredFixtures = fixtures.filter((fixture) => {
    const matchStatus =
      statusFilter === "All" || fixture.status === statusFilter;
    const matchMonth =
      monthFilter === "All" || getMonthYear(fixture.date) === monthFilter;
    return matchStatus && matchMonth;
  });

  return (
    <div className="bg-gray-100 min-h-screen pt-10">
      {/* Header */}
      <div className="relative bg-blue-900 text-white py-10 px-4 md:px-16 shadow-lg">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-center">
          📅 FC Kallon Fixtures & Results
        </h1>
        <p className="text-center mt-1 text-gray-300 text-sm md:text-base">
          Follow FC Kallon's upcoming games and past performances
        </p>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap justify-center gap-4 mt-6 px-4">
        {/* Status Filter */}
        {["All", "Upcoming", "Completed"].map((status) => (
          <button
            key={status}
            onClick={() => setStatusFilter(status)}
            className={`px-3 py-1 rounded-full text-sm font-medium transition ${
              statusFilter === status
                ? "bg-blue-800 text-white"
                : "bg-white text-blue-800 border border-blue-600"
            }`}
          >
            {status}
          </button>
        ))}

        {/* Month Filter Dropdown */}
        <select
          value={monthFilter}
          onChange={(e) => setMonthFilter(e.target.value)}
          className="px-3 py-1 rounded-full border text-sm bg-white text-blue-800 border-blue-600"
        >
          <option value="All">All Months</option>
          {allMonths.map((month) => (
            <option key={month} value={month}>
              {month}
            </option>
          ))}
        </select>
      </div>

      {/* Fixtures List */}
      <div className="py-6 px-4 md:px-10">
        <div className="grid gap-4 max-w-4xl mx-auto">
          {filteredFixtures.map((fixture) => (
            <div
              key={fixture.id}
              className={`p-3 md:p-4 rounded-xl shadow border-l-4 text-sm ${
                fixture.status === "Upcoming"
                  ? "border-blue-600 bg-white"
                  : "border-gray-500 bg-gray-200"
              }`}
            >
              <div className="flex justify-between text-xs text-gray-500 mb-1">
                <span>
                  {fixture.date} | {fixture.time}
                </span>
                <span className="font-medium text-gray-600">
                  {fixture.status}
                </span>
              </div>

              <div className="flex justify-between items-center font-semibold text-gray-800 text-sm">
                <span>{fixture.homeTeam}</span>
                <span className="text-blue-700 font-bold text-base">
                  {fixture.score}
                </span>
                <span>{fixture.awayTeam}</span>
              </div>

              <div className="mt-1 text-xs text-gray-600">
                🏟 Venue:{" "}
                <span className="font-medium">{fixture.venue}</span>
              </div>
            </div>
          ))}

          {filteredFixtures.length === 0 && (
            <div className="text-center text-gray-500 text-sm">
              No matches found for selected filters.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FixturesPage;
