import React, { useEffect, useState } from "react";
import Input from "../../components/input/Input";
import img from "../../assets/avatar_png.png";
import Loader from "../../components/loader/Loader";
import { getSingleUser } from "../../api/Api";
import { useNavigate, useParams } from "react-router-dom";
import { BASE_URL } from "../../api/Api";
import toast, { Toaster } from "react-hot-toast";
import { updateInfo } from "../../api/Api";

function Registration() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [gender, setGender] = useState("");
  const [image, setImage] = useState("");
  const [showImage, setShowImage] = useState();
  const [updateImage, setUpdateImage] = useState();
  const [status, setStatus] = useState("");
  const [inputTextValue, setInputTextValue] = useState({
    fName: "",
    lName: "",
    email: "",
    mobile: "",
  });

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 500);
    getUser();
  }, [id]);

  // handler function
  const changeHandler = (e) => {
    const { name, value } = e.target;
    setInputTextValue({ ...inputTextValue, [name]: value });
  };

  // get user data

  async function getUser() {
    const userData = await getSingleUser(id);
    setInputTextValue(userData.data);
    setGender(userData.data.gender);
    setStatus(userData.data.status);
    setShowImage(userData.data.image);
    console.log(userData.data);
  }

  // submit form
  const updateUserInfo = async (e) => {
    e.preventDefault();
    if (status === "Status") {
      toast.error("please select valid status");
    } else {
      const data = new FormData();
      data.append("fName", inputTextValue.fName);
      data.append("lName", inputTextValue.lName);
      data.append("email", inputTextValue.email);
      data.append("mobile", inputTextValue.mobile);
      data.append("gender", gender);
      data.append("status", status);
      data.append("image", updateImage ? updateImage : showImage);

      const config = {
        "Content-Type": "multipart/form-data",
      };
      const resData = await updateInfo(id, data, config);
      if (resData.status == 200) {
        toast.success(resData.data.success);
        navigate("/");
      } else {
        toast.error(resData.response.data.error);
      }
    }
  };

  const generateImgUrl = (e) => {
    const imgUrl = URL.createObjectURL(e.target.files[0]);
    setUpdateImage(e.target.files[0]);
    setImage(imgUrl);
  };

  return (
    <div className="my-10 flex flex-col items-center gap-4">
      <h1 className="text-3xl font-bold">Update Your Details</h1>
      {/* {console.log(gender)} */}
      {isLoading ? (
        <Loader />
      ) : (
        <form className=" p-5 shadow-lg shadow-gray-400 rounded-lg flex flex-col items-center gap-5">
          <img
            className="w-14 h-14 rounded-full"
            src={image ? image : `${BASE_URL}/uploadImage/${showImage}`}
            alt=""
          />
          <div className="flex flex-col md:flex-row gap-10">
            <Input
              p_holder="Enter first name"
              type="text"
              label="First name"
              name="fName"
              value={inputTextValue.fName}
              changeHandler={changeHandler}
            />
            <Input
              p_holder="Enter last name"
              type="text"
              label="Last name"
              name="lName"
              value={inputTextValue.lName}
              changeHandler={changeHandler}
            />
          </div>
          <div className="flex flex-col gap-5 md:flex-row md:gap-10">
            <Input
              p_holder="Enter email name"
              type="text"
              label=" Email"
              name="email"
              value={inputTextValue.email}
              changeHandler={changeHandler}
            />
            <Input
              p_holder="Enter mobile name"
              type="text"
              label="Mobile"
              name="mobile"
              value={inputTextValue.mobile}
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
                  checked={gender == "Male" ? true : false}
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
                  checked={gender == "Female" ? true : false}
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
                <option value="Inctive">InActive</option>
              </select>
            </div>
          </div>
          <input onChange={(e) => generateImgUrl(e)} className="" type="file" />
          <button
            onClick={(e) => updateUserInfo(e)}
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
