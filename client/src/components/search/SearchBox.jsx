import React from "react";

function SearchBox() {
  return (
    <div>
      <input
        className="border-[1px] px-2 py-1  rounded-l-lg focus:outline-none"
        type="text"
        placeholder="Search"
      />
      <button className="bg-green-500 text-white px-3 py-[4.5px] rounded-r-lg">
        Search
      </button>
    </div>
  );
}

export default SearchBox;
