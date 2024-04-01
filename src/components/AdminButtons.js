/* eslint-disable */
import React, { useEffect, useState } from "react";
import "./style.css";

import { Button } from "@mui/material";

import useAdminContext from "../context/AdminContext";

const Modal = ({ color, isOpen, onClose, onConfirm }) => {
  const colorNames = {
    "#ED3130": "Red",
    "#276ADD": "Blue",
    "#F4FF63": "Yellow",
    "#56DE33": "Green",
    "#FFD700": "Gold",
    "#9A3FBC": "Purple",
    "#F08F40": "Orange",
    "#DC63D0": "Pink",
    "#33C5ED": "Cyan",
  };

  const colorName = colorNames[color] || color;

  return (
    <div
      className={`fixed top-0 left-0 w-full h-full flex items-center justify-center ${
        isOpen ? "" : "hidden"
      }`}
    >
      <div className="absolute w-full h-full bg-gray-800 opacity-50"></div>
      <div className="z-10 w-1/4 bg-white rounded p-8 text-center">
        <p className="mb-4">
          Please confirm that the winning color is <strong>{colorName}</strong>.
        </p>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          onClick={() => {
            onConfirm();
            onClose();
          }}
        >
          Confirm
        </button>
        <button
          className="ml-2 bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isBlinking, setIsBlinking] = useState(false);
  // const [currentGameId, setCurrentGameId] = useState(null);

  //disable other buttons for 5 sec after button click
  const handleButtonClick = (color, index) => {
    if (!isClicked) {
      setIsClicked(true);
      setClickedIndex(index);
      openModal(color);
    }
  };

  const openModal = (color) => {
    setWinningColor(color);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    // Reset state after closing the modal
    setIsClicked(false);
    setClickedIndex(null);
    // setWinningColor("")
  };

  const confirmAndGenerateResult = () => {
    const color = colorHex[clickedIndex];
    buttonVisibilityHandler(color, clickedIndex);
    handleGenerateResult(clickedIndex);
    setWinningColor(color);
    // Close the modal
    setIsModalOpen(false);
    setIsBlinking(true);
    setTimeout(() => {
      setIsBlinking(false);
    }, 5000);
  };

  return (
    <div className=" flex flex-col gap-2 p-2 justify-center border-2 border-black rounded-lg">
      <h1
        className={`uppercase text-xl font-bold text-center ${
          isBlinking ? "blink-animation" : ""
        }`}
      >
        game id: <span>{gameId}</span>
      </h1>
      <h1 className="uppercase text-lg font-bold text-start">
        select the winning color to be displayed:
      </h1>
      <div className="grid grid-cols-3 gap-2">
        {colorHex.map((color, index) => (
          <Button
            key={index}
            variant="contained"
            className={color === "gold" ? "col-span-4" : ""}
            style={{
              border: clickedIndex === index ? "2px solid black" : "none",
              fontSize: "1.5rem",
              backgroundColor: color,
              height: 70,
              width: 120,
            }}
            onClick={() => handleButtonClick(color, index)}
          ></Button>
        ))}
      </div>
      <div
        className={`flex justify-center items-center gap-4 m-6 ${
          isBlinking ? "blink-animation" : ""
        }`}
      >
        <h2 className="uppercase font-bold text-md text-center">
          winning color:
        </h2>
        <div
          className="w-32 h-12 rounded-md"
          style={{ backgroundColor: winningColor }}
        ></div>
      </div>
      <Modal
        color={winningColor}
        isOpen={isModalOpen}
        onClose={closeModal}
        onConfirm={confirmAndGenerateResult}
      />
    </div>
  );
}

export default AdminButtons;
