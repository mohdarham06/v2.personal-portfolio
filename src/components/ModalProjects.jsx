import React from 'react'

import Modal from './Modal';
import { projects } from '../constants';
import { github, visitlink } from '../assets';


// closeProjectModal from App
const ModalProjects = ({ closeProjectsModal }) => {

    return (
        <Modal>

            <div className="modal__post-editor bg-[#432a80] w-full max-h-[90vh] max-w-[85vw] md:max-w-[600px] m-auto overflow-auto rounded-2xl">
                <div
                    className="modal__post-editor__header fixed py-2 px-4"
                    onClick={closeProjectsModal}
                >
                    <div className="modal__close-btn 
                    relative w-8 h-8 -ml-2 flex flex-row justify-center items-center cursor-pointer 
                    before:absolute before:w-9 before:h-9 before:rounded-full before:scale-0 before:origin-center before:bg-[rgba(217,220,224,0.16)] before:transition
                    hover:before:scale-100
                    "
                    >
                        <svg aria-label="Close" fill="currentColor" width="1em" height="1em" viewBox="0 0 24 24">
                            <title>Close</title>
                            <polyline fill="none" points="20.643 3.357 12 12 3.353 20.647" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"></polyline><line fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" x1="20.649" x2="3.354" y1="20.649" y2="3.354"></line>
                        </svg>
                    </div>
                </div>


                <div className="flex flex-col gap-4 py-2 px-4 mt-11">
                    {projects.map((project, index) => (

                        <div
                            key={index}
                            className="bg-[#1a1337] p-4 rounded-xl"
                        >
                            <div className="flex justify-between items-center">
                                <h3 className="text-white text-[22px] font-semibold">{project.name}</h3>

                                <div className="flex gap-2">
                                    <div
                                        onClick={() => window.open(project.source_code_link, "_blank")}

                                        className='bg-[#000000] w-10 h-10 rounded-full 
                                        flex justify-center items-center cursor-pointer'
                                    >
                                        <img
                                            src={github}
                                            alt='source code'
                                            className='w-1/2 h-1/2 object-contain'
                                        />
                                    </div>

                                    <div
                                        onClick={() => window.open(project.live_link, "_blank")}
                                        className='bg-[#000000] w-10 h-10 rounded-full 
                                        flex justify-center items-center cursor-pointer'
                                    >
                                        <img
                                            src={visitlink}
                                            alt='live demo'
                                            className='w-[18px] h-[18px] object-contain'
                                        />
                                    </div>
                                </div>
                            </div>


                            <p className='mt-3 text-[#bbc0c5] text-[15px]'>{project.description}</p>


                            <div className='mt-4 flex flex-wrap gap-2'>
                                {project.tags.map((tag) => (
                                    <p
                                        key={`${tag.name}`}
                                        className={`text-[13px] ${tag.color}`}
                                    >
                                        {tag.name}
                                    </p>
                                ))}
                            </div>
                        </div>

                    ))}
                </div>


            </div>

        </Modal>
    )
}

export default ModalProjects