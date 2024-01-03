/* eslint-disable */
import React, { useState, useEffect } from "react";
import StreamInfo from "../components/StreamInfo";
import PlayerStats from "../components/PlayerStats";
import LineChartComponent from "../components/LineChartComponent";
import DonutChartComponent from "../components/DonutChartComponent";
import PieChartComponent from "../components/PieChartComponent";
import BarGraphComponent from "../components/BarGraphComponent";
import TimeOfDayStats from "../components/TimeOfDayStats";
import NavBar from "../components/NavBar";

import { StatProvider } from "../context/StatContext";
import SplineLineChart from "../components/SplineLineChart";

function AdminStats() {
  return (
    <>
      <NavBar />
      <StatProvider>
        <div className="flex flex-col items-center font-['Poppins']">
          <div className=" w-[80%] flex flex-col justify-center gap-6">
            <h1 className=" w-full text-3xl font-semibold text-center uppercase underline">
              Game statistics
            </h1>
            <div className="flex justify-between">
              <PlayerStats />
              <TimeOfDayStats />
            </div>
            <div className="flex w-full gap-4 ">
              <div className="shadow-gray-400 shadow-md rounded-xl">
                <h1 className="text-md capitalize font-bold m-4">
                  All Time Win % per color
                </h1>
                <DonutChartComponent />
              </div>
              <div className="shadow-gray-400 shadow-md rounded-xl w-[40%]">
                <h1 className="text-md capitalize font-bold m-4">
                  All Time Player Activity
                </h1>
                {/* <BarGraphComponent /> */}
                <SplineLineChart />
              </div>
              <div className="shadow-gray-400 shadow-md rounded-xl ">
                <h1 className="text-md capitalize font-bold m-4">
                  All Time percentage of wins vs. losses
                </h1>
                <PieChartComponent />
              </div>
            </div>
            {/* <div className="p-3 flex-1 shadow-gray-400 shadow-md rounded-xl">
              <LineChartComponent />
            </div> */}
          </div>
        </div>
      </StatProvider>
    </>
  );
}

export default AdminStats;
