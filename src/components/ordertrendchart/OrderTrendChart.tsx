import React from "react";
import { LineChart } from "@mui/x-charts/LineChart";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { orderTrendData } from "../../data";

const OrderTrendChart: React.FC = () => {
  // Extracting x-axis labels and y-axis values from the imported data
  const ordersData = orderTrendData.map((item) => item.orders);

  return (
    <div className="grid gap-y-6">
      <div className="flex flex-row justify-between items-center">
        <div className="grid justify-items-start">
          <h2 className="text-xl font-bold">Order Trends</h2>
          <h1 className="text-xl font-bold">IDR 7.852.000</h1>
          <div className="flex items-center text-red-500">
            <ArrowDropDownIcon fontSize="small" />
            <span>2.1% vs last week</span>
          </div>
        </div>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg mr-6">
          View Report
        </button>
      </div>
      {/* Line chart */}
      <h4 className="text-gray-500 grid justify-items-start">
        Sales from 1-6 Dec, 2020
      </h4>

      <div>
        <LineChart
          width={600}
          height={300}
          series={[
            { data: ordersData, label: "This Week", color: "#757575" },
            {
              data: ordersData.slice(-7),
              label: "Previous Week",
              color: "#1565c0",
            },
          ]}
        ></LineChart>

        {/* labels */}
        <div className="flex justify-normal ml-2 mb-4">
          <div className="flex items-center">
            <div className="w-3 h-3 bg-blue-800 rounded-full mr-2"></div>
            <span className="text-xs">Last 6 days</span>
          </div>
          <div className="flex items-center ml-4">
            <div className="w-3 h-3 bg-gray-400 rounded-full mr-2"></div>
            <span className="text-xs">Last Week</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderTrendChart;
