import React from "react";
import Resto from "../../assets/Resto.jpeg";
import Creative from "../../assets/Creative.jpeg";
import Healthpass from "../../assets/Healthpass.jpeg";
import Math from "../../assets/Math.jpeg";
import Travel from "../../assets/travel.jpeg";
import We_Care from "../../assets/We-Care.jpeg";
import event from "../../assets/event.jpeg";
import Airbnb from "../../assets/AirBnb.jpeg";
import Bussiness from "../../assets/Bussiness.jpeg";

import "./portfolio.css";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const Portfolio = () => {
  const [category, setCategory] = useState("all");
  const [filteredProjects, setFilteredProjects] = useState([]);
  const soloProjects = [
    {
      id: 1,
      title: "Resturant",
      img: Resto,
      category: "Steak",
      description:
        "Graspa is a cloud-based learning management system designed to provide students with an online learning environment that allows them to access educational content and resources",
      technologies: "React || Tailwind Css",
      link:
        "https://github.com/Kylapurity/Restaurant-Web-React-V2",
    },
    {
      id: 2,
      title: "Creative",
      img: Creative,
      category: "Desktop",

      description:
        "Credence is an eco-friendly mobile application that offers small businesses a platform to showcase their products and services, and facilitates sales through the generation of digital receipts instead of paper receipts.",
      technologies: " UI/UX Research",
      figmalink:
        "https://www.figma.com/design/XIfdSqCPXf7NMHQEjQZBie/First-Class?node-id=0-1&t=BwChNGBvGL1w0Upo-1",
    },
    {
      id: 3,
      title: "Healthpass",
      img: Healthpass,
      category: "Desktop",

      description:
        "The Hospital Booking App (Hilto) is a user-friendly platform designed to streamline the process of booking appointments with healthcare providers.",
      technologies: "Flutter | Mobile | Agile ",
      figmalink:
        "https://www.figma.com/design/RjtjtScTI3MmGPJrg22J4F/Health-Pas-Project?node-id=0-1&t=dZ2x3YaYEbJpdPKp-1",
      github: "https://github.com/Kylapurity/BSE-FOUNDATIONS-PROJECT-HEALTH-PASS",
    },
    {
      id: 4,
      title: "Math Dashboard",
      img: Math,
      category: "Web",

      description:
        "View analytics for multiple social media platforms (Instagram, LinkedIn, Youtube, Twitter) on this dashboard. Enjoy dark and light modes with animations for a better experience.",
      technologies: "HTML | CSS | JS | React | Tailwindcss",
      LiveDemo: "https://hyggex-app-chi.vercel.app/",
      github: "https://github.com/Kylapurity/Hyggex-App",
    },
    {
      id: 5,
      title: "Travel App",
      img: Travel,
      category: "Web",

      description:
        "Landing Page for the Skilled E-learning Platform, built from the UI/UX wireframe to create a seamless experience",
      technologies: "HTML | CSS | Figma | Boostrap | React | Tailwind Css",
      github: "https://github.com/Kylapurity/Travel-App",
    },
    {
      id: 6,
      title: "Business",
      category: "Figma",

      img: Bussiness,
      description:
        "User friendly app to for users to rate products and services",
      technologies: "Figma",
      figma: "https://www.figma.com/design/5xXiFlTd3K4KnM4kQBcHrY/Design-class?node-id=0-1&t=NZ2OgPIYB3fbvLTU-1",
    },
    {
      id: 7,
      title: "AirBnB",
      img: Airbnb,
      category: "Web",
      description:
        "Fully responsive website that shows the testimonials of a business, built based on Figma design ",
      technologies: "CSS Grid | HTML | Python ",
      github: "https://github.com/Kylapurity/AirBnB_clone_v2",
    },
    {
      id: 8,
      title: "Women E-Learning",
      img: We_Care,
      category: "Web",

      description:
        "Fully responsive interactive website Landing Page for an Ecommerce business built based on Adobe XD design",
      technologies: "HTML | CSS | React | Tailwind Css",
      Demolink: "https://we-care-sage.vercel.app/",
      github: "https://github.com/Kylapurity/We-Care",
    },
    {
      id: 9,
      title: "Event",
      img: event,
      category: "Design",

      description:
        "Roomify - A mobile application that help users find roommates and rooms by creating a verified profile, setting preferences and listing advertisements.",
      technologies: "Figma | UI/UX Research",
      figmalink:
        "https://www.figma.com/design/L6ykMjzjVTkZYZTUsUAoqq/Event-Manager?node-id=0-1&t=TnuzkcOuC5fnKaNK-1",
    },
  ];
  const handleCategoryClick = (newCategory) => {
    setCategory(newCategory);
    if (newCategory === "all") {
      setFilteredProjects(soloProjects);
    } else {
      const filtered = soloProjects.filter(
        (pro) => pro.category === newCategory
      );
      setFilteredProjects(filtered);
    }
  };

  const projectsToShow = category === "all" ? soloProjects : filteredProjects;

  return (
    <section id="portfolio">
      <h2>Portfolio</h2>
      <div className="portfolio__filters">
        <button
          onClick={() => handleCategoryClick("all")}
          className={category === "all" ? "active" : ""}
        >
          All
        </button>
        <button
          onClick={() => handleCategoryClick("Web")}
          className={category === "Web" ? "active" : ""}
        >
          Web
        </button>
        <button
          onClick={() => handleCategoryClick("Mobile")}
          className={category === "Mobile" ? "active" : ""}
        >
          Mobile
        </button>
        <button
          onClick={() => handleCategoryClick("Design")}
          className={category === "Design" ? "active" : ""}
        >
          Design
        </button>
      </div>
      <AnimatePresence>
        <motion.div
          layout
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          className="container portfolio__container"
        >
          {projectsToShow.map((pro) => (
            <article className="portfolio__item" key={pro.id}>
              <div className="portfolio__item-image">
                <img src={pro.img} alt={pro.title} />
              </div>
              <div className="portfolio__item-content">
                <h3>{pro.title}</h3>
                <p>{pro.description}</p>
                <p>{pro.technologies}</p>
              </div>
              <div className="portfolio__item-cta">
                {pro.hasOwnProperty("github") && (
                  <a
                    href={pro.github}
                    target="_blank"
                    className="btn"
                    rel="noreferrer"
                  >
                    GitHub
                  </a>
                )}

                {pro.hasOwnProperty("uiresearch") && (
                  <a
                    href={pro.uiresearch}
                    target="_blank"
                    className="btn"
                    rel="noreferrer"
                  >
                    UI Research
                  </a>
                )}
                {pro.hasOwnProperty("figmalink") && (
                  <a
                    href={pro.figmalink}
                    target="_blank"
                    className="btn btn-primary"
                    rel="noreferrer"
                  >
                    Figma Link
                  </a>
                )}
                {pro.hasOwnProperty("link") && (
                  <a
                    href={pro.link}
                    target="_blank"
                    className="btn btn-primary"
                    rel="noreferrer"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </article>
          ))}
        </motion.div>
      </AnimatePresence>
    </section>
  );
};

export default Portfolio;
