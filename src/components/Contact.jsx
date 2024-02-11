import React from 'react'

import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

import { styles } from '../styles';
import { EarthCanvas } from './canvas';
import { slideIn } from '../utils/motion';
import { SectionWrapper } from '../hoc';


const Contact = () => {
    const formRef = useRef();
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const id = e.target.id;
        const value = e.target.value;

        setForm((prev) => ({
            ...prev,
            [id]: value
        }));
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        console.log(form)
        emailjs.send(
            'service_6l8v7wg',
            'template_erhtv9g',
            {
                from_name: form.name,
                to_name: 'Arham',
                from_email: form.email,
                to_email: 'mohdarham0634@gmail.com',
                message: form.message,
            },
            'fsyB4JmUqRLaGmetq'
        )
            .then(() => {
                setLoading(false);
                setForm({
                    name: "",
                    email: "",
                    message: "",
                })

                alert('Thank you. I will get back to you as soon as possible.');
            }, (error) => {
                setLoading(false);

                console.log(error);

                alert('Something went wrong.');
            })

    }


    return (
        <div className="xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden">

            <motion.div
                variants={slideIn('left', 'tween', 0.2, 1)}
                className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
            >

                <p className={`${styles.sectionSubText}`}>Get In Touch</p>
                <h3 className={`${styles.sectionHeadText}`}>Contact</h3>


                <form
                    ref={formRef}
                    onSubmit={handleSubmit}
                    action=""
                    className="mt-12 flex flex-col gap-8"
                >
                    <label htmlFor="name" className="flex flex-col">
                        <span className="text-white font-medium mb-4">Your Name</span>
                        <input
                            type="text"
                            id="name"
                            name="Name"
                            value={form.name}
                            onChange={handleChange}
                            placeholder="What's your name?"
                            autoComplete="off"
                            className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white font-medium rounded-lg outline-none border-none"
                        />
                    </label>

                    <label htmlFor="email" className="flex flex-col">
                        <span className="text-white font-medium mb-4">Your Email</span>
                        <input
                            type="email"
                            id="email"
                            name="Email"
                            value={form.email}
                            onChange={handleChange}
                            placeholder="What's your email?"
                            autoComplete="on"
                            required
                            className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white font-medium rounded-lg outline-none border-none"
                        />
                    </label>

                    <label htmlFor="message" className="flex flex-col">
                        <span className="text-white font-medium mb-4">Your Message</span>
                        <textarea
                            rows="7"
                            id="message"
                            name="Message"
                            value={form.message}
                            onChange={handleChange}
                            placeholder="What do you want to say?"
                            required
                            className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white font-medium rounded-lg outline-none border-none"
                        />
                    </label>

                    <button
                        type="submit"
                        className="bg-tertiary py-3 px-8 outline-none w-full text-white font-bold shadow-md shadow-primary rounded-xl"
                    >
                        {!loading ? "Send" : "Sending..."}
                    </button>
                </form>

            </motion.div>



            <motion.div
                variants={slideIn('right', 'tween', 0.2, 1)}
                className="xl:flex-1 xl:h-auto xl:max-h-[805px] lg:h-[650px] md:h-[560px] h-[340px]"
            >
                <EarthCanvas />
            </motion.div>
        </div>
    )
}

export default SectionWrapper(Contact, "contact")