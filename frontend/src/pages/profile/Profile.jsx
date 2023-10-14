import React from "react";
import img from "../../assets/avatar_png.png";
import { MdMarkEmailUnread } from "react-icons/md";
import { BsTelephoneFill } from "react-icons/bs";
import { BiSolidUserCircle } from "react-icons/bi";

function Profile() {
  return (
    <>
      <h2 className="text-center text-3xl mt-8 font-bold">Profile</h2>
      <div className=" w-[350px] md:w-[500px] m-auto rounded-lg p-5 mt-5 shadow-lg shadow-gray-300">
        <div className="flex flex-col items-center gap-4">
          <img className="w-[150px]" src={img} alt="" />
          <h2 className="text-2xl font-bold">Rajeev Modi</h2>
          <p className="flex items-center gap-2 text-xl">
            <MdMarkEmailUnread />
            <span>Email:- rm443283@gmail.com</span>
          </p>
          <p className="flex items-center gap-2 text-xl">
            <BsTelephoneFill />
            <span>Mobile:-621xxxxxxx</span>
          </p>

          <p className="flex items-center gap-2 text-xl">
            <BiSolidUserCircle />
            <span>Gandar:-Mail</span>
          </p>
          <p className="text-xl">
            <span>status:-Active</span>
          </p>
        </div>
      </div>
    </>
  );
}

export default Profile;
