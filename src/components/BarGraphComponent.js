import React from "react";
import ReactApexChart from "react-apexcharts";

function BarGraphComponent() {
  const options = {
    chart: {
      type: "bar",
      height: 350,
    },
    plotOptions: {
      bar: {
        borderRadius: 4,
        horizontal: true,
      },
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: [
        "Region I",
        "Region II",
        "Region III",
        "Region IV-A",
        "Region IV-B",
        "Region V",
        "Region VI",
        "Region VII",
        "Region VIII",
        "Region IX",
        "Region X",
        "Region XI",
        "Region XII",
        "CARAGA",
        "CAR",
        "NCR",
        "BARMM",
      ],
    },
  };

  const series = [
    {
      data: [
        400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380, 400, 430, 448, 470,
        540, 580, 690,
      ],
    },
  ];

  return (
    <div id="chart">
      <ReactApexChart
        options={options}
        series={series}
        type="bar"
        height={350}
      />
    </div>
  );
}

export default BarGraphComponent;
