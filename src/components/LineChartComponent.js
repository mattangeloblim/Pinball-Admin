import React from "react";
import ReactApexChart from "react-apexcharts";

export default function LineChartComponent() {
  const sampleData = [
    30, 10, 20, 60, 40, 30, 10, 20, 60, 40, 30, 10, 20, 60, 40,
  ];
  const sampleLabels = [
    "Label1",
    "Label2",
    "Label3",
    "Label4",
    "Label5",
    "Label1",
    "Label2",
    "Label3",
    "Label4",
    "Label5",
    "Label1",
    "Label2",
    "Label3",
    "Label4",
    "Label5",
  ];

  const seriesData = [
    {
      name: "STOCK ABC",
      data: sampleData,
    },
  ];

  const options = {
    chart: {
      type: "area",
      height: 350,
      zoom: {
        enabled: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "straight",
    },
    title: {
      text: "Time of Play",
      align: "left",
    },
    subtitle: {
      text: "Player activity",
      align: "left",
    },
    labels: sampleLabels,
    xaxis: {
      type: "string", //change this to datetime
    },
    yaxis: {
      opposite: true,
    },
    legend: {
      horizontalAlign: "left",
    },
  };

  return (
    <div id="chart">
      <ReactApexChart
        options={options}
        series={seriesData}
        type="area"
        height={350}
      />
    </div>
  );
}
