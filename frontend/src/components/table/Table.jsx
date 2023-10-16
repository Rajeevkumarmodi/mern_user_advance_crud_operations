import React, { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import img from "../../assets/avatar_png.png";
import Actions from "../actions/Actions";

export default function App() {
  // const [isShowAction, setIsShowAction] = useState(false);
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
                <tr className="border-b dark:border-neutral-500">
                  <td className="whitespace-nowrap px-6 py-4 font-medium">1</td>
                  <td className="whitespace-nowrap px-6 py-4">Rajeev kumar</td>
                  <td className="whitespace-nowrap px-6 py-4">
                    rm443283@gmail.com
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">Male</td>
                  <td className="whitespace-nowrap px-6 py-4">Active</td>
                  <td className="whitespace-nowrap px-6 py-4">
                    <img className="h-[50px] w-[50px]" src={img} alt="" />
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-xl cursor-pointer relative">
                    <Actions />
                  </td>
                </tr>
                <tr className="border-b dark:border-neutral-500">
                  <td className="whitespace-nowrap px-6 py-4 font-medium">1</td>
                  <td className="whitespace-nowrap px-6 py-4">Rajeev kumar</td>
                  <td className="whitespace-nowrap px-6 py-4">
                    rm443283@gmail.com
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">Male</td>
                  <td className="whitespace-nowrap px-6 py-4">Active</td>
                  <td className="whitespace-nowrap px-6 py-4">
                    <img className="h-[50px] w-[50px]" src={img} alt="" />
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-xl cursor-pointer relative">
                    <Actions />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
