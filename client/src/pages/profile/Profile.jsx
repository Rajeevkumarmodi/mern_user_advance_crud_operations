import React, { useEffect, useState } from "react";
import img from "../../assets/avatar_png.png";
import { MdMarkEmailUnread } from "react-icons/md";
import { BsTelephoneFill } from "react-icons/bs";
import { BiSolidUserCircle } from "react-icons/bi";
import Loader from "../../components/loader/Loader";
import { getSingleUser } from "../../api/Api";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../../api/Api";
import axios from "axios";

function Profile() {
  const { id } = useParams();
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 500);
    singleUser();
  }, [id]);

  async function singleUser() {
    const user = await getSingleUser(id);
    setUser(user);
  }
  return (
    <>
      <h2 className="text-center text-3xl mt-8 font-bold">Profile</h2>
      {isLoading ? (
        <Loader />
      ) : (
        <div className=" w-[350px] md:w-[500px] m-auto rounded-lg p-5 mt-5 shadow-lg shadow-gray-300">
          <div className="flex flex-col items-center gap-4">
            <img
              className="w-[150px] h-[150px] rounded-full"
              src={`${BASE_URL}/uploadImage/${user.data.image}`}
              alt=""
            />
            <h2 className="text-2xl font-bold">
              {user.data.fName} {user.data.lName}
            </h2>
            <p className="flex items-center gap-2 text-xl">
              <MdMarkEmailUnread />
              <span>Email:- {user.data.email}</span>
            </p>
            <p className="flex items-center gap-2 text-xl">
              <BsTelephoneFill />
              <span>Mobile:-{user.data.mobile}</span>
            </p>

            <p className="flex items-center gap-2 text-xl">
              <BiSolidUserCircle />
              <span>Gandar:-{user.data.gender}</span>
            </p>
            <p className="text-xl">
              <span>status:-{user.data.status}</span>
            </p>
          </div>
        </div>
      )}
    </>
  );
}

export default Profile;
