import Logo from "../assets/logo.png";

const Footer = () => {
  return (
    <div className="bg-primary h-full">
      <div className="container mx-auto px-4 py-10 ">
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
          <div className="col-span-1">
            <div className=" flex flex-col">
              <div className="about-us text-white px-4">
                <h3 className="text-2xl">
                    Menu
                </h3>
                <ul className="py-4">
                    <li>Home</li>
                    <li>About</li>
                    <li>Service</li>
                    <li>Contact</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-span-1">
            <div className=" flex flex-col">
              <div className="about-us text-white px-4">
                <h3 className="text-2xl">
                    Social
                </h3>
                <ul className="py-4">
                    <li>FaceBook :</li>
                    <li>Instagram :</li>
                    <li>Line :</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-span-1">
            <div className=" flex flex-col">
              <div className="about-us text-white px-4">
                <h3 className="text-2xl">
                    Address
                </h3>
                <p className="py-4">
                   Phitsanulok, Naresuan Univercity
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto py-8 px-4 text-white text-sm">
      Copyright © 2023 IT-HERO MAN Co., Ltd. All Rights Reserved
      </div>
    </div>
  );
};

export default Footer;
