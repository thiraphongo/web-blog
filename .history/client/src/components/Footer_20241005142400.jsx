import Logo from "../assets/logo.png";

const Footer = () => {
  return (
    <div className="bg-primary px-4 py-4 h-full">
      <div className="container mx-auto ">
        <div className="row grid grid-cols-4">
          <div className="col-span-1">
          <div className=" flex flex-col">
            <div className="flex items-center">
              <img src={Logo} alt="" width="100px" />
              <h2 className="text-white text-2xl">Hurricane</h2>
            </div>
            <div className="about-us text-white px-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero,
              aperiam consectetur pariatur.
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
