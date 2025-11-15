import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="relative h-[92vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex items-end pb-16">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-3xl">
          <span className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-slate-600 bg-white/70 rounded-full px-3 py-1 shadow-sm">
            Full‑Stack • AI • DevOps • Design
          </span>
          <h1 className="mt-4 text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-900">
            Ari Blaze — the all‑rounder building lovable software
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-slate-700">
            10+ years shipping across frontend, backend, mobile, ML and cloud. I turn fuzzy ideas into crisp products — fast, accessible and resilient.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#projects" className="inline-flex items-center justify-center rounded-lg bg-slate-900 text-white px-5 py-3 text-sm font-medium shadow hover:shadow-md transition">Explore Projects</a>
            <a href="#contact" className="inline-flex items-center justify-center rounded-lg bg-white text-slate-900 ring-1 ring-slate-200 px-5 py-3 text-sm font-medium hover:bg-slate-50 transition">Start a Project</a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
