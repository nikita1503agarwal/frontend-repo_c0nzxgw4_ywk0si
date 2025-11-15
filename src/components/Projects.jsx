import { ExternalLink, Star } from 'lucide-react'

const projects = [
  {
    name: 'TraceKit',
    tagline: 'Open-source observability that fits in your backpack',
    description: 'Minimal agent, smart sampling, blazing-fast UI. Built with Rust + React, deployed on Kubernetes.',
    tags: ['Rust', 'React', 'K8s', 'Wasm', 'OpenTelemetry'],
    link: 'https://example.com/tracekit',
    stars: '7.2k',
  },
  {
    name: 'PromptPilot',
    tagline: 'Evaluate, version and ship LLM prompts with confidence',
    description: 'CI for prompts: red teaming, offline evals, live metrics. Integrates with LangChain and HF.',
    tags: ['Python', 'FastAPI', 'LangChain', 'LLM'],
    link: 'https://example.com/promptpilot',
    stars: '4.9k',
  },
  {
    name: 'PixelForge',
    tagline: 'Design system that scales from MVP to unicorn',
    description: 'Token-driven, themable components with motion guidelines and accessibility baked-in.',
    tags: ['Figma', 'React', 'Framer Motion', 'a11y'],
    link: 'https://example.com/pixelforge',
    stars: '1.8k',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">Selected Projects</h2>
            <p className="text-slate-600 mt-2">Real products solving real problems.</p>
          </div>
          <a href="#" className="text-sm text-slate-600 hover:text-slate-900">See all →</a>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map(p => (
            <a key={p.name} href={p.link} target="_blank" rel="noreferrer" className="group block rounded-2xl bg-white p-6 ring-1 ring-slate-200 shadow-sm hover:shadow-md transition">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">{p.name}</h3>
                <div className="inline-flex items-center gap-1 text-amber-500"><Star size={16} fill="currentColor" /> {p.stars}</div>
              </div>
              <p className="text-slate-600 mt-1">{p.tagline}</p>
              <p className="text-slate-700 mt-3 text-sm">{p.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map(t => (
                  <span key={t} className="text-xs px-2 py-1 rounded-md bg-slate-50 ring-1 ring-slate-200">{t}</span>
                ))}
              </div>
              <div className="mt-5 inline-flex items-center gap-2 text-slate-700 group-hover:text-slate-900">
                <ExternalLink size={16} /> Open
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
