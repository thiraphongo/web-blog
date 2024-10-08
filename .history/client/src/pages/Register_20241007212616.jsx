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
            <div className="flex flex-col items-center">
              <div className="group-logo-register">
                <img src={Logo} alt="" width="100"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
