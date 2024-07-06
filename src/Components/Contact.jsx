
import { SiGmail } from "react-icons/si";
import "./Fromconayc.css";
import { IoIosSend } from "react-icons/io";
import { useRef } from 'react';
import emailjs from "@emailjs/browser";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_u9gl6ub', 'template_35oumd6', form.current, {
                publicKey: 'tyy9FZ7AJ-_UrO1to',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };
    return (
        <div>
            <Navbar/>
            <h1 className="text-center font-semibold mb-4 text-sky-950 text-3xl mt-10 cursor-default">
                Contact
            </h1>
            <main className="mt-10 cursor-default bg-slate-200">
                <div className="grid lg:grid-cols-2 sm:grid-cols-1 justify-items-center">
                    <div className="pb-10">
                        <div className="text-center py-10 text-2xl font-semibold flex justify-center text-slate-900">
                            <button>Send Gmail</button>
                            <SiGmail className="text-slate-700 mt-1 ms-1" />
                        </div>
                        <div>
                            <form ref={form} onSubmit={sendEmail} autoSave="true">
                                <input
                                    name="user_name"
                                    type="text"
                                    placeholder="Name"
                                    className="mb-5 block w-full rounded-md border-0 py-1.5 pl-1 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                                <input
                                    name="user_email"
                                    type="email"
                                    placeholder="Your email"

                                    className="mb-5 block w-80 rounded-md border-0 py-1.5 pl-1 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                                <input
                                    name="user_subject"
                                    type="text"
                                    placeholder="Subject"
                                    className="mb-5 block w-full rounded-md border-0 py-1.5 pl-1 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                                <textarea
                                    name="message"
                                    placeholder="Message"
                                    className="ps-1 block w-full rounded-md border-0 py-1"
                                />
                                <div className="flex justify-center mt-5 py-1 bg-slate-900 text-white rounded-lg text-xl cursor-pointer">
                                    <input type="submit" className="" value={"Send"} /><IoIosSend className="mt-1 ms-1" />
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="bg-slate-200">
                        <img src="src/assets/Ingin-Menjadi-Full-Stack-Developer-Handal-Yuk-Simak-Tipsnya-removebg-preview (1).png" alt="" />
                    </div>
                </div>
            </main>
            <Footer/>
        </div>
    );
};

export default Contact;
