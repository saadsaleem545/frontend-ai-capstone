import { useEffect, useRef, useState } from "react";

/*
========================================
SUGGESTED AI QUESTIONS
========================================
*/

const suggestedQuestions = [
  "What are Saad's technical skills?",
  "Tell me about Saad's projects.",
  "What is Saad's experience?",
  "How can I contact Saad?",
];

/*
========================================
NAVIGATION
========================================
*/

const navItems = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
  { name: "AI Assistant", href: "#ai-assistant" },
];

/*
========================================
PROJECT DATA
========================================
*/

const projects = [
  {
    title: "SaadAI — Personal AI Career Agent",
    category: "AI Engineering",
    icon: "🤖",
    description:
      "An AI-powered personal career agent built to answer verified questions about Saad's skills, projects, education, experience, and professional profile.",
    technologies: [
      "React",
      "Node.js",
      "Gemini API",
      "REST API",
      "Generative AI",
    ],
    github:
      "https://github.com/saadsaleem545/frontend-ai-capstone",
    featured: true,
  },

  {
    title: "Kubernetes CI/CD Pipeline",
    category: "DevOps",
    icon: "🚀",
    description:
      "A hands-on DevOps project focused on Kubernetes deployment, CI/CD automation, containerization, and deployment workflows.",
    technologies: [
      "Docker",
      "Kubernetes",
      "Jenkins",
      "Git",
      "CI/CD",
    ],
    github:
      "https://github.com/saadsaleem545/kubernetes-cicd-pipeline",
  },

  {
    title: "Cloud Infrastructure",
    category: "Infrastructure as Code",
    icon: "☁️",
    description:
      "An Infrastructure as Code project focused on managing cloud infrastructure using Terraform and Git-based workflows.",
    technologies: [
      "Terraform",
      "IaC",
      "Git",
      "GitHub",
    ],
    github:
      "https://github.com/saadsaleem545/cloud-infrastructure",
  },

  {
    title: "Kubernetes Deployment",
    category: "DevOps",
    icon: "☸️",
    description:
      "A Kubernetes-focused project created to practice container orchestration, configuration, and application deployment workflows.",
    technologies: [
      "Kubernetes",
      "Docker",
      "YAML",
      "DevOps",
    ],
    github:
      "https://github.com/saadsaleem545/kubernetes-deployment",
  },

  {
    title: "Containerized Web App",
    category: "Docker",
    icon: "📦",
    description:
      "A web application project focused on containerization and running a web application through Docker-based workflows.",
    technologies: [
      "Docker",
      "HTML",
      "Web Development",
    ],
    github:
      "https://github.com/saadsaleem545/containerized-web-app",
  },

  {
    title: "Docker Web App",
    category: "Containerization",
    icon: "🐳",
    description:
      "A practical Docker project demonstrating container-based application workflows and DevOps fundamentals.",
    technologies: [
      "Docker",
      "PowerShell",
      "DevOps",
    ],
    github:
      "https://github.com/saadsaleem545/docker-web-app",
  },

  {
    title: "DevOps Project 3",
    category: "CI/CD",
    icon: "⚙️",
    description:
      "A hands-on DevOps project using Python and CI/CD automation workflows to practice automated development and deployment processes.",
    technologies: [
      "Python",
      "GitHub Actions",
      "CI/CD",
      "Testing",
    ],
    github:
      "https://github.com/saadsaleem545/DevOps-Project-3",
  },

  {
    title: "DevOps Project 2",
    category: "Version Control",
    icon: "🔀",
    description:
      "A practical project focused on Git and GitHub workflows, repository management, branching, commits, and collaboration practices.",
    technologies: [
      "Git",
      "GitHub",
      "Shell",
      "Version Control",
    ],
    github:
      "https://github.com/saadsaleem545/DevOps-Project-2",
  },

  {
    title: "DevOps Practice",
    category: "DevOps",
    icon: "🛠️",
    description:
      "A hands-on DevOps practice repository containing practical development, automation, and engineering exercises.",
    technologies: [
      "Python",
      "Git",
      "DevOps",
    ],
    github:
      "https://github.com/saadsaleem545/DevOps-Practice",
  },

  {
    title: "DevOps Portfolio",
    category: "DevOps",
    icon: "💻",
    description:
      "A portfolio project focused on presenting DevOps work, technologies, and practical engineering projects.",
    technologies: [
      "TypeScript",
      "DevOps",
      "Web Development",
    ],
    github:
      "https://github.com/saadsaleem545/devops-portfolio",
  },

  {
    title: "Webio",
    category: "Web Development",
    icon: "🌐",
    description:
      "A web development project created to practice frontend development concepts and responsive user interfaces.",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
    ],
    github:
      "https://github.com/saadsaleem545/Webio-",
  },

  {
    title: "HappyStationery",
    category: "Web Development",
    icon: "🛍️",
    description:
      "A stationery-focused web project created to practice website development, interface design, and frontend implementation.",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
    ],
    github:
      "https://github.com/saadsaleem545/HappyStationary",
  },
];

/*
========================================
APP
========================================
*/

function App() {
  const [message, setMessage] = useState("");

  const [messages, setMessages] = useState([
    {
      role: "assistant",
      text:
        "Hi! I'm SaadAI. Ask me anything about Saad's projects, skills, experience, or career. 👋",
    },
  ]);

  const [loading, setLoading] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showTopButton, setShowTopButton] = useState(false);

  const chatEndRef = useRef(null);

  /*
  ========================================
  CHAT AUTO SCROLL
  ========================================
  */

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, loading]);

  /*
  ========================================
  BACK TO TOP VISIBILITY
  ========================================
  */

  useEffect(() => {
    const handleScroll = () => {
      setShowTopButton(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /*
  ========================================
  CLOSE MOBILE MENU ON RESIZE
  ========================================
  */

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  /*
  ========================================
  SEND MESSAGE
  ========================================
  */

  const sendMessage = async (customMessage = null) => {
    const userMessage = (customMessage ?? message).trim();

    if (!userMessage || loading) {
      return;
    }

    const currentHistory = messages;

    setMessages((prev) => [
      ...prev,
      {
        role: "user",
        text: userMessage,
      },
    ]);

    setMessage("");
    setLoading(true);

    try {
      const response = await fetch("https://saadai-backend.vercel.app/api/chat", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            message: userMessage,
            history: currentHistory,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.error || "Something went wrong"
        );
      }

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          text: data.reply,
        },
      ]);
    } catch (error) {
      console.error("Chat Error:", error);

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          text:
            "Sorry, I couldn't connect to the AI service right now.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  /*
  ========================================
  SUGGESTED QUESTION
  ========================================
  */

  const askSuggestedQuestion = (question) => {
    sendMessage(question);
  };

  /*
  ========================================
  MOBILE NAVIGATION
  ========================================
  */

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  /*
  ========================================
  BACK TO TOP
  ========================================
  */

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  /*
  ========================================
  RETURN
  ========================================
  */

  return (
    <main className="min-h-screen overflow-x-hidden bg-black text-white">

      {/* ===================================================== */}
      {/* NAVBAR */}
      {/* ===================================================== */}

      <nav className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur-xl">

        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">

          {/* Logo */}

          <a
            href="#top"
            onClick={handleNavClick}
            className="text-xl font-bold tracking-tight"
          >
            Saad
            <span className="text-cyan-400">
              AI
            </span>
          </a>

          {/* Desktop Navigation */}

          <div className="hidden items-center gap-7 text-sm text-gray-300 md:flex">

            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="transition duration-300 hover:text-cyan-400"
              >
                {item.name}
              </a>
            ))}

            <a
              href="/m saad_CV.pdf"
              download
              className="rounded-full border border-cyan-400/40 px-4 py-2 text-cyan-400 transition duration-300 hover:bg-cyan-400 hover:text-black"
            >
              CV ↓
            </a>

          </div>

          {/* Mobile Menu Button */}

          <button
            type="button"
            onClick={() =>
              setMobileMenuOpen((prev) => !prev)
            }
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-gray-300 transition hover:border-cyan-400 hover:text-cyan-400 md:hidden"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? "✕" : "☰"}
          </button>

        </div>

        {/* Mobile Navigation */}

        {mobileMenuOpen && (
          <div className="border-t border-white/10 bg-black/95 px-6 py-5 backdrop-blur-xl md:hidden">

            <div className="flex flex-col gap-2">

              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={handleNavClick}
                  className="rounded-xl px-4 py-3 text-gray-300 transition hover:bg-cyan-400/10 hover:text-cyan-400"
                >
                  {item.name}
                </a>
              ))}

              <a
                href="/m saad_CV.pdf"
                download
                onClick={handleNavClick}
                className="mt-2 rounded-xl bg-cyan-400 px-4 py-3 text-center font-semibold text-black transition hover:bg-cyan-300"
              >
                Download CV ↓
              </a>

            </div>

          </div>
        )}

      </nav>

      {/* ===================================================== */}
      {/* HERO */}
      {/* ===================================================== */}

      <section
        id="top"
        className="ai-grid relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-24"
      >

        {/* Background Glow */}

        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/10 blur-[120px]" />

        <div className="pointer-events-none absolute left-10 top-32 h-32 w-32 rounded-full bg-blue-500/10 blur-3xl" />

        <div className="pointer-events-none absolute bottom-20 right-10 h-40 w-40 rounded-full bg-cyan-400/10 blur-3xl" />

        <div className="relative z-10 mx-auto flex max-w-6xl flex-col-reverse items-center gap-16 md:flex-row md:justify-between">

          {/* Hero Text */}

          <div className="animate-fade-up max-w-3xl text-center md:text-left">

            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2 text-sm text-gray-300">

              <span className="h-2 w-2 animate-pulse rounded-full bg-green-400" />

              Available for opportunities

            </div>

            <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-cyan-400">
              AI × Software Engineering
            </p>

            <h1 className="text-5xl font-bold leading-tight tracking-tight md:text-7xl">

              Hi, I'm{" "}

              <span className="text-white">
                Saad.
              </span>

              <br />

              I build with{" "}

              <span className="bg-gradient-to-r from-cyan-300 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                AI.
              </span>

            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-400 md:mx-0">
              Computer Science student and aspiring software engineer
              focused on building modern applications, AI-powered
              solutions, and scalable systems.
            </p>

            {/* Tech Tags */}

            <div className="mt-7 flex flex-wrap justify-center gap-2 md:justify-start">

              {[
                "React",
                "Node.js",
                "Python",
                "AI",
                "Docker",
                "Gemini API",
              ].map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-gray-400 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:text-cyan-400"
                >
                  {tech}
                </span>
              ))}

            </div>

            {/* Buttons */}

            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row md:justify-start">

              <a
                href="#projects"
                className="rounded-full bg-cyan-400 px-7 py-3 font-semibold text-black shadow-[0_0_30px_rgba(34,211,238,0.15)] transition duration-300 hover:-translate-y-1 hover:bg-cyan-300 hover:shadow-[0_0_40px_rgba(34,211,238,0.3)]"
              >
                View My Work →
              </a>

              <a
                href="/m saad_CV.pdf"
                download
                className="rounded-full border border-white/20 px-7 py-3 font-semibold text-white transition duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:text-cyan-400"
              >
                Download CV ↓
              </a>

              <a
                href="#ai-assistant"
                className="rounded-full border border-white/20 px-7 py-3 font-semibold text-white transition duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:text-cyan-400"
              >
                Talk to SaadAI 🤖
              </a>

            </div>

            {/* Stats */}

            <div className="mt-12 flex flex-wrap justify-center gap-8 md:justify-start">

              <div>
                <p className="text-2xl font-bold text-white">
                  {projects.length}+
                </p>

                <p className="mt-1 text-sm text-gray-500">
                  Projects
                </p>
              </div>

              <div className="hidden h-10 w-px bg-white/10 sm:block" />

              <div>
                <p className="text-2xl font-bold text-white">
                  20+
                </p>

                <p className="mt-1 text-sm text-gray-500">
                  Technologies
                </p>
              </div>

              <div className="hidden h-10 w-px bg-white/10 sm:block" />

              <div>
                <p className="text-2xl font-bold text-white">
                  AI
                </p>

                <p className="mt-1 text-sm text-gray-500">
                  Focus
                </p>
              </div>

            </div>

          </div>

          {/* Profile / AI Visual */}

          <div className="animate-floating relative flex flex-shrink-0 items-center justify-center">

            <div className="absolute h-[360px] w-[360px] rounded-full bg-cyan-400/10 blur-3xl" />

            <div className="absolute h-[340px] w-[340px] animate-[spin_15s_linear_infinite] rounded-full border border-cyan-400/20 border-r-cyan-400/40 border-t-cyan-400 md:h-[410px] md:w-[410px]" />

            <div className="absolute h-[300px] w-[300px] rounded-full border border-white/5 md:h-[370px] md:w-[370px]" />

            <div className="ai-glow absolute -right-3 top-6 z-20 flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-400/30 bg-black/80 text-2xl backdrop-blur-xl">
              🤖
            </div>

            <div className="relative h-64 w-64 overflow-hidden rounded-full border-2 border-cyan-400/60 bg-black shadow-[0_0_60px_rgba(34,211,238,0.25)] transition duration-500 hover:scale-105 hover:border-cyan-300 md:h-80 md:w-80">

              <img
                src="/profile.png"
                alt="Saad Saleem"
                className="h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-cyan-400/5" />

            </div>

            {/* SaadAI Card */}

            <div className="absolute -bottom-5 -left-8 rounded-2xl border border-white/10 bg-black/80 px-5 py-3 shadow-2xl backdrop-blur-xl">

              <div className="flex items-center gap-3">

                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-400">
                  ✦
                </div>

                <div>

                  <p className="text-xs text-gray-500">
                    Powered by
                  </p>

                  <p className="text-sm font-semibold text-white">
                    SaadAI
                  </p>

                </div>

              </div>

            </div>

            {/* Learning Card */}

            <div className="absolute -right-6 bottom-12 rounded-2xl border border-white/10 bg-black/80 px-4 py-3 shadow-2xl backdrop-blur-xl">

              <p className="text-xs text-gray-500">
                Currently learning
              </p>

              <p className="mt-1 text-sm font-semibold text-cyan-400">
                AI Engineering
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* ===================================================== */}
      {/* ABOUT */}
      {/* ===================================================== */}

      <section
        id="about"
        className="px-6 py-32"
      >

        <div className="mx-auto max-w-6xl">

          <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-cyan-400">
            About Me
          </p>

          <h2 className="text-4xl font-bold md:text-5xl">
            Building, learning, and shipping.
          </h2>

          <div className="mt-8 max-w-3xl space-y-5 text-lg leading-8 text-gray-400">

            <p>
              I'm Saad Saleem, a Computer Science student focused on
              building practical software solutions and growing as a
              software engineer.
            </p>

            <p>
              I've worked with frontend development, mobile applications,
              databases, cloud technologies, and DevOps tools. I'm
              currently expanding my skills in AI engineering and
              automation.
            </p>

            <p>
              I enjoy turning ideas into working products and using
              modern technologies to solve real-world problems.
            </p>

          </div>

        </div>

      </section>

      {/* ===================================================== */}
      {/* SKILLS */}
      {/* ===================================================== */}

      <section
        id="skills"
        className="border-y border-white/10 px-6 py-32"
      >

        <div className="mx-auto max-w-6xl">

          <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-cyan-400">
            Skills
          </p>

          <h2 className="text-4xl font-bold md:text-5xl">
            My Tech Stack
          </h2>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

            {[
              "HTML",
              "CSS",
              "JavaScript",
              "React",
              "Bootstrap",
              "jQuery",
              "PHP",
              "MySQL",
              "Node.js",
              "Firebase",
              "Cloud Firestore",
              "Flutter",
              "Dart",
              "Python",
              "Git & GitHub",
              "Docker",
              "Kubernetes",
              "Jenkins",
              "CI/CD",
              "AI / Prompt Engineering",
              "Generative AI",
              "LLM APIs",
            ].map((skill) => (

              <div
                key={skill}
                className="hover-glow rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-gray-300 transition duration-300 hover:border-cyan-400/50 hover:bg-cyan-400/[0.03] hover:text-white"
              >
                {skill}
              </div>

            ))}

          </div>

        </div>

      </section>

      {/* ===================================================== */}
      {/* PROJECTS */}
      {/* ===================================================== */}

      <section
        id="projects"
        className="px-6 py-32"
      >

        <div className="mx-auto max-w-6xl">

          <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-cyan-400">
            My Work
          </p>

          <h2 className="text-4xl font-bold md:text-5xl">
            Projects I've Built
          </h2>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-gray-400">
            A collection of my work across AI engineering, frontend
            development, DevOps, cloud infrastructure, containerization,
            automation, and software engineering.
          </p>

          {/* Project Stats */}

          <div className="mt-8 flex flex-wrap gap-3">

            <span className="rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2 text-sm text-cyan-400">
              {projects.length}+ Projects
            </span>

            <span className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-gray-400">
              AI + Software Engineering
            </span>

            <span className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-gray-400">
              DevOps + Cloud
            </span>

            <span className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-gray-400">
              GitHub Projects
            </span>

          </div>

          {/* Project Grid */}

          <div className="mt-12 grid gap-6 md:grid-cols-2">

            {projects.map((project, index) => (

              <article
                key={project.title}
                className={`group relative overflow-hidden rounded-3xl border p-7 transition duration-500 hover:-translate-y-2 ${
                  project.featured
                    ? "border-cyan-400/30 bg-cyan-400/[0.04] hover:border-cyan-400/70 hover:shadow-[0_20px_70px_rgba(34,211,238,0.12)]"
                    : "border-white/10 bg-white/[0.03] hover:border-cyan-400/40 hover:shadow-[0_20px_60px_rgba(34,211,238,0.08)]"
                }`}
              >

                {/* Glow */}

                <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-cyan-400/5 blur-3xl transition duration-500 group-hover:bg-cyan-400/10" />

                {/* Header */}

                <div className="relative z-10 mb-6 flex items-center justify-between">

                  <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-sm text-cyan-400">
                    {project.category}
                  </span>

                  <span className="text-2xl transition duration-300 group-hover:scale-110">
                    {project.icon}
                  </span>

                </div>

                {/* Featured */}

                {project.featured && (
                  <div className="relative z-10 mb-4 inline-flex items-center gap-2 rounded-full bg-cyan-400 px-3 py-1 text-xs font-bold text-black">
                    ✦ Featured Project
                  </div>
                )}

                {/* Title */}

                <h3 className="relative z-10 text-2xl font-bold leading-tight">
                  {project.title}
                </h3>

                {/* Description */}

                <p className="relative z-10 mt-4 leading-7 text-gray-400">
                  {project.description}
                </p>

                {/* Technologies */}

                <div className="relative z-10 mt-6 flex flex-wrap gap-2">

                  {project.technologies.map((tech) => (

                    <span
                      key={tech}
                      className="rounded-lg border border-white/5 bg-white/5 px-3 py-2 text-sm text-gray-300 transition duration-300 group-hover:border-cyan-400/10"
                    >
                      {tech}
                    </span>

                  ))}

                </div>

                {/* GitHub */}

                <div className="relative z-10 mt-7">

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition duration-300 ${
                      project.featured
                        ? "bg-cyan-400 text-black hover:-translate-y-0.5 hover:bg-cyan-300"
                        : "border border-white/10 text-gray-300 hover:border-cyan-400 hover:text-cyan-400"
                    }`}
                  >
                    View on GitHub ↗
                  </a>

                </div>

                {/* Number */}

                <span className="absolute bottom-5 right-7 text-6xl font-black text-white/[0.025] transition duration-500 group-hover:text-cyan-400/[0.05]">
                  {String(index + 1).padStart(2, "0")}
                </span>

              </article>

            ))}

          </div>

          {/* GitHub CTA */}

          <div className="mt-12 text-center">

            <a
              href="https://github.com/saadsaleem545"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/5 px-6 py-3 font-medium text-cyan-400 transition duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:bg-cyan-400/10"
            >
              Explore All Projects on GitHub ↗
            </a>

          </div>

        </div>

      </section>

      {/* ===================================================== */}
      {/* EXPERIENCE */}
      {/* ===================================================== */}

      <section
        id="experience"
        className="border-y border-white/10 px-6 py-32"
      >

        <div className="mx-auto max-w-6xl">

          <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-cyan-400">
            Experience
          </p>

          <h2 className="text-4xl font-bold md:text-5xl">
            My Journey
          </h2>

          <div className="mt-12 space-y-8">

            {/* Internship */}

            <div className="hover-glow relative rounded-3xl border border-white/10 bg-white/[0.03] p-7">

              <div className="flex flex-col justify-between gap-4 md:flex-row">

                <div>

                  <span className="text-sm text-cyan-400">
                    Internship
                  </span>

                  <h3 className="mt-2 text-2xl font-bold">
                    CMS Developer Intern
                  </h3>

                  <p className="mt-1 text-gray-400">
                    Professional Internship
                  </p>

                </div>

                <span className="text-sm text-gray-500">
                  Internship Experience
                </span>

              </div>

              <p className="mt-6 max-w-3xl leading-7 text-gray-400">
                Worked on CMS-based web development tasks and gained
                practical experience working with web technologies,
                content management, debugging, and professional
                development workflows.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">

                {[
                  "CMS",
                  "Web Development",
                  "HTML",
                  "CSS",
                  "JavaScript",
                ].map((tech) => (

                  <span
                    key={tech}
                    className="rounded-lg bg-white/5 px-3 py-2 text-sm text-gray-300"
                  >
                    {tech}
                  </span>

                ))}

              </div>

            </div>

            {/* Education */}

            <div className="hover-glow relative rounded-3xl border border-white/10 bg-white/[0.03] p-7">

              <div className="flex flex-col justify-between gap-4 md:flex-row">

                <div>

                  <span className="text-sm text-cyan-400">
                    Education
                  </span>

                  <h3 className="mt-2 text-2xl font-bold">
                    Bachelor of Computer Science
                  </h3>

                  <p className="mt-1 text-gray-400">
                    Usman Institute of Technology
                  </p>

                </div>

                <span className="text-sm text-gray-500">
                  Computer Science
                </span>

              </div>

              <p className="mt-6 max-w-3xl leading-7 text-gray-400">
                Developing a strong foundation in software engineering,
                databases, mobile application development, cloud
                computing, artificial intelligence, networking, and
                DevOps.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">

                {[
                  "Computer Science",
                  "Software Engineering",
                  "Databases",
                  "Cloud Computing",
                  "AI",
                  "DevOps",
                ].map((skill) => (

                  <span
                    key={skill}
                    className="rounded-lg bg-white/5 px-3 py-2 text-sm text-gray-300"
                  >
                    {skill}
                  </span>

                ))}

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* ===================================================== */}
      {/* CONTACT */}
      {/* ===================================================== */}

      <section
        id="contact"
        className="px-6 py-32"
      >

        <div className="mx-auto max-w-6xl">

          <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-cyan-400">
            Contact
          </p>

          <h2 className="text-4xl font-bold md:text-5xl">
            Let's build something together.
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-400">
            I'm open to internships, collaborations, freelance
            opportunities, and interesting software projects.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">

            <a
              href="https://github.com/saadsaleem545"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/20 px-6 py-3 font-medium transition duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:text-cyan-400"
            >
              GitHub ↗
            </a>

            <a
              href="https://www.linkedin.com/in/saad-saleem-361428365/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/20 px-6 py-3 font-medium transition duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:text-cyan-400"
            >
              LinkedIn ↗
            </a>

            <a
              href="mailto:saadsaleem1617@outlook.com"
              className="rounded-full bg-cyan-400 px-6 py-3 font-semibold text-black transition duration-300 hover:-translate-y-1 hover:bg-cyan-300"
            >
              Email Me
            </a>

            <a
              href="/m saad_CV.pdf"
              download
              className="rounded-full border border-white/20 px-6 py-3 font-medium transition duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:text-cyan-400"
            >
              Download CV ↓
            </a>

          </div>

        </div>

      </section>

      {/* ===================================================== */}
      {/* AI ASSISTANT */}
      {/* ===================================================== */}

      <section
        id="ai-assistant"
        className="border-y border-white/10 px-6 py-32"
      >

        <div className="mx-auto max-w-4xl">

          {/* AI Header */}

          <div className="text-center">

            <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-cyan-400">
              AI Assistant
            </p>

            <h2 className="text-4xl font-bold md:text-5xl">
              Ask SaadAI 🤖
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-gray-400">
              Curious about my skills, projects, experience, or career?
              Ask my personal AI assistant.
            </p>

            {/* Suggested Questions */}

            <div className="mt-8 flex flex-wrap justify-center gap-3">

              {suggestedQuestions.map((question) => (

                <button
                  key={question}
                  onClick={() =>
                    askSuggestedQuestion(question)
                  }
                  disabled={loading}
                  className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-gray-300 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/50 hover:bg-cyan-400/10 hover:text-cyan-400 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {question}
                </button>

              ))}

            </div>

          </div>

          {/* Chat Container */}

          <div className="ai-glow mt-12 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03]">

            {/* Chat Header */}

            <div className="flex items-center gap-4 border-b border-white/10 px-6 py-5">

              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-cyan-400 text-xl text-black">
                🤖
              </div>

              <div>

                <h3 className="font-semibold">
                  SaadAI
                </h3>

                <p className="text-sm text-green-400">
                  ● Online
                </p>

              </div>

            </div>

            {/* Chat Area */}

            <div className="max-h-[500px] min-h-[300px] space-y-4 overflow-y-auto p-6">

              {messages.map((msg, index) => (

                <div
                  key={index}
                  className={`flex ${
                    msg.role === "user"
                      ? "justify-end"
                      : "justify-start"
                  }`}
                >

                  <div
                    className={`max-w-[85%] whitespace-pre-wrap rounded-2xl p-4 leading-7 ${
                      msg.role === "user"
                        ? "rounded-br-none bg-cyan-400 text-black"
                        : "rounded-bl-none bg-white/5 text-gray-300"
                    }`}
                  >
                    {msg.text}
                  </div>

                </div>

              ))}

              {/* Loading */}

              {loading && (

                <div className="flex justify-start">

                  <div className="flex items-center gap-2 rounded-2xl rounded-bl-none bg-white/5 px-5 py-4 text-gray-400">

                    <span>
                      SaadAI is thinking
                    </span>

                    <span className="flex gap-1">

                      <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-cyan-400 [animation-delay:-0.3s]" />

                      <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-cyan-400 [animation-delay:-0.15s]" />

                      <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-cyan-400" />

                    </span>

                  </div>

                </div>

              )}

              {/* Auto Scroll Target */}

              <div ref={chatEndRef} />

            </div>

            {/* Input */}

            <div className="border-t border-white/10 p-4">

              <div className="flex flex-col gap-3 sm:flex-row">

                <input
                  type="text"
                  value={message}
                  onChange={(e) =>
                    setMessage(e.target.value)
                  }
                  onKeyDown={(e) => {

                    if (e.key === "Enter") {
                      sendMessage();
                    }

                  }}
                  placeholder="Ask SaadAI something..."
                  disabled={loading}
                  className="flex-1 rounded-xl border border-white/10 bg-black px-4 py-3 text-white outline-none placeholder:text-gray-600 transition focus:border-cyan-400 disabled:opacity-50"
                />

                <button
                  onClick={() => sendMessage()}
                  disabled={
                    loading || !message.trim()
                  }
                  className="rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-black transition duration-300 hover:-translate-y-0.5 hover:bg-cyan-300 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {loading ? "..." : "Send"}
                </button>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* ===================================================== */}
      {/* FOOTER */}
      {/* ===================================================== */}

      <footer className="border-t border-white/10 px-6 py-8">

        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-sm text-gray-500 md:flex-row">

          <p>
            © {new Date().getFullYear()} Saad Saleem.
            All rights reserved.
          </p>

          <p>
            Built with React + Node.js + AI 🤖
          </p>

        </div>

      </footer>

      {/* ===================================================== */}
      {/* BACK TO TOP */}
      {/* ===================================================== */}

      {showTopButton && (

        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-40 flex h-12 w-12 items-center justify-center rounded-full border border-cyan-400/30 bg-black/80 text-cyan-400 shadow-[0_0_25px_rgba(34,211,238,0.15)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:bg-cyan-400 hover:text-black"
          aria-label="Back to top"
        >
          ↑
        </button>

      )}

    </main>
  );
}

export default App;