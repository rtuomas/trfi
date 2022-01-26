import './App.css'
//import React, {useState, useEffect} from 'react'
//import ReactScrollDetect, { DetectSection } from 'react-scroll-detect';
import Box from './components/Box'
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import Footer from './components/Footer'
import video from './background.mp4';
const projects = require('./projects.json')


function App() {
  /*
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
      //console.log(position)

      if(position>400){
        console.log('asd')
      }

  };

  useEffect(() => {
      window.addEventListener('scroll', handleScroll, { passive: true });

  }, []);
  */


  return (
    <div className="App">

      <video id="background-video" loop autoPlay muted>
        <source src={video} type="video/mp4"/>
        Your browser does not support the video tag.
      </video>


      <Box />


      <Home />
      <About />
      <Projects projects={projects}/>
      <Footer />
    </div>
  );
}

export default App;
