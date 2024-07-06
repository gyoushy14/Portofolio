import { useState } from "react";
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import { IoMenuSharp } from "react-icons/io5";
import Headroom from "react-headroom";
import "./Navbar.css"
const Navbar = () => {
  const [click, setclick] = useState(false);
  const hadleclick = () => setclick(!click);

  const headers = (
    <>
      <Headroom>
        <div className="lg:hidden block relative rounded-xl w-full left-0 right-0 transition-all bg-slate-50 nav">
          <ul className="text-center text-xl p-20">
            <Link spy="true" smooth="true" to="/">
              <li className="my-4 py-4 border-b hover:text-blue-700 cursor-pointer">
                Home
              </li>
            </Link>
            <Link spy="true" smooth="true" to="/about">
              <li className="my-4 py-4 border-b hover:text-blue-700 cursor-pointer">
                About
              </li>
            </Link>
            <Link spy="true" smooth="true" to="/skills">
              <li className="my-4 py-4 border-b hover:text-blue-700 cursor-pointer">
                Skills
              </li>
            </Link>
            <Link spy="true" smooth="true" to="/service">
              <li className="my-4 py-4 border-b hover:text-blue-700 cursor-pointer">
                Services
              </li>
            </Link>


            <Link spy="true" smooth="true" to="/projects">
              <li className="my-4 py-4 border-b hover:text-blue-700 cursor-pointer">
                Projects
              </li>
            </Link>
            <Link spy="true" smooth="true" to="/contact">
              <li className="my-4 py-4 border-b hover:text-blue-700 cursor-pointer">
                Contact
              </li>
            </Link>
          </ul>
        </div>
      </Headroom>

    </>
  );

  return (
    <Headroom>
      <nav className="bg-slate-50 opacity-85 rounded-3xl lg:ms-6 lg:me-6 nav">
        <div className="h-10vh flex justify-between z-50  lg:py-5 px-20 py-4">
          <div className="flex items-center flex-1">
            <span>
              <img
                src="public/mahmoud-el-gyuoshi-high-resolution-logo-transparent (1).webp"
                alt="Logo for MAhmoud ELgyuoshi (Web Develoepr , UI & UX designer)"
                width={100}
                className=" scale-150"
              />
            </span>
          </div>
          <div className="lg:flex md:flex lg:flex-1 items-center justify-end hidden">
            {" "}
            <ul className="flex gap-8 mr-16 text-[18px]">
              <Link to="/">
                <li className=" border-b hover:text-blue-700  hover:border-blue-700 transition-all cursor-pointer">
                  Home
                </li>
              </Link>
              <Link to="/about">
                <li className=" border-b hover:text-blue-700 hover:border-blue-700 transition-all  cursor-pointer">
                  About
                </li>
              </Link>

              <Link to="/skills">
                <li className=" border-b hover:text-blue-700 hover:border-blue-700 transition-all  cursor-pointer">
                  Skills
                </li>
              </Link>
              <Link to="/service">
                <li className=" border-b hover:text-blue-700  hover:border-blue-700 transition-all cursor-pointer">
                  Services
                </li>
              </Link>

              <Link to="/projects">
                <li className="border-b hover:text-blue-700 hover:border-blue-700 cursor-pointer transition-all">
                  Projects
                </li>
              </Link>
              <Link to="/contact">
                <li className=" border-b hover:text-blue-700 hover:border-blue-700 transition-all  cursor-pointer">
                  Contact
                </li>
              </Link>
            </ul>
          </div>
          <div>{click && headers}</div>
          <button
            className="block lg:hidden md:hidden transition text-3xl"
            onClick={hadleclick}
          >
            {click ? <FaTimes /> : <IoMenuSharp />}
          </button>
        </div>
      </nav>
    </Headroom>

  );
};
export default Navbar;
