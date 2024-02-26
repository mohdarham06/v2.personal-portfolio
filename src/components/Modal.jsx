import React from 'react'


const Modal = ({ children, modifier = '' }) => {

    return (
        <div className={`fixed z-50 w-screen h-screen bg-[rgba(83,90,103,0.35)] flex flex-row ${modifier}`}>

            {children}

        </div>
    )
}

export default Modal