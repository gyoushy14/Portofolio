import Footer from "./Footer";
import Navbar from "./Navbar";

const AboutGH2 = () => {
    return (
      <div className="cursor-default">
        <Navbar />
        <main className="py-4">
          <h1 className="text-3xl  text-sky-950  font-semibold text-center mt-5">
            Meet Mahmoud EL-Gyuoshi
          </h1>
          <div className=" lg:mx-20 my-20 grid lg:grid-cols-2 sm:grid-cols-1  justify-items-center mt-10 font-semibold ">
            <div className="mt-2 lg:text-xl md:text-xl sm:text-xs mb-10">
            My name is Mahmoud EL-Gyuoshi, and I am a 17-year-old student at WE
            Suez School of Applied Technology. I started programming a
            year ago and have delved deeply into the world of web development,
            achieving proficiency. I can work as a frontend  <span className="text-blue-700">React</span> developer,
            backend <span className="text-green-800">Node</span> developer, or combine both roles to function as a
            Full-stack (<span className="text-amber-700">MERN</span>) developer. My interests extend beyond web
            development. I have also immersed myself in graphic design, learning
            to use Adobe Photoshop for editing images and incorporating them
            into my web projects as a frontend developer. I believe a good
            website requires a good design, which led me to become a <span className="text-blue-700">UI</span> & <span className="text-amber-700">UX </span> 
            designer to execute my projects effectively. I am enthusiastic and
            excited about securing my first job opportunity.
            </div>
            <div>
              <img
                src="public/MEMO2.png"
                className=" w-72 rounded-full"
                alt=""
              />
            </div>
          </div>
        </main>
        <Footer/>
      </div>
    );
  };
  export default AboutGH2;
  