import "./SKills.css";
const Skills = () => {
  return (
    <main className="mb-5">
      <h1 className="text-center font-semibold mb-10 text-sky-950 text-3xl" >
        Skills
      </h1>
      <div className=" bg-slate-900 rounded-xl px-10 py-7">
        <div className=" grid pb-10 text-white justify-items-center lg:grid-cols-3 sm:grid-cols-1 ">
          {/* First Card */}
          <div className=" text-center mt-5">
            <div className="flex justify-center">
              <img
                src="public/Frontend-removebg-preview.png"
                className="rounded-full w-28"
                alt=""
              />
            </div>
            <p className="font-light lg:mx-5">
              Front-end development is concerned with creating a wonderful user
              experience by designing interactive and attractive interfaces
              using modern web technologies: Html, Css, Java Script, Tailwind
              Css, Bootstrap Css, Responsive web, React js and Dom
            </p>
          </div>

          {/* Seconed Card */}
          <div className=" text-center mt-5">
            <div className="flex justify-center">
              <img
                src="public/-Backend-removebg-preview.png"
                className="rounded-full w-28"
                alt=""
              />
            </div>
            <p className="font-light lg:mx-8">
              Backend development To manage the back-end operations of the
              website or application, such as the database and interaction with
              the server. The goal is to ensure site performance, security, and
              efficient data management. Technologies used: Node js, Express js,
              Mongo DB, APIs, Git & Github, OOP, Sql and NoSql
            </p>
          </div>

          {/* Third Card */}
          <div className="text-center mt-5">
            <div className="flex justify-center">
              <img
                src="public/Mern-Stack-Developeredit-removebg-preview (1).png"
                className="rounded-2xl w-44"
                alt=""
              />
            </div>
            <p className="font-light mt-10 lg:mx-8">
              MERN Stack enables developers to build end-to-end web applications
              using a set of JavaScript-driven tools and languages. It is
              flexible, efficient, and easy to learn thanks to the use of
              JavaScript in all parts of the application. The goal is to develop
              fast-performing and scalable web applications using Mongo DB,
              Express js, React js and Node js.
            </p>
          </div>
          {/* --------------- */}
        </div>
        <div className="grid pb-5 text-white justify-items-center lg:grid-cols-2 sm:grid-cols-1">
          {/* First in seconed */}
          <div className="mt-5 mb-5">
            <div className="flex justify-center">
              <img
                src="public/UIUXLOGO.png"
                className="rounded-full w-32 scale-110"
                alt=""
              />
            </div>
            <p className="font-light lg:mx-24 text-center">
              UI is The aesthetics and visual appearance of the product.. UX is
              The overall widget and user experience with a focus on the
              product. Using Figma
            </p>
          </div>
          {/* seconed in seconed */}
          <div className="sm:mt-5 lg:mt-0">
            <div className="flex justify-center">
              <img
                src="public/images-removebg-preview.png"
                className="rounded-full w-20"
                alt=""
              />
            </div>
            <p className="font-light lg:mx-24 text-center ">
            The graphics core in Photoshop includes creating and modifying images and graphics in a creative and professional manner. It can be used to design logos, modify photographs, and create designs for the web and print such as posters and business cards, using various tools and striking visual effects.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Skills;
