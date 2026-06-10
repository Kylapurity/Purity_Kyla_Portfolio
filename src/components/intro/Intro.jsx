import React from 'react';
import { FaAward } from 'react-icons/fa';
import { VscFolderLibrary } from 'react-icons/vsc';
import ME from '../../assets/ky.jpeg';
import './intro.css';

const bullets = [
  "End-to-end Zoho implementation (CRM, Books, Creator, People, Desk)",
  "Workflow automation and custom app development using Deluge",
  "API integrations and system architecture design",
  "Data analysis, reporting, and visualization for decision-making",
  "AI/ML-driven solutions for smarter business processes",
];

const Intro = () => (
  <section id="about">
    <h2>About Me</h2>
    <div className="container about__container">

      {/* ── LEFT: photo ── */}
      <div className="about__me">
        <div className="about__me-image">
          <img src={ME} alt="Purity Kihiu" />
        </div>
      </div>

      {/* ── RIGHT: content ── */}
      <div className="about__content">

        {/* Stat cards */}
        <div className="about__cards">
          <article className="about__card">
            <FaAward className="about__icon" />
            <h5>Experience</h5>
            <small>3 Years</small>
          </article>
          <article className="about__card">
            <VscFolderLibrary className="about__icon" />
            <h5>Projects</h5>
            <small>20 Completed</small>
          </article>
        </div>

        {/* Short intro — 2 sentences max */}
        <p className="about__intro">
          Hello <strong>Purity Kihiu</strong> ,a Software Engineer specializing in Zoho ecosystem development and AI-driven solutions. 
          I help businesses streamline operations, automate workflows, and unlock data-driven decision-making through scalable digital systems. 
          I have hands-on experience building end-to-end solutions using Zoho Components, Deluge scripting ,transforming manual processes into efficient and automated workflows across finance, HR, and sales. 
          Beyond Zoho, I develop models by integrating APIs, data analytics, and emerging AI/ML technologies to solve real-world problems from business automation to impact-driven platforms like e-learning systems.
        </p>

        {/* Bullet skills — 2 columns */}
        <ul className="about__bullets">
          {bullets.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>

        <a href="#contact" className="btn btn-primary">Let's Talk</a>
      </div>

    </div>
  </section>
);

export default Intro;