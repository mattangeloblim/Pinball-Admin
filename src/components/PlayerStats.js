import React from "react";

import GroupIcon from "@mui/icons-material/Group";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";

import useStatContext from "../context/StatContext";

function PlayerStats() {
  const {
    userCount,
    winCount,
    loseCount,
    totalBetAmount,
    avgBet,
    totalBetNumber,
  } = useStatContext();
  return (
    <div className=" flex justify-center gap-6">
      <div className="flex justify-around items-center p-3 shadow-gray-400 shadow-md rounded-xl">
        <GroupIcon style={{ fontSize: "4rem" }} />
        <div className="flex flex-col justify-center items-start ">
          <h1 style={{ fontSize: "3rem", fontWeight: "600" }}>{userCount}</h1>
          <div className="text-md font font-semibold ">Total Players</div>
        </div>
      </div>
      <div className="flex justify-center items-center gap-4 p-3 shadow-gray-400 shadow-md rounded-xl">
        <RocketLaunchIcon style={{ fontSize: "4rem" }} />
        <div className="flex flex-col justify-center items-start ">
          <h1 style={{ fontSize: "3rem", fontWeight: "600" }}>00</h1>
          <div className="text-md font font-semibold ">Total KYC</div>
        </div>
      </div>
      <div className="flex justify-center items-center gap-4 p-3 shadow-gray-400 shadow-md rounded-xl">
        <EmojiEventsIcon style={{ fontSize: "4rem" }} />
        <div>
          <div className="flex flex-col justify-center items-start ">
            <h1 style={{ fontSize: "1.5rem", fontWeight: "600" }}>
              {totalBetNumber}
            </h1>
            <div className="text-sm font font-semibold ">Total Bets</div>
          </div>
          <div className="flex justify-center items-start gap-4">
            <div className="flex flex-col">
              <h1 style={{ fontSize: "1.5rem", fontWeight: "600" }}>
                <h1>{winCount}</h1>
              </h1>
              <div className="text-sm font font-semibold ">Wins</div>
            </div>
            <div className="flex flex-col">
              <h1 style={{ fontSize: "1.5rem", fontWeight: "600" }}>
                <h1>{loseCount}</h1>
              </h1>
              <div className="text-sm font font-semibold ">Loses</div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center gap-4 p-3 shadow-gray-400 shadow-md rounded-xl">
        <CreditCardIcon style={{ fontSize: "4rem" }} />
        <div>
          <div className="flex flex-col justify-center items-start ">
            <h1 style={{ fontSize: "1.5rem", fontWeight: "600" }}>
              ₱{parseInt(totalBetAmount).toLocaleString()}
            </h1>
            <div className="text-sm font font-semibold ">Total Bet Amount</div>
          </div>
          <div className="flex flex-col justify-center items-start ">
            <h1 style={{ fontSize: "1.5rem", fontWeight: "600" }}>
              ₱{parseInt(avgBet).toLocaleString()}
            </h1>
            <div className="text-sm font font-semibold ">Average Bet Size</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlayerStats;
