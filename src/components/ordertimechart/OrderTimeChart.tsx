import React from "react";
import { PieChart } from "@mui/x-charts";
import { orderTimeData } from "../../data";

const OrderTimeChart: React.FC = () => {
  const colors = ["#1890ff", "#52c41a", "#ff4d4f"];

  const totalPercentage = orderTimeData.reduce(
    (acc, curr) => acc + curr.percentage,
    0
  );

  const pieChartData = [
    {
      data: orderTimeData.map((item, index) => ({
        id: index.toString(),
        value: item.percentage,
        color: colors[index],
      })),
    },
  ];

  return (
    <div className="grid gap-y-6">
      <div className="flex flex-row justify-between items-center">
        <div className="grid justify-items-start">
          <h2 className="text-xl font-bold">Order Time</h2>
          <p className="text-gray-600">From 1-6 Dec, 2020</p>
        </div>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
          View Report
        </button>
      </div>

      <PieChart series={pieChartData} width={600} height={300} />
      <div className="flex justify-around mt-0.5">
        {colors.map((color, index) => (
          <div key={index} className="flex items-center">
            <div
              className="w-4 h-4 rounded-full" // Adjust size here
              style={{ backgroundColor: color }}
            />
            <span className="ml-2 text-xs">{`${orderTimeData[index].period}`}</span>
            <span className="ml-2 text-xs">{`${Math.round(
              (orderTimeData[index].percentage / totalPercentage) * 100
            )}%`}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderTimeChart;
