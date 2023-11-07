import React from "react";
import { LineChart } from "@mui/x-charts";

export default function LineChart() {
  const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
  const xLabels = [
    "Page A",
    "Page B",
    "Page C",
    "Page D",
    "Page E",
    "Page F",
    "Page G",
  ];
  return (
    <LineChart
      width={500}
      height={300}
      series={[{ data: uData, label: "uv", area: true, showMark: false }]}
      xAxis={[{ scaleType: "point", data: xLabels }]}
      sx={{
        ".MuiLineElement-root": {
          display: "none",
        },
      }}
    />
  );
}
