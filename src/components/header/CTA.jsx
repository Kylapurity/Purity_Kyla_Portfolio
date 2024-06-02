import React from 'react';

const CTA = () => {
  return (
    <div className="cta">
      <a
        href="https://docs.google.com/document/d/1ZN4DOrpU0DFUNn41PpdVRjuOiQXJhpnH/edit?usp=sharing&ouid=108302524839382946361&rtpof=true&sd=true"
        target="_blank"
        rel="noopener noreferrer"
        className="btn"
      >
        Download CV
      </a>
      <a href="#contact" className="btn btn-primary">
        Let's talk
      </a>
    </div>
  );
};

export default CTA;

