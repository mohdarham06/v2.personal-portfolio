import React from 'react'

import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { motion } from 'framer-motion';
import 'react-vertical-timeline-component/style.min.css';

import { styles } from '../styles';
import { experiences } from '../constants'
import { textVariant } from '../utils/motion';

import { SectionWrapper } from '../hoc';


const ExperienceCard = ({ experience }) => {
    return (
        <VerticalTimelineElement
            contentStyle={{
                background: '#1d1836',
                color: '#ffffff',
            }}
            contentArrowStyle={{
                borderRight: '7px solid #232631'
            }}
            date={experience.date}
            icon={
                <div className="flex justify-center items-center w-full h-full">
                    <img
                        src={experience.icon}
                        alt={experience.company_name}
                        className='w-[70%] h-[70%] object-contain'
                    />
                </div>
            }
            iconStyle={{
                background: experience.iconBg
            }}
        >

            <div className="">
                <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
            </div>

            <p className="text-secondary text-[16px] font-semibold m-0">{experience.company_name}</p>

            <ul className="mt-5 list-disc ml-7">
                {experience.points.map((point, index) => (
                    <li
                        key={index}
                        className="text-white text-[14px] pl-1 tracking-wider"
                    >
                        {point}
                    </li>
                ))}
            </ul>

        </VerticalTimelineElement>
    )
}


const Experience = () => {

    return (
        <>
            <motion.div variants={textVariant()}>
                <div className={`${styles.sectionSubText}`}>What I have done so far</div>

                <h2 className={`${styles.sectionHeadText}`}>Education</h2>
            </motion.div>


            <div className="mt-20 flex flex-col">
                <VerticalTimeline
                    lineColor='white'
                >

                    {experiences.map((experience, index) => (
                        <ExperienceCard
                            key={index}
                            experience={experience}
                        />
                    ))}
                </VerticalTimeline>
            </div>
        </>
    )
}

export default SectionWrapper(Experience, "experience")