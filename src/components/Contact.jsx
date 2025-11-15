import { Send } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">Let’s build something</h2>
          <p className="text-slate-600 mt-2">I’m available for advisory, rapid prototyping and long‑term builds.</p>
        </div>
        <form onSubmit={(e)=>e.preventDefault()} className="grid gap-4 max-w-2xl">
          <div className="grid sm:grid-cols-2 gap-4">
            <input className="w-full px-4 py-3 rounded-lg ring-1 ring-slate-200 focus:outline-none focus:ring-2 focus:ring-slate-400" placeholder="Your name" />
            <input className="w-full px-4 py-3 rounded-lg ring-1 ring-slate-200 focus:outline-none focus:ring-2 focus:ring-slate-400" placeholder="Email" type="email" />
          </div>
          <input className="w-full px-4 py-3 rounded-lg ring-1 ring-slate-200 focus:outline-none focus:ring-2 focus:ring-slate-400" placeholder="Company / Project" />
          <textarea rows="5" className="w-full px-4 py-3 rounded-lg ring-1 ring-slate-200 focus:outline-none focus:ring-2 focus:ring-slate-400" placeholder="What are we building?" />
          <button className="inline-flex items-center justify-center gap-2 w-fit bg-slate-900 text-white px-5 py-3 rounded-lg shadow hover:shadow-md transition">
            <Send size={16} /> Send message
          </button>
        </form>
      </div>
    </section>
  )
}
