import React from "react";
import { Link } from "react-router-dom";
import MenuLogo from "../assets/icons/Category.png";

const Submenu = ({ icon, title, link }) => {
  return (
    <Link>
      <div className="flex justify-start items-center gap-2 my-1 p-2 hover:bg-secondary rounded-md">
        <img src={MenuLogo} />
        <p className="text-gray-500">{title}</p>
      </div>
    </Link>
  );
};

export default Submenu;
