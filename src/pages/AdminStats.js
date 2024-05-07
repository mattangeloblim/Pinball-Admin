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
    <StatProvider>
      <div className="flex flex-col items-center font-['Poppins'] py-10">
        <div className=" w-[90%] flex flex-col justify-center gap-6">
          <h1 className=" w-full text-2xl font-semibold text-center mb-5 uppercase">
            Game statistics
          </h1>
          <div className="flex justify-between">
            <PlayerStats />
            <TimeOfDayStats />
          </div>
          <div className="flex w-full gap-2">
            <div className="shadow-gray-400 shadow-md rounded-xl flex-1">
              <h1 className="text-md capitalize font-bold m-4">
                All Time Win % per color
              </h1>
              <DonutChartComponent />
            </div>
            <div className="shadow-gray-400 shadow-md rounded-xl flex-1">
              <h1 className="text-md capitalize font-bold m-4">
                All Time Player Activity
              </h1>
              {/* <BarGraphComponent /> */}
              <SplineLineChart />
            </div>
            <div className="shadow-gray-400 shadow-md rounded-xl flex-1">
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
  );
}

export default AdminStats;
