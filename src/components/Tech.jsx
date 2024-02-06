import React from 'react'

import { motion } from 'framer-motion';
import { BallCanvas } from './canvas';
import { styles } from '../styles';
import { textVariant } from '../utils/motion';
import { technologies } from '../constants'
import { SectionWrapper } from '../hoc';


const Tech = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <div className={`${styles.sectionSubText}`}>What I U</div>

                <h2 className={`${styles.sectionHeadText}`}>Technologies</h2>
            </motion.div>

            <div className='mt-20 flex flex-wrap justify-center gap-10'>
                {technologies.map((technology) => (
                    <div
                        key={technology.name}
                        className="w-20 h-28"
                    >
                        <BallCanvas
                            icon={technology.icon}
                        />
                    </div>
                ))}
            </div>

        </>

    )
}

export default SectionWrapper(Tech, "technologies")