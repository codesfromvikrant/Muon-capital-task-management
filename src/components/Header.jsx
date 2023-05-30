import React from "react";
import { BiWalletAlt } from "react-icons/bi";

const Header = () => {
  return (
    <div className="py-3 px-8 border-b-2 border-secondary flex justify-between items-center">
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
