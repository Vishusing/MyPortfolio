"use client"

import Typewriter from 'typewriter-effect';
import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      <div className="h-[100vh] font-bold flex flex-col items-center justify-center gap-4 text-black">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1.5, opacity: 1 }}
          transition={{ duration: 2 }}
        >
          <img
            src="/Vishal.jpeg"
            alt="Vishal"
            width={200}
            className="rounded-full p-6 mb-2"
          />
        </motion.div>
        <Typewriter
          options={{
            strings: ['Myself... Vishal Singh', 'Full Stack Dev', 'Python Enthusiast'],
            autoStart: true,
            loop: true,
          }}
        />
        <div className="flex gap-6">
          <button
            onClick={() => window.open("https://github.com/Vishusing?tab=repositories", "_blank")}
            className="bg-white border-black text-black flex items-center gap-1 font-semibold border rounded-full p-1"
          >
            <img
              src="/github.svg"
              width={30}
              alt="githubsvg"
            />
            Github
          </button>
          <button
            onClick={() => window.open("https://www.linkedin.com/in/vishal-singh-425978224/", "_blank")}
            className="bg-white border-black text-black flex items-center gap-1 font-semibold border rounded-full p-1"
          >
            <img
              src="/linkedin.svg"
              width={30}
              alt="downloadsvg"
            />
            LinkedIn
          </button>
        </div>
        <button
          className="bg-white border border-black text-black flex items-center font-semibold rounded-full p-1 
          transition-colors duration-500 ease-in-out hover:bg-blue-400 hover:text-white"
          onClick={() => window.open("https://drive.google.com/file/d/1Gebl69uQmPmRS6Ebt_pQn-L4W7CDOZLh/view?usp=sharing", "_blank")}
        >
          <img
            src="/download.svg"
            width={30}
            alt="downloadsvg"
            className='hover:text-white'
          />
          Download CV
        </button>
      </div>
      <div
        className='bg-white h-[100vh] w-full flex items-center justify-center'
      >
        <motion.div
          className="bg-black h-[490px] w-[900px] rounded-lg flex mx-7 md:mx-6"
          animate={{ x: ["-100%", "0%"] }}
          transition={{ duration: 4 }}
        >
          <div className="w-full md:w-1/2 hidden md:flex items-center justify-center">
            <img src="/Contact.webp" width={250} alt="Contact" />
          </div>
          <div className="w-full md:w-1/2 px-2 flex flex-col items-center justify-center gap-8">
            <textarea placeholder='Contact me' className='p-1' name="" id="" cols="40" rows="10"></textarea>
            <button className='bg-blue-800 hover:bg-blue-700 duration-700 text-white rounded-lg py-2 px-4'>
              Send
            </button>
          </div>
        </motion.div>
      </div>
    </>
  );
}
