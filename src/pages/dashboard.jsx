import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import SidePanel from "../components/sidepanel";
import Header from "../components/Header";
import TopHeader from "../components/topHeader";
import { TodoContext } from "../context/contextApi";

const Dashboard = () => {
  const { mobileNav, setMobileNav } = useContext(TodoContext);
  return (
    <>
      {/* <TopHeader /> */}
      <div className="flex justify-start items-start w-full">
        <SidePanel />
        <main className="w-full">
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default Dashboard;
