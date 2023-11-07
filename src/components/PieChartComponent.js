import React, { useState, useEffect } from "react";
import ReactApexChart from "react-apexcharts";
import useStatContext from "../context/StatContext";

export default function PieChartComponent() {
  const { winCount, loseCount } = useStatContext();
  const [chartData, setChartData] = useState({
    series: [],

    options: {
      chart: {
        width: 450,
        type: "pie",
      },
      labels: ["Win", "Loss"],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
    },
  });

  useEffect(() => {
    // Update the series when donutColor changes
    setChartData((prevData) => ({
      ...prevData,
      series: [winCount, loseCount],
    }));
  }, [winCount, loseCount]);
  return (
    <div id="chart">
      <ReactApexChart
        options={chartData.options}
        series={chartData.series}
        type="pie"
        width={450}
      />
    </div>
  );
}
