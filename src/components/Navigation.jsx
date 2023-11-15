import { useState } from "react";

import { TbMenuDeep } from "react-icons/tb";
import { IoClose } from "react-icons/io5";

import { Drawer } from "@material-tailwind/react";

const Navigation = () => {
  const [open, setOpen] = useState(false);
  const openDrawer = () => {
    document.body.style.overflow = "hidden";
    setOpen(true);
  };
  const closeDrawer = () => {
    document.body.style.overflow = "scroll";
    setOpen(false);
  };
  return (
    <div className="fixed top-0 left-0 right-0 z-40">
      <div className="wrapper flex justify-between items-center py-5">
        <p className="font-bold text-[25px]">
          Easy<span className="text-[#00c0cf]">Cars</span>
        </p>
        <div className="hidden lg:block">
          <ul className="flex items-start gap-10">
            <li className="link border-primary-green"> Home</li>
            <li className="link border-transparent"> Booking</li>
            <li className="link border-transparent"> About</li>
            <li className="link border-transparent"> Cars</li>
            <li className="link border-transparent"> Services</li>
            <li className="link border-transparent"> Contact</li>
          </ul>
        </div>

        <TbMenuDeep
          className="block lg:hidden cursor-pointer h-6 w-6"
          onClick={openDrawer}
        />

        <Drawer
          className="px-6 py-12 rounded-r-lg flex flex-col gap-16"
          open={open}
          onClose={closeDrawer}
        >
          <IoClose
            className="absolute right-4 top-4 h-5 w-5 cursor-pointer"
            onClick={closeDrawer}
          />

          <ul className="flex flex-col items-center gap-10">
            <li className="link border-primary-green"> Home</li>
            <li className="link border-transparent"> Booking</li>
            <li className="link border-transparent"> About</li>
            <li className="link border-transparent"> Cars</li>
            <li className="link border-transparent"> Services</li>
            <li className="link border-transparent"> Contact</li>
          </ul>

          <div className="w-full h-[2px] bg-primary-green rounded-full " />

          <div className="flex flex-col gap-10">
            <button className="btn_base text-primary-black hover:text-primary-green">
              Login
            </button>
            <button
              className="btn_base text-primary-black border-2 border-primary-green rounded-full py-2 px-5 
              hover: hover:bg-primary-green hover:border-transparent hover:text-white"
            >
              Sign Up
            </button>
          </div>
          <div className="mt-auto flex flex-col gap-10">
            <p>&copy; EasyCars 2023. All right reserved.</p>
          </div>
        </Drawer>
        <div className="hidden lg:flex items-center gap-[30px]">
          <button className="btn_base text-primary-black hover:text-primary-green">
            Login
          </button>
          <button
            className="btn_base text-primary-black border-2 border-primary-green rounded-full py-2 px-5 
              hover: hover:bg-primary-green hover:border-transparent hover:text-white"
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
