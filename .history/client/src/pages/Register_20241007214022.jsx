import Pic1 from "../assets/pic-1.png";
import Logo from "../assets/logo.png";
import { useState } from "react";

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
                <form action="" className="form-register form">
                  <p className="form-error-message">
                  ข้อความแสดงข้อผิดพลาด
                  </p>
                  <input type="text" name="username" placeholder="Username" id="username" value={UserData.username} onChange={changeInput} autoFocus />
                  <input type="email" name="username" placeholder="Email" id="username" value={UserData.username} onChange={changeInput} autoFocus />
                  <input type="text" name="username" placeholder="Username" id="username" value={UserData.username} onChange={changeInput} autoFocus />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
