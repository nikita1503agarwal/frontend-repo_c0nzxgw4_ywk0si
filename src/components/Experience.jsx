const roles = [
  {
    company: 'Nebula Systems',
    title: 'Principal Product Engineer',
    period: '2022 — Present',
    highlights: [
      'Led build of AI docs copilot adopted by 60k+ devs; cut search-to-answer time by 72%',
      'Scaled monolith → microservices; 99.97% uptime and 40% faster releases',
      'Owned design system across web/mobile; shipped 40+ components with a11y baked-in',
    ],
  },
  {
    company: 'Quanta Labs',
    title: 'Founding Full‑stack Engineer',
    period: '2020 — 2022',
    highlights: [
      'Prototyped → launched realtime analytics product in 12 weeks; $1.2M ARR in year 1',
      'Introduced event-driven architecture and data lake; 10x query speedups',
      'Built CI/CD with GitHub Actions, IaC with Terraform and multi-cloud strategy',
    ],
  },
  {
    company: 'Freelance',
    title: 'Generalist Engineer & Designer',
    period: '2015 — 2020',
    highlights: [
      'Delivered 30+ projects: SaaS, ecommerce, dashboards, internal tools, mobile apps',
      'Mentored 20+ devs; ran workshops on React, TypeScript, and product thinking',
      'Won 6 hackathons; best overall and best design awards',
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">Experience</h2>
          <p className="text-slate-600 mt-2">Impact over titles. Outcomes over output.</p>
        </div>
        <ol className="relative border-s border-slate-200">
          {roles.map((r, idx) => (
            <li key={r.company} className="ms-6 pb-10">
              <span className="absolute -start-3 flex h-6 w-6 items-center justify-center rounded-full bg-slate-900 text-white text-xs">{idx+1}</span>
              <div className="rounded-2xl bg-white p-6 ring-1 ring-slate-200 shadow-sm">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="text-xl font-semibold">{r.title} · <span className="text-slate-600">{r.company}</span></h3>
                  <span className="text-sm text-slate-500">{r.period}</span>
                </div>
                <ul className="mt-4 grid gap-2">
                  {r.highlights.map(h => (
                    <li key={h} className="text-slate-700">• {h}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
