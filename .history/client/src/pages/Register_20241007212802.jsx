import Pic1 from "../assets/pic-1.png";
import Logo from "../assets/logo.png"

const Register = () => {
  return (
    <div>
      <div className="row grid grid-cols-6 items-center register">
        <div className="col-span-4 bg-primary flex items-center justify-center">
          <img src={Pic1} alt="" width="600" />
        </div>
        <div className="col-span-2 px-10">
          <div className="row">
            <div className="col">
              <div className="group-logo-register flex items-center">
                <img src={Logo} alt="" width="50"/>
                <h3 className="text-2xl">Hurricane</h3>
              </div>
              <div className="register-form py-6">
                <h2 className="text-3xl font-bold">Register</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
