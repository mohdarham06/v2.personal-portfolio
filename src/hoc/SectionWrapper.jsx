import React from 'react'

import { motion } from 'framer-motion';
import { styles } from '../styles';

import { staggerContainer } from '../utils/motion';

const SectionWrapper = (Component, idName, viewport = 0.2) => {
    function HOC(props) {
        return (
            <motion.section
                variants={staggerContainer()}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: viewport }}
                className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
            >

                <span className="hash-span" id={idName}>
                    &nbsp;
                </span>
                <Component {...props} />

            </motion.section>
        )
    }

    return HOC;

}

export default SectionWrapper