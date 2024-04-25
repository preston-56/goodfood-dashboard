import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import RevenueChart from "../../components/revenuechart/RevenueChart";
import OrderTimeChart from "../../components/ordertimechart/OrderTimeChart";
import RatingChart from "../../components/ratingchart/RatingChart";
import MostOrderedItems from "../../components/mostordereditems/MostOrderedItems";
import OrderTrendChart from "../../components/ordertrendchart/OrderTrendChart";
import TopBar from "../../components/topbar/Topbar";
import Header from "../../components/header/Header";
import { revenueData } from "../../data";

const Dashboard: React.FC = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="h-screen">
        <Sidebar />
      </div>
      <div
        className="flex flex-col flex-1"
        style={{ height: "100vh", width: "100%" }}
      >
        {/* TopBar */}
        <TopBar />

        <div className="p-6 h-full w-full grid justify-items-start pt-4 ">
          <Header />
          <div className="flex justify-between">
            {/* Revenue Chart*/}
            <RevenueChart revenueData={revenueData} /> {/* Pass the revenueData prop */}

            {/* Order Time Chart*/}
            <div style={{ width: "200px" }} />
            <OrderTimeChart />
          </div>

          <div className="flex items-center space-x-4 flex-grow">
            {/* Rating section */}
            <div className="w-full" style={{ height: "300px" }}>
              <RatingChart />
            </div>
            {/* Most Ordered Items */}
            <div className="w-full" style={{ height: "300px" }}>
              <MostOrderedItems />
            </div>
            {/* Order Trend Chart */}
            <div className="w-full" style={{ height: "300px" }}>
              <OrderTrendChart />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
