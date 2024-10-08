import Pic1 from "../assets/pic-1.png";

const Register = () => {
  return (
    <div>
      <div className="row grid grid-cols-6 items-center register">
        <div className="col-span-4 bg-primary flex items-center justify-center">
          <img src={Pic1} alt="" width="600px" />
        </div>
        <div className="col-span-2 px-10">
          <div className="row">
            <div className="col flex"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
