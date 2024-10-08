import Logo from "../assets/logo.png";

const Footer = () => {
  return (
    <div className="bg-primary px-4 py-4 h-full">
      <div className="container mx-auto ">
        <div className="row grud grid-cols-4">
          <div className="col-span-1 flex">
            <div className="flex">
              <img src={Logo} alt="" width="100px" />
              <h2 className="text-white text-2xl">Hurricane</h2>
            </div>
            <div className="about-us">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero,
              aperiam consectetur pariatur exercitationem modi quam, maiores,
              non sint eaque quaerat qui dolorum eveniet molestiae expedita!
              Magnam esse itaque consequatur atque.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
