"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import "./page.css";

const GithubIcon = () => (
  <svg fill="currentColor" viewBox="0 0 24 24" width="14" height="14">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
  </svg>
);

const LinkedinIcon = () => (
  <svg fill="currentColor" viewBox="0 0 24 24" width="16" height="16">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const MailIcon = () => (
  <svg
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
    width="16"
    height="16"
  >
    <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const projects = [
  {
    tag: "Freelance",
    name: "AstroTravel Ticketing & Operations System",
    desc: "Built an end-to-end travel ticketing and operations web application using AdonisJS, React.js (Inertia.js), Tailwind CSS, and TypeScript. Managed complex PostgreSQL databases for routes, schedules, and fleet. Built ticketing transactions, payment, refund, and promo management, along with a Finance & Admin dashboard. Implemented MVC, OOP, and Clean Code.",
    stack: ["AdonisJS", "React", "TypeScript", "PostgreSQL", "Tailwind"],
    github: null,
  },
  {
    tag: "Thesis",
    name: "PMW & INBIS Entrepreneurship Portal",
    desc: "Developed an end-to-end entrepreneurship portal web application. Built the backend using Node.js (Express.js) with MVC and Clean Code patterns. Created efficient REST APIs integrated with React.js and Material-UI. Managed PostgreSQL relational database with SQL query optimization. Conducted troubleshooting and unit testing with Jest.",
    stack: ["Node.js", "Express", "React", "PostgreSQL", "Jest"],
    github: null,
  },
  {
    tag: "Internship",
    name: "Procurement & Reporting System",
    desc: "Developed a web-based procurement and internal reporting system. Built backend using Node.js, Express, and PostgreSQL with 20+ REST API endpoints. Implemented user auth, role-based access, file upload, Excel export, and PDF generation. Built reporting dashboard using React and Redux Toolkit.",
    stack: ["React", "Node.js", "PostgreSQL", "Redux", "Express"],
    github: null,
  },
  {
    tag: "Independent",
    name: "Order Taking App",
    desc: "Built an order management app with React, TypeScript, Firebase Authentication, and Firestore. Developed user authentication, real-time data management, and backend integrations. Designed responsive UI with Chakra UI.",
    stack: ["React", "TypeScript", "Firebase", "Chakra UI"],
    github: "https://github.com/AlbaniRajata/order-taking-app",
  },
  {
    tag: "Academic",
    name: "HRIS System (Sistem Informasi SDM)",
    desc: "Collaborated in a team to design and develop an integrated Human Resources Information System. Developed REST APIs using PHP (Laravel) with OOP and MVC architecture. Managed MySQL database for attendance. Developed a responsive mobile interface using Flutter.",
    stack: ["Laravel", "PHP", "MySQL", "Flutter", "Dart"],
    github: "https://github.com/AlbaniRajata/PBL_SDM",
  },
  {
    tag: "Academic",
    name: "Satisfaction Survey System",
    desc: "Contributed as a front-end developer for a survey website project. Built a responsive and interactive user interface using HTML, CSS, and JavaScript.",
    stack: ["HTML", "CSS", "JavaScript"],
    github: null,
  },
];

type Chip = { label: string; highlight?: boolean };
type SkillGroup = { title: string; chips: Chip[] };

const skillGroups: SkillGroup[] = [
  {
    title: "Core Stack",
    chips: [
      { label: "React.js", highlight: true },
      { label: "JavaScript", highlight: true },
      { label: "TypeScript", highlight: true },
      { label: "Node.js", highlight: true },
      { label: "PostgreSQL", highlight: true },
      { label: "MySQL", highlight: true },
    ],
  },
  {
    title: "Languages & Frameworks",
    chips: [
      { label: "Express.js" },
      { label: "Laravel" },
      { label: "PHP" },
      { label: "Flutter" },
      { label: "Dart" },
      { label: "Vue.js/Nuxt" },
    ],
  },
  {
    title: "Architecture & Design",
    chips: [
      { label: "REST API" },
      { label: "MVC Architecture" },
      { label: "OOP" },
      { label: "SOLID Principles" },
      { label: "Clean Code" },
    ],
  },
  {
    title: "Tools & Infrastructure",
    chips: [
      { label: "Git" },
      { label: "Linux Server" },
      { label: "Firebase" },
      { label: "Postman" },
      { label: "Deployment" },
    ],
  },
];

const certifications = [
  { name: "Software Engineering", org: "HackerRank · 2026" },
  { name: "JavaScript (Intermediate)", org: "HackerRank · 2026" },
  { name: "Node.js (Intermediate)", org: "HackerRank · 2026" },
  { name: "SQL (Intermediate)", org: "HackerRank · 2026" },
  {
    name: "Flutter REST Movie App: Master Flutter REST API Development",
    org: "Udemy · 2025",
  },
  {
    name: "Build Full Stack Web App with React and Firebase",
    org: "Udemy · 2025",
  },
];

const experiences = [
  {
    period: "Jul 2025 – Dec 2025",
    company: "PT Intidaya Energitama",
    role: "Software Engineer Intern",
    bullets: [
      "Developed and maintained a web-based procurement and investment system using React, Node.js, and PostgreSQL.",
      "Built and managed 15+ REST API endpoints for authentication, reporting, and company operational needs.",
      "Implemented JWT authentication, role-based access control, and data validation to improve system security and integrity.",
      "Performed deployment, monitoring, troubleshooting, and source code performance optimization to ensure stable application operation.",
      "Collaborated with internal teams on feature development, system integration, and aligning with business requirements.",
    ],
  },
];

const navSections = ["about", "experience", "projects", "skills", "contact"];

export default function Home() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const drawerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const ring = ringRef.current;
    if (!cursor || !ring) return;

    const isTouch = window.matchMedia("(hover: none)").matches;
    if (isTouch) return;

    let mx = 0,
      my = 0,
      rx = 0,
      ry = 0;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      cursor.style.left = mx - 6 + "px";
      cursor.style.top = my - 6 + "px";
    };
    document.addEventListener("mousemove", onMove);

    let raf: number;
    const animateRing = () => {
      rx += (mx - rx - 18) * 0.12;
      ry += (my - ry - 18) * 0.12;
      ring.style.left = rx + "px";
      ring.style.top = ry + "px";
      raf = requestAnimationFrame(animateRing);
    };
    animateRing();

    const hoverEls = document.querySelectorAll(
      "a, button, .project-card, .skill-chip, .stat-card",
    );
    hoverEls.forEach((el) => {
      el.addEventListener("mouseenter", () => {
        cursor.classList.add("hover");
        ring.classList.add("hover");
      });
      el.addEventListener("mouseleave", () => {
        cursor.classList.remove("hover");
        ring.classList.remove("hover");
      });
    });

    return () => {
      document.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            observer.unobserve(e.target);
          }
        }),
      { threshold: 0.1 },
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

    document
      .querySelectorAll(
        ".projects-grid, .skills-grid, .cert-list, .about-stats",
      )
      .forEach((grid) => {
        Array.from(grid.children).forEach((child, i) => {
          (child as HTMLElement).style.transitionDelay = i * 0.07 + "s";
        });
      });

    return () => observer.disconnect();
  }, []);

  const toggleDrawer = () => {
    toggleRef.current?.classList.toggle("open");
    drawerRef.current?.classList.toggle("open");
    document.body.style.overflow = drawerRef.current?.classList.contains("open")
      ? "hidden"
      : "";
  };

  const closeDrawer = () => {
    toggleRef.current?.classList.remove("open");
    drawerRef.current?.classList.remove("open");
    document.body.style.overflow = "";
  };

  return (
    <>
      <div className="cursor" ref={cursorRef} />
      <div className="cursor-ring" ref={ringRef} />

      <nav className="nav">
        <a href="#hero" className="nav-logo">
          ARM<span>.</span>
        </a>
        <ul className="nav-links">
          {navSections.map((s) => (
            <li key={s}>
              <a href={`#${s}`}>{s}</a>
            </li>
          ))}
        </ul>
        <button
          className="nav-toggle"
          ref={toggleRef}
          onClick={toggleDrawer}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      <div className="nav-drawer" ref={drawerRef}>
        {navSections.map((s) => (
          <a key={s} href={`#${s}`} onClick={closeDrawer}>
            {s}
          </a>
        ))}
      </div>

      <section id="hero" className="hero">
        <div className="hero-bg-text">DEV</div>
        <div className="hero-left">
          <div className="hero-tag">Full Stack Software Developer</div>
          <h1 className="hero-name">
            Albani
            <br />
            <span className="accent">Rajata</span>
            <br />
            Malik
          </h1>
          <p className="hero-desc">
            I build web and mobile applications from the ground up. My work
            covers everything from API design and database architecture to
            frontend performance and user experience. Based in Malang,
            Indonesia.
          </p>
          <div className="hero-cta">
            <a href="#projects" className="btn-primary">
              View Projects
            </a>
            <a
              href="mailto:itsalbanirajata123@gmail.com"
              className="btn-outline"
            >
              Get In Touch
            </a>
          </div>
        </div>
        <div className="hero-photo-seamless">
          <Image src="/profile.png" alt="Albani Rajata Malik" fill priority />
        </div>
        <div className="hero-scroll">
          <span className="scroll-line" /> Scroll to explore
        </div>
      </section>

      <section id="about" className="about-section">
        <div className="section-header reveal">
          <span className="section-num">01</span>
          <h2 className="section-title">About</h2>
          <div className="section-line" />
        </div>
        <div className="about-grid">
          <div className="about-text reveal">
            <p>
              I am an <strong>Software Engineer</strong> with solid experience in
              analyzing system requirements, designing, developing, and
              implementing web-based applications end-to-end.
            </p>
            <p>
              I am proficient in the <strong>Node.js (Express.js)</strong> and{" "}
              <strong>PHP (Laravel)</strong> ecosystems, and experienced in
              designing REST API architectures emphasizing OOP, MVC, SOLID
              principles, and Clean Code. I am accustomed to working with
              relational databases such as <strong>PostgreSQL</strong> and{" "}
              <strong>MySQL</strong>.
            </p>
            <p>
              I have strong analytical, problem-solving, and troubleshooting
              skills, and am responsive in deploying and maintaining
              applications to ensure they run optimally and stably. I
              collaborate well both individually and within a team.
            </p>
            <div className="about-links">
              <a
                href="https://linkedin.com/in/albani-rajata-malik/"
                target="_blank"
                rel="noreferrer"
                className="about-link"
              >
                <LinkedinIcon /> linkedin.com/in/albani-rajata-malik
              </a>
              <a
                href="https://github.com/AlbaniRajata"
                target="_blank"
                rel="noreferrer"
                className="about-link"
              >
                <GithubIcon /> github.com/AlbaniRajata
              </a>
              <a
                href="mailto:itsalbanirajata123@gmail.com"
                className="about-link"
              >
                <MailIcon /> itsalbanirajata123@gmail.com
              </a>
            </div>
          </div>
          <div className="about-stats reveal">
            <div className="stat-card">
              <div className="stat-num">3+</div>
              <div className="stat-label">Years of Coding</div>
            </div>
            <div className="stat-card">
              <div className="stat-num">6+</div>
              <div className="stat-label">Projects Built</div>
            </div>
            <div className="stat-card">
              <div className="stat-num">5+</div>
              <div className="stat-label">Certifications</div>
            </div>
            <div className="stat-card">
              <div className="stat-num">850</div>
              <div className="stat-label">TOEIC English Score</div>
            </div>
          </div>
        </div>
      </section>

      <section id="experience" className="experience-section">
        <div className="section-header reveal">
          <span className="section-num">02</span>
          <h2 className="section-title">Experience</h2>
          <div className="section-line" />
        </div>
        {experiences.map((exp, i) => (
          <div className="exp-item reveal" key={i}>
            <div>
              <div className="exp-period">{exp.period}</div>
              <div className="exp-company">{exp.company}</div>
            </div>
            <div>
              <div className="exp-role">{exp.role}</div>
              <ul className="exp-bullets">
                {exp.bullets.map((b, j) => (
                  <li key={j}>{b}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </section>

      <section id="projects" className="projects-section">
        <div className="section-header reveal">
          <span className="section-num">03</span>
          <h2 className="section-title">Projects</h2>
          <div className="section-line" />
        </div>
        <div className="projects-grid">
          {projects.map((p, i) => (
            <div className="project-card reveal" key={i}>
              <div className="project-tag">{p.tag}</div>
              <div className="project-name">{p.name}</div>
              <p className="project-desc">{p.desc}</p>
              <div className="project-footer">
                <div className="project-stack">
                  {p.stack.map((t) => (
                    <span className="tag" key={t}>
                      {t}
                    </span>
                  ))}
                </div>
                {p.github ? (
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noreferrer"
                    className="project-github"
                  >
                    <GithubIcon /> View Repo
                  </a>
                ) : (
                  <span className="project-private">Private repo</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="skills" className="skills-section">
        <div className="section-header reveal">
          <span className="section-num">04</span>
          <h2 className="section-title">Skills</h2>
          <div className="section-line" />
        </div>
        <div className="skills-grid">
          {skillGroups.map((group, i) => (
            <div className="skill-group reveal" key={i}>
              <div className="skill-group-title">{group.title}</div>
              <div className="skill-chips">
                {group.chips.map((c) => (
                  <span
                    className={`skill-chip${c.highlight ? " highlight" : ""}`}
                    key={c.label}
                  >
                    {c.label}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="certifications" className="certifications-section">
        <div className="section-header reveal">
          <span className="section-num">05</span>
          <h2 className="section-title">Certifications</h2>
          <div className="section-line" />
        </div>
        <div className="cert-list">
          {certifications.map((cert, i) => (
            <div className="cert-item reveal" key={i}>
              <div className="cert-dot" />
              <div>
                <div className="cert-name">{cert.name}</div>
                <div className="cert-org">{cert.org}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="contact-section">
        <h2 className="contact-headline reveal">
          Let&apos;s
          <br />
          <span className="accent">Work</span>
          <br />
          Together.
        </h2>
        <p className="contact-sub reveal">
          Got a project in mind or just want to talk? My inbox is always open.
        </p>
        <div className="contact-links reveal">
          <a
            href="mailto:itsalbanirajata123@gmail.com"
            className="contact-link"
          >
            <MailIcon /> itsalbanirajata123@gmail.com
          </a>
          <a
            href="https://linkedin.com/in/albani-rajata-malik/"
            target="_blank"
            rel="noreferrer"
            className="contact-link"
          >
            <LinkedinIcon /> LinkedIn
          </a>
          <a
            href="https://github.com/AlbaniRajata"
            target="_blank"
            rel="noreferrer"
            className="contact-link"
          >
            <GithubIcon /> GitHub
          </a>
        </div>
      </section>

      <footer className="footer">
        <p>
          © 2026 <span>Albani Rajata Malik</span>. All rights reserved.
        </p>
        <p>
          Designed & Built with <span>♥</span>
        </p>
      </footer>
    </>
  );
}
