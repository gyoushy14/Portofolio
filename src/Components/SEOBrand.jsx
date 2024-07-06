import "./SEO.css";
import CV_Mahmoud_Elgyuoshi from "../assets/Mahmoud EL-Gyuoshy CV.pdf";
import Navbar from "./Navbar";
const SEOBrand=()=> {
  <Navbar />
  return (
    <div className="seocontainer">
      <main className=" lg:flex my-11 mx-3 py-10 pb-16 justify-center text-center cursor-default">
        <div className=" mb-5">
          <div className="mb-1 text-center mt-20  flex justify-center">
            <p className="text-sky-500 lg:text-4xl sm:text-3xl  font-bold font-serif">
              Web Design{" "}
              <span className="text-white lg:text-4xl font-bold font-serif">
                &
              </span>
            </p>

            <p className="text-green-500 lg:text-4xl sm:text-3xl font-bold font-serif ms-2">
              Development
            </p>
          </div>
          <br />
          <div className="flex lg:text-xl text-white content">
            Design a stunning, responsive website <br />
            strengthens your brand and spreads your ideas.
            <br /> Stand out with a design that sets you apart from others!
          </div>
          <br />
          <div className=" grid grid-cols-4 mt-4 justify-items-center">
            <div>
              <img src="src/assets/mongodb.svg" width={50} alt="" />
            </div>
            <div>
              <img
                src="src/assets/express-js-11217744-9200748-transformed.webp"
                width={50}
                alt=""
              />
            </div>
            <div>
              <img src="src/assets/react.svg" width={50} alt="" />
            </div>
            <div className="mt-3">
              <img
                src="/src/assets/Node-removebg-preview.png"
                width={50}
                className="imagenode"
                alt=""
              />
            </div>
          </div>
          <div className=" grid grid-cols-4 mt-10 justify-items-center">
            <div>
              <img
                src="src/assets/free-figma-3628771-3030133.webp"
                width={50}
                className="scale-125"
                alt=""
              />
            </div>
            <div>
              <img
                src="/src/assets/Adobe_Photoshop_CC_icon.svg.png"
                width={50}
                className="scale-125"
                alt=""
              />
            </div>
            <div>
              <img
                src="src/assets/tailwind.svg"
                width={50}
                className="scale-125"
                alt=""
              />
            </div>
            <div>
              <img
                src="src/assets/Bootstrap_logo.svg.png"
                width={50}
                className="scale-125"
                alt=""
              />
            </div>
          </div>
        </div>
      </main>
      <div className="flex justify-center"><a href={CV_Mahmoud_Elgyuoshi} download="CV" className="bg-green-700 lg:text-xl font-bold font-serif w-auto mb-5 text-white p-3 rounded text-center">Download CV</a></div>
    </div>
  );
}

export default SEOBrand;
