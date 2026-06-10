import React, { useState, useEffect, useCallback } from "react";
import Resto from "../../assets/Resto.jpeg";
import Creative from "../../assets/Creative.jpeg";
import Healthpass from "../../assets/Healthpass.jpeg";
import Math from "../../assets/Math.jpeg";
import Travel from "../../assets/travel.jpeg";
import We_Care from "../../assets/We-Care.jpeg";
import event from "../../assets/event.jpeg";
import Airbnb from "../../assets/AirBnb.jpeg";
import Bussiness from "../../assets/Bussiness.jpeg";
import accounts from "../../assets/accounts.png";
import bookflow from "../../assets/bookflow.png";
import reports from "../../assets/reports.png";
import funtion from "../../assets/funtion.png";
import blue from "../../assets/blue.png";
import deal from "../../assets/deals.png";
import depa from "../../assets/depancy.png";
import workflow from "../../assets/workflow.png";
import flowc from "../../assets/flowc.png";
import board from "../../assets/board.png";
import employee from "../../assets/employ.png";
import payroll from "../../assets/payroll.png";
import procu from "../../assets/procumet.png";
import graph from "../../assets/graph.png";
import ord from "../../assets/ord.png";
import pro from "../../assets/pro.png";
import dash from "../../assets/dash.png";
import IQ from "../../assets/IQ.png";
import up from "../../assets/upd.png";
import proje from "../../assets/proje.png";
import flow from "../../assets/flow.png";

import "./portfolio.css";
import { AnimatePresence, motion } from "framer-motion";

