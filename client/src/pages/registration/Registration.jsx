import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../../components/input/Input";
import img from "../../assets/avatar_png.png";
import Loader from "../../components/loader/Loader";
import toast, { Toaster } from "react-hot-toast";
import { userRegistration } from "../../api/Api";

function Registration() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [gender, setGender] = useState("");
  const [showImage, setShowImage] = useState("");
  const [image, setImage] = useState("");
  const [status, setStatus] = useState("");
  const [inputTextValue, setInputTextValue] = useState({
    fName: "",
    lName: "",
    email: "",
    mobile: "",
  });

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 500);
  });

  // change handler function
  const changeHandler = (e) => {
    const { name, value } = e.target;
    setInputTextValue({ ...inputTextValue, [name]: value });
  };

  // submit form data
  const submitData = async (e) => {
    e.preventDefault();
    const { fName, lName, email, mobile } = inputTextValue;
    if (
      !fName ||
      !lName ||
      !email ||
      !mobile ||
      !gender ||
      !status ||
      !showImage
    ) {
      toast.error("All fields are required❌");
    } else {
      if (!email.includes("@" && ".")) {
        console.log(email);
        toast.error("please enter valid email❌");
      } else if (status === "Status") {
        toast.error("please select valid Status ❌");
      } else if (mobile.length > 10 || mobile.length < 10) {
        toast.error("please enter 10 digit mobile number ❌");
      } else {
        const data = new FormData();
        data.append("fName", fName);
        data.append("lName", lName);
        data.append("email", email);
        data.append("mobile", mobile);
        data.append("gender", gender);
        data.append("status", status);
        data.append("image", image);

        const config = {
          "Content-Type": "multipart/form-data",
        };

        const responceData = await userRegistration(data, config);
        if (responceData.status == 200) {
          toast.success("User successfully registerd");
          navigate("/");
        } else {
          console.log(responceData.response.data.error);
          toast.error(responceData.response.data.error);
        }
      }
    }
  };

  const generateImgUrl = (e) => {
    const imgUrl = URL.createObjectURL(e.target.files[0]);
    setImage(e.target.files[0] ? e.target.files[0] : img);
    setShowImage(imgUrl);
  };
  return (
    <div className="my-10 flex flex-col items-center gap-4">
      <h1 className="text-3xl font-bold">Register Your Details</h1>
      {isLoading ? (
        <Loader />
      ) : (
        <form className=" p-5 shadow-lg shadow-gray-400 rounded-lg flex flex-col items-center gap-5">
          <img
            className="w-14 h-14 rounded-full"
            src={showImage ? showImage : img}
            alt=""
          />
          <div className="flex flex-col md:flex-row gap-10">
            <Input
              p_holder="Enter first name"
              type="text"
              label="First name"
              name="fName"
              changeHandler={changeHandler}
            />
            <Input
              p_holder="Enter last name"
              type="text"
              label="Last name"
              name="lName"
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
              type="number"
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
                  value="Male"
                />
                <label htmlFor="male">Male</label>
              </div>
              <div>
                <input
                  onClick={(e) => setGender(e.target.value)}
                  type="radio"
                  name="gender"
                  id="female"
                  value="Female"
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
                <option value="Status">Status</option>
                <option value="Active">Active</option>
                <option value="InActive">InActive</option>
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
      )}

      <Toaster />
    </div>
  );
}

export default Registration;
