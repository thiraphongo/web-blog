import Pic1 from "../assets/pic-1.png";
import Logo from "../assets/logo.png";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";

const Login = () => {
  const [userData, setUserData] = useState({
    username: "",
    password: "",
  });

  const inputValue = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <div className="row lg:grid grid-cols-6 items-center register">
        <div className="col-span-4 bg-primary flex items-center justify-center h-lvh">
          <img src={Pic1} alt="" width="600" />
        </div>
        <div className="col-span-2 px-10 py-10">
          <div className="row">
            <div className="col">
              <div className="group-logo-register flex items-center">
                <img src={Logo} alt="" width="50" />
                <h3 className="text-2xl">Hurricane</h3>
              </div>
              <div className="register-form py-4">
                <h2 className="text-3xl font-bold">Login</h2>
                <p className="text-xl py-2">เข้าสู่ระบบ</p>
                <form
                  action=""
                  className="form-register form flex flex-col gap-y-4  py-4"
                >
                  <p className="form-error-message bg-red-500 text-white ps-4 py-2 rounded-md">
                    ข้อความแสดงข้อผิดพลาด
                  </p>
                  <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    id="username"
                    className="h-10 px-2 border border-solid border-1 border-slate-400 rounded-md"
                    value={userData.username}
                    onChange={inputValue}
                    autoFocus
                  />
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    id="password"
                    className="h-10 px-2 border border-solid border-1 border-slate-400 rounded-md"
                    value={userData.password}
                    onChange={inputValue}
                    autoFocus
                  />
                  <button
                    type="submit"
                    className="btn bg-primary text-white py-2 rounded-md hover:bg-blue-600"
                  >
                    เข้าสู่ระบบ
                  </button>
                </form>
                <h4>
                  หากไม่มีบัญชี ?{" "}
                  <Link to="/register" className="text-primary">
                    สมัครสมาชิก
                  </Link>
                </h4>
                <Link to="/"><h4 className="py-4 flex items-center gap-x-2">
                  <FaArrowLeft />
                  กลับไปที่ Hurricane 
                </h4></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
