import React from 'react';
import { FaAward } from 'react-icons/fa';
import { VscFolderLibrary } from 'react-icons/vsc';
import ME from '../../assets/ei-1.jpg';
import './intro.css';

const Intro = () => {
  return (
    <section id="about">
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="me" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>1+ year</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>20+ Completed Projects</small>
            </article>
          </div>
<p>Hello, I'm Purity Kihiu,  I'm a passionate and open-minded web development professional with a knack for turning ideas into viable, user-friendly app solutions. I commit to utilizing the best technology and a generous dose of creativity to deliver functional applications that meet clients' unique needs.
<br></br><br></br>
-Build high-quality websites using HTML, CSS and Javascript.
-Proficient in HTML5 and CSS3 for creating the front end of website applications.
-Designing and implementing scalable codes.
-Work with different APIs and their integration into projects.
- Zoho Applications to bring the business sector into vision.
-Collaborate on projects in GitHub 
-Excellent collaborator among teams.
-Strong communication skills.
-Work harmoniously with teams and under minimal supervision.
-Problem-solver who enjoys solving challenging issues through extensive research and analysis.
-Adaptable and easily blend in with people from different walks of life.
 </p>
          <a href="#contact" className="btn btn-primary">Let's Talk</a>

        </div>
      </div>
    </section>
  )
}

export default Intro