import { TfiLinkedin } from "react-icons/tfi";
import { LuGithub } from "react-icons/lu";
import { SiFreelancer } from "react-icons/si";
import { SiUpwork } from "react-icons/si";
const Footer = () => {
    return (
        <main className="mt-10 bg-slate-900 text-white rounded-3xl">
            <footer className="grid grid-cols-4 justify-items-center py-5">
            <div className="mt-5">
                        <a href="https://github.com/gyoushy14">
                        <LuGithub className="text-2xl" />
                        </a>
                    </div>
                    <div className="mt-5">
                        <a href="www.linkedin.com/in/mahmoudelgyuoshy">
                        <TfiLinkedin className="text-2xl" />
                        </a>
                    </div>
                  
                    <div className="mt-5">
                        <a href="https://www.freelancer.com/u/mahmoud0291">
                       <SiFreelancer className="text-2xl"/>
                        </a>
                    </div>
                    <div className="mt-5">
                        <a href="https://www.upwork.com/freelancers/~015b3014aa157f6ccd">
                        <SiUpwork className="text-2xl"/>
                        </a>
                    </div>
            </footer>
        </main>
    )
}

export default Footer;