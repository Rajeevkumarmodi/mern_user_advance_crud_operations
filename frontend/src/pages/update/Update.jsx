import React, { useState } from "react";
import Input from "../../components/input/Input";
import img from "../../assets/avatar_png.png";

function Registration() {
  const [gender, setGender] = useState("");
  const [image, setImage] = useState("");
  const [status, setStatus] = useState("");
  const [inputTextValue, setInputTextValue] = useState({
    f_name: "",
    l_name: "",
    email: "",
    mobile: "",
  });

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setInputTextValue({ ...inputTextValue, [name]: value });
  };

  const submitData = (e) => {
    e.preventDefault();
  };

  const generateImgUrl = (e) => {
    const imgUrl = URL.createObjectURL(e.target.files[0]);
    setImage(imgUrl);
  };
  return (
    <div className="my-10 flex flex-col items-center gap-4">
      <h1 className="text-3xl font-bold">Update Your Details</h1>
      <form className=" p-5 shadow-lg shadow-gray-400 rounded-lg flex flex-col items-center gap-5">
        <img
          className="w-14 h-14 rounded-full"
          src={image ? image : img}
          alt=""
        />
        <div className="flex flex-col md:flex-row gap-10">
          <Input
            p_holder="Enter first name"
            type="text"
            label="First name"
            name="f_name"
            changeHandler={changeHandler}
          />
          <Input
            p_holder="Enter last name"
            type="text"
            label="Last name"
            name="l_name"
            changeHandler={changeHandler}
          />
        </div>
        <div className="flex flex-col gap-5 md:flex-row md:gap-10">
          <Input
            p_holder="Enter email name"
            type="text"
            label=" Email"
            name="email"
            changeHandler={changeHandler}
          />
          <Input
            p_holder="Enter mobile name"
            type="text"
            label="Mobile"
            name="mobile"
            changeHandler={changeHandler}
          />
        </div>
        <div className="w-full flex justify-between items-center">
          <div className="w-[35vw]">
            <p>Select your gender</p>
            <div>
              <input
                onClick={(e) => setGender(e.target.value)}
                type="radio"
                name="gender"
                id="male"
                value="male"
              />
              <label htmlFor="male">Male</label>
            </div>
            <div>
              <input
                onClick={(e) => setGender(e.target.value)}
                type="radio"
                name="gender"
                id="female"
                value="female"
              />
              <label htmlFor="female">Female</label>
            </div>
          </div>
          <div className="w-[35vw]">
            <select
              className="w-[35vw] border-2 border-gray-300 rounded-lg px-2"
              name=""
              id=""
              onChange={(e) => setStatus(e.target.value)}
            >
              <option value="Active">Active</option>
              <option value="Inctive">InActive</option>
            </select>
          </div>
        </div>
        <input onChange={(e) => generateImgUrl(e)} className="" type="file" />
        <button
          onClick={(e) => submitData(e)}
          className="bg-blue-600 rounded-lg text-white w-full py-1 font-bold shadow-md shadow-gray-400"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Registration;
