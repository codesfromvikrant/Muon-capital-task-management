import React, { useContext, useState } from "react";
import { AiOutlineMenuFold } from "react-icons/ai";
import Submenu from "./subMenu";
import Footer from "./footer";
import { ImCross } from "react-icons/im";
import { TodoContext } from "../context/contextApi";

const menu = [
  {
    id: 1,
    title: "Home",
    link: "/dashboard",
  },
  {
    id: 2,
    title: "Section 1",
    link: "/section1",
  },
  {
    id: 3,
    title: "Section 2",
    link: "/section2",
  },
  {
    id: 4,
    title: "Section 8",
    link: "/section8",
  },
  {
    id: 5,
    title: "Section 9",
    link: "/section9",
  },
];

const SidePanel = () => {
  const { mobileNav, setMobileNav } = useContext(TodoContext);
  const menuEl = menu.map((obj) => {
    return (
      <Submenu key={obj.id} icon={obj.icon} title={obj.title} link={obj.link} />
    );
  });

  const style = {
    display: mobileNav ? "flex" : "none",
  };

  return (
    <aside
      style={style}
      className="md:static  fixed z-50 bg-black shadow-lg top-0 left-0 w-72 h-[100vh] px-3 py-5 overflow-auto border-r-2 border-secondary flex justify-between items-start flex-col"
    >
      <div className="w-full">
        <div className="flex justify-between items-center gap-8">
          <div className="flex justify-start items-center gap-2">
            <div className="bg-blue-500 text-white p-2 w-8 h-8 rounded-full text-sm font-semibold flex justify-center items-center">
              N
            </div>
            <h3 className="text-white font-semibold font-poppins text-xl">
              Name
            </h3>
          </div>

          <ImCross
            onClick={() => {
              setMobileNav(false);
            }}
            className="text-white bg-secondary p-1 text-xl rounded-full"
          />
        </div>

        <div className="mt-10">{menuEl}</div>
      </div>
      <Footer />
    </aside>
  );
};

export default SidePanel;
