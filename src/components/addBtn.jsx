import React from "react";

const AddBtn = ({ handleAction }) => {
  return (
    <div
      onClick={handleAction}
      className="text-white bg-quaternary flex justify-center items-center w-5 h-5 rounded-full text-xl font-bold cursor-pointer hover:shadow-md"
    >
      +
    </div>
  );
};

export default AddBtn;
