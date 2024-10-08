import Pic1 from "../assets/pic-1.png"


const Register = () => {
  return (
    <div>
      <div className="row grid grid-cols-5 register">
        <div className="col-span-3 bg-primary flex items-center justify-center">
              <img src={Pic1} alt=""  />
        </div>
        <div className="col-span-2">
              2 Col
        </div>
      </div>
    </div>
  )
}

export default Register