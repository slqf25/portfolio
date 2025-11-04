import { useEffect, useMemo, useState } from 'react'
import { projects as DATA } from './projects'

const FILTERS = [
  { key: 'all', label: 'All' },
  { key: 'java', label: 'Java' },
  { key: 'cpp', label: 'C++' },
  { key: 'python', label: 'Python' },
  { key: 'database', label: 'Database' },
]

function Badge({ children }) {
  return (
    <span className="text-xs px-2 py-1 rounded-lg bg-skysoft/50 border border-skysoft/70">
      {children}
    </span>
  )
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
        {p.tags.map(t => <Badge key={t}>{t}</Badge>)}
      </div>
      <div className="mt-4">
        <a href={p.repo} target="_blank" className="inline-flex items-center text-sm px-3 py-1.5 rounded-xl border border-gray-300 hover:border-gray-400 bg-white transition">
          View Repo ↗
        </a>
      </div>
    </div>
  )
}

export default function App() {
  const [filter, setFilter] = useState('all')

  useEffect(() => {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('show') })
    }, { threshold: 0.08 })
    document.querySelectorAll('.fade-up').forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  const projects = useMemo(() => {
    if (filter === 'all') return DATA
    return DATA.filter(p => p.category === filter)
  }, [filter])

  return (
    <div>
      {/* NAV */}
      <header className="sticky top-0 z-30 backdrop-blur bg-ivory/80 border-b border-gray-200/60">
        <nav className="mx-auto max-w-5xl px-5 py-3 flex items-center justify-between">
          <a href="#home" className="text-lg font-semibold tracking-tight">slqf25</a>
          <ul className="hidden sm:flex items-center gap-6 text-sm text-gray-600">
            <li><a className="hover:text-gray-900 transition" href="#about">About</a></li>
            <li><a className="hover:text-gray-900 transition" href="#skills">Skills</a></li>
            <li><a className="hover:text-gray-900 transition" href="#projects">Projects</a></li>
            <li><a className="hover:text-gray-900 transition" href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* HERO */}
      <section id="home" className="mx-auto max-w-5xl px-5 pt-14 pb-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="fade-up">
            <h1 className="text-3xl md:text-4xl font-semibold leading-tight tracking-tight">
              Hi, I'm <span className="underline decoration-tea/60 underline-offset-4">slqf25</span>.
            </h1>
            <p className="mt-4 text-gray-600 leading-relaxed">
              A student/developer into systems & back-end. I like turning complex problems into small, elegant modules.
              Here are some console and database projects.
            </p>
            <div className="mt-6 flex gap-3">
              <a href="#projects" className="inline-flex items-center px-4 py-2 rounded-2xl bg-tea hover:bg-tea/80 transition shadow-soft">View Projects</a>
              <a href="#contact" className="inline-flex items-center px-4 py-2 rounded-2xl border border-gray-300 hover:border-gray-400 bg-white transition">Contact Me</a>
            </div>
          </div>
          <div className="fade-up md:justify-self-end">
            <div className="relative">
              <div className="absolute -inset-2 bg-skysoft/60 blur-2xl rounded-3xl"></div>
              <div className="relative bg-white border border-gray-200 rounded-3xl p-6 shadow-soft">
                <p className="text-sm text-gray-500">One-liner</p>
                <p className="mt-1 text-lg">“Nail the details; let code be beautiful.”</p>
                <div className="mt-6 grid grid-cols-3 gap-3 text-center text-sm">
                  <div className="p-3 rounded-xl bg-ivory border border-gray-200">SQL</div>
                  <div className="p-3 rounded-xl bg-ivory border border-gray-200">Java</div>
                  <div className="p-3 rounded-xl bg-ivory border border-gray-200">C++ / Python</div>
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
            Learning database design and back-end (Java/C++/Python).
            I build CLI tools and management systems, focusing on clean docs and maintainable structure.
          </p>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="mx-auto max-w-5xl px-5 py-12">
        <div className="fade-up">
          <h2 className="text-2xl font-semibold">Skills</h2>
          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="p-4 rounded-2xl border border-gray-200 bg-white">
              <h3 className="font-medium">Languages / Tools</h3>
              <ul className="mt-3 text-sm text-gray-600 space-y-1">
                <li>Oracle SQL · ERD/DDL</li>
                <li>Java · C++ · Python</li>
                <li>Git / GitHub · CLI</li>
              </ul>
            </div>
            <div className="p-4 rounded-2xl border border-gray-200 bg-white">
              <h3 className="font-medium">Strengths</h3>
              <ul className="mt-3 text-sm text-gray-600 space-y-1">
                <li>Console apps · CRUD</li>
                <li>Graphs & BFS traversal</li>
                <li>Data modeling & reports</li>
              </ul>
            </div>
            <div className="p-4 rounded-2xl border border-gray-200 bg-white">
              <h3 className="font-medium">Learning</h3>
              <ul className="mt-3 text-sm text-gray-600 space-y-1">
                <li>OS & Architecture basics</li>
                <li>Algorithms & Data Structures</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="mx-auto max-w-5xl px-5 py-12">
        <div className="fade-up">
          <h2 className="text-2xl font-semibold">Projects</h2>
          <div className="mt-4 flex flex-wrap gap-2 text-sm">
            {FILTERS.map(f => (
              <button
                key={f.key}
                onClick={() => setFilter(f.key)}
                className={`px-3 py-1.5 rounded-xl border transition ${filter === f.key ? 'bg-tea border-tea' : 'bg-white border-gray-300 hover:border-gray-400'}`}
              >
                {f.label}
              </button>
            ))}
          </div>
          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {projects.map(p => <ProjectCard key={p.title} p={p} />)}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="mx-auto max-w-5xl px-5 py-12">
        <div className="fade-up">
          <h2 className="text-2xl font-semibold">Contact</h2>
          <p className="mt-3 text-gray-600">Feel free to reach me via:</p>
          <div className="mt-5 flex flex-wrap gap-3 text-sm">
            <a href="mailto:you@example.com" className="inline-flex items-center px-3 py-2 rounded-xl border border-gray-300 bg-white hover:border-gray-400 transition">Email</a>
            <a href="https://github.com/slqf25" target="_blank" className="inline-flex items-center px-3 py-2 rounded-xl border border-gray-300 bg-white hover:border-gray-400 transition">GitHub</a>
            <a href="https://www.linkedin.com/in/your-id" target="_blank" className="inline-flex items-center px-3 py-2 rounded-xl border border-gray-300 bg-white hover:border-gray-400 transition">LinkedIn</a>
          </div>
        </div>
      </section>

      <footer className="py-12 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} slqf25 · Built with React + Tailwind
      </footer>
    </div>
  )
}
