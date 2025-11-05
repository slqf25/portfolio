import { useEffect, useMemo, useState } from "react";
import { projects as DATA } from "./projects";

const FILTERS = [
  { key: "all", label: "All" },
  { key: "java", label: "Java" },
  { key: "cpp", label: "C++" },
  { key: "python", label: "Python" },
  { key: "database", label: "Database" },
];

function Badge({ children }) {
  return (
    <span className="text-xs px-2 py-1 rounded-lg bg-skysoft/50 border border-skysoft/70">
      {children}
    </span>
  );
}

function ProjectCard({ p }) {
  return (
    <div className="group rounded-2xl border border-gray-200 bg-white p-5 hover:shadow-soft hover:-translate-y-0.5 transition">
      <div className="flex items-start justify-between gap-3">
        <h3 className="font-medium leading-snug">{p.title}</h3>
        <span className="text-xs text-gray-500">{p.year}</span>
      </div>
      <p className="mt-2 text-sm text-gray-600">{p.desc}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {p.tags.map((t) => (
          <Badge key={t}>{t}</Badge>
        ))}
      </div>
      <div className="mt-4">
        <a
          href={p.repo}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-sm px-3 py-1.5 rounded-xl border border-gray-300 hover:border-gray-400 bg-white transition"
        >
          View Repo ↗
        </a>
      </div>
    </div>
  );
}

