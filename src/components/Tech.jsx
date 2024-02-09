import React from 'react'

import { motion } from 'framer-motion';
import { styles } from '../styles';
import { textVariant } from '../utils/motion';
import { technologies } from '../constants'
import { SectionWrapper } from '../hoc';


const Tech = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <div className={`${styles.sectionSubText}`}>I've been working with</div>

                <h2 className={`${styles.sectionHeadText}`}>Technologies</h2>
            </motion.div>

            <div className='mt-20 flex flex-wrap justify-center gap-10'>

                {/* 3D Tech Balls */}
                {/*             
                {technologies.map((technology) => (
                    <div
                        key={technology.name}
                        className="w-20 h-28"
                    >
                        <BallCanvas
                            icon={technology.icon}
                        />
                    </div>
                ))} */}



                {technologies.map((technology) => (
                    <div
                        key={technology.name}
                        className="block-container w-20 h-20"
                    >
                        <div className="btn-back rounded-xl" />
                        <div className="btn-front rounded-xl flex justify-center items-center">
                            <img
                                src={technology.icon}
                                alt={technology.name}
                                className="w-3/5 h-3/5 object-contain"
                            />
                        </div>
                    </div>
                ))}
            </div>

        </>

    )
}

export default SectionWrapper(Tech, "technologies")