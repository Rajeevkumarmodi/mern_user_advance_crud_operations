import React from "react";

function Header() {
  return (
    <div className=" bg-black w-full px-[40px] md:px-[80px]">
      <h2 className=" text-white text-2xl py-2 font-bold">
        User
        <span className="text-blue-400 ml-3">CRUD</span>
      </h2>
    </div>
  );
}

export default Header;
