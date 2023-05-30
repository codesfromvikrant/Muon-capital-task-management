import React from "react";
import { Outlet } from "react-router-dom";
import SidePanel from "../components/sidepanel";
import Header from "../components/Header";
import TopHeader from "../components/topHeader";

const Dashboard = () => {
  return (
    <>
      <TopHeader />
      <div className="flex justify-start items-start w-full">
        <SidePanel />
        <main className="w-full">
          <Header />
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default Dashboard;
