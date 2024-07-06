import "./Services.css";
const Service1 = () => {
  return (
    <main className="cursor-default mt-20 mb-28">
      <h1 className=" text-sky-950 text-3xl font-semibold text-center ">
        Services
      </h1>
      <div className="grid lg:grid-cols-3 sm:grid-cols-1 pt-10 justify-items-center">
        {/* First Card */}
        <div className="Webcard border-2 rounded-xl p-2 w-72 mt-5 leading-relaxed px-4 py-2 Webcard hover:scale-105 transition-all hover:bg-blue-100 hover:text-blue-700 cursor-default">
          <div className="flex justify-center">
            <img
              src="public/output.png"
              className="rounded-3xl scale-150 w-40 text-center"
              alt=""
            />
          </div>
          <p className="text-center p-3 font-semibold ">
            UI & <span className="text-purple-800">UX</span> Design
          </p>
          <div className="font-light">
            <b>UI</b> (User Interface): Visual user interface design. Includes
            colors & fonts. Diversity in aesthetics and visual user experience.{" "}
            <br />
            <span className="text-purple-800 font-semibold">UX</span> (User
            Experience): It contributes to achieving user satisfaction through
            interaction with the product.
          </div>
        </div>
        {/* Seconed Card */}
        <div className="border-2 rounded-xl p-2 w-72 mt-5 leading-relaxed px-4 py-2 Webcard hover:scale-105 transition-all hover:bg-blue-100 hover:text-blue-700 cursor-default">
          <div className="flex justify-center">
            <img
              src="public/logowebdeve.png"
              className="rounded-2xl w-24 text-center"
              alt=""
            />
          </div>
          <p className="text-center p-3 font-semibold webtext">
            Web Development
          </p>
          <div className="font-light">
            Web development using <b className="text-blue-700">MERN</b> is one
            of the most popular tracks for developing full stack web
            applications. This track consists of four main technologies
            (MongoDB, Express.js, React.js, Node.js) They help create a fast and
            smooth website and provide more features to the user.
          </div>
        </div>
        {/* Third card */}
        <div className=" border-2 rounded-xl p-2 w-72 mt-5 leading-relaxed px-4 py-2 Webcard hover:scale-105 transition-all hover:bg-blue-100 hover:text-blue-700 cursor-default">
          <div className="flex justify-center">
            <img
              src="public/Lamdes-removebg-preview.png"
              className="rounded-3xl scale-105 w-24 text-center"
              alt=""
            />
          </div>
          <p className="text-center p-3 font-semibold ">
            <span className="text-red-600">Graphic</span> Design
          </p>
          <div className="font-light">
            graphic design using{" "}
            <span className="text-red-600 font-semibold">Photoshop</span> :
            Designing logos, posters, cards, and websites includes image
            editing, color enhancement, defect removal, and image installation
            Photoshop is a powerful and comprehensive tool for designing and
            editing images and graphics, widely used in graphic design.
          </div>
        </div>
      </div>
      {/* <hr className=" border-slate-600 mx-20 pb-16 mt-24" /> */}
    </main>
  );
};

export default Service1;
