import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { BiEdit } from "react-icons/bi";
import { IoMdContact } from "react-icons/io";
import { AiTwotoneDelete } from "react-icons/ai";
import toast, { Toaster } from "react-hot-toast";
import { BsThreeDotsVertical } from "react-icons/bs";
import { deleteUser, getAllUsersData } from "../../api/Api";
import { contex } from "../../contex/MyContex";

function Actions({ id }) {
  const { allUsersData, setAllUsersData } = useContext(contex);
  async function deleteHandle() {
    const responce = await deleteUser(id);
    if (responce.status == 200) {
      toast.success("User successfully deleted");
      const data = await getAllUsersData();
      setAllUsersData(data.data);
    } else {
      toast.error(responce.responce.data.error);
    }
    console.log(responce);
  }
  return (
    <details className="dropdown relative">
      <summary className="m-1 btn">Actions</summary>
      <ul className="absolute -right-20 -top-10 p-2 bg-white shadow menu dropdown-content z-50 bg-base-100 rounded-box w-40">
        <Link
          to={`/update/${id}`}
          className="flex items-center gap-3 text-xl text-blue-600"
        >
          <BiEdit />
          <p>Edit</p>
        </Link>
        <Link
          to={`/user/${id}`}
          className="flex items-center gap-3 text-xl text-green-600"
        >
          <IoMdContact />
          <p>Profile</p>
        </Link>
        <div
          onClick={deleteHandle}
          className="flex items-center gap-3 text-xl text-red-600"
        >
          <AiTwotoneDelete />
          <p>Delete</p>
        </div>
      </ul>
      <Toaster />
    </details>
  );
}

export default Actions;
