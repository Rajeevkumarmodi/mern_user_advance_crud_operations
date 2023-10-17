import React from "react";

function Loader() {
  return (
    <div className="flex justify-center items-center mt-9">
      <div className="border-gray-300 h-14 w-14 animate-spin rounded-full border-8 border-t-blue-600" />
    </div>
  );
}

export default Loader;
