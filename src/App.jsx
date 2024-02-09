
import { BrowserRouter as Router } from 'react-router-dom';

import {
    Navbar, Hero, About, Experience,
    Tech, Work, Contact, StarsCanvas,
} from './components';

const App = () => {

    return (
        <Router>
            <div className="relative z-0 bg-primary">

                <div className=" bg-hero-pattern bg-cover bg-no-repeat bg-center">

                    <Navbar />
                    <Hero />

                </div>

                <About />
                <Experience />
                <Tech />
                <Work />

                <div className="relative z-0">
                    <Contact />
                    <StarsCanvas />
                </div>


            </div>
        </Router>
    )
}

export default App
