import React from "react";
import { AiOutlineMenuFold } from "react-icons/ai";
import Submenu from "./subMenu";

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
  const menuEl = menu.map((obj) => {
    return (
      <Submenu key={obj.id} icon={obj.icon} title={obj.title} link={obj.link} />
    );
  });

  return (
    <aside className="w-72 h-[100vh] px-3 py-5  overflow-auto border-r-2 border-secondary">
      <div className="flex justify-between items-center">
        <div className="flex justify-start items-center gap-2">
          <div className="bg-blue-500 text-white p-2 w-8 h-8 rounded-full text-sm font-semibold flex justify-center items-center">
            N
          </div>
          <h3 className="text-white font-semibold font-poppins text-xl">
            Name
          </h3>
        </div>

        <div className="">
          <AiOutlineMenuFold className="text-xl text-white font-semibold" />
        </div>
      </div>

      <div className="mt-10">{menuEl}</div>
    </aside>
  );
};

export default SidePanel;
