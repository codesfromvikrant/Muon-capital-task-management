import React, { useContext } from "react";
import { BiWalletAlt } from "react-icons/bi";
import { HiMenu } from "react-icons/hi";
import { TodoContext } from "../context/contextApi";

const Header = () => {
  const { mobileNav, setMobileNav } = useContext(TodoContext);
  return (
    <div className="py-3 md:px-8 px-4 border-b-2 border-secondary flex justify-between items-center">
      {!mobileNav && (
        <div
          onClick={() => {
            setMobileNav((prev) => !prev);
          }}
          className=""
        >
          {" "}
          <HiMenu className="text-white text-2xl p-1 bg-secondary rounded" />
        </div>
      )}
      <div className="text-white border-b-2 border-blue-500 w-max py-2">
        Section
      </div>

      <div className="flex justify-start items-center gap-4 bg-secondary py-2 px-4 rounded-md">
        <BiWalletAlt className="text-xl text-blue-500" />
        <p className="text-white text-sm">$0.2XYZ</p>
        <button className="text-blue-500 bg-blue-200 rounded p-1 text-xs font-semibold">
          Tier 1
        </button>
      </div>
    </div>
  );
};

export default Header;