// ─── LIGHTBOX ─────────────────────────────────────────────────────────────────
const Lightbox = ({ images, startIdx, onClose }) => {
  const [idx, setIdx] = useState(startIdx);

  const prev = useCallback((e) => { e.stopPropagation(); setIdx(i => i === 0 ? images.length - 1 : i - 1); }, [images]);
  const next = useCallback((e) => { e.stopPropagation(); setIdx(i => i === images.length - 1 ? 0 : i + 1); }, [images]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft")  setIdx(i => i === 0 ? images.length - 1 : i - 1);
      if (e.key === "ArrowRight") setIdx(i => i === images.length - 1 ? 0 : i + 1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [images, onClose]);

  return (
    <div className="lb" onClick={onClose}>
      <button className="lb__close" onClick={onClose}>✕</button>
      <div className="lb__inner" onClick={e => e.stopPropagation()}>
        <img src={images[idx]} alt={`${idx + 1} of ${images.length}`} className="lb__img" />
        {images.length > 1 && (
          <>
            <button className="lb__arrow lb__arrow--l" onClick={prev}>&#8249;</button>
            <button className="lb__arrow lb__arrow--r" onClick={next}>&#8250;</button>
            <span className="lb__counter">{idx + 1} / {images.length}</span>
          </>
        )}
      </div>
    </div>
  );
};

// ─── CAROUSEL ─────────────────────────────────────────────────────────────────
const Carousel = ({ images, title, onOpenLightbox }) => {
  const [idx, setIdx] = useState(0);
  useEffect(() => { setIdx(0); }, [images]);

  if (!images || images.length === 0) return null;

  const prev = (e) => { e.stopPropagation(); setIdx(i => i === 0 ? images.length - 1 : i - 1); };
  const next = (e) => { e.stopPropagation(); setIdx(i => i === images.length - 1 ? 0 : i + 1); };

  return (
    <div className="p-img" onClick={() => onOpenLightbox(idx)}>
      <img src={images[idx]} alt={`${title} ${idx + 1}`} className="p-img__photo" />
      <div className="p-img__zoom">🔍</div>
      {images.length > 1 && (
        <>
          <button className="p-img__arrow p-img__arrow--l" onClick={prev}>&#8249;</button>
          <button className="p-img__arrow p-img__arrow--r" onClick={next}>&#8250;</button>
          <div className="p-img__dots">
            {images.map((_, i) => (
              <span key={i} className={`p-img__dot${i === idx ? " on" : ""}`}
                onClick={(e) => { e.stopPropagation(); setIdx(i); }} />
            ))}
          </div>
          <span className="p-img__count">{idx + 1}/{images.length}</span>
        </>
      )}
    </div>
  );
};

// ─── DATA ─────────────────────────────────────────────────────────────────────
const zohoProjects = [
  {
    id: "z1", tag: "Zoho CRM", role: "Lead Zoho Developer",
    title: "CRM Blueprints & Automated Workflows",
    images: [blue, deal, depa, workflow, flowc],
    description: "The client relied entirely on manual processes, causing lost leads and inaccurate revenue data. I built a custom Zoho CRM blueprint with tailored fields, automated email notifications, task triggers, and lead scoring across pipeline stages. Integrated Zoho Analytics, Books, and Cliq for unified finance, collaboration, and reporting — including shared dashboards for users without full licences.",
    outcome: "Fully automated CRM giving the team real-time pipeline visibility and data-driven dashboards to analyse their best-performing products.",
    skills: ["Zoho CRM", "Blueprints", "Workflow Automation", "Zoho Analytics", "Zoho Books", "Zoho Cliq"],
  },
  {
    id: "z2", tag: "Zoho Analytics", role: "Zoho Analytics Specialist",
    title: "Custom Analytics Dashboards",
    images: [ord, dash, pro],
    description: "Designed and deployed interactive Zoho Analytics dashboards consolidating data from CRM, Books, and People. Stakeholders can slice pipeline performance, revenue trends, and team metrics in one place — including users on shared-view licences.",
    outcome: "Replaced fragmented spreadsheet reporting with live, role-based dashboards accessible to the whole organisation.",
    skills: ["Zoho Analytics", "Data Visualisation", "Dashboard Design", "Zoho CRM", "Zoho Books"],
  },
  {
    id: "z3", tag: "Zoho Creator", role: "Zoho Specialist",
    title: "Payroll System — Kenya & India",
    images: [board, employee, payroll, graph, procu],
    description: "Developed a fully customised Payroll Management System using Zoho Creator, tailored to the compliance and statutory requirements of both Kenya and India. Covered a growing company with 100+ employees; integrated Zoho Books for finance and Zoho People for HR data.",
    outcome: "Automated end-to-end payroll processing, reducing manual effort and ensuring country-specific compliance.",
    skills: ["Zoho Creator", "Zoho Books", "Zoho People", "Deluge Scripting", "Payroll Automation"],
  },
  {
    id: "z4", tag: "Zoho Books", role: "Zoho Developer",
    title: "Finance Setup & Data Migration",
    images: [accounts, bookflow, reports, funtion],
    description: "Imported and restructured company financial data into Zoho Books as part of a full finance system migration. Enhanced the system to auto-populate bill prices when a new bill is created, eliminating manual entry errors and speeding up accounts payable.",
    outcome: "Clean, accurate financial records from day one with smart auto-fill significantly reducing data-entry time.",
    skills: ["Zoho Books", "Data Migration", "Workflow Rules", "Finance Automation"],
  },
  {
    id: "z5", tag: "Zoho SalesIQ", role: "Zoho Developer",
    title: "SalesIQ Chatbot & Lead Capture",
    images: [IQ],
    description: "Integrated Zoho SalesIQ into the client's website to automatically capture visitor leads and push them directly into Zoho CRM. Built a custom chatbot using Deluge that cross-references an Excel product dataset — visitors enter a brand or model and the bot returns an instant direct link to the matching product page.",
    outcome: "Zero missed web leads; chatbot reduced product search time and improved engagement without a complex backend.",
    skills: ["Zoho SalesIQ", "Zoho CRM", "Deluge Scripting", "API Integration", "Chatbot Development", "Lead Automation"],
  },
  {
    id: "z6", tag: "Zoho Flow", role: "Zoho Developer",
    title: "HR Approval Automation — Flow & People",
    images: [flow, up, proje],
    description: "Built a Zoho Flow integration connecting Zoho People to automate HR approval workflows. Flows trigger automatically when employees submit timesheets, attendance records, or leave requests. Approvals route to the correct manager, notifications fire at each stage, and records update in real time.",
    outcome: "End-to-end HR workflow automation: faster approvals, full audit trail, and zero manual follow-up.",
    skills: ["Zoho Flow", "Zoho People", "Workflow Automation", "Leave Management", "Timesheet Automation", "Attendance Tracking"],
  },
];

const soloProjects = [
  { id: 1,  category: "Web",    title: "Restaurant",       images: [Resto],      tech: "React · Tailwind CSS",                                  link: "https://github.com/Kylapurity/Restaurant-Web-React-V2" },
  { id: 2,  category: "Design", title: "Creative",         images: [Creative],   tech: "UI/UX Research",                                        figmalink: "https://www.figma.com/design/XIfdSqCPXf7NMHQEjQZBie/First-Class?node-id=0-1" },
  { id: 3,  category: "Mobile", title: "Healthpass",       images: [Healthpass], tech: "Flutter · Mobile · Agile",                              github: "https://github.com/Kylapurity/BSE-FOUNDATIONS-PROJECT-HEALTH-PASS", figmalink: "https://www.figma.com/design/RjtjtScTI3MmGPJrg22J4F/Health-Pas-Project?node-id=0-1" },
  { id: 4,  category: "Web",    title: "Math Dashboard",   images: [Math],       tech: "HTML · CSS · JS · React · Tailwind CSS",                github: "https://github.com/Kylapurity/Hyggex-App", liveDemo: "https://hyggex-app-chi.vercel.app/" },
  { id: 5,  category: "Web",    title: "Travel App",       images: [Travel],     tech: "HTML · CSS · Figma · Bootstrap · React · Tailwind CSS", github: "https://github.com/Kylapurity/Travel-App" },
  { id: 6,  category: "Design", title: "Business",         images: [Bussiness],  tech: "Figma",                                                 figma: "https://www.figma.com/design/5xXiFlTd3K4KnM4kQBcHrY/Design-class?node-id=0-1" },
  { id: 7,  category: "Web",    title: "AirBnB Clone",     images: [Airbnb],     tech: "CSS Grid · HTML · Python",                              github: "https://github.com/Kylapurity/AirBnB_clone_v2" },
  { id: 8,  category: "Web",    title: "Women E-Learning", images: [We_Care],    tech: "HTML · CSS · React · Tailwind CSS",                     github: "https://github.com/Kylapurity/We-Care", liveDemo: "https://we-care-sage.vercel.app/" },
  { id: 9,  category: "Design", title: "Event Manager",    images: [event],      tech: "Figma · UI/UX Research",                                figmalink: "https://www.figma.com/design/L6ykMjzjVTkZYZTUsUAoqq/Event-Manager?node-id=0-1" },
];

const descriptions = {
  1: "Graspa is a cloud-based learning management system designed to provide students with an online learning environment to access educational content and resources.",
  2: "Credence is an eco-friendly mobile application that offers small businesses a platform to showcase their products and facilitate sales through digital receipts.",
  3: "The Hospital Booking App (Hilto) is a user-friendly platform designed to streamline the process of booking appointments with healthcare providers.",
  4: "View analytics for multiple social media platforms on this dashboard. Enjoy dark and light modes with animations for a better experience.",
  5: "Landing Page for the Skilled E-learning Platform, built from the UI/UX wireframe to create a seamless experience.",
  6: "User-friendly app for users to rate products and services.",
  7: "Fully responsive website showing business testimonials, built based on a Figma design.",
  8: "Fully responsive interactive landing page for an e-commerce business built from an Adobe XD design.",
  9: "Roomify — A mobile application that helps users find roommates and rooms by creating a verified profile, setting preferences, and listing ads.",
};

const FILTERS = ["Web", "Mobile", "Design"];

// ─── PROJECT CARD ─────────────────────────────────────────────────────────────
const ProjectCard = ({ pro }) => {
  const [lb, setLb] = useState(null);
  return (
    <>
      <article className="pcard">
        <Carousel images={pro.images} title={pro.title} onOpenLightbox={(i) => setLb(i)} />
        <div className="pcard__body">
          <h3 className="pcard__title">{pro.title}</h3>
          <p className="pcard__desc">{descriptions[pro.id]}</p>
          <p className="pcard__tech">{pro.tech}</p>
        </div>
        <div className="pcard__cta">
          {pro.github    && <a href={pro.github}    target="_blank" rel="noreferrer" className="btn">GitHub</a>}
          {pro.figmalink && <a href={pro.figmalink} target="_blank" rel="noreferrer" className="btn btn-primary">Figma Link</a>}
          {pro.figma     && <a href={pro.figma}     target="_blank" rel="noreferrer" className="btn btn-primary">Figma</a>}
          {pro.link      && <a href={pro.link}      target="_blank" rel="noreferrer" className="btn btn-primary">Live Demo</a>}
          {pro.liveDemo  && <a href={pro.liveDemo}  target="_blank" rel="noreferrer" className="btn btn-primary">Live Demo</a>}
        </div>
      </article>
      {lb !== null && <Lightbox images={pro.images} startIdx={lb} onClose={() => setLb(null)} />}
    </>
  );
};

// ─── ZOHO CARD ────────────────────────────────────────────────────────────────
const ZohoCard = ({ project, expanded, onToggle }) => {
  const [lb, setLb] = useState(null);
  return (
    <>
      <article className="pcard">
        <Carousel images={project.images} title={project.title} onOpenLightbox={(i) => setLb(i)} />
        <div className="pcard__body">
          <div className="pcard__meta">
            <span className="pcard__tag">{project.tag}</span>
            <span className="pcard__role">{project.role}</span>
          </div>
          <h3 className="pcard__title">{project.title}</h3>
          <p className="pcard__desc">{project.description}</p>
          <AnimatePresence>
            {expanded && (
              <motion.div
                className="pcard__outcome"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.22 }}
              >
                <strong>Outcome:</strong> {project.outcome}
              </motion.div>
            )}
          </AnimatePresence>
          <button className="pcard__toggle" onClick={onToggle}>
            {expanded ? "Hide outcome ▲" : "See outcome ▼"}
          </button>
          <div className="pcard__skills">
            {project.skills.map(s => <span key={s} className="pcard__badge">{s}</span>)}
          </div>
        </div>
      </article>
      {lb !== null && <Lightbox images={project.images} startIdx={lb} onClose={() => setLb(null)} />}
    </>
  );
};

