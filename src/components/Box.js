import '../styles/style.css'
import linkedin from '../styles/linkedin.png';
import github from '../styles/github.png';
import profile from '../styles/ic_launcher.png';
import htmlcssjs from '../styles/htmlcssjs.png';

function Box() {
  return (
    <div className="Box">

      <div className="Preview">
        <p>About me</p>
      </div>

      <div className="MoreInfo">
        <img className="ProfilePic" src={profile} alt="profile"/>
        <div className="AboutMe">
          <h1>Tuomas Rajala</h1>
          <p>Student at Metropolia UAS</p>
          <p>Tools and Technologies: </p>
          <div className="Tools">
            <img src={htmlcssjs} alt="HTML, CSS, JS"/>
            <img src="/react.png" className="React" alt="React logo"/>
            <img src="/nodejs.png" className="Nodejs" alt="Nodejs logo"/>
          </div>
          <ul>
          <li><a href={"https://www.linkedin.com/in/tuomasrajala/"}><img src={linkedin} alt="linkedin"/></a></li>
          <li><a href={"https://github.com/rtuomas"}><img src={github} alt="github"/></a></li>
        </ul>

        </div>


      </div>

    </div>
  );
}

export default Box;