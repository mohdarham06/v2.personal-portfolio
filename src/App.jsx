
import { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import {
    Navbar, Hero, About, Experience,
    Tech, Work, Contact, StarsCanvas,
} from './components';
import ModalProjects from './components/ModalProjects';

const App = () => {
    const [isProjectsModalOpen, setIsProjectsModalOpen] = useState(false);

    const openProjectsModal = () => setIsProjectsModalOpen(true);

    const closeProjectsModal = () => setIsProjectsModalOpen(false);


    return (
        <Router>
            <div className="relative z-0 bg-primary">
                {isProjectsModalOpen &&
                    <ModalProjects closeProjectsModal={closeProjectsModal} />
                }

                <div className=" bg-hero-pattern bg-cover bg-no-repeat bg-center">

                    <Navbar />
                    <Hero />

                </div>


                <About />
                <Experience />
                <Tech />
                <Work openProjectsModal={openProjectsModal} />

                <div className="relative z-0">
                    <Contact />
                    <StarsCanvas />
                </div>


            </div>
        </Router>
    )
}

export default App
