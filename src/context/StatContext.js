/* eslint-disable */
import React, { useState, useEffect, createContext, useContext } from "react";

import { postGenerateResult } from "../services/postGenerateResult";
import { getUsersCount } from "../services/getPlayers";
import { getResultsCount } from "../services/getResultsCount";
import { getTotalBets } from "../services/getTotalBets";
import { getTotalBetNumber } from "../services/getTotalBetNumber";
import { getTodaysBet } from "../services/getTodaysBet";
import { getTodaysColor } from "../services/getTodaysColor";
import { getTodayUserNumber } from "../services/getTodayUserNumber";
import { getColorPercentage } from "../services/getColorPercentage";

const initialState = {
  userCount: 0,
  winCount: 0,
  loseCount: 0,
  totalBetAmount: 0,
  avgBet: 0,
  totalBetNumber: null,
  todaysBetNumber: null,
  avgTodayBet: 0,
  popularColor: null,
  todayUserNumber: null,
  donutColor: [],
  serUserCount: () => {},
  setWinCount: () => {},
  setLoseCount: () => {},
  setTotalBetAmount: () => {},
  setAvgBet: () => {},
  setTotalBetNumber: () => {},
  setTodaysBetNumber: () => {},
  setAvgTodayBet: () => {},
  setPopularColor: () => {},
  setTodayUserNumber: () => {},
  setDonutColor: () => {},
};

//create initial context
const StatContext = createContext(initialState);

export const StatProvider = ({ children }) => {
  const [userCount, setUserCount] = useState(0);
  const [winCount, setWinCount] = useState(0);
  const [loseCount, setLoseCount] = useState(0);
  const [totalBetAmount, setTotalBetAmount] = useState(0);
  const [avgBet, setAvgBet] = useState(0);
  const [totalBetNumber, setTotalBetNumber] = useState(null);

  const [todaysBetNumber, setTodaysBetNumber] = useState(null);
  const [avgTodayBet, setAvgTodayBet] = useState(0);
  const [popularColor, setPopularColor] = useState(null);
  const [todayUserNumber, setTodayUserNumber] = useState(null);

  const [donutColor, setDonutColor] = useState([]);

  useEffect(() => {
    const getAllData = async () => {
      try {
        const { userListCount } = await getUsersCount();
        setUserCount(userListCount);

        const { winCount, loseCount } = await getResultsCount();
        setWinCount(winCount);
        setLoseCount(loseCount);

        const totalAmount = await getTotalBets();
        setTotalBetAmount(totalAmount);

        const avgBetSize = totalAmount / (winCount + loseCount);
        setAvgBet(Math.floor(avgBetSize));

        const totalBetNumberCount = await getTotalBetNumber();
        setTotalBetNumber(totalBetNumberCount);
        const { count, result } = await getTodaysBet();
        const totalBetAmount = result.reduce(
          (sum, bet) => sum + parseInt(bet.amount),
          0
        );
        const { mostPopularColor, maxCount, colorCount } =
          await getColorPercentage();
        setDonutColor(Object.values(colorCount));

        //DAILY STATS
        const dailyAvgBet = totalBetAmount / count;
        if (count === 0) {
          setAvgTodayBet(0);
        } else {
          setAvgTodayBet(dailyAvgBet);
          setTodaysBetNumber(count);
        }

        const { dailyPopularColor, dailyMaxCount, dailyColorCount } =
          await getTodaysColor();
        setPopularColor(dailyPopularColor);

        const { userCount } = await getTodayUserNumber();
        setTodayUserNumber(userCount);
      } catch (error) {
        console.error("Error:", error.message);
        window.alert("An error occurred. Please try again later.");
      }
    };

    getAllData();
  }, []);

  return (
    <StatContext.Provider
      value={{
        userCount,
        winCount,
        loseCount,
        totalBetAmount,
        avgBet,
        totalBetNumber,
        todaysBetNumber,
        avgTodayBet,
        popularColor,
        todayUserNumber,
        donutColor,
        setDonutColor,
        setTodayUserNumber,
        setPopularColor,
        setAvgTodayBet,
        setTodaysBetNumber,
        setTotalBetNumber,
        setAvgBet,
        setUserCount,
        setWinCount,
        setLoseCount,
        setTotalBetAmount,
      }}
    >
      {children}
    </StatContext.Provider>
  );
};

//create the useContext
const useStatContext = () => {
  const context = useContext(StatContext);

  if (context === undefined) {
    throw new Error("useStatContext must be used within a Modal Provider");
  }
  return context;
};

export default useStatContext;
