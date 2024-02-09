import React from 'react'

// import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';

import { styles } from "../styles";
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';



const About = () => {
    return (
        <>

            <motion.div variants={textVariant()}>
                <div className={`${styles.sectionSubText}`}>Introduction</div>

                <h2 className={`${styles.sectionHeadText}`}>Overview</h2>
            </motion.div>

            <motion.p
                variants={fadeIn("", "", 0.1, 1)}
                className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
            >
                I'm a skilled software developer with experience in TypeScript and
                JavaScript, and expertise in frameworks like React.js, Next.js, and
                Three.js. I'm a quick learner and collaborate closely with clients to
                create efficient, scalable, and user-friendly solutions that solve
                real-world problems. Let's work together to bring your ideas to life!
            </motion.p>


        </>
    )
}

export default SectionWrapper(About, "about")