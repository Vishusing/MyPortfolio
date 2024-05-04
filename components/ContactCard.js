import { motion } from "framer-motion";
import React from 'react'

const ContactCard = () => {
    return (
        <motion.div
            className="bg-black h-[490px] w-[900px] rounded-lg flex mx-7 md:mx-6"
            animate={{ x: ["-100%", "0%"] }}
            transition={{ duration: 4 }}
        >
            <div className="w-full md:w-1/2 hidden md:flex items-center justify-center">
                <img src="/Contact.webp" width={250} alt="Contact" />
            </div>
            <div className="w-full md:w-1/2 px-2 flex flex-col items-center justify-center gap-8">
                <a href="tel:+919919438441">
                    <span className="text-white flex gap-2">
                        <img src="/phone.svg" width={15} alt="phone" />
                        +91 9919438441
                    </span>
                </a>
                <textarea placeholder='Contact me' className='p-1' name="" id="" cols="40" rows="10"></textarea>
                <button className='bg-blue-800 hover:bg-blue-700 duration-700 text-white rounded-lg py-2 px-4'>
                    Send
                </button>
            </div>
        </motion.div>
    )
}

export default ContactCard
