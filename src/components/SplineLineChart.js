import React from "react";
import { useEffect } from "react";
import ReactApexChart from "react-apexcharts";
import { getBetTable } from "../services/getBetTable";

export default function SplineLineChart() {
  const [data, setData] = React.useState([]);
  const [countData, setCountData] = React.useState([]);

  useEffect(() => {
    const getAllData = async () => {
      try {
        const { result } = await getBetTable();
        setData(result.map((item) => item.createdAt.slice(11, 19)));
        // console.log(result);
      } catch (error) {
        console.error("Error:", error.message);
        window.alert("An error occurred. Please try again later.");
      }
    };
    getAllData();
  }, []);

  //   const sampleData = [
  //     30, 10, 20, 60, 40, 30, 10, 20, 60, 40, 30, 10, 30, 10, 20, 60, 40, 30, 20,
  //     60, 40, 30, 10,
  //   ];
  const sampleLabels = [
    "0:00",
    "1:00",
    "2:00",
    "3:00",
    "4:00",
    "5:00",
    "6:00",
    "7:00",
    "8:00",
    "9:00",
    "10:00",
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
    "23:00",
    "24:00",
  ];

  const time = [
    "00",
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "21",
    "22",
    "23",
    "24",
  ];

  const seriesData = [
    {
      name: "# of bets",
      data: countData,
    },
  ];

  const options = {
    chart: {
      type: "area",
      height: 350,
      zoom: {
        enabled: true,
      },
    },
    dataLabels: {
      enabled: false,
    },
    title: {
      text: "# bets per hour",
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
    stroke: {
      curve: "smooth",
    },
  };

  useEffect(() => {
    const countOccurrencesBetweenTimes = (data, startTime, endTime) => {
      const startTimeObj = new Date(`2000-01-01T${startTime}`);
      const endTimeObj = new Date(`2000-01-01T${endTime}`);

      return data.filter((time) => {
        const currentTimeObj = new Date(`2000-01-01T${time}`);
        return currentTimeObj >= startTimeObj && currentTimeObj <= endTimeObj;
      }).length;
    };

    const resultByHour = [];

    time.forEach((hour) => {
      const startTime = `${hour}:00:00`;
      const endTime = `${hour}:59:59`;

      const countOccurrences = countOccurrencesBetweenTimes(
        data,
        startTime,
        endTime
      );
      resultByHour.push({ hour, count: countOccurrences });
    });

    setCountData(resultByHour.map((item) => item.count));
    // console.log(resultByHour);
  }, [data]);

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
