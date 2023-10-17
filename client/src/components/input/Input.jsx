import React from "react";

function Input({ label, p_holder, type, changeHandler, name }) {
  return (
    <div>
      <div className=" flex flex-col gap-2">
        <label htmlFor={label}>{label}</label>
        <input
          id={label}
          className="border-2 border-gray-300 rounded-lg px-3 w-[80vw] md:w-[35vw] focus:outline-none shadow-md shadow-gray-200"
          type={type}
          placeholder={p_holder}
          name={name}
          onChange={(e) => changeHandler(e)}
        />
      </div>
    </div>
  );
}

export default Input;
