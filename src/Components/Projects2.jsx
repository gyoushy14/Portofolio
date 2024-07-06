const Projects = () => {
  return (
    <main className="">
      <h1 className="text-center font-semibold mb-10 text-sky-950 text-3xl mt-10">
        Projects
      </h1>
      <div className="grid lg:grid-cols-3 sm:grid-cols-1  px-5 justify-items-center  ">
        {/* First Card */}
        <div className="max-w-sm  border border-gray-200 rounded-lg shadow mt-5 bg-slate-900 dark:border-gray-700">
          <a href="#">
            <img className="rounded-t-lg h-64 w-full" src="public/todolist-vert.png" alt="" />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                To-Do List
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              

            I used the MERN stack to create a to-do list to organize goals and commitments, and I used NoSQL databases.

            </p>
            <a
              href="https://drive.google.com/file/d/1egdWFcYwKMFqfz7fhR9XOPdextfdU8hj/view?usp=sharing"
              target="_blank"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Visit
            </a>
          </div>
        </div>
        <div className="max-w-sm border border-gray-200 rounded-lg shadow mt-5 bg-slate-900 dark:border-gray-700">
          <a href="#">
            <img
              className="rounded-t-lg h-64 w-96"
              src="public/Tic.jpg"
              alt=""
            />
          </a>
          <div className="p-5">
            <a href="">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Tic-Tac-Toe (X O)
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Developed using React.js. Features include determining the winner, handling
ties, and a user-friendly interface.

            </p>
            <a
              href="https://tic-tac-to-alpha.vercel.app/"
              target="_blank"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Visit
            </a>
          </div>
        </div>

        {/* SEconed Card */}


        {/* Third Card */}
        
        <div className="max-w-sm  border border-gray-200 rounded-lg mt-5 shadow bg-slate-900 dark:border-gray-700">
          <a href="#">
            <img className="rounded-t-lg" src="public/Memory.png" alt="" />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Memory Game
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              A game I designed using React to strengthen and improve memory.
              Using React.js
            </p>
            <a
              href="https://6675cd64dd68c8d8fdfc25f0--sensational-narwhal-e4c439.netlify.app/"
              target="_blank"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center mt-14 text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Visit
            </a>
          </div>
        </div>

   

        
      </div>
      <div className="grid lg:grid-cols-3 sm:grid-cols-1 py-10 px-5 justify-items-center mt-10 ">
        {/* First Card */}
        <div className="max-w-sm  border border-gray-200 rounded-lg shadow mt-5 bg-slate-900 dark:border-gray-700">
          <a href="#">
            <img className="rounded-t-lg h-64" src="public/JS.png" alt="" />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                JS Synatx Game
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Game to learn beginners how to write code with syntax javascript.
              Using Html , Css , Javascript and Bootstrap
            </p>
            <a
              href="https://gyoushy14.github.io/JS-SYNTAX-GAME/game"
              target="_blank"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Visit
            </a>
          </div>
        </div>


        {/* SEconed Card */}
        <div className="max-w-sm  border border-gray-200 rounded-lg shadow mt-5 bg-slate-900 dark:border-gray-700">
          <a href="#">
            <img
              className="rounded-t-lg"
              src="public/What-Is-an-API.png"
              alt=""
            />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                API Project
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              These operations are commonly used in web and mobile applications
              to fetch data about the current user or specific user information
              based on the needs of the application.
            </p>
            <a
              href="https://gyoushy14.github.io/API_Project/"
              target="_blank"
              className="inline-flex items-center mt-10 px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Visit
            </a>
          </div>
        </div>

        {/* Third Card */}
        <div className="max-w-sm  border border-gray-200 rounded-lg mt-5 shadow bg-slate-900 dark:border-gray-700">
          <a href="#">
            <img
              className="rounded-t-lg h-64 w-96"
              src="public/454-calculator.svg"
              alt=""
            />
          </a>
          <div className="p-5">
            <a href="">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Calculator
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              A calculator that includes all mathematical operations using Html,
              Css, Javascript and Bootstrap.
            </p>
            <a
              href="https://gyoushy14.github.io/Calculator/CALC"
              target="_blank"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Visit
            </a>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 sm:grid-cols-1 px-5 justify-items-center ">
        {/* First Card */}
        <div className="max-w-sm border border-gray-200 rounded-lg shadow mt-5 bg-slate-900 dark:border-gray-700">
          <a href="#">
            <img
              className="rounded-t-lg h-64 w-96"
              src="public/GH14.png"
              alt=""
            />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Clothes Store (GH 14)
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              The most beautiful clothing store for men and women is designed
              with HTML, CSS, Javascript and Bootstrap
            </p>
            <a
              href="https://gyoushy14.github.io/Crud/crud"
              target="_blank"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Visit
            </a>
          </div>
        </div>

        {/* SEconed Card */}
        <div className="max-w-sm border border-gray-200 rounded-lg shadow mt-5 bg-slate-900 dark:border-gray-700">
          <a href="#">
            <img
              className="rounded-t-lg"
              src="public/63fdf75ad4a978704fe9ac9c_CRUD  Preview.jpeg"
              alt=""
            />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                CRUD
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Create: Add new data to the database. <br />
              Read: Retrieve or review data from the database. <br />
              Update: Modify the data in the database. <br />
              Delete: Delete data from the database. <br />
              Using Hrml , Css and Javascript

            </p>
            <a
              href="https://gyoushy14.github.io/Crud/crud"
              target="_blank"
              className="inline-flex mt-1 items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Visit
            </a>
          </div>
        </div>

        {/* Third Card */}
        <div className="max-w-sm  border border-gray-200 rounded-lg mt-5 shadow bg-slate-900 dark:border-gray-700">
          <a href="#">
            <img
              className="rounded-t-lg h-64 w-96"
              src="public/Authen.png"
              alt=""
            />
          </a>
          <div className="p-5">
            <a href="">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Authentication Form
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Implemented login and registration using MERN stack, ensuring email and
            password validation.
            </p>
            <a
              href="https://drive.google.com/file/d/1tHo2tuAWGMe4q-VaQAkri2Me-dHT5hK5/view?usp=sharing"
              target="_blank"
              className="inline-flex items-center mt-5 px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Visit
            </a>
          </div>
        </div>

      </div>




    </main>
  );
};

export default Projects;
