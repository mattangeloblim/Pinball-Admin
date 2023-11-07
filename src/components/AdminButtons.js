/* eslint-disable */
import React, { useEffect, useState } from "react";

import { Button } from "@mui/material";

import useAdminContext from "../context/AdminContext";

function AdminButtons() {
  const {
    colorHex,
    winningColor,
    gameId,
    setWinningColor,
    handleGenerateResult,
    buttonVisibilityHandler,
  } = useAdminContext();

  const [isClicked, setIsClicked] = useState(false);
  const [clickedIndex, setClickedIndex] = useState(null);
  // const [currentGameId, setCurrentGameId] = useState(null);

  //disable other buttons for 5 sec after button click
  const handleButtonClick = (color, index) => {
    if (!isClicked) {
      buttonVisibilityHandler(color, index);
      handleGenerateResult(index);
      setIsClicked(true);
      setClickedIndex(index);

      setTimeout(() => {
        setIsClicked(false);
        setClickedIndex(null);
        setWinningColor("");
      }, 5000);
    }
  };

  // useEffect(() => {
  //   setCurrentGameId(gameId);
  // }, [gameId]);
  return (
    <div className="border-2 border-blue-600 flex flex-col justify-center">
      <h1 className="m-6 uppercase text-3xl font-bold text-center">
        game id: <span>{gameId}</span>
      </h1>
      <h1 className="m-6 uppercase text-lg font-bold text-start">
        select the winning color to be displayed:
      </h1>
      <div className="grid grid-cols-4 gap-2 mx-4">
        {colorHex.map((color, index) => (
          <Button
            key={index}
            variant="contained"
            className={color === "gold" ? "col-span-4" : ""}
            style={{
              border: clickedIndex === index ? "2px solid black" : "none",
              fontSize: "1.5rem",
              backgroundColor: color,
              height: 75,
              width: 150,
            }}
            onClick={() => handleButtonClick(color, index)}
          ></Button>
        ))}
      </div>
      <div className="flex justify-center items-center gap-4 m-6 ">
        <h2 className="uppercase font-bold text-md text-center">
          winning color:
        </h2>
        <div
          className="w-32 h-12 rounded-md"
          style={{ backgroundColor: winningColor }}
        ></div>
      </div>
    </div>
  );
}

export default AdminButtons;
