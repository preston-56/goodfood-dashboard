import React from "react";
import { BarChart } from "@mui/x-charts";
import { ArrowDropUp } from "@mui/icons-material";

interface RevenueData {
  day: string;
  revenue: number;
  color: string;
}

interface RevenueChartProps {
  revenueData: RevenueData[];
}

const RevenueChart: React.FC<RevenueChartProps> = ({ revenueData }) => {
  // Transform the revenue data into the required format
  const chartData = revenueData.map(({ day, revenue, color }) => ({
    data: [revenue], // BarChart expects an array of data values
    label: day,
    color: color,
  }));

  return (
    <div className="grid gap-y-6">
      <div className="flex flex-row justify-between items-center">
        <div className="grid justify-items-start">
          <h2 className="text-xl font-bold">Revenue</h2>
          <h1 className="text-xl font-bold">IDR 7.852.000</h1>
          <div className="flex items-center text-green-500">
            <ArrowDropUp fontSize="small" />
            <span>2.1% vs last week</span>
          </div>
        </div>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg mr-4">
          View Report
        </button>
      </div>

      <div>
        {/* Chart */}
        <h4 className="text-gray-500 grid justify-items-start">
          {" "}
          Sales from 1-12 Dec, 2020
        </h4>
        <BarChart series={chartData} width={800} height={300}>
        </BarChart>
      </div>

      {/* labels */}
      <div className="flex justify-start">
        <div className="flex"> {/* Added flex container */}
          <div className="flex flex-row justify-between">
            <div className="w-4 h-4 rounded-full mr-1" />
            <div className="w-3 h-3 bg-blue-800 rounded-full mr-1" />
            <span className="text-xs">Last 6 days</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 bg-gray-400 rounded-full mr-1" />
            <span className="text-xs">Last Week</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevenueChart;