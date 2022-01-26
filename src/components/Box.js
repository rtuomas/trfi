import '../styles/style.css'
import linkedin from '../styles/linkedin.png';
import github from '../styles/github.png';
import profile from '../styles/ic_launcher.png';

function Box() {
  return (
    <div className="Box">
      <div className="HoverPreview"></div>

      <div className="Preview">
        <p>About me</p>
      </div>

      <div className="MoreInfo">
        <img className="ProfilePic" src={profile} alt="profile"/>
        <h1>Tuomas Rajala</h1>
        <p>Student</p>

        <ul>
          <li><a href={"https://www.linkedin.com/in/tuomasrajala/"}><img src={linkedin} alt="linkedin"/></a></li>
          <li><a href={"https://github.com/rtuomas"}><img src={github} alt="github"/></a></li>
        </ul>

      </div>

    </div>
  );
}

export default Box;