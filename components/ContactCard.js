import { useState } from "react";
import { motion } from "framer-motion";

const ContactCard = () => {

    const [email, setEmail] = useState('');
    const [text, setText] = useState('');

    const sendEmail = () => {
        const subject = encodeURIComponent("Hey.. Vishal..Someone Messaged you on your portfolio");
        const body = encodeURIComponent(text);
        window.open(`mailto:${email}?subject=${subject}&body=${body}`);
    }

    return (
        <motion.div
            className="bg-black h-[490px] w-[900px] rounded-lg flex mx-7 md:mx-6"
            animate={{ x: ["-100%", "0%"] }}
            transition={{ duration: 2 }}
        >
            <div className="w-full md:w-1/2 hidden md:flex items-center justify-center">
                <img
                    src="/Contact.webp"
                    width={250}
                    alt="Contact"
                /> 
            </div>
            <div className="w-full md:w-1/2 px-2 flex flex-col items-center justify-center gap-6">
                <div className="gap-3 w-full flex flex-col sm:flex-row items-center justify-center">
                    <a href="tel:+919919438441">
                        <span className="text-white flex gap-2">
                            <img
                                src="/phone.svg"
                                width={15}
                                alt="phone"
                            />
                            +91 9919438441
                        </span>
                    </a>
                    <a href="mailto:vs299901@gmail.com">
                        <span className="text-white flex gap-2">
                            <img
                                src="/mail.svg"
                                width={20}
                                alt="mail"
                            />
                            vs299901@gmail.com
                        </span>
                    </a>
                </div>
                <input
                className="p-2 w-[340px] rounded-lg"
                placeholder="Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
               <textarea
                placeholder='Message'
                className='p-2 rounded-lg'
                value={text}
                onChange={(e) => setText(e.target.value)}
                cols="45"
                rows="10"
            />
                <button
                    className='bg-blue-600 hover:bg-blue-500 duration-700 text-white rounded-lg py-2 px-4'
                    onClick={sendEmail}
                >
                    Send
                </button>
            </div>
        </motion.div>
    )
}

export default ContactCard
