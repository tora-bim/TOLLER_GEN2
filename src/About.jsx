import './index.css';
import './assets/css/About.css';

function About(props) {
    return (
      <>
        <div className="about_section">
          <div className="about_name roboto-regular">{props.name}</div>
          <hr />
          <div className="about_desc">
            <div className="about_eng">{props.eng}</div>
            <div className="about_jp">{props.jp}</div>
          </div>
        </div>
      </>
    )
  }
  
export default About
  