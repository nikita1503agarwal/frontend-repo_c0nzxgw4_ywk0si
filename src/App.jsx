import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TechStack from './components/TechStack'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Writing from './components/Writing'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <section id="about" className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold tracking-tight">Generalist with a specialist’s taste</h2>
              <p className="mt-4 text-lg text-slate-700">I’m Ari — a product‑minded engineer who thrives at the intersection of design, AI and infrastructure. I obsess over details that compound: API ergonomics, empty states, error messages and the first 5 minutes of a new user’s journey.</p>
              <p className="mt-4 text-slate-700">I’ve shipped startups from zero to one, modernized legacy stacks, and built design systems that empowered whole orgs. My favorite work pairs delightful UX with measurable impact.</p>
              <div className="mt-6 grid sm:grid-cols-2 gap-4">
                <div className="rounded-xl bg-slate-50 p-4 ring-1 ring-slate-200">
                  <p className="text-sm text-slate-500">Focus now</p>
                  <p className="font-medium">AI copilots, realtime apps, pragmatic DX</p>
                </div>
                <div className="rounded-xl bg-slate-50 p-4 ring-1 ring-slate-200">
                  <p className="text-sm text-slate-500">Working style</p>
                  <p className="font-medium">Hands‑on builder, clear communicator, end‑to‑end owner</p>
                </div>
              </div>
            </div>
            <aside className="space-y-4">
              <div className="rounded-2xl bg-gradient-to-tr from-indigo-50 via-sky-50 to-cyan-50 p-6 ring-1 ring-slate-200">
                <p className="text-sm text-slate-600">Availability</p>
                <p className="text-xl font-semibold">Oct 2025</p>
                <p className="text-slate-600 mt-2 text-sm">Open to advising and short sprints. Full‑time from January.</p>
              </div>
              <div className="rounded-2xl bg-white p-6 ring-1 ring-slate-200">
                <p className="text-sm text-slate-600">Preferred tools</p>
                <ul className="mt-2 grid gap-2 text-sm">
                  <li>TypeScript, React, FastAPI</li>
                  <li>Postgres, MongoDB, Prisma</li>
                  <li>AWS, Fly.io, Cloudflare</li>
                  <li>Figma, Linear, Notion</li>
                </ul>
              </div>
            </aside>
          </div>
        </section>
        <TechStack />
        <Experience />
        <Projects />
        <Writing />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
