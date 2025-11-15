import { useState, useEffect } from 'react'
import { Menu, X, Github, Linkedin, Mail, FileDown } from 'lucide-react'

const links = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#writing', label: 'Writing' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all ${scrolled ? 'backdrop-blur-xl bg-white/60 shadow-sm' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-indigo-500 via-sky-500 to-cyan-400" />
            <span className="font-semibold tracking-tight">Ari Blaze</span>
          </a>
          <nav className="hidden md:flex items-center gap-8">
            {links.map(l => (
              <a key={l.href} href={l.href} className="text-sm text-slate-700 hover:text-slate-900">
                {l.label}
              </a>
            ))}
            <div className="flex items-center gap-3">
              <a href="https://github.com/ariblaze" target="_blank" rel="noreferrer" aria-label="GitHub" className="p-2 rounded-lg hover:bg-slate-100">
                <Github size={18} />
              </a>
              <a href="https://linkedin.com/in/ariblaze" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="p-2 rounded-lg hover:bg-slate-100">
                <Linkedin size={18} />
              </a>
              <a href="mailto:hello@ariblaze.dev" aria-label="Email" className="p-2 rounded-lg hover:bg-slate-100">
                <Mail size={18} />
              </a>
              <a href="#" className="inline-flex items-center gap-2 bg-slate-900 text-white text-sm px-3 py-2 rounded-lg shadow-sm hover:shadow md:ml-2">
                <FileDown size={16} /> Resume
              </a>
            </div>
          </nav>
          <button onClick={() => setOpen(v=>!v)} className="md:hidden p-2 rounded-lg hover:bg-slate-100">
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden border-t bg-white">
          <div className="px-4 py-3 space-y-2">
            {links.map(l => (
              <a key={l.href} href={l.href} onClick={()=>setOpen(false)} className="block py-2 text-slate-700">
                {l.label}
              </a>
            ))}
            <div className="flex items-center gap-3 pt-2">
              <a href="https://github.com/ariblaze" className="p-2 rounded-lg hover:bg-slate-100"><Github size={18} /></a>
              <a href="https://linkedin.com/in/ariblaze" className="p-2 rounded-lg hover:bg-slate-100"><Linkedin size={18} /></a>
              <a href="mailto:hello@ariblaze.dev" className="p-2 rounded-lg hover:bg-slate-100"><Mail size={18} /></a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