export default function App() {
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("show");
        });
      },
      { threshold: 0.08 }
    );
    document.querySelectorAll(".fade-up").forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const projects = useMemo(() => {
    if (filter === "all") return DATA;
    return DATA.filter((p) => p.category === filter);
  }, [filter]);

  return (
    <div>
      {/* NAV */}
      <header className="sticky top-0 z-30 backdrop-blur bg-ivory/80 border-b border-gray-200/60">
        <nav className="mx-auto max-w-5xl px-5 py-3 flex items-center justify-between">
          <a href="#home" className="text-lg font-semibold tracking-tight">
            slqf25
          </a>
          <ul className="hidden sm:flex items-center gap-6 text-sm text-gray-600">
            <li>
              <a className="hover:text-gray-900 transition" href="#about">
                About
              </a>
            </li>
            <li>
              <a className="hover:text-gray-900 transition" href="#skills">
                Skills
              </a>
            </li>
            <li>
              <a className="hover:text-gray-900 transition" href="#projects">
                Projects
              </a>
            </li>
            <li>
              <a className="hover:text-gray-900 transition" href="#contact">
                Contact
              </a>
            </li>
            <li>
              <a
                className="hover:text-gray-900 transition"
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
              </a>
            </li>
          </ul>
        </nav>
      </header>

      {/* HERO */}
      <section id="home" className="mx-auto max-w-5xl px-5 pt-14 pb-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* left */}
          <div className="fade-up">
            <h1 className="text-3xl md:text-4xl font-semibold leading-tight tracking-tight">
              Hi, I&apos;m{" "}
              <span className="underline decoration-tea/60 underline-offset-4">
                Stephanie Lo
              </span>
              .
            </h1>

            <div className="mt-6 flex gap-3">
              <a
                href="#projects"
                className="inline-flex items-center px-4 py-2 rounded-2xl bg-tea hover:bg-tea/80 transition shadow-soft"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="inline-flex items-center px-4 py-2 rounded-2xl border border-gray-300 hover:border-gray-400 bg-white transition"
              >
                Contact Me
              </a>
            </div>
          </div>

          {/* right business card */}
          <div className="fade-up md:justify-self-end">
            <div className="relative">
              <div className="absolute -inset-2 bg-skysoft/60 blur-2xl rounded-3xl"></div>
              <div className="relative bg-white border border-gray-200 rounded-3xl p-6 shadow-soft">
                <p className="text-sm text-gray-500">At a glance</p>
                <p className="mt-2 text-lg">
                  Clean code, calm mind.
                </p>

                <div className="mt-5 grid grid-cols-2 gap-3 text-sm">
                  <div className="p-3 rounded-xl bg-ivory border border-gray-200 text-center">
                    Console apps
                  </div>
                  <div className="p-3 rounded-xl bg-ivory border border-gray-200 text-center">
                    Database projects
                  </div>
                  <div className="p-3 rounded-xl bg-ivory border border-gray-200 text-center">
                    Clear docs
                  </div>
                  <div className="p-3 rounded-xl bg-ivory border border-gray-200 text-center">
                    Maintainable code
                  </div>
                </div>

                <div className="mt-5">
                  <a
                    href="/resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm px-3 py-1.5 rounded-xl border border-gray-300 hover:border-gray-400 bg-white transition"
                  >
                    View Resume ↗
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="mx-auto max-w-5xl px-5 py-12">
        <div className="fade-up">
          <h2 className="text-2xl font-semibold">About</h2>
          <p className="mt-4 text-gray-600 leading-relaxed">
            I’m studying computing and enjoy building small, practical software —
            tools for booking, organising, or simple reports. My focus is on
            clarity: straightforward interfaces, readable code, and projects
            that others can run without guesswork.
          </p>
        </div>
      </section>

      {/* SKILLS — Bubble style */}
      <section id="skills" className="mx-auto max-w-5xl px-5 py-12">
        <div className="fade-up">
          <h2 className="text-2xl font-semibold">Skills</h2>
          <p className="mt-2 text-gray-500 text-sm">
            A quick visual map of what I use, learn and enjoy building with.
          </p>

          {(() => {
            const CATS = [
              {
                title: "Languages",
                items: [
                  { label: "Java", tip: "OOP, CLI apps" , grad: "from-amber-200 to-amber-300"},
                  { label: "C++", tip: "Console systems", grad: "from-sky-200 to-sky-300"},
                  { label: "Python", tip: "Utilities, study tools", grad: "from-emerald-200 to-emerald-300"},
                  { label: "SQL (Oracle/MySQL)", tip: "ERD → DDL/DML, reports", grad: "from-indigo-200 to-indigo-300"},
                  { label: "HTML", tip: "Structure & semantics", grad: "from-rose-200 to-rose-300"},
                  { label: "React.js", tip: "This site (Vite + Tailwind)", grad: "from-violet-200 to-violet-300"},
                ],
              },
              {
                title: "Tools & Platforms",
                items: [
                  { label: "Git / GitHub", tip: "Project hosting & Pages", grad: "from-teal-200 to-teal-300"},
                  { label: "VS Code / Visual Studio / NetBeans", tip: "Daily IDEs", grad: "from-zinc-200 to-zinc-300"},
                  { label: "MySQL / Oracle DB", tip: "SQL Developer", grad: "from-cyan-200 to-cyan-300"},
                  { label: "Figma", tip: "Wireframes & UI ideas", grad: "from-fuchsia-200 to-fuchsia-300"},
                  { label: "Packet Tracer", tip: "Networking basics", grad: "from-lime-200 to-lime-300"},
                  { label: "VirtualBox / DOSBox", tip: "Sandbox & legacy env", grad: "from-stone-200 to-stone-300"},
                  { label: "Microsoft Office", tip: "Docs & reporting", grad: "from-orange-200 to-orange-300"},
                ],
              },
              {
                title: "Soft Skills",
                items: [
                  { label: "Problem Solving", tip: "Break down, iterate", grad: "from-emerald-200 to-emerald-300"},
                  { label: "Analytical Thinking", tip: "Trace → reason → fix", grad: "from-blue-200 to-blue-300"},
                  { label: "Teamwork & Communication", tip: "Share context clearly", grad: "from-pink-200 to-pink-300"},
                  { label: "Adaptability", tip: "Pick up tools fast", grad: "from-amber-200 to-amber-300"},
                  { label: "Attention to Detail", tip: "Clean docs & tests", grad: "from-purple-200 to-purple-300"},
                ],
              },
              {
                title: "Currently Learning & Interests",
                items: [
                  { label: "Algorithms & DS", tip: "Practice & patterns", grad: "from-sky-200 to-sky-300"},
                  { label: "System Design Basics", tip: "Simple, scalable flows", grad: "from-indigo-200 to-indigo-300"},
                  { label: "Java + MySQL", tip: "Back-end integration", grad: "from-teal-200 to-teal-300"},
                  { label: "Frontend Fundamentals", tip: "React/Vite/Tailwind", grad: "from-violet-200 to-violet-300"},
                  { label: "System-level Programming", tip: "CLI & tooling", grad: "from-stone-200 to-stone-300"},
                  { label: "Automation for Workflow", tip: "Little tools, big help", grad: "from-rose-200 to-rose-300"},
                ],
              },
            ];

            // === bubble component ===
            const Bubble = ({ label, tip, grad }) => (
              <button
                type="button"
                aria-label={label}
                className={[
                  "group relative isolate",
                  "rounded-full bg-gradient-to-br", grad,
                  "shadow-sm hover:shadow-md",
                  "transition-transform duration-300 ease-out",
                  "focus:outline-none focus-visible:ring-2 focus-visible:ring-tea/50",
                  "flex items-center justify-center",
                  "size-16 md:size-20",              
                  "hover:scale-110 focus-visible:scale-110",
                ].join(" ")}
              >
                <span className="pointer-events-none select-none text-[11px] md:text-xs text-gray-800 font-medium px-2 text-center">
                  {label}
                </span>

                {/* tooltip */}
                {tip && (
                  <span
                    className={[
                      "pointer-events-none absolute left-1/2 -translate-x-1/2",
                      "top-full mt-2 whitespace-nowrap",
                      "rounded-lg border border-gray-200 bg-white/95 backdrop-blur px-2 py-1",
                      "text-[11px] text-gray-600 shadow-sm",
                      "opacity-0 translate-y-1 transition-all duration-200",
                      "group-hover:opacity-100 group-hover:translate-y-0",
                      "group-focus-visible:opacity-100 group-focus-visible:translate-y-0",
                    ].join(" ")}
                  >
                    {tip}
                  </span>
                )}
              </button>
            );

            // 卡片容器
            const Card = ({ title, items }) => (
              <div className="p-4 rounded-2xl border border-gray-200 bg-white">
                <h3 className="font-medium mb-3">{title}</h3>
                <div className="flex flex-wrap gap-3">
                  {items.map((it) => (
                    <Bubble key={it.label} {...it} />
                  ))}
                </div>
              </div>
            );

            return (
              <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-2 gap-4">
                {/* line 1：Languages / Tools */}
                <Card {...CATS[0]} />
                <Card {...CATS[1]} />
                {/* line 2：Soft Skills / Learning & Interests */}
                <Card {...CATS[2]} />
                <Card {...CATS[3]} />
              </div>
            );
          })()}
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="mx-auto max-w-5xl px-5 py-12">
        <div className="fade-up">
          <h2 className="text-2xl font-semibold">Projects</h2>
          <div className="mt-4 flex flex-wrap gap-2 text-sm">
            {FILTERS.map((f) => (
              <button
                key={f.key}
                onClick={() => setFilter(f.key)}
                className={`px-3 py-1.5 rounded-xl border transition ${
                  filter === f.key
                    ? "bg-tea border-tea"
                    : "bg-white border-gray-300 hover:border-gray-400"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {projects.map((p) => (
              <ProjectCard key={p.title} p={p} />
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-12 text-center">
        <h2 className="text-2xl font-semibold">Contact</h2>
        <p className="mt-3 text-gray-600">Feel free to reach me via:</p>
        <div className="mt-5 flex justify-center flex-wrap gap-3 text-sm">
          <a
            href="mailto:stephlqf0245@gmail.com"
            aria-label="Email: stephlqf0245@gmail.com"
            className="px-3 py-2 rounded-xl border border-gray-300 bg-white hover:border-gray-400 transition"
          >
            Email
          </a>
          <a
            href="https://github.com/slqf25"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="px-3 py-2 rounded-xl border border-gray-300 bg-white hover:border-gray-400 transition"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/stephlqf125/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className="px-3 py-2 rounded-xl border border-gray-300 bg-white hover:border-gray-400 transition"
          >
            LinkedIn
          </a>
        </div>
      </section>
    </div>
  );
}
