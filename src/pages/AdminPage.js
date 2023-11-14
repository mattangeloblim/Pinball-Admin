/* eslint-disable */
import React, { useState, useEffect } from "react";
import OBSWebSocket from "obs-websocket-js";

import "../components/style.css";

import StreamInfo from "../components/StreamInfo";
import LiveStreamFrame from "../components/LiveStreamFrame";
import { AdminProvider } from "../context/AdminContext";
import AdminButtons from "../components/AdminButtons";
import NavBar from "../components/NavBar";
import axios from "axios"

const AdminPage = () => {
  const obsAddress = "ws://127.0.0.1:4455";
  const obs = new OBSWebSocket();


  const handleStartScenes = async () => {
    try {
      await obs.connect(obsAddress);
      console.log('Connected to OBS');

      await obs.call('SetCurrentSceneCollection', {
        'sceneCollectionName': 'Untitled 2'
      });

      await obs.call('SetCurrentProgramScene', {
        'sceneName': 'Game is Starting'
      })

      setTimeout(async () => {
        try {
          // Make the Axios request after the delay
          const response = await axios.post('http://localhost:8443/api/bettings/closed');
          console.log('API response:', response.data);

        } catch (error) {
          console.error('Error making API request:', error.message);
        }
      }, 90000);

    } catch (error) {
      console.error('Error connecting to OBS:', error.message);
    }
  };



  return (
    <>
      <NavBar />
      {/* <button className="p-4 bg-blue-500" onClick={handleEndScenes}>
        End Scenes
      </button> */}
      <AdminProvider obsAddress={obsAddress} obs={obs}>
        <div className=" h-screen flex flex-col items-center">
          <h1 className=" w-full text-3xl font-semibold text-center mb-5 underline">
            GAME LIVE STREAM MASTER CONTROLLER
          </h1>
          <div className=" flex flex-col ">
            <div className="flex justify-center ">
              <div className="flex justify-center items-center border-2 border-blue-600 w-[45%]">
                <LiveStreamFrame />
              </div>
              <AdminButtons />
              <button className="p-4 bg-blue-500 " onClick={handleStartScenes}>
                <p className="text-2xl font-bold text-white">Start Scenes</p>
              </button>
            </div>
            <h2 className=" w-full uppercase text-2xl font-bold text-center my-6">
              stream information:{" "}
            </h2>
            <StreamInfo />
          </div>
        </div>
      </AdminProvider>

    </>
  );
};

export default AdminPage;
