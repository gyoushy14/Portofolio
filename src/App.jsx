import "./App.css";
import AboutGH from "./Components/About";
import Contactform from "./Components/Contactform";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Projects from "./Components/Projects";
import SEOBrand from "./Components/SEOBrand";
import Service1 from "./Components/Service1";
import Skills from "./Components/Skills";
function App() {
  return (
    <main className="">
      <div className="navandservices rounded-b-3xl pb-1 cursor-default">
        <Navbar />
        <SEOBrand />
      </div>
      <AboutGH/>
      <Skills/>   
      <Service1/>  

      <Projects/>
      <Contactform />
      <Footer />
    </main>
  );
}
export default App;
