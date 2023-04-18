import React from 'react';
import './App.css';
import {Contact} from "./components/Contact";
import {Experience} from "./components/Experience";
import {Hero} from "./components/Hero";
import {About} from "./components/About";
import {Navbar} from "./components/Navbar";
import {Footer} from "./components/Footer";


function App() {
    return (<>
            <Navbar/>
            <Hero/>
            <About/>
            <Experience />
            <Contact />
            <Footer />
        </>
    );
}

export default App;
