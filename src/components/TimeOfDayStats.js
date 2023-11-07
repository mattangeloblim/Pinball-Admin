/* eslint-disable */
import React, { useEffect } from "react";

import GroupIcon from "@mui/icons-material/Group";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import QueryStatsIcon from "@mui/icons-material/QueryStats";

import useStatContext from "../context/StatContext";

function TimeOfDayStats() {
  const { todaysBetNumber, avgTodayBet, popularColor, todayUserNumber } =
    useStatContext();

  // useEffect(() => {
  //   console.log(avgTodayBet);
  // }, [avgTodayBet]);
  return (
    <div className=" flex justify-center gap-6">
      <div className="relative flex justify-center items-center gap-4 p-3 shadow-gray-400 shadow-md rounded-xl">
        <h1 className="absolute top-0 left-0 m-1 font-semibold text-xs uppercase">
          Daily Stats
        </h1>
        <AttachMoneyIcon style={{ fontSize: "4rem" }} />
        <div>
          <div className="flex flex-col justify-center items-start ">
            <h1 style={{ fontSize: "1.5rem", fontWeight: "600" }}>
              {todaysBetNumber}
            </h1>
            <div className="text-sm font font-semibold ">Bets Today</div>
          </div>
          <div className="flex flex-col justify-center items-start ">
            <h1 style={{ fontSize: "1.5rem", fontWeight: "600" }}>
              ₱{avgTodayBet}
            </h1>
            <div className="text-sm font font-semibold ">Average Bet Size</div>
          </div>
        </div>
      </div>
      <div className="relative flex justify-center items-center gap-4 p-3 shadow-gray-400 shadow-md rounded-xl">
        <h1 className="absolute top-0 left-0 m-1 font-semibold text-xs uppercase">
          Daily Stats
        </h1>
        <QueryStatsIcon style={{ fontSize: "4rem" }} />
        <div>
          <div className="flex flex-col justify-center items-start ">
            <h1 style={{ fontSize: "1.5rem", fontWeight: "600" }}>
              {popularColor}
            </h1>
            <div className="text-sm font font-semibold ">
              Most Popular Color
            </div>
          </div>
          <div className="flex flex-col justify-center items-start ">
            <h1 style={{ fontSize: "1.5rem", fontWeight: "600" }}>
              {todayUserNumber}
            </h1>
            <div className="text-sm font font-semibold ">Players Today</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TimeOfDayStats;