// ─── MAIN ─────────────────────────────────────────────────────────────────────
const Portfolio = () => {
  const [filter, setFilter] = useState("all");
  const [expanded, setExpanded] = useState(null);

  const toggle = (id) => setExpanded(prev => prev === id ? null : id);

  const showAll  = filter === "all";
  const showZoho = filter === "Zoho";
  const showCat  = FILTERS.includes(filter);

  const filteredSolo = showCat ? soloProjects.filter(p => p.category === filter) : [];

  // "All" view: show first 3 Zoho + first 3 of each solo category, all in one grid
  const allPreview = [
    ...zohoProjects.slice(0, 3),
    ...soloProjects.filter(p => p.category === "Web").slice(0, 3),
    ...soloProjects.filter(p => p.category === "Mobile").slice(0, 1),
    ...soloProjects.filter(p => p.category === "Design").slice(0, 2),
  ];

  return (
    <section id="portfolio">
      <h2>Portfolio</h2>

      {/* FILTERS */}
      <div className="pf">
        <button className={filter === "all"  ? "pf__btn active" : "pf__btn"} onClick={() => setFilter("all")}>All</button>
        <button className={filter === "Zoho" ? "pf__btn pf__btn--zoho active" : "pf__btn pf__btn--zoho"} onClick={() => setFilter("Zoho")}>Zoho</button>
        {FILTERS.map(cat => (
          <button key={cat} className={filter === cat ? "pf__btn active" : "pf__btn"} onClick={() => setFilter(cat)}>{cat}</button>
        ))}
      </div>

      {/* ALL VIEW — clean grid, no labels */}
      {showAll && (
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
          <div className="pgrid">
            {allPreview.map(p =>
              p.tag ? (
                <ZohoCard key={p.id} project={p} expanded={expanded === p.id} onToggle={() => toggle(p.id)} />
              ) : (
                <ProjectCard key={p.id} pro={p} />
              )
            )}
          </div>
          <div className="pmore-row">
            <button className="pmore-btn" onClick={() => setFilter("Zoho")}>View all Zoho →</button>
            {FILTERS.map(cat => (
              <button key={cat} className="pmore-btn" onClick={() => setFilter(cat)}>View all {cat} →</button>
            ))}
          </div>
        </motion.div>
      )}

      {/* ZOHO FULL VIEW */}
      {showZoho && (
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
          <div className="pgrid">
            {zohoProjects.map(p => (
              <ZohoCard key={p.id} project={p} expanded={expanded === p.id} onToggle={() => toggle(p.id)} />
            ))}
          </div>
        </motion.div>
      )}

      {/* SINGLE CATEGORY VIEW */}
      {showCat && (
        <AnimatePresence mode="wait">
          <motion.div key={filter} initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 24 }} transition={{ duration: 0.3 }}>
            <div className="pgrid">
              {filteredSolo.map(p => <ProjectCard key={p.id} pro={p} />)}
            </div>
          </motion.div>
        </AnimatePresence>
      )}
    </section>
  );
};

export default Portfolio;