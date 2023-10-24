import React, { useContext, useEffect, useState } from "react";
import SearchBox from "../../components/search/SearchBox";
import { BiPlus } from "react-icons/bi";
import Table from "../../components/table/Table.jsx";
import { Link } from "react-router-dom";
import Loader from "../../components/loader/Loader";
import toast, { Toaster } from "react-hot-toast";
import { getAllUsersData } from "../../api/Api";
import { contex } from "../../contex/MyContex";

function Home() {
  const { allUsersData, setAllUsersData, searchText } = useContext(contex);
  const [isLoading, setIsLoading] = useState(true);
  const [searchGender, setSearchGender] = useState("All");

  useEffect(() => {
    getData();
    setTimeout(() => setIsLoading(false), 500);
  }, [searchText, searchGender]);

  // get all users data

  async function getData() {
    const data = await getAllUsersData(searchText, searchGender);
    setAllUsersData(data.data);
    console.log(data);
  }

  return (
    <div className=" px-[30px] md:px-[80px] ">
      <div className=" md:flex md:justify-between py-10">
        <SearchBox />
        <Link
          to="/registration"
          className="hidden md:flex items-center bg-blue-500 px-3 py-1 rounded-lg text-white font-bold hover:shadow-md hover:shadow-gray-300"
        >
          <BiPlus />
          <span>Add User</span>
        </Link>
        <Link
          to="/registration"
          className="md:hidden bg-blue-500 px-1 py-1 rounded-full text-white text-3xl absolute bottom-2 right-2 hover:shadow-lg hover:shadow-gray-400"
        >
          <BiPlus />
        </Link>
      </div>
      <div className="flex flex-col gap-4 md:flex-row md:justify-between">
        <div>
          <button className="bg-green-600 text-white px-4 py-1 rounded-md">
            Export to Csv
          </button>
        </div>
        {/* gender filter */}
        <div>
          <h2 className="font-bold">Filter By Gender</h2>
          <div className="flex gap-3">
            <div className="flex gap-1">
              <input
                onClick={() => setSearchGender("All")}
                type="radio"
                name="gender"
                defaultChecked
                id="allG"
              />
              <label htmlFor="allG">All</label>
            </div>
            <div className="flex gap-1">
              <input
                onClick={() => setSearchGender("Male")}
                type="radio"
                name="gender"
                id="male"
              />
              <label htmlFor="male">Male</label>
            </div>
            <div className="flex gap-1">
              <input
                onClick={() => setSearchGender("Female")}
                type="radio"
                name="gender"
                id="female"
              />
              <label htmlFor="female">Female</label>
            </div>
          </div>
        </div>

        {/* filter by status */}

        <div>
          <h2 className="font-bold">Filter By Status</h2>
          <div className="flex gap-3">
            <div className="flex gap-1">
              <input type="radio" id="all" defaultChecked name="status" />
              <label htmlFor="all">All</label>
            </div>
            <div className="flex gap-1">
              <input type="radio" id="active" name="status" />
              <label htmlFor="active">Active</label>
            </div>
            <div className="flex gap-1">
              <input type="radio" id="inActive" name="status" />
              <label htmlFor="inActive">InActive</label>
            </div>
          </div>
        </div>
      </div>
      {/* show loader */}
      {isLoading ? <Loader /> : <Table allUsersData={allUsersData} />}
      <Toaster />
    </div>
  );
}

export default Home;
