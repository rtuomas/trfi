import './App.css'
import React from 'react'
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import Footer from './components/Footer'
import video from './background.mp4';
const projects = require('./projects.json')


function App() {

  return (
    <div className="App">

      <video id="background-video" loop autoPlay muted>
        <source src={video} type="video/mp4"/>
        Your browser does not support the video tag.
      </video>

      <Home />
      <About />
      <Projects projects={projects}/>
      <Footer />
    </div>
  );
}

export default App;
