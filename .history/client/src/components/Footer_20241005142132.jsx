import Logo from "../assets/logo.png"

const Footer = () => {
    return (
       <div className="bg-primary px-4 py-4 h-full">
         <div className="container mx-auto ">
            <div className="row grud grid-cols-4">
                <div className="col-span-1 flex items-center">
                    <img src={Logo} alt="" width="100px"/>
                    <h2 className="text-white text-4xl">Hurricane</h2>
                </div>
            </div>
        </div>
       </div>
    )
}

export default Footer;