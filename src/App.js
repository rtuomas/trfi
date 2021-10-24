import './App.css'
import React, {useState} from 'react'
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import Footer from './components/Footer'
import Progress from './components/Progress'
import video from './background.mp4';
const projects = require('./projects.json')


function App() {

  const [progress, setProgress] = useState(0)

  window.onscroll = () => {
    let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrolled = (winScroll / height) * 100;

    //ocument.getElementById("bar").style.width = scrolled + "%";
    setProgress(scrolled)
  }



  return (
    <div className="App">

      <video id="background-video" loop autoPlay muted>
        <source src={video} type="video/mp4"/>
        Your browser does not support the video tag.
      </video>

      <Home />
      <Progress progress={progress}/>
      <About />
      <Projects projects={projects}/>
      <Footer />
    </div>
  );
}

export default App;
