import Pic1 from "../assets/pic-1.png";
import Logo from "../assets/logo.png";
import { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {


  const [UserData, setUserData] = useState({
    username:'',
    email:'',
    password:'',
    password2:''
  });


  const changeInput = (e) => {
    setUserData(prevState => {
      return {...prevState, [e.target.value]:e.target.value}
    })
  }

  return (
    <div>
      <div className="row lg:grid grid-cols-6 items-center register">
        <div className="col-span-4 bg-primary flex items-center justify-center">
          <img src={Pic1} alt="" width="600" />
        </div>
        <div className="col-span-2 px-10">
          <div className="row">
            <div className="col">
              <div className="group-logo-register flex items-center">
                <img src={Logo} alt="" width="50" />
                <h3 className="text-2xl">Hurricane</h3>
              </div>
              <div className="register-form py-4">
                <h2 className="text-3xl font-bold">Register</h2>
                <p className="text-xl py-2">สมัครสมาชิกเพื่อใช้งานระบบ</p>
                <form action="" className="form-register form flex flex-col gap-y-4  py-4">
                  <p className="form-error-message">
                  ข้อความแสดงข้อผิดพลาด
                  </p>
                  <input type="text" name="username" placeholder="Username" id="username" className="h-10 px-2 border border-solid border-2 border-x-zinc-500 rounded-sm" value={UserData.username} onChange={changeInput} autoFocus />
                  <input type="email" name="email" placeholder="Email" id="email" className="h-10 px-2 border border-solid border-1 border-sky-800" value={UserData.email} onChange={changeInput} autoFocus />
                  <input type="password" name="password" placeholder="Password" id="password" className="h-10 px-2 border border-solid border-1 border-sky-800" value={UserData.password} onChange={changeInput} autoFocus />
                  <input type="password" name="password2" placeholder="Confirm Password" id="password2" className="h-10 px-2 border border-solid border-1 border-sky-800" value={UserData.password} onChange={changeInput} autoFocus />
                  <button type="submit" className="btn bg-primary text-white py-2">สมัครสมาชิก</button>
                </form>
                <h4>หากมีบัญชีอยู่แล้ว ? <Link to="/login" className="text-primary">Login</Link></h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
