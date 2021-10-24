import '../styles/style.css'

function Progress(props) {


  return (
    <div className="Progress">

      <div className="progress-container">
        <div className="progress-bar" id="bar" style={{width:props.progress + "%"}}></div>
      </div>


    </div>
  );
}


export default Progress;