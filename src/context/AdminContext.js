/* eslint-disable */
import React, { useState, useEffect, createContext, useContext } from "react";

import { postGenerateResult } from "../services/postGenerateResult";

const initialState = {
  obsAddress: "",
  obs: null,
  colorName: [],
  colorHex: [],
  timeoutId: null,
  winningColor: "",
  gameId: null,
  redButton: false,
  greenButton: false,
  yellowButton: false,
  blueButton: false,
  violetButton: false,
  orangeButton: false,
  pinkButton: false,
  cyanButton: false,
  goldButton: false,
  setTimeoutId: () => {},
  setWinningColor: () => {},
  setGameId: () => {},
  setRedButton: () => {},
  setGreenButton: () => {},
  setYellowButton: () => {},
  setBlueButton: () => {},
  setVioletButton: () => {},
  setOrangeButton: () => {},
  setPinkButton: () => {},
  setCyanButton: () => {},
  setGoldButton: () => {},
  handleGenerateResult: () => {},
  buttonVisibilityHandler: () => {},
};

//create initial context
const AdminContext = createContext(initialState);

export const AdminProvider = ({ children, obsAddress, obs }) => {
  const [timeoutId, setTimeoutId] = useState(null);
  const [winningColor, setWinningColor] = useState("");
  const [gameId, setGameId] = useState(null);

  const colorName = [
    "Red",
    "Blue",
    "Yellow",
    "Green",
    "Gold",
    "Violet",
    "Orange",
    "Pink",
    "Cyan",
  ];

  const colorHex = [
    "#ED3130",
    "#276ADD",
    "#F4FF63",
    "#56DE33",
    "#FFD700",
    "#9A3FBC",
    "#F08F40",
    "#DC63D0",
    "#33C5ED",
  ];

  const [redButton, setRedButton] = useState(false);
  const [greenButton, setGreenButton] = useState(false);
  const [yellowButton, setYellowButton] = useState(false);
  const [blueButton, setBlueButton] = useState(false);
  const [violetButton, setVioletButton] = useState(false);
  const [orangeButton, setOrangeButton] = useState(false);
  const [pinkButton, setPinkButton] = useState(false);
  const [cyanButton, setCyanButton] = useState(false);
  const [goldButton, setGoldButton] = useState(false);

  //connect to obs websocket
  useEffect(() => {
    (async () => {
      try {
        await obs.connect(obsAddress);
        console.log(`Connected to OBS`);

        const buttons = [
          { sceneItemId: 4, sceneItemEnabled: redButton },
          { sceneItemId: 5, sceneItemEnabled: greenButton },
          { sceneItemId: 6, sceneItemEnabled: yellowButton },
          { sceneItemId: 7, sceneItemEnabled: blueButton },
          { sceneItemId: 8, sceneItemEnabled: violetButton },
          { sceneItemId: 9, sceneItemEnabled: orangeButton },
          { sceneItemId: 10, sceneItemEnabled: pinkButton },
          { sceneItemId: 11, sceneItemEnabled: cyanButton },
          { sceneItemId: 12, sceneItemEnabled: goldButton },
        ];

        await Promise.all(
          buttons.map(async (button) => {
            await obs.call("SetSceneItemEnabled", {
              sceneName: "Results n Rewards",
              ...button,
            });
          })
        );
      } catch (error) {
        console.error("Failed to connect", error.code, error.message);
      }
    })();
  }, [
    redButton,
    greenButton,
    yellowButton,
    blueButton,
    violetButton,
    orangeButton,
    pinkButton,
    cyanButton,
    goldButton,
  ]);

  const handleGenerateResult = async (index) => {
    try {
      const winningColor = colorName[index];

      const response = await postGenerateResult(winningColor);

      const gameIdResult = response.newGameResult.game_id;
      setGameId(gameIdResult);

      // const currentGameId = response.currentGameId;
      // console.log("current game id: ", currentGameId);
      // setGameId(currentGameId);

      //console log
      console.log(winningColor, gameIdResult);
    } catch (error) {
      console.error("Error:", error.message);
      window.alert(
        "An error occurred while generating the result. Please try again later."
      );
    }
  };

  const buttonVisibilityHandler = (color, index) => {
    // console.log(color);
    setWinningColor(colorHex[index]);
    const buttonStates = {
      red: setRedButton,
      green: setGreenButton,
      yellow: setYellowButton,
      blue: setBlueButton,
      violet: setVioletButton,
      orange: setOrangeButton,
      pink: setPinkButton,
      cyan: setCyanButton,
      gold: setGoldButton,
    };

    Object.keys(buttonStates).forEach((buttonColor) => {
      buttonStates[buttonColor](buttonColor === color);
    });

    // Clear previous timeout, if any
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    // Set a new timeout
    const newTimeoutId = setTimeout(() => {
      Object.keys(buttonStates).forEach((buttonColor) => {
        buttonStates[buttonColor](false);
      });
    }, 5000);

    // Store the new timeout ID
    setTimeoutId(newTimeoutId);
  };

  obs.once("ExitStarted", () => {
    console.log("OBS started shutdown");

    // Just for example, not necessary should you want to reuse this instance by re-connect()
    obs.off("CurrentProgramSceneChanged", onCurrentSceneChanged);
  });

  return (
    <AdminContext.Provider
      value={{
        colorName,
        colorHex,
        timeoutId,
        winningColor,
        gameId,
        redButton,
        greenButton,
        yellowButton,
        blueButton,
        violetButton,
        orangeButton,
        pinkButton,
        cyanButton,
        goldButton,
        setTimeoutId,
        setWinningColor,
        setGameId,
        setRedButton,
        setGreenButton,
        setYellowButton,
        setBlueButton,
        setVioletButton,
        setOrangeButton,
        setPinkButton,
        setCyanButton,
        setGoldButton,
        handleGenerateResult,
        buttonVisibilityHandler,
      }}
    >
      {children}
    </AdminContext.Provider>
  );
};

//create the useContext
const useAdminContext = () => {
  const context = useContext(AdminContext);

  if (context === undefined) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
};

export default useAdminContext;
