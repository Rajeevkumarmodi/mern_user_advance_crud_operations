import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { contex } from "../../contex/MyContex";
// import { getAllUsersData } from "../../api/Api";

function Pagination({ totalUsers, skip, setSkip, limit, setLimit }) {
  const [totalPages, setTotalPages] = useState();
  const [pageNo, setPageNo] = useState(1);
  useEffect(() => {
    setTotalPages(totalUsers && Array(Math.ceil(totalUsers / 3)).fill(null));
    setSkip(limit * pageNo - limit);
  }, [totalUsers, pageNo]);

  // console.log();
  return (
    <div className="flex gap-2 justify-center my-2 mx-2 bg-gray-200 shadow-lg shadow-gray-300 py-1">
      <span
        onClick={() => setPageNo(pageNo - 1)}
        className={` ${
          pageNo <= 1 ? "hidden" : "block"
        } bg-gray-800  hover:bg-red-600 text-white px-3 py-2 rounded-xl font-bold cursor-pointer`}
      >
        ◀️
      </span>

      {totalPages &&
        totalPages.map((_, page) => {
          return (
            <span
              key={page}
              onClick={() => setPageNo(page + 1)}
              className={` ${
                pageNo === page + 1 ? "bg-red-700" : ""
              } bg-gray-800 hover:bg-red-600 text-white px-3 py-2 rounded-xl font-bold cursor-pointer`}
            >
              {page + 1}
            </span>
          );
        })}

      <span
        onClick={() => setPageNo(pageNo + 1)}
        className={` ${
          totalPages && pageNo < totalPages.length ? "block" : "hidden"
        } bg-gray-800  hover:bg-red-600 text-white px-3 py-2 rounded-xl font-bold cursor-pointer`}
      >
        ▶️
      </span>
    </div>
  );
}

export default Pagination;
