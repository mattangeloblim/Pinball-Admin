/* eslint-disable */
import React, { useState, useEffect } from "react";
import OBSWebSocket from "obs-websocket-js";

import "../components/style.css";

import StreamInfo from "../components/StreamInfo";
import LiveStreamFrame from "../components/LiveStreamFrame";
import { AdminProvider } from "../context/AdminContext";
import AdminButtons from "../components/AdminButtons";
import NavBar from "../components/NavBar";

const AdminPage = () => {
  const obsAddress = "ws://127.0.0.1:4455";
  const obs = new OBSWebSocket();

  return (
    <>
      <NavBar />
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
