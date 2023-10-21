import React, { useEffect, useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import img from "../../assets/avatar_png.png";
import Actions from "../actions/Actions";

import { BASE_URL } from "../../api/Api";

export default function App({ allUsersData }) {
  return (
    <div className="flex flex-col mt-5 shadow-lg shadow-gray-400 rounded-lg">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="min-w-full text-left text-sm font-light">
              <thead className="border-b font-medium bg-black text-white rounded-lg">
                <tr>
                  <th scope="col" className="px-6 py-4">
                    SL No
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Full Name
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Email
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Gender
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Status
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Photo
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {allUsersData &&
                  allUsersData.map((user, index) => {
                    return (
                      <tr
                        key={user._id}
                        className="border-b dark:border-neutral-500"
                      >
                        <td className="whitespace-nowrap px-6 py-4 font-medium">
                          {index + 1}
                        </td>
                        <td className="whitespace-nowrap px-6 py-4">
                          {`${user.fName}  ${user.lName}`}
                        </td>
                        <td className="whitespace-nowrap px-6 py-4">
                          {user.email}
                        </td>
                        <td className="whitespace-nowrap px-6 py-4">
                          {user.gender}
                        </td>
                        <td className="whitespace-nowrap px-6 py-4">
                          <p
                            className={`${
                              user.status === "Active"
                                ? "bg-blue-600"
                                : "bg-red-600"
                            } px-1 rounded-lg py-1 text-center text-white font-bold`}
                          >
                            {user.status}
                          </p>
                        </td>
                        <td className="whitespace-nowrap px-6 py-4">
                          <img
                            className="h-[50px] w-[50px]"
                            src={`${BASE_URL}/uploadImage/${user.image}`}
                            alt=""
                          />
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 text-xl cursor-pointer relative">
                          <Actions id={user._id} />
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
