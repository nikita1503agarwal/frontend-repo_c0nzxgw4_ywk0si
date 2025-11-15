const posts = [
  { title: 'From prototype to platform in 90 days', date: 'Oct 2025', minutes: 7 },
  { title: 'Designing motion for utility, not novelty', date: 'Jul 2025', minutes: 5 },
  { title: 'LLM evals that actually predict production', date: 'Apr 2025', minutes: 9 },
]

export default function Writing() {
  return (
    <section id="writing" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">Writing</h2>
          <p className="text-slate-600 mt-2">Notes from the edges of product, code and craft.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {posts.map(p => (
            <a key={p.title} href="#" className="group rounded-2xl bg-white p-6 ring-1 ring-slate-200 shadow-sm hover:shadow-md transition block">
              <h3 className="text-lg font-semibold group-hover:underline">{p.title}</h3>
              <p className="text-slate-500 text-sm mt-1">{p.date} · {p.minutes} min read</p>
              <p className="text-slate-700 mt-3 text-sm">Thoughts on building durable systems that feel light and move fast.</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
