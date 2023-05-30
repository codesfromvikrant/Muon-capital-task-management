import React from "react";

const Footer = () => {
  return (
    <div className="flex justify-start items-center gap-2">
      <div className="flex justify-start items-center gap-2 bg-secondary p-2 rounded-md">
        <div className="bg-blue-500 text-white p-2 w-5 h-5 rounded-full text-xs font-semibold flex justify-center items-center">
          N
        </div>
        <h3 className="text-white font-medium font-poppins text-sm">$0.90</h3>
      </div>

      <div className="bg-blue-200 p-2 rounded-md">
        <p className="text-blue-500 font-semibold text-xs">Buy $XYZ</p>
      </div>
    </div>
  );
};

export default Footer;
