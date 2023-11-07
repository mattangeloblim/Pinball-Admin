import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

function NavBar() {
  const [clickedIndex, setClickedIndex] = useState(0);
  const linkName = [
    "live",
    "stats",
    "search",
    "bets",
    "history",
    "transaction",
  ];
  const links = [
    "/live",
    "/stats",
    "/search",
    "/bets",
    "/history",
    "/transaction",
  ];
  const location = useLocation();

  //stay on the nav link of the current page when reload
  useEffect(() => {
    const currentPath = location.pathname;
    const defaultIndex = links.findIndex((link) => link === currentPath);
    setClickedIndex(defaultIndex);
  }, [location]);

  return (
    <div className="flex items-center justify-center mb-10">
      <div className="border-b-2 border-black w-[95%] flex items-center justify-center">
        <div className=" p-6 text-2xl font-semibold uppercase text-gray-500">
          {linkName.map((link, key) => (
            <Link
              to={links[key]}
              className="px-4 py-2 mx-2 rounded-lg"
              style={{
                color: clickedIndex === key ? "black" : "inherit",
                backgroundColor: clickedIndex === key ? "lightgray" : "inherit",
              }}
              onClick={() => setClickedIndex(key)} // Set the clicked index
              key={key}
            >
              {link}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default NavBar;
