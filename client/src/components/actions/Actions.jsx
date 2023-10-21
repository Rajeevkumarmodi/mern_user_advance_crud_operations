import React from "react";
import { Link } from "react-router-dom";
import { BiEdit } from "react-icons/bi";
import { IoMdContact } from "react-icons/io";
import { AiTwotoneDelete } from "react-icons/ai";
import { BsThreeDotsVertical } from "react-icons/bs";

function Actions({ id }) {
  return (
    <details className="dropdown relative">
      <summary className="m-1 btn">Actions</summary>
      <ul className="absolute -right-20 -top-10 p-2 bg-white shadow menu dropdown-content z-50 bg-base-100 rounded-box w-40">
        <Link
          to="/update"
          className="flex items-center gap-3 text-xl text-blue-600"
        >
          <BiEdit />
          <p>Edit</p>
        </Link>
        <Link
          to={`/profile/${id}`}
          className="flex items-center gap-3 text-xl text-green-600"
        >
          <IoMdContact />
          <p>Profile</p>
        </Link>
        <Link
          to="/delete"
          className="flex items-center gap-3 text-xl text-red-600"
        >
          <AiTwotoneDelete />
          <p>Delete</p>
        </Link>
      </ul>
    </details>
  );
}

export default Actions;
