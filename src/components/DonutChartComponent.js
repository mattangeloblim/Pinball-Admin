import React, { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
import useStatContext from "../context/StatContext";

export default function DonutChartComponent() {
  const { donutColor } = useStatContext();
  const [chartData, setChartData] = useState({
    series: [],

    options: {
      colors: [
        "#ED3130",
        "#276ADD",
        "#F4FF63",
        "#56DE33",
        "#FFD700",
        "#9A3FBC",
        "#F08F40",
        "#DC63D0",
        "#33C5ED",
      ],
      chart: {
        width: 450,
        type: "donut",
      },
      labels: [
        "Red",
        "Blue",
        "Yellow",
        "Green",
        "Gold",
        "Violet",
        "Orange",
        "Pink",
        "Cyan",
      ],
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
      series: donutColor,
    }));
  }, [donutColor]);

  return (
    <div id="chart">
      <ReactApexChart
        options={chartData.options}
        series={chartData.series}
        type="donut"
        width={450}
      />
    </div>
  );
}
