import React from 'react';

const CTA = () => {
  return (
    <div className="cta">
      <a
        href="https://docs.google.com/document/d/1JM0V_IaGUamLzEKZ0em1j76VQC05fZkB71axn_GREDM/edit?usp=sharing"
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

