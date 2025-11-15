import { Cpu, Globe, Boxes, Database, Bot, Briefcase, Rocket, Palette } from 'lucide-react'

const pillars = [
  { icon: Cpu, title: 'Frontend', items: ['React', 'Next.js', 'Vite', 'Tailwind', 'Framer Motion', 'a11y'] },
  { icon: Database, title: 'Backend', items: ['FastAPI', 'Node', 'Postgres', 'MongoDB', 'Redis', 'gRPC'] },
  { icon: Bot, title: 'AI/ML', items: ['Python', 'PyTorch', 'LangChain', 'Vector DBs', 'RAG', 'LLM evals'] },
  { icon: Boxes, title: 'DevOps', items: ['Docker', 'Kubernetes', 'Terraform', 'GitHub Actions', 'AWS/GCP/Azure'] },
  { icon: Globe, title: 'Mobile & Edge', items: ['React Native', 'Expo', 'Tauri', 'PWAs', 'WebGL'] },
  { icon: Palette, title: 'Design', items: ['Figma', 'Design Systems', 'Prototyping', 'Micro‑interactions'] },
]

export default function TechStack() {
  return (
    <section id="skills" className="relative py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">Range without compromise</h2>
            <p className="text-slate-600 mt-2">I bridge pixels and packets with a product mindset.</p>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((p) => (
            <div key={p.title} className="group rounded-2xl bg-white p-6 ring-1 ring-slate-200 shadow-sm hover:shadow-md transition relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tr from-indigo-50 via-sky-50 to-cyan-50 opacity-0 group-hover:opacity-100 transition" />
              <div className="relative flex items-center gap-3">
                <div className="p-2 rounded-xl bg-slate-900 text-white"><p.icon size={18} /></div>
                <h3 className="text-lg font-semibold">{p.title}</h3>
              </div>
              <ul className="relative mt-4 grid grid-cols-2 gap-2 text-sm text-slate-700">
                {p.items.map(i => (
                  <li key={i} className="px-2 py-1 rounded-md bg-slate-50 ring-1 ring-slate-200">{i}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
