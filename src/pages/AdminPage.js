/* eslint-disable */
import React, { useState, useEffect } from "react";
import OBSWebSocket from "obs-websocket-js";

import "../components/style.css";

import StreamInfo from "../components/StreamInfo";
import LiveStreamFrame from "../components/LiveStreamFrame";
import { AdminProvider } from "../context/AdminContext";
import AdminButtons from "../components/AdminButtons";
import NavBar from "../components/NavBar";
import axios from "axios";
import LiveChat from "../components/LiveChat";

const AdminPage = () => {
  const obsAddress = process.env.REACT_APP_OBS_URL;
  const obs = new OBSWebSocket();

  const handleStartScenes = async () => {
    try {
      await obs.connect(obsAddress);
      console.log("Connected to OBS");

      await obs.call("SetCurrentSceneCollection", {
        sceneCollectionName: "PINBALL SCENES",
      });

      await obs.call("SetCurrentProgramScene", {
        sceneName: "Game is Starting",
      });

      setTimeout(async () => {
        try {
          // Make the Axios request after the delay
          const response = await axios.post(
            "https://54.254.174.201/api/bettings/closed"
          );
          console.log("API response:", response.data);
        } catch (error) {
          console.error("Error making API request:", error.message);
        }
      }, 30000);
    } catch (error) {
      console.error("Error connecting to OBS:", error.message);
    }
  };

  return (
    <AdminProvider obsAddress={obsAddress} obs={obs}>
      <div className="flex flex-col items-center font-['Poppins'] py-10">
        <h1 className=" w-full text-2xl font-semibold text-center mb-5 uppercase">
          live stream master controller
        </h1>
        <div className=" flex flex-col w-[80%] ">
          <div className="flex  justify-center max-h-[55vh] gap-4 ">
            <div className="live-chat-container flex-1 ">
              <LiveChat />
            </div>
            <div className="flex flex-col justify-between gap-2 items-center  w-[50%]">
              <LiveStreamFrame />
              <button
                className="p-4 bg-blue-500 text-xl font-bold font-['Poppins'] uppercase text-white rounded-lg"
                onClick={handleStartScenes}
              >
                start game
              </button>
            </div>
            <div className="gameId-container flex-1 ">
              <AdminButtons />
            </div>
          </div>
          <h2 className=" w-full uppercase text-xl font-bold text-center my-6">
            stream information:
          </h2>
          <StreamInfo />
        </div>
      </div>
    </AdminProvider>
  );
};

export default AdminPage;
